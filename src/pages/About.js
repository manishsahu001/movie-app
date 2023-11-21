import React from 'react'
import './styles/about-blog.css'
import { useSelector } from 'react-redux'

const About = () => {

  const theme = useSelector((state)=> state.ui.dark)

  return (
    <>
      <div className="content-container-ab" id={theme ? "" : "content-container-ab-light"}>
        <div className="ab-container">
        <span className="material-symbols-outlined">high_quality</span>
          <div className="ab-content-descripton">
            <h1>High-Definition Streaming</h1>
            <p>
            ZedFlix boasts an extensive collection of movies, each handpicked to offer you the best in cinematic visuals. Whether it's the rich colors of a period drama, the breathtaking landscapes of an epic adventure, or the crisp details of a cutting-edge sci-fi flick, our platform presents movies in their full, unadulterated splendor. With ZedFlix, you're not just watching movies; you're experiencing them in their true cinematic brilliance.
            </p>
          </div>
        </div>

        <div className="ab-container">
        <span className="material-symbols-outlined">screen_search_desktop</span>
          <div className="ab-content-descripton">
            <h1>Discover Movies</h1>
            <p>At ZedFlix, we believe in the transformative power of movies. They have the ability to transport us to different worlds, ignite our emotions, and inspire us in countless ways. Our "Discover Movies" feature is your gateway to an endless universe of cinematic wonders. Whether you're a seasoned cinephile or just looking for your next movie night pick, ZedFlix is your ultimate destination for film discovery.</p>
          </div>
        </div>

        <div className="ab-container">
        <span className="material-symbols-outlined">hotel_class</span>
          <div className="ab-content-descripton">
            <h1>Favorite Movies</h1>
              <p>Make a list of your favorite movies, and remove from favorite list anytime by just one click, enjoy your favorite movies with ZedFlix, ZedFlix understands that not all movies are created equal. Some leave an indelible mark on our hearts, becoming treasured pieces of cinematic art that we want to revisit time and time again. That's where our "Favorites" feature comes into play, allowing you to curate a personalized movie collection that mirrors your cinematic passions.</p>
          </div>
        </div>

        <div className="ab-container">
        <span className="material-symbols-outlined">live_tv</span>
          <div className="ab-content-descripton">
            <h1>Authenticated</h1>
            <p> At ZedFlix, we believe that your movie-watching journey should be as unique as your taste in films. That's why we've introduced a robust and secure user authentication system that provides you with a personalized, seamless, and secure experience throughout your time on our platform. </p>
          </div>
        </div>
      </div>

    </>

  )
}

export default About