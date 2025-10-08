import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../../Components/ProductCard/ProductCard';
import useApps from '../../Hooks/useApps';

const Home = () => {
    
    const {apps, loading, error} = useApps()
    

    const featureApps = apps.slice(0, 8)
    console.log(apps);
    
    
    return (
        <div className='bg-[#F5F5F5] pb-8'>
            <div className='text-center space-y-3 pt-4'>
                <h2 className='text-[#001931] text-5xl font-bold '>Trending Apps</h2>
            <p className='text-xl text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-11/12 mx-auto py-15'>
                {featureApps.map(app => (
                    <ProductCard key={app.id} app={app}></ProductCard>
                ))}
            </div>
            <div className='text-center '>
                <Link to='/products' className=' font-semibold text-white bg-gradient-to-br from-[#632EE3] rounded-lg border-none to-[#9F62F2] border px-4 py-3'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;