// import '@/app/globals.css'


import Image from "next/image";

const DashboardProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full max-w-[5em] h-[5em] overflow-hidden my-3 bg-red-500">
        <Image
          src="/image1.png"
          alt="Profile photo"
          width={100}
          height={100}
          priority={true}
          className="object-fill" 
        />
      </div>
      <div className="text-center">
        <p className="py-1 font-semibold">Omada Solomon</p>
        <p className="text-xs">Admin</p>
      </div>
    </div>
  );
};

export default DashboardProfile;
