import Image from "next/image";


const CoverImage = ({ coverImageData, postTitle }) => {

  // console.log(coverImageData);
  return (
    
      <Image
        width={100}
        height={100}
        className="object-cover w-full h-full"
        src={`data:image/jpeg;base64,${coverImageData}`}
        alt={`Cover-image for ${postTitle}`}
      />
    
  );
};

export default CoverImage;
