import logo from "./logo.svg";
import Copy from "./home/Copy";
import ContactUs from "./contact_us/contact_us";
import OurTeam from "./our_team/our_team";
import Register from "./register/register";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import Model_copy from "./model_copy/Model_copy";
import { useState } from "react";
import Loader from "./Loader/Loader";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Checkout from "./checkout/Checkout";
import Product_details from "./product_details/Product_details";
import Home from "./home/Home";
import AboutUs from "./about_us/about_us";
import Careers from "./careers/Careers";
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import './index.css';
// import "./App.css";
import "./bootstrap.css";
import "./cart_details.css";
import './cart.css';
import "./cart1.css";
import "./model.css";
import "./cart_qty.css";
import "./cart_details.css";
import "./from_man.css";
import "./services.css";
import "./steps.css";

import "./vission.css";
import "./video.css";
// import "./rd-navbar.css";
import "./checkout.css";
import "./fonts.css";
import './style.css';
import "./index.css";
import "./assets/css/style.css";

import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff";
import "../src/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2";

function App() {
  // const [loading, setLoading] = useState(false);

  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Switch>
        {/* <Model_copy/> */}
        <GuestRoute path="/" exact>
          <Home />
          {/* <Copy/> */}
        </GuestRoute>

        <GuestRoute path="/about_us" exact>
          <AboutUs />
        </GuestRoute>

        <GuestRoute path="/careers" exact>
          <Careers />
        </GuestRoute>

        <GuestRoute path="/register">
          <Register />
        </GuestRoute>

        <GuestRoute path="/login">
          <Login />
        </GuestRoute>

        <GuestRoute path="/our_team">
          <OurTeam />
        </GuestRoute>

        <GuestRoute path="/contact_us">
          <ContactUs />
        </GuestRoute>

        <GuestRoute path="/model_copy">
          <Model_copy />
        </GuestRoute>

        <GuestRoute path="/cart">
          <Cart/>
        </GuestRoute>

        {/* <GuestRoute path="/navbar">
          <Navbar />
        </GuestRoute> */}

        <ProtectedRoute path="/checkout">
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute path="/product_details">
          <Product_details />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { login } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return login ? (
          <Redirect
            to={{
              pathname: "/Model_copy",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};



const ProtectedRoute = ({ children, ...rest }) => {
  const { login } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !login ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (

          children
        );
      }}
    ></Route>
  );
};

export default App;