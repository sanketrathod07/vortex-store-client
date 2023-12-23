import React, { useState } from 'react';
import Newsletter from '../images/newsletter.png';

const NewsLetter = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal" data-modal>
                    <div className="modal-close-overlay" data-modal-overlay onClick={closeModal}></div>
                    <div className="modal-content">
                        <button className="modal-close-btn" data-modal-close onClick={closeModal}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                        <div className="newsletter-img">
                            <img src={Newsletter} alt="subscribe newsletter" width="400" height="400" />
                        </div>
                        <div className="newsletter">
                            <form action="#">
                                <div className="newsletter-header">
                                    <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                                    <p className="newsletter-desc">
                                        Subscribe the <b>VORTEX</b> to get the latest products and discount updates.
                                    </p>
                                </div>
                                <input type="email" name="email" className="email-field" placeholder="Email Address" required />
                                <button type="submit" className="btn-newsletter">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsLetter;
