import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Authentication</h1>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
