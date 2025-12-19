import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Blog from "./Blog";
import NotFound from "./Notfound";




const Router = () => {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white rounded mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product/123">Product</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/invalid">404</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
