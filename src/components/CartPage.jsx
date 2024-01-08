import { useContext, useEffect } from "react";
import "../assets/css/cartPage.css";
import { ProductSummary } from "./ProductSummary";
import { getCookie } from "../client/cookies/getCookie";
import { Cart } from "./Context";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
    const { cart } = useContext(Cart);

    const navigate = useNavigate();

    useEffect(() => {
        if (!getCookie("endUser")) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const totalAmount = cart.reduce(
        (total, item) => total + parseFloat(item?.price),
        0
    );

    return (
        <>
            <div className="cartWrapper">
                <div className="cartHeader">
                    <div className="cartHeadText">
                        <p>Cart</p>
                    </div>
                    <div className="totalAmount">
                        <p>{totalAmount}.00 INR</p>
                    </div>
                </div>

                <div className="cartProducts">
                    {cart.length === 0 ? (
                        <div className="emptyCart">
                            <p>Your cart is empty!</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <ProductSummary key={item.id} product={item} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default CartPage;
