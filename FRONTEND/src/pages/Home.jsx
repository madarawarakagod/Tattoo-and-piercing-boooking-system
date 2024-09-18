import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
    <Hero
      title={
        "welcome to zeecare "
      }
      imageurl={"/3.jpg"}
      />
        
      <Biography imageUrl={"/5.jpg"}/>
      <Departments />
      <MessageForm />
 </>
  );
};

export default Home;
