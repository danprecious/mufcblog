"use server"
import { signOut } from '@/auth';
import React from 'react'

const SignOut = () => {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button
        type="submit"
        className="text-sm text-white bg-red-600 rounded-md"
      >
        Sign out
      </button>
    </form>
  )
}

export default SignOut