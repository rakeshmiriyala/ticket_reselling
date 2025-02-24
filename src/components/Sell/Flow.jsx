import { FaUpload, FaArrowRight, FaTag, FaDollarSign } from "react-icons/fa"; // Importing icons

const ProcessSteps = () => {
  return (
    <div className="mx-auto bg-[#0F0039] px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* First Step - Upload Your Ticket */}
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg transition-all">
          <FaUpload className="text-5xl text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Upload Your Ticket</h3>
          <p className="text-white text-lg text-center">
            Start by uploading your event tickets.
          </p>
          <FaArrowRight className="absolute hidden md:block right-[-20px] top-1/2 transform -translate-y-1/2 text-3xl text-pink-500" />
        </div>

        {/* Second Step - Set Price */}
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg transition-all">
          <FaTag className="text-5xl text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Set Price</h3>
          <p className="text-white text-lg text-center">
            Choose your preferred price for the ticket.
          </p>
          <FaArrowRight className="absolute hidden md:block right-[-20px] top-1/2 transform -translate-y-1/2 text-3xl text-pink-500" />
        </div>

        {/* Third Step - Get Paid */}
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg border-pink-400 transition-all">
          <FaDollarSign className="text-5xl text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Get Paid</h3>
          <p className="text-white text-lg text-center">
            Receive your payment once the ticket is sold.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
