import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const RelatedProducts = () => {
    const { data, loading, error } = useFetch('/products?populate=*');
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2,
        },
    };
    return (
        <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className="text-2xl font-bold mb-5">You Might Also Like</div>
            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
            >
                {data?.map(item => (
                    <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                    >
                        <img className="w-full  " src={item?.attributes?.img?.data?.attributes?.url} alt="Not Loaded" />
                        <div className="p-4 text-black/[0.9]">
                            <h2 className="text-lg font-medium">{item?.attributes.title}</h2>
                            <div className="flex items-center text-black/[0.5]">
                                <p className="mr-2 text-lg font-semibold">${item?.attributes.price}</p>
                                <p className="text-base font-medium line-through">${item?.attributes.price + 10}</p>
                                <p className="ml-auto text-base font-medium text-green-500">20% off</p>

                            </div>

                        </div>
                        <div></div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

export default RelatedProducts
