import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Product = () => { 
    
    const { apps, isLoading } = useApps();
    const [search, setSearch] = useState('');

    if (isLoading) {
        return ( 
            <div className="flex justify-center items-center min-h-screen bg-[#F5F5F5]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        ); 
    } 

    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps;

    return ( 
        <div className="bg-[#F5F5F5] pb-8 min-h-screen">
            <div className="text-center space-y-3 pt-4">
                <h2 className="text-[#001931] text-5xl font-bold">
                    Our All Applications
                </h2>
                <p className="text-xl text-[#627382]">
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
            </div>

            <div className="max-w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center mt-6 px-4 gap-4">
                <h1 className="text-[#001931] font-semibold text-2xl">
                    ({searchedApps.length}) Apps Found
                </h1>
                <label className="input input-bordered flex items-center gap-2 w-full sm:w-80 bg-white rounded-lg shadow-sm">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="🔍 Search Apps..."
                        className="grow p-2 outline-none"
                    />
                </label>
            </div>
            
            <div className="max-w-11/12 mx-auto py-10 px-4">
                {searchedApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {searchedApps.map(app => (
                            <ProductCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-6xl">🤷‍♂️</p>
                        <p className="text-2xl text-gray-500 mt-4">
                            No applications found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    ); 
}; 

export default Product;