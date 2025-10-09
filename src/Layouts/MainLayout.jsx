import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const MainLayout = () => {
     const navigation = useNavigation();
    return (
         <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Show spinner during page navigation */}
      {navigation.state === 'loading' && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
          <LoadingSpinner size="lg" />
        </div>
      )}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;