import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDetailsCarousel from './ProductDetailsCarousel';
import Wrapper from "./Wrapper";
import './styleYT/global.css'
import RelatedProducts from './RelatedProducts';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skelleton from './skull/Skelleton';
import Loading from './Loading';



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




const Product = () => {

    const dispatch = useDispatch();
    const { id } = useParams();


    const [showSkeleton, setShowSkeleton] = useState(true);
    const [loadingToast, setLoadingToast] = useState(false);
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
    console.log("Data", data)
    const quantity = 1;

    const showToastMessage = () => {
        toast.success("Added to Your Cart!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
            style: {
                bottom: window.innerWidth <= 1024 ? '60px' : '0px'
            }
        });
    };

    useEffect(() => {
        const skeletonTimeout = setTimeout(() => {
            setShowSkeleton(false);
        }, 400);

        return () => clearTimeout(skeletonTimeout);
    }, []);

    const handleAddToCart = () => {
        setLoadingToast(true);
        setTimeout(() => {
            setLoadingToast(false);
            if (productData) {
                dispatch(addToCart({
                    id: productData.id,
                    title: productData.attributes.title,
                    desc: productData.attributes.desc,
                    price: productData.attributes.price,
                    img: productData.attributes.img.data.attributes.url,
                    quantity: quantity,
                }));
                showToastMessage();
            }
        }, 500);
    };

    const [isScreenBelow1024, setIsScreenBelow1024] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenBelow1024(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    if (loading || showSkeleton) {
        return <Skelleton />;
    }

    const productData = data && Object.keys(data).length > 0
        ? data
        : fallbackShowcaseProducts.find(p => p.id === Number(id)) || fallbackShowcaseProducts[0];

    console.log("ProductData", productData)

    return (
        <>
            {isScreenBelow1024 ? (
                <ToastContainer />
            ) : (
                <Link to={`/cart`}>
                    <ToastContainer />
                </Link>
            )}
            {loadingToast && <Loading />} {/* Show loading component when loadingToast is true */}
            <div key={productData?.id} className="productMainContainer w-full md:py-4">
                <Wrapper>
                    <div className="flex flex-col lg:flex-row md:px-2 gap-[25px] lg:gap-[100px]">
                        {/* left column start */}
                        <div className="w-full md:w-auto flex-[1.5] max-w-[700px] lg:max-w-full mx-auto lg:mx-0">
                            {/* left column end */}
                            <ProductDetailsCarousel item={productData} />
                        </div>
                        {/* right column start */}
                        <div className="flex-[1] py-0 lg:py-3">
                            {/* PRODUCT TITLE */}
                            <div className="text-[34px] font-semibold mb-2">
                                {productData?.attributes?.title}
                            </div>

                            {/* PRODUCT SUBTITLE */}
                            <div className="text-lg font-semibold mb-5">
                                {productData?.attributes?.categorie}
                            </div>

                            {/* PRODUCT PRICE */}
                            <div className="text-lg font-semibold">
                                MRP : ₹ {productData?.attributes?.price}
                            </div>
                            <div className="text-md font-medium text-black/[0.5]">
                                incl. of taxes
                            </div>
                            <div className="text-md font-medium text-black/[0.5] mb-10 lg:mb-14">
                                {`(Also includes all applicable duties)`}
                            </div>

                            {/* PRODUCT SIZE RANGE START */}
                            <div className="mb-10">
                                {/* HEADING START */}
                                <div className="flex justify-between mb-2">
                                    <div className="text-md font-semibold">Select Size</div>
                                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                        Select Guide
                                    </div>
                                </div>
                                {/* HEADING END */}

                                {/* SIZE START */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        S 4
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        S 10
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        M 4
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        M 10
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        XL 4
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        XL 10
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50 ">
                                        XL 16
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50 ">
                                        XL 22
                                    </div>
                                </div>
                                {/* SIZE END */}

                                {/* SHOW ERROR START */}
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                                {/* SHOW ERROR END */}
                            </div>
                            {/* PRODUCT SIZE RANGE END */}

                            {/* ADD TO CART BUTTON START */}
                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>

                            {/* WHISHLIST BUTTON START */}
                            <button
                                className="w-full border border-black px-4 py-2 rounded-md text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                                style={{ borderWidth: '2px', borderColor: 'black' }}
                            >
                                Whishlist<ion-icon name="heart-outline"></ion-icon>
                            </button>
                            {/* WHISHLIST BUTTON END */}

                            <div>
                                <div className="text-lg font-bold mb-5">Product Details</div>
                                <div className="markdown text-md mb-5">
                                    {productData?.attributes?.desc}
                                </div>
                            </div>
                        </div>
                        {/* right column end */}
                    </div>

                    <RelatedProducts />
                </Wrapper>
            </div>
        </>
    );
}



export default Product
