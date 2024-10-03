"use client"
import ErrorComponent from "@/app/components/errorPage";

const ErrorPage = ({error}) => {
  return (
    <div>
        <ErrorComponent error={""} />
    </div>
  )
}

export default ErrorPage;
