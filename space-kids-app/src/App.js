import React from "react";

//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

//impor components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  );
};

export default App;
