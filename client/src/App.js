import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:product_id" element={<ProductDetails />} />
            <Route path="/profile" element={<ProtectedRoute />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
