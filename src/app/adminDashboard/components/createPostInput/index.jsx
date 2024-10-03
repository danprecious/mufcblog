
import Link from 'next/link';
import React from 'react'
import { BiPlusCircle } from 'react-icons/bi';
import { FaPlusCircle } from 'react-icons/fa';

const CreatePostInput = () => {
  return (
    <Link href="/adminDashboard/createPost"  className='border border-bgShade rounded-md px-6 py-3 lg:w-[50%] w-[100%] flex justify-between'>
      <p className='text-stone-400 text-sm'>...Give the community a new read</p>
      <BiPlusCircle className='text-[1.2rem]'/>
    </Link>
  ) 
}

export default CreatePostInput;