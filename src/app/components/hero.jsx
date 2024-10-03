

const Hero = () => {
    return ( 
      <div className="md:mx-16 mx-6 mb-[4.2em]   md:flex justify-between items-center">
        <p className=" md:flex my-2 follow  hidden text-xs">Follow us</p>
  
        <div className="flex md:justify-around justify-center items-center flex-col md:flex-row">
          <div className="flex justify-center relative">
            <h1 className="md:text-[10rem] lg:text-[15rem] text-center text-[5rem]  font-black dark:text-primary">
              mufc
            </h1>
          </div>
  
          <div className="md:text-left max-w-[95%] text-justify md:w-[30%] md:mt-[10em]">
            <div className="mt-[2em]">
              <h3 className="text-2xl p-3 font-medium">Old Trafford</h3>
              <p className="text-sm p-3">
                Theatre of dreams! We preach it, we shout it, we sing it. It is
                who we are! Week in and week out. Manchester united, our Culture!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
 export default Hero;  