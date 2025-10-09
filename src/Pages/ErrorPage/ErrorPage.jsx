import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import error from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

     
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 text-center p-4">
        <img
          src={error} 
          alt="Page Not Found"
          className="w-100 mb-6"
        />
        <h2 className="text-5xl text-[#001931] font-semibold mb-2">Oops, page not found!</h2>
        <p className="text-[#627382] my-4 text-xl">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg hover:bg-orange-600 transition"
        >
          Go Back!
        </button>
      </div>

      
      <Footer />
    </div>
  );
};

export default ErrorPage;
