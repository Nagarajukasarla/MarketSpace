import { useContext, useEffect, useState } from "react";
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../client/cookies/getCookie";
import { setCookie } from "../client/cookies/setCookie";
import authenticate from "../api/authenticate";
import { Cart } from "./Context";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { loadData } = useContext(Cart);

    useEffect(() => {
        if (getCookie("endUser") !== undefined && getCookie("endUser") !== "") {
            navigate("/app/home");
            loadData();
        } else {
            console.log("Unauthorized !");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async () => {
        const response = await authenticate(username, password);
        if (response) {
            setCookie('endUser', response.token);
            navigate("/app/home");
        }
        else {
            console.log("Invalid Details");
        }
    };

    return (
        <>
            <main className="mainContent">
                <p>Login</p>
                <div className="fields">
                    <input
                        type="text"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="submitBtn" onClick={() => login()}>Enter</button>
            </main>
        </>
    );
};
