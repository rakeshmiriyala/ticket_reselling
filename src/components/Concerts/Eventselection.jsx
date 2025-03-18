import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventSelection = () => {
  const { categoryId, cardIndex } = useParams();
  const navigate = useNavigate();

  // State for dropdowns
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  // Sample event options
  const eventOptions = ["Concert", "DJ Night", "Theater Play", "Workshop"];
  const slotOptions = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"];

  // Handle submission
  const handleSubmit = () => {
    if (selectedEvent && selectedDate && selectedSlot) {
      navigate(`/booking/${categoryId}/${cardIndex}?event=${selectedEvent}&date=${selectedDate}&slot=${selectedSlot}`);
    } else {
      alert("Please select all fields before proceeding.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-6">
      <div className="bg-[#120621] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Select Your Preferences</h2>

        {/* Event Dropdown */}
        <label className="block mb-2">Select Event:</label>
        <select
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          <option value="">Choose an event</option>
          {eventOptions.map((event, index) => (
            <option key={index} value={event}>{event}</option>
          ))}
        </select>

        {/* Date Picker */}
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        {/* Slot Dropdown */}
        <label className="block mb-2">Select Slot:</label>
        <select
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
        >
          <option value="">Choose a time slot</option>
          {slotOptions.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>

        {/* Submit Button */}
        <button 
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold w-full text-lg transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EventSelection;
