import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../../Components/ProductCard/ProductCard';
import useApps from '../../Hooks/useApps';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImg from '../../assets/hero.png';

const Home = () => {

    const { apps, loading, error } = useApps();

    const featureApps = apps.slice(0, 8);


    return (
        <div className='bg-[#F5F5F5] pb-8'>

            <div>
                <h1 className='text-[72px] font-bold text-[#001931] text-center'>We Build <br />
                    <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive
                    </span> Apps</h1>
                <p className='text-[#627382] font-semibold text-xl text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex gap-4 justify-center items-center my-3">
                    <a
                        href="https://play.google.com/store"

                        className="px-4 py-2 btn btn-outline text-[#001931] rounded-lg hover:bg-blue-400 transition"
                    >
                        <IoLogoGooglePlaystore /> Google Play
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"

                        className="px-4 py-2 btn btn-outline text-[#001931] rounded-lg hover:bg-orange-400 transition"
                    >
                        <FaAppStoreIos /> App Store
                    </a>
                </div>

                <div className='flex justify-center items-center'>
                    <img className='mt-5' src={heroImg} alt="Hero illustration showing productive apps" />
                </div>
                <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center pb-7'>
                    <h2 className='font-bold text-5xl text-white py-5'>Trusted by Millions, Built for You</h2>
                    <div className='flex flex-col md:flex-row gap-6 py-5 items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <p className='text-white'>Total Downloads</p>
                            <h2 className='text-white font-extrabold text-6xl py-2'>29.6M</h2>
                            <p className='text-white'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-white'>Total Reviews</p>
                            <h2 className='text-white font-extrabold text-6xl py-2'>906K</h2>
                            <p className='text-white'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-white'>Active Apps</p>
                            <h2 className='text-white font-extrabold text-6xl py-2'>132+</h2>
                            <p className='text-white'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='text-center space-y-3 pt-4'>
                <h2 className='text-[#001931] text-5xl font-bold '>Trending Apps</h2>
                <p className='text-xl text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto py-15'>
                {loading ? (
                    <div className="col-span-full flex justify-center items-center py-20">
                        <LoadingSpinner size="lg" />
                    </div>
                ) : error ? (
                    <div className="col-span-full text-center py-20">
                        <p className="text-red-500 text-xl">Error loading apps. Please try again later.</p>
                    </div>
                ) : (
                    featureApps.map(app => (
                        <ProductCard key={app.id} app={app} />
                    ))
                )}
            </div>
            <div className='text-center mt-8'>
                <Link 
                    to='/products' 
                    className='font-semibold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-lg border-none px-4 py-3 hover:opacity-90 transition'
                >
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default Home;