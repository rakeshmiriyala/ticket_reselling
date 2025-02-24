import MusicImage from "../../assets/Upload_directions.png";
import TicketImage from "../../assets/Safe_tranasactions.png";
import StreamingImage from "../../assets/Verified_ticket.png";
import CommunityImage from "../../assets/Accessible_events.png";

const Features = () => {
  return (
    <div className="mx-auto px-6 bg-black py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Music Feature */}
        <div className="flex flex-col items-center rounded-lg p-6">
          <img src={MusicImage} alt="Music" className="w-16 h-16 mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Music
          </h3>
          <p className="text-center text-white">
            Enjoy your favorite concerts with an unforgettable experience.
          </p>
        </div>

        {/* Tickets Feature */}
        <div className="flex flex-col items-center rounded-lg p-6">
          <img src={TicketImage} alt="Tickets" className="w-16 h-16 mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Tickets
          </h3>
          <p className="text-center text-white">
            Buy and sell tickets seamlessly through our platform.
          </p>
        </div>

        {/* Streaming Feature */}
        <div className="flex flex-col items-center rounded-lg p-6">
          <img src={StreamingImage} alt="Streaming" className="w-16 h-16 mb-4" />
          <h3 className="text-xl text-white font-semibold text-center">
            Streaming
          </h3>
          <p className="text-center text-white">
            Watch your favorite events live from anywhere.
          </p>
        </div>

        {/* Community Feature */}
        <div className="flex flex-col items-center rounded-lg p-6">
          <img src={CommunityImage} alt="Community" className="w-16 h-16 mb-4" />
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
