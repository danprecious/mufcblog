"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useState } from "react";
import { CreatePostContext } from "./state/createPostContext";
import { AddSectionButton, CloseButton } from "./components/buttons";
import { SectionsDisplay } from "./components/sectionDisplay";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
  postTitle: z.string().min(1, "Title is required"),
  intro: z.string().min(1, "Intro is required"),
  sectionHeading: z.string().min(1, "Section heading is required"),
  sectionContent: z.string().min(1, "Section content is required"),
  coverImage: z.any().refine((file) => file instanceof File, {
    message: "Cover image is required",
  }),
});

const CreatePost = () => {
  const { state, dispatch } = useContext(CreatePostContext);
  const { postTitle, intro, coverImage, newSection, sections } = state;

  const [inputData, setInputData] = useState({
    sectionHeading: "",
    sectionContent: "",
  });

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const SubmitHandler = async (data) => {
    console.log("Form data submitted:", data);

    console.log(data.postTitle);

    const formData = new FormData();
    formData.append("postTitle", data.postTitle);
    formData.append("intro", data.intro);
    formData.append("coverImage", data.coverImage);

    sections.forEach((section, index) => {
      formData.append(
        `sections[${index}].sectionHeading`,
        section.sectionHeading
      );  
      formData.append(
        `sections[${index}].sectionContent`,
        section.sectionContent
      );
    });

    console.log(...formData);

      try {
        const response = await axios.post(
          "http://localhost:3000/api/post",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        // Reset form or navigate to another page after successful submission
      } catch (error) {
        console.error(error);
      }
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { postTitle, intro, sections },
  } );

  return (
    <div className="md:px-10 py-2 px-4">
      <h1 className="text-[2rem]">Create a new post</h1>
      <div className="hidden text-center"></div>
      <div className="my-8 lg:w-[70%]">
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <input
            name="postTitle"
            value={postTitle}
            {...register("postTitle")}
            onChange={(e) => {
              const postValue = e.target.value;
              dispatch({ type: "POSTTITLE", payload: postValue });
            }}
            id="postTitle"
            type="text"
            placeholder="Add post title"
            className={`input ${errors.postTitle ? "border-red-500" : ""}`}
            autoComplete="false"
          />
          {errors.postTitle && <span>{errors.postTitle.message}</span>}

          <div className="my-2">
            <textarea
              name="intro"
              {...register("intro")}
              value={intro}
              onChange={(e) => {
                const postValue = e.target.value;
                dispatch({ type: "INTRO", payload: postValue });
              }}
              id="intro"
              placeholder="Intro"
              className={`input ${errors.intro ? "border-red-500" : ""}`}
              resize="false"
            />
            {errors.intro && <span>{errors.intro.message}</span>}
          </div>

          <SectionsDisplay />

          <div className="my-8 ">
            <AddSectionButton />

            {newSection && (
              <div className="my-8 p-5 border border-bgShade rounded-md relative">
                <CloseButton />

                <input
                  name="sectionHeading"
                  {...register("sectionHeading")}
                  value={inputData.sectionHeading}
                  id="sectionHeading"
                  onChange={handleInputData}
                  placeholder="Section heading..."
                  type="text"
                  className={`input ${
                    errors.sectionHeading ? "border-red-500" : ""
                  }`}
                />
                {errors.sectionHeading && (
                  <span>{errors.sectionHeading.message}</span>
                )}

                <textarea
                  name="sectionContent"
                  {...register("sectionContent")}
                  value={inputData.sectionContent}
                  onChange={handleInputData}
                  id="sectionContent"
                  placeholder="Section Content..."
                  type="textarea"
                  className={`input ${
                    errors.sectionContent ? "border-red-500" : ""
                  }`}
                  resize="false"
                />
                {errors.sectionContent && (
                  <span>{errors.sectionContent.message}</span>
                )}

                <div className="flex lg:justify-start justify-center ">
                  <div className="lg:w-[35%] text-center bg-bgShade rounded-md">
                    <Controller
                      control={control}
                      name="coverImage"
                      render={({ field: { value, onChange, ...field } }) => (
                        <input
                          {...field}
                          onChange={(e) => {
                            onChange(e.target.files[0]);
                          }}
                          id="coverImage"
                          type="file"
                        />
                      )}
                    />
                    {errors.coverImage && (
                      <span>{errors.coverImage.message}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "SAVE_SECTION", payload: inputData });
                    }}
                    className="btn"
                  >
                    <p className="px-1">Save</p>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="my-5 flex">
            <button className="btn" type="submit">
              Send Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
