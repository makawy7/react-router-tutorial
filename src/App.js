import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductLayout from "./pages/ProductLayout";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Guest from "./pages/Guest";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route
            path="login"
            element={
              <Guest user={user}>
                <Login setUser={setUser} />
              </Guest>
            }
          />
          <Route
            path="dashboard"
            element={
              <Auth user={user}>
                <Dashboard user={user} />
              </Auth>
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
