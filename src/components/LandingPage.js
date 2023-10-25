import React from 'react'
import './styles/landingpage.css'
// import Movies from './Movies'
import Carousel from './Carousel'
import feature1Img from '../img/feature-1.jpg'
import feature2Img from '../img/feature-2.jpg'
import feature3Img from '../img/feature-3.jpg'
import feature4Img from '../img/feature-4.jpg'
import feature5Img from '../img/feature-5.jpg'
const LandingPage = () => {
  return (
    <div>
      <Carousel />
      {/* <Movies />  */}

      <div className="home-container">
        <div className="box">
          <div className="description-box" id='box-1'>
            <div className="content">
              <h1>Enjoy Action Movies.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa debitis quibusdam blanditiis dolorum. Laborum ipsam velit officia quos cumque?</p>
            </div>

            <div className="feature-img-container">
              <img src={feature1Img} alt="Featured-images" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="description-box" id='box-2'>

            <div className="feature-img-container">
              <img src={feature2Img} alt="Featured-images" />
            </div>

            <div className="content">
              <h1>Night Show</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa debitis quibusdam blanditiis dolorum. Laborum ipsam velit officia quos cumque?</p>
            </div>

          </div>
        </div>
        <div className="box">
          <div className="description-box" id='box-3'>

            <div className="content">
              <h1>Are you alone? </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa debitis quibusdam blanditiis dolorum. Laborum ipsam velit officia quos cumque?</p>
            </div>

            <div className="feature-img-container">
              <img src={feature3Img} alt="Featured-images" />
            </div>

          </div>
        </div>
        <div className="box">
          <div className="description-box" id='box-4'>
            <div className="feature-img-container">
              <img src={feature4Img} alt="Featured-images" />
            </div>

            <div className="content">
              <h1>Popcorn with ZedFlix</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa debitis quibusdam blanditiis dolorum. Laborum ipsam velit officia quos cumque?</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="description-box" id='box-5'>
            <div className="feature-img-container">
              <img src={feature5Img} alt="Featured-images" />
            </div>

            <div className="content">
              <h1>Enjoy Action Movies.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa debitis quibusdam blanditiis dolorum. Laborum ipsam velit officia quos cumque?</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage