import { PropTypes } from "prop-types";
import "../assets/css/productCart.css";
import { useContext } from "react";
import { Cart } from "./Context";

export const ProductCart = ({ product }) => {
    const { cart, setCart } = useContext(Cart);

    const addToCart = () => {
        setCart([...cart, product]);
    };

    const removeFromCart = () => {
        setCart(cart.filter((p) => p.id !== product.id));
    };

    const setIconOfProduct = (title) => {
        if (title) {
            const matchResult = title.match(/[A-Z,a-z]/);
            if (matchResult) {
                const icon = matchResult[0];
                return icon === icon.toUpperCase() ? icon : icon.toUpperCase();
            }
        }
        return "P";
    };

    return (
        <>
            <div className="card">
                <div className="icon">
                    <p>{setIconOfProduct(product?.title)}</p>
                </div>
                <div className="productName">
                    <p>{product?.title ?? ""}</p>
                </div>
                <p className="price">{product?.price} INR</p>

                {cart.includes(product) ? (
                    <button
                        className="removeBtn cartBtn"
                        onClick={() => removeFromCart()}
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        className="addBtn cartBtn"
                        onClick={() => addToCart()}
                    >
                        ADD
                    </button>
                )}
            </div>
        </>
    );
};

export default ProductCart;

ProductCart.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
    }),
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            price: PropTypes.number,
            quantity: PropTypes.number,
        })
    ),
};
