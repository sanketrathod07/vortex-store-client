import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './styleYT/global.css'

const ProductDetailsCarousel = ({ item }) => {
    // console.log(item)
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url}/>
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url}/>
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;