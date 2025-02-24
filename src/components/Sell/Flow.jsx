import { IoIosArrowDropright } from "react-icons/io";
import One from "../../assets/Upload_your_tickets.png";
import Two from "../../assets/Set_your_price.png"; // Add your second image
import Three from "../../assets/Get_paid.png"; // Add your third image

const ProcessIcons = () => {
  return (
    <div className="mx-auto bg-cover bg-center px-6 py-12 flex justify-center bg-gradient-to-b from-black to-[#090320]">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Upload Icon (Using Image) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center p-6 border-2 border-pink-500 rounded-xl w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <img src={One} alt="Upload Your Tickets" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-sm sm:text-md md:text-lg font-semibold mt-4 text-white">Upload Your Tickets</h3>
        </div>

        {/* Arrow */}
        <IoIosArrowDropright className="text-pink-500 text-3xl md:text-4xl lg:text-5xl hidden sm:block" />

        {/* Set Price Icon (Using Image) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center p-6 border-2 border-pink-500 rounded-xl w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <img src={Two} alt="Set Price" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-sm sm:text-md md:text-lg font-semibold mt-4 text-white">Set Your Price </h3>
        </div>

        {/* Arrow */}
        <IoIosArrowDropright className="text-pink-500 text-3xl md:text-4xl lg:text-5xl hidden sm:block" />

        {/* Get Paid Icon (Using Image) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center p-6 border-2 border-pink-500 rounded-xl w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <img src={Three} alt="Get Paid" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-sm sm:text-md md:text-lg font-semibold mt-4 text-white">Get Paid</h3>
        </div>
      </div>
    </div>
  );
};

export default ProcessIcons;
