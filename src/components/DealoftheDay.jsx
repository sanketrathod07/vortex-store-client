import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const truncateWords = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

const DealoftheDay = () => {
  const { data, loading, error } = useFetch(`/products?populate=*&filters[deal]=true&`);
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemainingUntil(19, 0, 0)); // 7:00 PM
  const dispatch = useDispatch();
  const quantity = 1;
  const availableSlots = 60; // Set the total available slots

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemainingUntil(19, 0, 0)); // Update time remaining every second
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  function getTimeRemainingUntil(hour, minute, second) {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(hour, minute, second, 0);

    if (targetTime < now) {
      targetTime.setDate(targetTime.getDate() + 1); // If target time has already passed, set it for the next day
    }

    const timeDiff = targetTime - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Calculate already sold and available slots based on the current minute
  const currentMinute = new Date().getMinutes();
  const alreadySold = Math.min(currentMinute, availableSlots);

  return (
    <>
      <div className="product-featured">
        <h2 className="title">Deal of the Day</h2>
        <div className="showcase-wrapper has-scrollbar">
          {data?.map((item) => (
            <div className="showcase-container" key={item.id}>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url}
                    alt="Rose Gold diamonds Earring"
                    className="showcase-img"
                  />
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
                  <p className="showcase-desc">{truncateWords(item?.attributes?.desc, 37)}</p>
                  <div className="price-box">
                    <p className="price">${item?.attributes?.price + 50}</p>
                    <del>${item?.attributes?.price}</del>
                  </div>
                  <button
                    className="add-cart-btn"
                    onClick={() => {
                      data &&
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.attributes.title,
                            desc: item.attributes.desc,
                            price: item.attributes.price,
                            img: item.attributes.img.data.attributes.url,
                            quantity: quantity,
                          })
                        );
                    }}
                  >
                    add to cart
                  </button>
                  <div className="showcase-status">
                    <div className="wrapper">
                      <p>
                        already sold: <b>{alreadySold}</b>
                      </p>
                      <p>
                        available: <b>60</b>
                      </p>
                    </div>
                    <div className="showcase-status-bar"></div>
                  </div>
                  <div className="countdown-box">
                    <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                    <div className="countdown">
                      <div className="countdown-content">
                        <p className="display-number">{timeRemaining.days}</p>
                        <p className="display-text">Days</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">{timeRemaining.hours}</p>
                        <p className="display-text">Hours</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">{timeRemaining.minutes}</p>
                        <p className="display-text">Min</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">{timeRemaining.seconds < 10 ? `0${timeRemaining.seconds}` : timeRemaining.seconds}</p>
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
  );
};

export default DealoftheDay;
