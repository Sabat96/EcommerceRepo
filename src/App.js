import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from 'react-bootstrap'
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import TheCarousel from "./components/TheCarousel";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Register from "./pages/Register";
import CrossBody from "./pages/Crossbody";
import ProductDetail from "./pages/ProductDetail";
import TheFooter from "./components/TheFooter";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      <TheNavbar />

      {/* Setting up our routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />

        <Route path="/crossbody" element={<CrossBody />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        {/* if the URL is /login  , render the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

          {/* <TheCarousel />
          <ProductCard /> */}
          <TheFooter />
       
    </div>
  );
}

export default App;
