import React from 'react'
import '../styles/carousel.css'
import carouselImage from '../../img/bg-3.jpg'

const Carousel = () => {


    return (
        <>
            <div className="carousel">
                <div className="carousel-img">
                    <img src={carouselImage} alt="Carousel Imagess" />
                </div>

                <div className="carousel-content">
                    <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
                    <p>Join today. Cancel anytime.</p>
                    <em>Ready to watch? Enter your email to create or restart your membership.</em>

                    <form>
                        <input type="email" placeholder='Email Address...' />
                        <input type="submit" value="GET STARTED" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Carousel