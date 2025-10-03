import React from "react";
import Navbar from "./components/navbar.jsx";
import Products from "./components/products.jsx";
import LoginPage from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";  


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ← add this line */}
      <div className="w-screen h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="font-bold ml-6 text-black pt-7">
                   🛍️ Products Page using MERN Stack
                </h1>
                <p className="mt-5 ml-6 text-black">
                  A simple Products Page built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
The backend connects to MongoDB Atlas and provides REST APIs, while the frontend displays products in a clean and responsive UI.
                </p>
                <Products />
                
              </>
            }
          />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
