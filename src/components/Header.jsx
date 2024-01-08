import { NavLink, useNavigate } from "react-router-dom";
import { removeCookie } from "../client/cookies/removeCookie";
import "../assets/css/header.css";
import { useContext } from "react";
import { Cart } from "./Context";
export const Header = () => {
    const navigate = useNavigate();

    const { setCart, setData } = useContext(Cart);

    const logout = () => {
        removeCookie("endUser");
        navigate("/");
        setCart([]);
        setData([]);
    };

    return (
        <>
            {window.location.pathname === "/" ||
            window.location.pathname === "/app/home" ||
            window.location.pathname === "/app/cart" ? (
                <div className="headWrapper">
                    <div className="headerContent">
                        <p>MARKETSPACE</p>
                    </div>
                    <div className="navigations">
                        {!(window.location.pathname === "/") ? (
                            <>
                                <div className="navBtns">
                                    <NavLink to="/app/home">Home</NavLink>
                                    <NavLink to="/app/cart">Cart</NavLink>
                                </div>
                                <button
                                    className="logoutBtn"
                                    onClick={() => logout()}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
