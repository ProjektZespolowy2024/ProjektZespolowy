import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services.jsx";
import Banner from "../components/Banner/Banner.jsx";
import AppStore from "../components/AppStore/AppStore.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "../components/OrderPopup/OrderPopup.jsx";
import Books from "../components/BooksSlider/Books.jsx";
import loadingImg from "../assets/loader.gif";

const Homepage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {loading ? (
        <div className="loader">
          <img src={loadingImg} alt="Loading" />
        </div>
      ) : (
        <div>
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Hero handleOrderPopup={handleOrderPopup} />
          <Services handleOrderPopup={handleOrderPopup} />
          <Banner />
          {/* <CoverBanner /> */}
          <AppStore />
          {/* <PdfReader /> */}
          <Books />
          <Testimonial />
          <Footer />
          <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      )}
    </div>
  );
};

export default Homepage;
