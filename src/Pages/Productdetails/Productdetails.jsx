import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import appError from '../../assets/App-Error.png';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast'; 

const Productdetails = () => {
    const { id } = useParams();
    const { apps, isLoading } = useApps();
    const navigate = useNavigate();
    const [installed, setInstalled] = useState(false); 

    if (isLoading || !apps) return <LoadingSpinner />;

    const app = apps.find(a => String(a.id) === id);

    if (!app) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
                <img src={appError} alt="Page Not Found" className="w-100 mb-6" />
                <h2 className="text-5xl text-[#001931] font-semibold mb-2">OPPS!! APP NOT FOUND</h2>
                <p className="text-[#627382] my-4 text-xl">
                    The App you are requesting is not found on our system. Please try another app.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg hover:bg-orange-600 transition"
                >
                    Go Back!
                </button>
            </div>
        );
    }

    const { image, title, downloads, ratingAvg, reviews, size, description } = app;

    
    const handleAddToInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('installList')) || [];
        const isDuplicate = existingList.some(p => p.id === app.id);
        if (isDuplicate) {
            toast.error("App already installed!");
            setInstalled(true);
            return;
        }

        const updatedList = [...existingList, app];
        localStorage.setItem('installList', JSON.stringify(updatedList));
        setInstalled(true); 
        toast.success("App installed successfully!"); 
    };

    return (
        <div>
            <Toaster /> 
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
                                <p className='text-3xl font-bold'>{downloads}</p>
                            </div>
                            <div>
                                <span className='text-orange-400 text-5xl'><FaStar /></span>
                                <p className="text-[#001931] my-2">Average Ratings</p>
                                <p className='text-3xl font-bold'>{ratingAvg}</p>
                            </div>
                            <div>
                                <span className='text-[#632EE3] text-5xl'><SlLike /></span>
                                <p className='text-[#001931] my-2'>Total Reviews</p>
                                <p className='text-3xl font-bold'>{reviews}</p>
                            </div>
                        </div>

                       
                        <button
                            onClick={handleAddToInstall}
                            disabled={installed}
                            className={`px-5 py-2.5 mt-3 rounded-lg cursor-pointer text-xl font-semibold text-white transition ${
                                installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-green-600'
                            }`}
                        >
                            {installed ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>

                {/* Chart */}
                <div className='space-y-3 max-w-11/12 mx-auto '>
                    <h2 className='font-semibold text-2xl'>Ratings</h2>
                    <div className='rounded-xl p-5 h-80 bg-white shadow'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={app.ratings}
                                layout="vertical"
                                margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#FF8811" barSize={20} radius={[0, 10, 10, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                         
                <div className='max-w-11/12 mx-auto py-14'>
                    <h2 className='text-[#001931] font-semibold text-2xl py-4'>Description</h2>
                    <p>{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Productdetails;
