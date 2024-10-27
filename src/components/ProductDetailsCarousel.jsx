import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './styleYT/global.css'

const ProductDetailsCarousel = ({ item }) => {

    const getImgUrl = (url) => {
        // Check if the URL already includes 'http' or 'https', meaning it's a full URL
        if (url?.startsWith('http') || url?.startsWith('https')) {
            return url; // If it's a full URL, return as is
        }
        // Otherwise, prepend the REACT_APP_UPLOAD_URL
        return `${process.env.REACT_APP_UPLOAD_URL}${url}`;
    };
    console.log(item)
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img
                    src={getImgUrl(item?.attributes?.img?.data?.attributes?.url)}
                    alt="Product Image 1"
                />
                <img
                    src={getImgUrl(item?.attributes?.img2?.data?.attributes?.url)}
                    alt="Product Image 2"
                />
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;