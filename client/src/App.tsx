import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SingleNews from "./pages/SingleNews";
import Login from "./pages/Login";
import React from "react";
import axios from "axios";
import { API_URL } from "./constants/domain";

function App() {
  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios.get(`${API_URL}/user/:${token}`);
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="pages" element={<Pages />}></Route>
        <Route path="news">
          <Route path="" element={<News />} />
          <Route path=":slug" element={<SingleNews />} />
        </Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
