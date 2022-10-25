import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
//import from project
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProtectedComponent from "./components/ProtectedComponent";
import DetailMoviePage from "./pages/DetailMoviePage";
import SearchMoviePage from "./pages/SearchMoviePage";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <Header />
              <Box sx={{ background: "#141414" }}>
                <HomePage />
              </Box>
              <Footer />
            </ProtectedComponent>
          }
        />
        <Route
          path="/:movieId"
          element={
            <ProtectedComponent>
              <Header />
              <Box sx={{ background: "#141414" }}>
                <DetailMoviePage />
              </Box>
              <Footer />
            </ProtectedComponent>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedComponent>
              <Header />
              <Box sx={{ background: "#141414" }}>
                <SearchMoviePage />
              </Box>
              <Footer />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
