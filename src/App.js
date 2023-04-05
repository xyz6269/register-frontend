import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./App.css";
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import Cart from "./Cart";
import Order from "./Order";
import Admin from "./AdminPage";
import adminprofile from "./AdminProfile";
import bookwizard from "./BookWizard";
import userManagement from "./UserManagement";
import orderManagement from "./OrderManagement";
import validOrders from "./"
import ordertracking from "./OrderTracking";
import OrderDetails from "./OrderDetails";

const App = () => {
  return (
    <div className="APP">
      <h1></h1>

      <BrowserRouter>
        
        <main className="form-signin">
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/profile" Component={Profile} />
            <Route path="/cart" Component={Cart} />
            <Route path="/orders" Component={Order} />
            <Route path="/admin" Component={Admin} />
            <Route path="/adminprofile" Component={adminprofile} />
            <Route path="/bookwizard" Component={bookwizard} />
            <Route path="/users" Component={userManagement} />
            <Route path="/ordersmanagement" Component={orderManagement} />
            <Route path="/ordertracking" Component={ordertracking} />
            <Route path="/details/:id" Component={OrderDetails} />
          </Routes>
          <div>
            
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
