import React, { useState, useEffect } from 'react';
import useApps from '../../Hooks/useApps';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { ClipLoader } from "react-spinners";

const AnimationStyles = () => (
    <style>
        {`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }


            .animate-fadeInUp {
                animation: fadeInUp 0.5s ease-out forwards;
            }
        `}
    </style>
);


const Product = () => {
    const { apps, isLoading } = useApps();
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [debouncedSearch, setDebouncedSearch] = useState('');

    
    useEffect(() => {
        setIsSearching(true);
        
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setIsSearching(false);
        }, 300); 

        return () => {
            clearTimeout(timer);
            setIsSearching(false);
        };
    }, [search]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-[#F5F5F5]">
                <ClipLoader
                    color="#632EE3"
                    size={80}
                    speedMultiplier={1.2}
                />
            </div>
        );
    }

    const term = debouncedSearch.trim().toLocaleLowerCase();
    const searchedApps = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps;

    return (
        <> 
            <AnimationStyles />
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

               
                {isSearching && (
                    <div className="flex justify-center items-center py-8">
                        <ClipLoader
                            color="#632EE3"
                            size={80}
                            speedMultiplier={1.2}
                        />
                        <span className="ml-3 text-[#632EE3]">Searching...</span>
                    </div>
                )}

                <div className="max-w-11/12 mx-auto py-10 px-4">
                    {!isSearching && searchedApps.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {searchedApps.map((app, index) => (

                                <div
                                    key={app.id}
                                    className="animate-fadeInUp"

                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <ProductCard app={app} />
                                </div>
                            ))}
                        </div>
                    ) : !isSearching && searchedApps.length === 0 ? (
                        <div className="text-center py-20 animate-fadeInUp">
                            <p className="text-6xl">🤷‍♂️</p>
                            <p className="text-2xl text-gray-500 mt-4">
                                No applications found matching your search.
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Product;

