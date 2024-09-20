import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Departments = () => {
  const departmentsArray = [
    {
      name: "Tattoos and Permanent Make-Up",
      imageUrl: "/departments/6.jpg",
    },
    {
      name: "Body Piercing",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Temporary Tattoos",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Tattoo Removal",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Piercing Removal",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Dotwork",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Blackwork:",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Script/Lettering",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "Realism",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Category</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
