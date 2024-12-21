import { FaMusic, FaTicketAlt, FaPlay, FaUsers } from "react-icons/fa"; // Correctly imported valid icons

const Features = () => {
  return (
    <div className=" mx-auto px-6 bg-[#5b318b] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center  rounded-lg  p-6">
          <FaMusic className="text-4xl text-black mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Music
          </h3>
          <p className="text-center text-white">
            Enjoy your favorite concerts with an unforgettable experience.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg  p-6">
          <FaTicketAlt className="text-4xl text-black mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Tickets
          </h3>
          <p className="text-center text-white">
            Buy and sell tickets seamlessly through our platform.
          </p>
        </div>
        <div className="flex flex-col items-center  rounded-lg  p-6">
          <FaPlay className="text-4xl text-black mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Streaming
          </h3>
          <p className="text-center text-white">
            Watch your favorite events live from anywhere.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg  p-6">
          <FaUsers className="text-4xl text-black mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Community
          </h3>
          <p className="text-center text-white">
            Connect with fans and other event-goers for an immersive experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
