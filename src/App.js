import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./App.css";
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="APP">
      <h1></h1>

      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
