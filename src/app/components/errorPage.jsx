import Link from 'next/link';


const ErrorComponent = ({error}) => {
  return (
    <div className='flex justify-center h-[80vh] items-center text-center'>
      <div className=''>
          <h1 className='text-[1.2rem] text-red-800 font-extrabold mb-5'>Something went wrong</h1>
          <p>{error}</p>
          <p>Refresh the page or go back to <Link href="/" className="text-red-800 font-bold">home</Link></p>
      </div>
    </div>
  )
}

export default ErrorComponent;
