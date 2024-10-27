import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";



const fallbackShowcaseProducts = [
    {
        id: 1002,
        attributes: {
            title: "Silver Necklace",
            desc: "An elegant silver necklace for special events.",
            price: 85,
            img: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035845/2_imbq1r.webp",
                    },
                },
            },
            img2: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035845/1_etaidq.webp",
                    },
                },
            },
            star: 5,
            category: "Jewelry",
        },
    },
    {
        id: 1003,
        attributes: {
            title: "Leather Watch",
            desc: "A stylish leather watch for men.",
            price: 150,
            img: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035861/1_emxaqx.webp",
                    },
                },
            },
            img2: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035861/4_gdkkdu.webp",
                    },
                },
            },
            star: 4,
            category: "Accessories",
        },
    },
    {
        id: 1004,
        attributes: {
            title: "Leather Watch",
            desc: "A stylish leather watch for men.",
            price: 150,
            img: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035824/1_o1map8.webp",
                    },
                },
            },
            img2: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035824/2_pa3wqt.webp",
                    },
                },
            },
            star: 4,
            category: "Accessories",
        },
    },
    {
        id: 1005,
        attributes: {
            title: "Leather Watch",
            desc: "A stylish leather watch for men.",
            price: 150,
            img: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035911/1_m4snjg.webp",
                    },
                },
            },
            img2: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035912/2_ddjkxi.webp",
                    },
                },
            },
            star: 4,
            category: "Accessories",
        },
    },
    {
        id: 1006,
        attributes: {
            title: "Leather Watch",
            desc: "A stylish leather watch for men.",
            price: 150,
            img: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035894/2_fuz9dc.webp",
                    },
                },
            },
            img2: {
                data: {
                    attributes: {
                        url: "https://res.cloudinary.com/dq8b6vgab/image/upload/v1730035894/4_khcca7.webp",
                    },
                },
            },
            star: 4,
            category: "Accessories",
        },
    },
];






const RelatedProducts = () => {
    const { data, loading, error } = useFetch('/products?populate=*');
    const { id } = useParams();


    const showcaseProducts = data && data.length > 0 ? data : fallbackShowcaseProducts;
    console.log("showcaseProducts", showcaseProducts)
    const filteredProducts = showcaseProducts?.filter(item => item.id !== parseInt(id));
    console.log("filteredProducts", filteredProducts)

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
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Carousel
                    responsive={responsive}
                    containerClass="-mx-[10px]"
                    itemClass="px-[10px]"
                >
                    {filteredProducts.map(item => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                        >
                            <img
                                className="w-full"
                                src={item?.attributes?.img?.data?.attributes?.url || 'fallback-image-url'}
                                alt={item?.attributes.title}
                            />
                            <div className="p-4 text-black/[0.9]">
                                <h2 className="text-lg font-medium">{item?.attributes?.title}</h2>
                                <div className="flex items-center text-black/[0.5]">
                                    <p className="mr-2 text-lg font-semibold">${item?.attributes?.price}</p>
                                    <p className="text-[0.8rem] lg:text-base font-medium line-through">${item?.attributes?.price + 10}</p>
                                    <p className="ml-auto text-[0.6rem] lg:text-base font-medium text-green-500">20% off</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default RelatedProducts
