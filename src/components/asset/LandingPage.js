import React from 'react'
import '../styles/landingpage.css'
// import Movies from './Movies'
import Carousel from './Carousel'
import feature1Img from '../../img/feature-1.jpg'
import feature2Img from '../../img/feature-2.jpg'
import feature3Img from '../../img/feature-3.jpg'
import feature4Img from '../../img/feature-4.jpg'
import feature5Img from '../../img/feature-5.jpg'
import { useSelector } from 'react-redux'
// import gifi from '../img/tvChannelChangingWomen.gif'
const LandingPage = () => {

  const theme = useSelector(state => state.ui.dark)

  return (
    <div>
      <Carousel />

      <div className="home-container" id={theme ? "" : "home-container-light"} >
        <div className="box">
          <div className="description-box" id='box-1'>
            <div className="content content-alignment">
              <h1>Watch Action Movies</h1>
              <p>Stream movies on your big screen for a cinematic experience at home. 
              </p>
            </div>

            <div className="feature-img-container">
              <img src={feature1Img} alt="Featured-images" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="description-box" id='box-2'>

            <div className="feature-img-container ">
              <img src={feature2Img} alt="Featured-images" />
            </div>

            <div className="content content-alignment">
              <h1>Adventure</h1>
              <p>Embark on a heart-pounding journey to exotic locales, where heroes face daring challenges, uncover hidden treasures, and conquer the unknown.</p>
            </div>

          </div>
        </div>

        <div className="box">
          <div className="description-box" id='box-3'>

            <div className="content img-alignment">
              <h1>Horror Movies</h1>
              <p>Horror movies are a chilling rollercoaster of suspense and terror, delivering spine-tingling scares and unforgettable nightmares.</p>
            </div>

            <div className="feature-img-container">
              <img src={feature3Img} alt="Featured-images" />
            </div>

          </div>
        </div>

        <div className="box">
          <div className="description-box" id='box-4'>
            <div className="feature-img-container img-alignment">
              <img src={feature4Img} alt="Featured-images " />
            </div>

            <div className="content content-alignment">
              <h1>Thriller</h1>
              <p>Thriller movies are pulse-pounding experiences, combining suspense and unexpected twists to keep you on the edge of your seat as you unravel gripping mysteries and confront high-stakes situations. Get ready for a nail-biting ride of intrigue and tension.</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="description-box" id='box-5'>
            <div className="content">
              <h1>Kids</h1>
              <p>Kids' movies are a magical journey into vibrant worlds filled with colorful characters, offering heartwarming adventures and valuable life lessons that captivate young audiences and delight the whole family. Get ready for laughter, learning, and imaginative storytelling.</p>
            </div>

            <div className="feature-img-container">
              <img src={feature5Img} alt="Featured-images" />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage