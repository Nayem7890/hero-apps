import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import  appError from '../../assets/App-Error.png'
const Productdetails = () => {
    const {id} = useParams()
    const {apps} = useApps()
    const navigate = useNavigate();

    if (!apps || apps.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Loading app details...</p>;
  }
  const app = apps.find(a=> String(a.id) === id)
   
  if (!app) {
    
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
      
      <img
        src= {appError} 
        alt="Page Not Found"
        className="w-100 mb-6"
      />
      <h2 className="text-5xl text-[#001931] font-semibold mb-2">OPPS!! APP NOT FOUND</h2>
      <p className="text-[#627382] my-4 text-xl">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-5 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg hover:bg-orange-600 transition"
      >
        Go Back!
      </button>
    </div>
        );
    }

  const {image, title, downloads, ratingAvg, reviews, size} = app || {}

  const handleAddToInstall = ()=>{
    const existingList = JSON.parse(localStorage.getItem('installList'))
    let updatedList = []
    if(existingList){
        const isDuplicate = existingList.some(p=>p.id === app.id)
        if (isDuplicate) return alert ('sorry')
       updatedList = [...existingList, app]
    }else{
        updatedList.push(app)
    }
    
      localStorage.setItem('installList', JSON.stringify(updatedList) )
  }
    
    return (
        <div>
            <div className='bg-[#F5F5F5] pb-8'>
                <div className="max-w-11/12 flex items-center flex-col md:flex-row mx-auto p-6 rounded-xl gap-8">
      <img src={image} alt={title} className="w-[350px] rounded-lg object-fill bg-white p-20 shadow-xl" />
      <div className='flex-1'>
        <div className='border-b-1 border-[#001931]/20'>
            <h2 className="text-4xl font-bold text-[#001931] mb-1">{title}</h2>
        <p className='text-[#627382] text-xl '>Developed by <span className='text-[#632EE3] '>productive.io</span></p>
        </div>
        
      <div className='flex mt-3 gap-6'>
        <div>
            <span className='text-green-700 text-5xl'><HiOutlineDownload /></span>
        <p className="text-[#001931] my-2">Downloads</p>
        <p className='text-3xl font-bold'>{downloads} </p>
        </div>
        <div>
            <span className='text-orange-400 text-5xl'><FaStar /></span>
        <p className="text-[#001931] my-2">Average Ratings</p>
        <p className='text-3xl font-bold'>{ratingAvg} </p>
        </div>
        <div>
            <span className='text-[#632EE3] text-5xl'><SlLike /></span>
        <p className="text-[#001931] my-2">Total Reviews</p>
        <p className='text-3xl font-bold'>{reviews} </p>
        </div>
      
      </div>
       <button onClick={handleAddToInstall} className='px-5 py-2.5 bg-[#00D390] mt-3 rounded-lg cursor-pointer text-xl font-semibold text-white'>Install Now ({size} MB)</button>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Productdetails;