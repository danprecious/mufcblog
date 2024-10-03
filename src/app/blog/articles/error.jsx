"use client";
import ErrorComponent from "@/app/components/errorPage";

const ErrorPage = ({ error }) => {
  // console.log(error);
  return <ErrorComponent error={error} />;
};

export default ErrorPage;
