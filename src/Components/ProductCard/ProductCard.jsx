import React from 'react';
import { Link } from 'react-router';
import { FaDownload } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const ProductCard = ({app}) => {
    
    const {image, title, downloads, ratingAvg, id} = app

    return (
        <Link to={`/app/${id}`}>
        <div className="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <figure>
    <img className='w-[316px] h-[316px] object-fill'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">
      {title}
    </h2>
    
    <div className="card-actions flex justify-between items-center mt-1">
      <div className="badge bg-[#F1F5E8] text-[#00D390] "><FaDownload /> {downloads} </div>
      <div className="badge bg-[#FFF0E1] text-[#FF8811]"><GoStarFill /> {ratingAvg}</div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default ProductCard;