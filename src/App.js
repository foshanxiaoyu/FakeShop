import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import store from "./redux/store";
import CakeContainer from "./containers/HooksCakeContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CakeContainer />
        <Router>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            {/* <Route path="/" exact component={ProductListing} /> */}
            {/* <Route path="/product/:productId" component={ProductDetails} /> */}
            <Route path="/products/:productId" element={<ProductDetails />} />
            {/* <Route>404 Not Found!</Route> */}
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
