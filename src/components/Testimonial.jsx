import React from 'react'
import logo from '../images/testoLogo.png'
const Testimonial = () => {
    // const { data, loading, error } = useFetch(`/reviews`);
    // console.log(data)
    return (
        <div className="testimonial">

            <h2 className="title">testimonial</h2>

            <div className="testimonial-card">

                <img src={logo} alt="alan doe" className="testimonial-banner" width="80" height="80" />

                <p className="testimonial-name">Sanket Rathod</p>

                <p className="testimonial-title">CEO & Founder Vortex</p>

                <img src="./assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26" />

                <p className="testimonial-desc">
                    Kya likho aab :)
                </p>

            </div>

        </div>
    )
}

export default Testimonial
