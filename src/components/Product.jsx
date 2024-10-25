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

const Product = () => {

    const dispatch = useDispatch();
    const id = useParams().id;

    const [showSkeleton, setShowSkeleton] = useState(true);
    const [loadingToast, setLoadingToast] = useState(false);
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
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
        }, 400); // 1 second delay

        return () => clearTimeout(skeletonTimeout);
    }, []);

    const handleAddToCart = () => {
        setLoadingToast(true); // Show loading toast
        setTimeout(() => {
            setLoadingToast(false); // Hide loading toast after 1 second
            data &&
                dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity: quantity,
                }));
            showToastMessage();
        }, 500); // 1 second delay for showing the loading toast
    };

    const [isScreenBelow1024, setIsScreenBelow1024] = useState(window.innerWidth < 1024);

    useEffect(() => {
        // Update the screen size on resize
        const handleResize = () => {
            setIsScreenBelow1024(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (loading || showSkeleton) {
        return <Skelleton />;
    }
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
            <div key={data?.id} className="productMainContainer w-full md:py-4">
                <Wrapper>
                    <div className="flex flex-col lg:flex-row md:px-2 gap-[25px] lg:gap-[100px]">
                        {/* left column start */}
                        <div className="w-full md:w-auto flex-[1.5] max-w-[700px] lg:max-w-full mx-auto lg:mx-0">
                            {/* left column end */}
                            <ProductDetailsCarousel item={data} />
                        </div>
                        {/* right column start */}
                        <div className="flex-[1] py-0 lg:py-3">
                            {/* PRODUCT TITLE */}
                            <div className="text-[34px] font-semibold mb-2">
                                {data?.attributes?.title}
                            </div>

                            {/* PRODUCT SUBTITLE */}
                            <div className="text-lg font-semibold mb-5">
                                {data?.attributes?.categorie}
                            </div>

                            {/* PRODUCT PRICE */}
                            <div className="text-lg font-semibold">
                                MRP : ₹ {data?.attributes?.price}
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
                                    {data?.attributes?.desc}
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
