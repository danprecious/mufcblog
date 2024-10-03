import { NextResponse } from "next/server";
import { createUser } from "../_queries/createAdmin";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import validator from "validator";


export const validateAndSanitize = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name can only contain letters and spaces")
    .trim()
    .escape(),
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  body("confirmPassword")
    .custom((value, { request }) => value === request.body.password)
    .withMessage("Passwords do not match"),
];

export const POST = async (request) => {

  const data = await request.json();
  const errors = validationResult(request);

  const { name, email, password } = data;
  console.log(name, email, password);
  if (!errors.isEmpty()) {
    return NextResponse.json({ errors: errors.array() }, { status: 400 });
  }

  // HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 5);
  // GET USER
  const admin = {
    name,
    email,
    password: hashedPassword,
  };

  const sanitizedAdmin = {
    name: validator.escape(user.name),
    email: validator.normalizeEmail(user.email),
    password: hashedPassword,
  };

  // CREATE USER FUNCTION
  try {
    await createUser(user);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (e) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
