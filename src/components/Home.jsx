import { useContext, useEffect, useState } from "react";
import "../assets/css/home.css";
import { ProductCart } from "./ProductCart";
import { Cart } from "./Context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import getCookie from "../client/cookies/getCookie";

export const Home = () => {
    const [query, setQuery] = useState("");
    const { products, cart, fetchedDataStatus, loadData } = useContext(Cart);
    const navigate = useNavigate();

    useEffect(() => {
        if (fetchedDataStatus) {
            return;
        }
        else {
            loadData();
        }
        console.log(products);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchedDataStatus]);
    
    useEffect(() => {
        if (!getCookie('endUser')) {
            navigate('/');
        }        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getFilteredProducts = (query, items) => {
        if (!query) {
            return items;
        }
        return items.filter((item) =>
            query.toLowerCase() === " "
                ? item
                : item.title.toLowerCase().includes(query.toLowerCase())
        );
    };

    let filteredProducts = getFilteredProducts(query, products);    

    return (
        <div className="homeWrapper">
            <div className="homeHeader">
                <div className="homeHeadText">
                    <p>Home</p>
                </div>
                <div className="headRightContent">
                    <input
                        className="searchBar"
                        type="text"
                        placeholder="Search Products"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <NavLink to="/app/cart">
                        <button className="totalCartBtn">
                            <AiOutlineShoppingCart size={20} />
                            <p>{cart.length}</p>
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="productsWrapper">
                <div className="productsList">
                    {filteredProducts !== undefined
                        && filteredProducts.map((item) => (
                              <ProductCart key={item.id} product={item} />
                          ))
                    }
                </div>
            </div>
        </div>
    );
};
