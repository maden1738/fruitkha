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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="pages" element={<Pages />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
