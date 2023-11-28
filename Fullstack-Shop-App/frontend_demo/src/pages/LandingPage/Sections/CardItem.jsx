import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../../components/ImageSlider';

/* eslint-disable */
const CardItem = ({ product }) => {
    console.log(product);
    // Check if product.images is defined and non-empty
    const hasImages = product.images && product.images.length > 0;

    return (
        <div className="border-[1px] border-gray-300">
            {/* Render ImageSlider only if hasImages is true */}
            {hasImages && <ImageSlider images={product.images} />}

            <Link to={`/product/${product._id}`}>
                <p className="p-1">{product.title}</p>
                <p className="p-1">{product.continents}</p>
                <p className="p-1 text-xs text-gray-500">{product.price}</p>
            </Link>
        </div>
    );
};

export default CardItem;
