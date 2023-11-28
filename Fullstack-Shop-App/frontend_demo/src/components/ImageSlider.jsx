import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ images }) => {
    return (
        <Carousel autoPlay showThumbs={false} infiniteLoop>
            {/* eslint-disable-next-line react/prop-types */}
            {images.map((image) => (
                <div key={image}>
                    <img
                        src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                        alt={image}
                        className="w-full max-h-[150px]"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageSlider;
