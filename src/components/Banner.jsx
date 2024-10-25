import React from 'react'
import NewsLetter from './NewsLetter'
import Notification from './Notification'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DealoftheDay from './DealoftheDay';
import Testimonial from './Testimonial';
import Banner_1 from '../images/banner_me.jpg'

const Banner = () => {

  const { data } = useFetch(`/products?populate=*&`);
  console.log(data)
  const dispatch = useDispatch();
  const quantity = 1;

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      title: item.attributes.title,
      desc: item.attributes.desc,
      price: item.attributes.price,
      img: item.attributes.img.data.attributes.url,
      quantity: quantity,
    }));
  };

  const showToastMessage = () => {
    toast.success("Added to Your Cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      style: {
        bottom: window.innerWidth <= 1024 ? '60px' : '0px'
      }
    });
  };


  return (
    <main>
      <ToastContainer />
      <NewsLetter />
      <Notification />

      {/* <!--
      - BANNER
    --> */}

      <div className="banner">

        <div className="container">

          <div className="slider-container has-scrollbar">

            <div className="slider-item">

              <img src={Banner_1} alt="women's latest fashion sale" className="banner-img" />

              {/* <div className="banner-content"> *************************** IF You Want to Use UNCOMMET OK SANKET ***************************

                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Women's latest fashion sale</h2>

                <p className="banner-text">
                  starting at &dollar; <b>20</b>.00
                </p>

                <a  className="banner-btn">Shop now</a>

              </div> */}

            </div>

            <div className="slider-item">

              <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" className="banner-img" />

              <div className="banner-content">

                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at &dollar; <b>15</b>.00
                </p>

                <a className="banner-btn">Shop now</a>

              </div>

            </div>

            <div className="slider-item">

              <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img" />

              <div className="banner-content">

                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at &dollar; <b>29</b>.99
                </p>

                <a className="banner-btn">Shop now</a>

              </div>

            </div>

          </div>

        </div>

      </div>





      {/* <!--
      - CATEGORY
    --> */}

      <div className="category">

        <div className="container">

          <div className="category-item-container has-scrollbar">

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/dress.svg" alt="dress & frock" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Dress & frock</h3>

                  <p className="category-item-amount">(53)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/coat.svg" alt="winter wear" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Winter wear</h3>

                  <p className="category-item-amount">(58)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/glasses.svg" alt="glasses & lens" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Glasses & lens</h3>

                  <p className="category-item-amount">(68)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/shorts.svg" alt="shorts & jeans" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Shorts & jeans</h3>

                  <p className="category-item-amount">(84)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/tee.svg" alt="t-shirts" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">T-shirts</h3>

                  <p className="category-item-amount">(35)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/jacket.svg" alt="jacket" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Jacket</h3>

                  <p className="category-item-amount">(16)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/watch.svg" alt="watch" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Watch</h3>

                  <p className="category-item-amount">(27)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

            <div className="category-item">

              <div className="category-img-box">
                <img src="./assets/images/icons/hat.svg" alt="hat & caps" width="30" />
              </div>

              <div className="category-content-box">

                <div className="category-content-flex">
                  <h3 className="category-item-title">Hat & caps</h3>

                  <p className="category-item-amount">(39)</p>
                </div>

                <a className="category-btn">Show all</a>

              </div>

            </div>

          </div>

        </div>

      </div>





      {/* <!--
      - PRODUCT
    --> */}

      <div className="product-container">

        <div className="container">

          {       /* 
        <!--
          - SIDEBAR
        --> */}

          <div className="sidebar  has-scrollbar" data-mobile-menu>

            <div className="sidebar-category">

              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>

                <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <ul className="sidebar-menu-category-list">

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                        className="menu-title-img" />

                      <p className="menu-title">Clothes</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Shirt</p>
                        <data value="300" className="stock" title="Available Stock">300</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">shorts & jeans</p>
                        <data value="60" className="stock" title="Available Stock">60</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">dress & frock</p>
                        <data value="87" className="stock" title="Available Stock">87</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/shoes.svg" alt="footwear" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Footwear</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Sports</p>
                        <data value="45" className="stock" title="Available Stock">45</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Formal</p>
                        <data value="75" className="stock" title="Available Stock">75</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Casual</p>
                        <data value="35" className="stock" title="Available Stock">35</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Safety Shoes</p>
                        <data value="26" className="stock" title="Available Stock">26</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/jewelry.svg" alt="clothes" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Jewelry</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Earrings</p>
                        <data value="46" className="stock" title="Available Stock">46</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Couple Rings</p>
                        <data value="73" className="stock" title="Available Stock">73</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Necklace</p>
                        <data value="61" className="stock" title="Available Stock">61</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/perfume.svg" alt="perfume" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Perfume</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Clothes Perfume</p>
                        <data value="12" className="stock" title="Available Stock">12 pcs</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Deodorant</p>
                        <data value="60" className="stock" title="Available Stock">60 pcs</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value="50" className="stock" title="Available Stock">50 pcs</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">dress & frock</p>
                        <data value="87" className="stock" title="Available Stock">87 pcs</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Cosmetics</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Shampoo</p>
                        <data value="68" className="stock" title="Available Stock">68</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Sunscreen</p>
                        <data value="46" className="stock" title="Available Stock">46</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Body Wash</p>
                        <data value="79" className="stock" title="Available Stock">79</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Makeup Kit</p>
                        <data value="23" className="stock" title="Available Stock">23</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Glasses</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Sunglasses</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Lenses</p>
                        <data value="48" className="stock" title="Available Stock">48</data>
                      </a>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20" />

                      <p className="menu-title">Bags</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Shopping Bag</p>
                        <data value="62" className="stock" title="Available Stock">62</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Gym Backpack</p>
                        <data value="35" className="stock" title="Available Stock">35</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Purse</p>
                        <data value="80" className="stock" title="Available Stock">80</data>
                      </a>
                    </li>

                    <li className="sidebar-submenu-category">
                      <a className="sidebar-submenu-title">
                        <p className="product-name">Wallet</p>
                        <data value="75" className="stock" title="Available Stock">75</data>
                      </a>
                    </li>

                  </ul>

                </li>

              </ul>

            </div>

            <div className="product-showcase">

              <h3 className="showcase-heading">best sellers</h3>

              <div className="showcase-wrapper">

                <div className="showcase-container">

                  <div className="showcase">

                    <a className="showcase-img-box">
                      <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                        className="showcase-img" />
                    </a>

                    <div className="showcase-content">

                      <a>
                        <h4 className="showcase-title">baby fabric shoes</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$4.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <a className="showcase-img-box">
                      <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img"
                        width="75" height="75" />
                    </a>

                    <div className="showcase-content">

                      <a>
                        <h4 className="showcase-title">men's hoodies t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$17.00</del>
                        <p className="price">$7.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <a className="showcase-img-box">
                      <img src="./assets/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width="75"
                        height="75" />
                    </a>

                    <div className="showcase-content">

                      <a>
                        <h4 className="showcase-title">girls t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$3.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <a className="showcase-img-box">
                      <img src="./assets/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width="75"
                        height="75" />
                    </a>

                    <div className="showcase-content">

                      <a>
                        <h4 className="showcase-title">woolen hat for men</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$15.00</del>
                        <p className="price">$12.00</p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>



          <div className="product-box">

            {/* <!--
            - PRODUCT MINIMAL
          --> */}

            <div className="product-minimal">

              <div className="product-showcase">

                <h2 className="title">New Arrivals</h2>

                <div className="showcase-wrapper has-scrollbar">

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/clothes-1.jpg" alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                        </a>

                        <a className="showcase-category">Clothes</a>

                        <div className="price-box">
                          <p className="price">$45.00</p>
                          <del>$12.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/clothes-2.jpg" alt="girls pink embro design top" className="showcase-img" width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                        </a>

                        <a className="showcase-category">Clothes</a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$9.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/clothes-3.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Black Floral Wrap Midi Skirt</h4>
                        </a>

                        <a className="showcase-category">Clothes</a>

                        <div className="price-box">
                          <p className="price">$76.00</p>
                          <del>$25.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                        </a>

                        <a className="showcase-category">Mens Fashion</a>

                        <div className="price-box">
                          <p className="price">$68.00</p>
                          <del>$31.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                        </a>

                        <a className="showcase-category">Winter wear</a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$11.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                        </a>

                        <a className="showcase-category">Winter wear</a>

                        <div className="price-box">
                          <p className="price">$32.00</p>
                          <del>$20.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                        </a>

                        <a className="showcase-category">Jackets</a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$25.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                        </a>

                        <a className="showcase-category">Shorts</a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$10.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="product-showcase">

                <h2 className="title">Trending</h2>

                <div className="showcase-wrapper  has-scrollbar">

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/sports-1.jpg" alt="running & trekking shoes - white" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                        </a>

                        <a className="showcase-category">Sports</a>

                        <div className="price-box">
                          <p className="price">$49.00</p>
                          <del>$15.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/sports-2.jpg" alt="trekking & running shoes - black" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Trekking & Running Shoes - black</h4>
                        </a>

                        <a className="showcase-category">Sports</a>

                        <div className="price-box">
                          <p className="price">$78.00</p>
                          <del>$36.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/party-wear-1.jpg" alt="womens party wear shoes" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                        </a>

                        <a className="showcase-category">Party wear</a>

                        <div className="price-box">
                          <p className="price">$94.00</p>
                          <del>$42.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/sports-3.jpg" alt="sports claw women's shoes" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                        </a>

                        <a className="showcase-category">Sports</a>

                        <div className="price-box">
                          <p className="price">$54.00</p>
                          <del>$65.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                        </a>

                        <a className="showcase-category">Sports</a>

                        <div className="price-box">
                          <p className="price">$52.00</p>
                          <del>$55.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Boot With Suede Detail</h4>
                        </a>

                        <a className="showcase-category">boots</a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                        </a>

                        <a className="showcase-category">formal</a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                        </a>

                        <a className="showcase-category">Casual</a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$55.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="product-showcase">

                <h2 className="title">Top Rated</h2>

                <div className="showcase-wrapper  has-scrollbar">

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                        </a>

                        <a className="showcase-category">Watches</a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$34.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jewellery-3.jpg" alt="silver deer heart necklace" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                        </a>

                        <a className="showcase-category">Jewellery</a>

                        <div className="price-box">
                          <p className="price">$84.00</p>
                          <del>$30.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/perfume.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                        </a>

                        <a className="showcase-category">Perfume</a>

                        <div className="price-box">
                          <p className="price">$42.00</p>
                          <del>$10.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/belt.jpg" alt="men's leather reversible belt" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                        </a>

                        <a className="showcase-category">Belt</a>

                        <div className="price-box">
                          <p className="price">$24.00</p>
                          <del>$10.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="showcase-container">

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classNameic ring" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">platinum Zircon classNameic Ring</h4>
                        </a>

                        <a className="showcase-category">jewellery</a>

                        <div className="price-box">
                          <p className="price">$62.00</p>
                          <del>$65.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Smart watche Vital Plus</h4>
                        </a>

                        <a className="showcase-category">Watches</a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">shampoo conditioner packs</h4>
                        </a>

                        <a className="showcase-category">cosmetics</a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a className="showcase-img-box">
                        <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                          width="70" />
                      </a>

                      <div className="showcase-content">

                        <a>
                          <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                        </a>

                        <a className="showcase-category">jewellery</a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* <!--
            - PRODUCT FEATURED
          --> */}

            <DealoftheDay />



            {/* <!--
            - PRODUCT GRID
          --> */}

            <div className="product-main">

              <h2 className="title">New Products</h2>


              <div className="product-grid">

                {data?.map(item => (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt={item?.attributes.title} width="300" className="product-img default" />
                        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url} alt={item?.attributes.title} width="300" className="product-img hover" />
                        <p className="showcase-badge">{/*item.badge*/}</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                          </button>
                          <button className="btn-action" onClick={() => { handleAddToCart(item); showToastMessage(); }}>
                            <ion-icon name="bag-add-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <Link to={""} className="showcase-category">{item?.attributes.category}</Link>
                        <Link to={""}>
                          <h3 className="showcase-title">{item?.attributes.title}</h3>
                        </Link>
                        <div className="showcase-rating">
                          {Array.from({ length: item?.attributes.star }, (_, index) => (
                            <ion-icon key={index} name="star"></ion-icon>
                          ))}
                          {Array.from({ length: 5 - item?.attributes.star }, (_, index) => (
                            <ion-icon key={index} name="star-outline"></ion-icon>
                          ))}
                        </div>
                        <div className="price-box">
                          <p className="price">${item?.attributes.price}</p>
                          <del>${item.oldPrice || item?.attributes.price + 20}</del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

              </div>


            </div>

          </div>

        </div>

      </div>





      {/* <!--
      - TESTIMONIALS, CTA & SERVICE
    --> */}

      <div>

        <div className="container">

          <div className="testimonials-box">

            {/* <!--
            - TESTIMONIALS
          --> */}

            <Testimonial />


            {/* 
          <!--
            - CTA
          --> */}

            <div className="cta-container">

              <img src="./assets/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />

              <a className="cta-content">

                <p className="discount">25% Discount</p>

                <h2 className="cta-title">Summer collection</h2>

                <p className="cta-text">Starting @ $10</p>

                <button className="cta-btn">Shop now</button>

              </a>

            </div>



            {/* <!--
            - SERVICE
          --> */}

            <div className="service">

              <h2 className="title">Our Services</h2>

              <div className="service-container">

                <a className="service-item">

                  <div className="service-icon">
                    <ion-icon name="boat-outline"></ion-icon>
                  </div>

                  <div className="service-content">

                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over $100</p>

                  </div>

                </a>

                <a className="service-item">

                  <div className="service-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <div className="service-content">

                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">UK Orders Only</p>

                  </div>

                </a>

                <a className="service-item">

                  <div className="service-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>

                  <div className="service-content">

                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>

                  </div>

                </a>

                <a className="service-item">

                  <div className="service-icon">
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                  </div>

                  <div className="service-content">

                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>

                  </div>

                </a>

                <a className="service-item">

                  <div className="service-icon">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>

                  <div className="service-content">

                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over $100</p>

                  </div>

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>





      {/* <!--
      - BLOG
    --> */}

      <div className="blog">

        <div className="container">

          <div className="blog-container has-scrollbar">

            <div className="blog-card">

              <a>
                <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner" />
              </a>

              <div className="blog-content">

                <a className="blog-category">Fashion</a>

                <a>
                  <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                </a>

                <p className="blog-meta">
                  By <cite>Mr Admin</cite> / <time dateTime="2022-04-06">Apr 06, 2022</time>
                </p>

              </div>

            </div>

            <div className="blog-card">

              <a>
                <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner" width="300" />
              </a>

              <div className="blog-content">

                <a className="blog-category">Clothes</a>

                <h3>
                  <a className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Robin</cite> / <time dateTime="2022-01-18">Jan 18, 2022</time>
                </p>

              </div>

            </div>

            <div className="blog-card">

              <a>
                <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                  className="blog-banner" width="300" />
              </a>

              <div className="blog-content">

                <a className="blog-category">Shoes</a>

                <h3>
                  <a className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Selsa</cite> / <time dateTime="2022-02-10">Feb 10, 2022</time>
                </p>

              </div>

            </div>

            <div className="blog-card">

              <a>
                <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner" width="300" />
              </a>

              <div className="blog-content">

                <a className="blog-category">Electronics</a>

                <h3>
                  <a className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Pawar</cite> / <time dateTime="2022-03-15">Mar 15, 2022</time>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main >
  )
}

export default Banner
