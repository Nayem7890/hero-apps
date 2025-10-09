import React, { useEffect, useState, useMemo } from 'react';
import { GoStarFill } from "react-icons/go";
import { RiDownload2Fill } from "react-icons/ri";

const Wishlist = () => {
    const [installList, setInstallList] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installList')) || [];
        setInstallList(savedList);
    }, []);

    // Helper function to correctly read numbers like "5000M"
    const parseDownloads = (downloadString) => {
        // parseFloat is the "Relaxed Teacher" - it reads the number and ignores the 'M'.
        return parseFloat(downloadString) || 0;
    };

    // Use useMemo to compute sorted list ONLY when installList or sortOrder changes
    const sortedList = useMemo(() => {
        const listToSort = [...installList]; // Create a copy to sort
        
        // If sortOrder is 'none', we don't need to sort at all!
        if (sortOrder === 'none') {
            return installList;
        }

        return listToSort.sort((a, b) => {
            // Use our helper function to get the real numbers
            const downloadsA = parseDownloads(a.downloads);
            const downloadsB = parseDownloads(b.downloads);

            if (sortOrder === 'downloads-asc') {
                return downloadsA - downloadsB; // Sorts from low to high
            } else { // This covers 'downloads-dsc'
                return downloadsB - downloadsA; // Sorts from high to low
            }
        });
    }, [installList, sortOrder]); // This is the dependency array

    const handleRemove = (id) => {
        const updatedList = installList.filter(p => p.id !== id);
        setInstallList(updatedList);
        localStorage.setItem('installList', JSON.stringify(updatedList));
    };

    return (
        <div className='bg-[#F5F5F5] pb-8 min-h-screen'>
            <div className='text-center space-y-3 pt-4'>
                <h2 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-xl text-[#627382]'>
                    Manage and sort the applications you have installed.
                </p>
            </div>

            <div className='max-w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center mt-6 px-4 gap-4'>
                <h1 className='text-[#001931] font-semibold text-2xl'>
                    ({installList.length}) Apps Found
                </h1>

                <select
                    className='select select-bordered w-full sm:w-auto bg-white'
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                >
                    <option value="none">Sort By Downloads</option>
                    <option value="downloads-asc">Low → High</option>
                    <option value="downloads-dsc">High → Low</option>
                </select>
            </div>

            <div className='space-y-4 max-w-11/12 mx-auto px-4 mt-6'>
                {sortedList.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-6xl">텅</p>
                        <p className="text-2xl text-gray-500 mt-4">
                            You haven't installed any apps yet.
                        </p>
                    </div>
                ) : (
                    sortedList.map(p => (
                        <div key={p.id} className="card card-side bg-base-100 shadow-sm">
                            <figure className='p-4'>
                                <img
                                    className='w-[90px] h-[90px] object-fill'
                                    src={p.image}
                                    alt={p.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.title}</h2>
                                <div className='flex items-center gap-4 flex-wrap'>
                                    <div className='flex items-center text-green-600 gap-1'>
                                        <RiDownload2Fill />
                                        <span>{p.downloads}</span>
                                    </div>
                                    <div className='flex items-center text-orange-400 gap-1'>
                                        <GoStarFill />
                                        <span>{p.ratingAvg}</span>
                                    </div>
                                    <div>
                                        <span className='text-[#627382]'>{p.size} MB</span>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleRemove(p.id)}
                                        className="btn bg-[#00D390] text-white hover:bg-green-600"
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;

