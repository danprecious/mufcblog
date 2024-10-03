"use client"

import {useForm} from 'react-hook-form';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { credentialLogin } from '@/app/actions/authenticate';

const AdminSignIn = () => {

  const [formValue, setFormValues] = useState({
    email: "",
    password: ""
  })
 
  const login = async (data) => {
    e.preventDefault();
    const response = await credentialLogin(data);

  }

  const handleChange = () =>{

  }
  
  const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
  })
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <section className="flex justify-center items-center h-[90vh] ]">
      <form onSubmit={handleSubmit(login)} className="border p-6 rounded-md w-[23em]">
        <div className="mb-5">
          <p className="mx-1">Admin sign in</p>
        </div>
        <div className="mb-5">
          <input type="text" {...register("email")} className="border p-3 rounded-md w-full"/>
        </div>
        <div className="mt-5">
          <input type="text" {...register("password")} className="border p-3 rounded-md w-full"/>
        </div>
        <div className="mt-5">
          <button className="w-full bg-red-600 hover:bg-red-400 p-2 rounded-md text-white">Login</button>
        </div>
        
      </form>
    </section>
  );
};

export default AdminSignIn;
