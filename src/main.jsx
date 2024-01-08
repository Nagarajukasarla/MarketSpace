import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CartPage } from "./components/CartPage.jsx";
import { Header } from "./components/Header.jsx";
import Context from "./components/Context.jsx";
import { NotFound } from "./components/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Context>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/app/*" element={<App />}>
                        <Route path="home" element={<Home />} />
                        <Route path="cart" element={<CartPage />} />
                    </Route>
                    <Route path="*" exact element={<NotFound />}></Route>
                </Routes>
            </Context>
        </BrowserRouter>
    </React.StrictMode>
);
