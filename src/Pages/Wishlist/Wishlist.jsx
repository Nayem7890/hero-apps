import React, { useEffect, useState } from 'react';
import { GoStarFill } from "react-icons/go";
import { RiDownload2Fill } from "react-icons/ri";

const Wishlist = () => {
    const [installList, setInstallList] = useState([]);

    const [sortOrder, setSortOrder]= useState('none')

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installList'))
        if (savedList) setInstallList(savedList)
    }, [])
    return (
        <div className='bg-[#F5F5F5] pb-8'>

            <div className='text-center space-y-3 pt-4'>
                <h2 className='text-[#001931] text-5xl font-bold '>Your Installed Apps</h2>
                <p className='text-xl text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='max-w-11/12 mx-auto flex justify-between items-center '>
                <h1 className='text-[#001931] font-semibold text-2xl '>({installList.length}) Apps Found</h1>

                <select value={sortOrder} onChange={e=> setSortOrder(e.target.value)} >
                    <option value="none">Sort By Size</option>
                    <option value="price-asc">Low-&gt;High</option>
                    <option value="price-dsc">High-&gt;Low</option>
                </select>

            </div>

            <div className='space-y-3'>

                {installList.map(p => <div className="card card-side bg-base-100 shadow-sm my-4 max-w-11/12 mx-auto">
                    <figure>
                        <img
                            className='w-[90px] h-[90px]'
                            src={p.image}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{p.title} </h2>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center text-green-600'>
                                <RiDownload2Fill />
                                <h2>{p.downloads} </h2>
                            </div>
                            <div className='flex items-center text-orange-400'>
                                <GoStarFill />
                                <h2>{p.ratingAvg} </h2>
                            </div>
                            <div>
                                <h2 className='text-[#627382] '>{p.size} MB </h2>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#00D390] text-white">Uninstall</button>
                        </div>
                    </div>
                </div>)}


            </div>

        </div>
    );
};

export default Wishlist;