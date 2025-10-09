import React from 'react';

const LoadingSpinner = ({ size = "lg" }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className={`loading loading-spinner loading-${size}`}></span>
    </div>
  );
};

export default LoadingSpinner;
