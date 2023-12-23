import React from 'react'
import { useState, useEffect } from 'react';
import Logo from '../logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';



const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState({})

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    const products = useSelector(state => state.cart.products);
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

    const SignUpUsingGoogle = () => {

        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider).then((result) => {
            const { displayName, email, photoURL } = result.user;
            setUserData({ displayName, email, photoURL })
            console.log(result.user);
            setIsLoggedIn(true)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log({ error });
        });
        console.log("SignUpUsingGoogle");
    }

    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserData({})
            setIsLoggedIn(false)
        }).catch((error) => {
            // An error happened.
            console.log({ error });
        });
    }


    return (
        <div>
            {/* <!--- HEADER--> */}

            <header>

                <div className='NavbarMainContainer'>
                    <div className="header-top">

                        <div className="container">

                            <ul className="header-social-container">

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                            <div className="header-alert-news">
                                <p>
                                    <b>Free Shipping</b>
                                    This Week Order Over - $55
                                </p>
                            </div>

                            <div className="header-top-actions">

                                <select name="currency">

                                    <option value="inr">INR ₹</option>
                                    <option value="usd">USD $</option>


                                </select>

                                <select name="language">

                                    <option value="en-US">English</option>
                                    <option value="es-ES">Espa&ntilde;ol</option>
                                    <option value="fr">Fran&ccedil;ais</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    <div className="header-main">

                        <div className="container">
                            <Link to="/" className="header-logo">
                                <img src={Logo} alt="Anon's logo" width="120" height="36" />
                            </Link>

                            <div className="header-search-container">

                                <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

                                <button className="search-btn">
                                    <ion-icon name="search-outline"></ion-icon>
                                </button>

                            </div>

                            <div className="header-user-actions">

                                <button className="action-btn">
                                    <ion-icon name="person-outline"></ion-icon>
                                </button>

                                {isLoggedIn ? (
                                    <button className="action-btn" onClick={Logout}>
                                        <img className='userPhoto' src={userData.photoURL} alt="User" />
                                    </button>
                                ) : (
                                    <button className="action-btn" onClick={SignUpUsingGoogle}>
                                        <ion-icon name="person-circle-sharp"></ion-icon>
                                    </button>
                                )}


                                <Link to="/cart">
                                    <button className="action-btn">
                                        <ion-icon name="bag-check-outline"></ion-icon>
                                        <span className="count">{totalQuantity}</span>
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>

                <nav className="desktop-navigation-menu">

                    <div className="container">

                        <ul className="desktop-menu-category-list">

                            <li className="menu-category">
                                <Link to="/" className="menu-title">Home</Link>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Categories</a>

                                <div className="dropdown-panel">

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <a href="#">Electronics</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Desktop</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Laptop</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Camera</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Tablet</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Headphone</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">
                                                <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                                                    height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <a href="#">Men's</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Formal</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Casual</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Sports</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Jacket</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Sunglasses</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">
                                                <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <a href="#">Women's</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Formal</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Casual</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Perfume</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Cosmetics</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Bags</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">
                                                <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <a href="#">Electronics</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Smart Watch</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Smart TV</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Keyboard</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Mouse</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">Microphone</a>
                                        </li>

                                        <li className="panel-list-item">
                                            <a href="#">
                                                <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Men's</a>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <a href="#">Shirt</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Shorts & Jeans</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Safety Shoes</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Wallet</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Women's</a>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <a href="#">Dress & Frock</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Earrings</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Necklace</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Makeup Kit</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Jewelry</a>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <a href="#">Earrings</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Couple Rings</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Necklace</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Bracelets</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Perfume</a>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <a href="#">Clothes Perfume</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Deodorant</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Flower Fragrance</a>
                                    </li>

                                    <li className="dropdown-item">
                                        <a href="#">Air Freshener</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Blog</a>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Hot Offers</a>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div className="mobile-bottom-navigation">

                    <button className="action-btn" onClick={toggleMobileMenu} >
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    <Link to="/cart">
                        <button className="action-btn">
                            <ion-icon name="bag-check-outline"></ion-icon>

                            <span className="count">{totalQuantity}</span>
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="action-btn">
                            <ion-icon name="home-outline"></ion-icon>
                        </button>
                    </Link>

                    {isLoggedIn ? (
                        <button className="action-btn" onClick={Logout}>
                            <ion-icon name="person-circle-sharp"></ion-icon>
                        </button>
                    ) : (
                        <button className="action-btn" onClick={SignUpUsingGoogle}>
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </button>
                    )}

                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>

                </div>

                <nav className={`mobile-navigation-menu ${isMobileMenuOpen ? 'active' : ''}`} data-mobile-menu>

                    <div className="menu-top">
                        <h2 className="menu-title">Menu</h2>

                        <button className="menu-close-btn" onClick={closeMobileMenu}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul className="mobile-menu-category-list">

                        <li className="menu-category">
                            <a href="#" className="menu-title">Home</a>
                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Men's</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shirt</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Safety Shoes</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Wallet</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Women's</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Dress & Frock</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Makeup Kit</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Jewelry</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Couple Rings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Bracelets</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Perfume</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Clothes Perfume</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Deodorant</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Flower Fragrance</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Air Freshener</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Blog</a>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div className="menu-bottom">

                        <ul className="menu-category-list">

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">English</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">
                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                </button>

                                <ul className="submenu-category-list" data-accordion>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">USD &dollar;</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul className="menu-social-container">

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </header>

        </div>
    )
}

export default Navbar
