import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At SkinCraft Studio, we believe that your body is a canvas waiting to tell a story. Whether you're looking for a bold new tattoo or a stylish piercing, our team of skilled artists is here to bring your vision to life. With a passion for creativity and a commitment to safety, we offer personalized services in a welcoming environment, ensuring each experience is as unique as you are..
          </p>
        </div>
        <div className="banner">
          <img src="Home.jpg" alt="hero" className="animated-image" />
          <span>
            <img src=".jpg" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
