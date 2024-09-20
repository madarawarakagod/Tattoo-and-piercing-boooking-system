import React,{useContext,useEffect} from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Register from "./pages/Register";
import AboutUs from "./Pages/AboutUs";
import Report from "./Pages/Report";
import Review from "./pages/Review";
import GiftCertificate from "./pages/GiftCertificate";
import Login from "./Pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavBar';
import axios from "axios";
import {Context} from "./main";
import Footer from './components/Footer';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
  
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/giftCertificate" element={<GiftCertificate />} />
          <Route path="/review" element={<Review />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
       
      </Routes>
      <Footer/>
      <ToastContainer position="top-center"/>
    </Router>
    </>
  );
};

export default App;