import { PropTypes } from "prop-types";
import "../assets/css/productSummary.css";
import { useContext } from "react";
import { Cart } from "./Context";
import { RiDeleteBin7Line } from "react-icons/ri";

export const ProductSummary = ({ product }) => {
    const { cart, setCart } = useContext(Cart);

    return (
        <div className="productSummaryWrapper">
            <div className="productDetails">
                <div className="logo">
                    <p>{product.title[0]}</p>
                </div>
                <div className="name">
                    <p>{product.title}</p>
                </div>
            </div>
            <div className="productOptions">
                <div className="priceWithDeleteBtn">
                    <p>{product?.price} INR</p>
                    <button
                        className="removeBtn"
                        onClick={() =>
                            setCart(
                                cart.filter((item) => item.id !== product.id)
                            )
                        }
                    >
                        <RiDeleteBin7Line size={18}/>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;

ProductSummary.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
    }),
};
