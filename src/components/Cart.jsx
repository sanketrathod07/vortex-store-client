import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import EmptyCart from '../images/products/empty-cart.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity, resetCart } from '../redux/cartReducer';
import { useLocation } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../hooks/makeRequest";

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const [loadingToast, setLoadingToast] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0);

    const dispatch = useDispatch();

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    };

    useEffect(() => {
        let totalPrice = 0;

        if (products && products.length > 0) {
            for (const item of products) {
                totalPrice += item.price * (item.quantity || 1);
            }
        }

        setFinalPrice(totalPrice);
    }, [products]);

    const showToastMessage = () => {
        toast.success("Proceeding To Checkout !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            style: {
                bottom: window.innerWidth <= 1024 ? '60px' : '0px'
            }
        });
    };
    const showToastMessageReset = () => {
        toast.success("Cart is Reset !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            style: {
                bottom: window.innerWidth <= 1024 ? '60px' : '0px'
            }
        });
    };

    const showToastMessageItemDeleted = () => {
        toast.success("Item Deleted !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            style: {
                bottom: window.innerWidth <= 1024 ? '60px' : '0px'
            }
        });
    };

    const showToastMessageError = () => {
        toast.error("Already Empty !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            style: {
                bottom: window.innerWidth <= 1024 ? '60px' : '0px'
            }
        });
    }



    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            const scrollDelay = 400; // Adjust the delay in milliseconds
            const scrollPosition = 50; // Adjust the scroll position as needed

            const handleScroll = () => {
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth',
                });
            };

            // Check if the window width is above 1022px before applying the scroll transition
            if (window.innerWidth > 1022) {
                // Use setTimeout to introduce a delay before scrolling
                const timeoutId = setTimeout(handleScroll, scrollDelay);

                return () => clearTimeout(timeoutId);
            }
        }, [pathname]);

        return null;
    };


    const handleAddToCart = () => {
        setLoadingToast(true); // Show loading toast
        setTimeout(() => {
            setLoadingToast(false); // Hide loading toast after 1 second
            showToastMessage();
        }, 500); // 1 second delay for showing the loading toast
    };
    // console.log(products)


    // ***********STRAPI PAYMENT CODE START***********

    // const stripePromise = loadStripe(
    //     "pk_test_51NycusSGtdE7Lt2bcwpMJFPM7Bn7WUgLhCVVCf0YF1oNbBAZ37kzcFuB72kmeRu7aoYOJ8HZU2VmZayk3D2OthzT00B86DORZX"
    //   );
    //   const handlePayment = async () => {
    //     try {
    //       const stripe = await stripePromise;
    //       const res = await makeRequest.post("/orders", {
    //         products,
    //       });
    //       await stripe.redirectToCheckout({
    //         sessionId: res.data.stripeSession.id,
    //       });

    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };


    // ***********STRAPI PAYMENT CODE END***********

    // payment integration

    const stripePromise = loadStripe(
        "pk_test_51NycusSGtdE7Lt2bcwpMJFPM7Bn7WUgLhCVVCf0YF1oNbBAZ37kzcFuB72kmeRu7aoYOJ8HZU2VmZayk3D2OthzT00B86DORZX"
    );
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/order", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };




    return (

        <div className="cartMainContainer w-full md:py-10">
            {loadingToast && <Loading />} {/* Show loading component when loadingToast is true */}
            <ToastContainer />

            <Wrapper>
                {products.length > 0 ? (
                    <>
                        {/* HEADING AND PARAGRAPH START  */}
                        <ScrollToTop />
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-5">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="flex justify-between">
                                    <div className="text-lg font-bold">Cart Items</div>
                                    <div
                                        className="text-base font-medium text-end cursor-pointer py-2 px-3 rounded-full bg-black text-white transition-transform active:scale-95 hover:opacity-75"
                                        onClick={() => {
                                            dispatch(resetCart());
                                            products.length === 0 ? showToastMessageError() : showToastMessageReset();
                                        }}
                                    >
                                        Reset the Cart
                                    </div>
                                </div>
                                {Array.isArray(products) && products?.map(item => (
                                    item && (
                                        <div key={item.id} className="flex py-5 gap-3 md:gap-5 border-b">
                                            {/* IMAGE START */}
                                            <div className="shrink-0 aspect-square w-[50px] md:w-120px]">
                                                <img src={process.env.REACT_APP_UPLOAD_URL + item?.img ? item?.img : process.env.REACT_APP_UPLOAD_URL + item?.img} alt="IMAGE NOT FOUND" />
                                            </div>
                                            {/* IMAGE END */}
                                            <div className="w-full flex flex-col">
                                                <div className="flex flex-col md:flex-row justify-between">
                                                    {/* PRODUCT TITLE */}
                                                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8] flex">{item?.title}</div>
                                                    {/* PRODUCT SUBTITLE */}
                                                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                                                        Men&apos;s Golf Shoes
                                                    </div>
                                                    {/* PRODUCT PRICE */}
                                                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 line-height-8 w-32 justify-end text-end">
                                                        MRP : ₹{item?.price}
                                                    </div>
                                                </div>
                                                {/* PRODUCT SUBTITLE */}
                                                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                                                    Men&apos;s Golf Shoes
                                                </div>

                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                                                        <div className="flex items-center gap-1">
                                                            <div className="font-semibold">Size :</div>
                                                            <select className='hover:text-black'>
                                                                <option value="1">S 4</option>
                                                                <option value="2">S 14</option>
                                                                <option value="3">S 24</option>
                                                                <option value="4">M 4</option>
                                                                <option value="5">M 24</option>
                                                                <option value="6">XL 4</option>
                                                                <option value="7">XL 24</option>
                                                            </select>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="font-semibold">Quality : </div>
                                                            <select className='hover:text-black' value={item?.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} >
                                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <DeleteIcon className="trash-outline cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" onClick={() => { dispatch(removeItem(item.id)); showToastMessageItemDeleted(); }} ></DeleteIcon>
                                                </div>

                                            </div>
                                        </div>
                                    )))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1] ">
                                <div className="text-lg font-bold mr-4 ">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Subtotal
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            ₹ {finalPrice}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae dolor magni soluta minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum cum impedit rem inventore excepturi laudantium error quae sint natus! expedita itaque, consequatur sint consequuntur sapiente.
                                    </div>
                                </div>
                                {/* BUTTON START */}
                                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75' onClick={() => { handleAddToCart(); handlePayment(); }}>
                                    Checkout
                                </button>
                                {/* BUTTON END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                ) : (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <img src={EmptyCart} className='w-[300px] md:w-[400px]' alt="" />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link to="/" className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                            Continue Shopping
                        </Link>

                    </div>
                )}
            </Wrapper>
        </div>
    )
}

export default Cart
