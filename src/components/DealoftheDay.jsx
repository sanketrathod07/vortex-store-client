import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const DealoftheDay = () => {

    const { data, loading, error } = useFetch(`/products?populate=*&filters[deal]=true&`);
    const [days, setDays] = useState(360);
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(0);
    
    
    const dispatch = useDispatch();
    
    const quantity = 1;
    
    useEffect(() => {
        const interval = setInterval(() => {
            // Update seconds
            setSeconds(prevSeconds => (prevSeconds === 0 ? 59 : prevSeconds - 1));
            
            // Update minutes and handle cascading effect
            if (seconds === 0) {
                setMinutes(prevMinutes => (prevMinutes === 0 ? 59 : prevMinutes - 1));
            }
            
            // Update hours and handle cascading effect
            if (seconds === 0 && minutes === 0) {
                setHours(prevHours => (prevHours === 0 ? 24 : prevHours - 1));
            }
            
            // Update days and handle cascading effect
            if (seconds === 0 && minutes === 0 && hours === 0) {
                setDays(prevDays => (prevDays === 0 ? 0 : prevDays - 1));
            }
        }, 1000);
        
        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, days]);
    // console.log(data)
    return (
        <>

            <div className="product-featured" >

                <h2 className="title">Deal of the Day</h2>

                <div className="showcase-wrapper has-scrollbar" >
                    {data?.map(item => (

                        <div className="showcase-container" key={item.id}>

                            <div className="showcase">
                                <div className="showcase-banner">
                                    <img src={item?.attributes?.img?.data?.attributes?.url} alt="Rose Gold diamonds Earring" className="showcase-img" />
                                </div>

                                <div className="showcase-content">

                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <Link to={`/product/${item.id}`}>
                                        <h3 className="showcase-title">{item?.attributes?.title}</h3>
                                    </Link>

                                    <p className="showcase-desc">
                                        {item?.attributes?.desc}
                                    </p>

                                    <div className="price-box">
                                        <p className="price">${item?.attributes?.price + 50}</p>

                                        <del>${item?.attributes?.price}</del>
                                    </div>

                                    <button className="add-cart-btn" onClick={() => {
                                        data &&
                                            dispatch(addToCart({
                                                id: item.id,
                                                title: item.attributes.title,
                                                desc: item.attributes.desc,
                                                price: item.attributes.price,
                                                img: item.attributes.img.data.attributes.url,
                                                quantity: quantity,
                                            }))
                                    }}>add to cart</button>

                                    <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>
                                                already sold: <b>20</b>
                                            </p>

                                            <p>
                                                available: <b>40</b>
                                            </p>
                                        </div>

                                        <div className="showcase-status-bar"></div>
                                    </div>

                                    <div className="countdown-box">

                                        <p className="countdown-desc">
                                            Hurry Up! Offer ends in:
                                        </p>

                                        <div className="countdown">
                                            <div className="countdown-content">
                                                <p className="display-number">{days}</p>
                                                <p className="display-text">Days</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{hours}</p>
                                                <p className="display-text">Hours</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{minutes}</p>
                                                <p className="display-text">Min</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{seconds < 10 ? `0${seconds}` : seconds}</p>
                                                <p className="display-text">Sec</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>

            </div>
        </>
    )
}

export default DealoftheDay
