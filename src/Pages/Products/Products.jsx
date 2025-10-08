import React from 'react';
import useApps from '../../Hooks/useApps';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Product = () => {
const {apps} = useApps()
    return (
        <div>
            <div className='bg-[#F5F5F5] pb-8'>
            <div className='text-center space-y-3 pt-4'>
                <h2 className='text-[#001931] text-5xl font-bold '>Our All Applications</h2>
            <p className='text-xl text-[#627382] '>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='max-w-11/12 mx-auto flex justify-between items-center'>
                <h1 className='text-[#001931] font-semibold text-2xl '>({apps.length}) Apps Found</h1>
               
                <button className='btn btn-outline'>Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-11/12 mx-auto py-15'>
                {apps.map(app => (
                    <ProductCard key={app.id} app={app}></ProductCard>
                ))}
            </div>
            
        </div>
        </div>
    );
};

export default Product;