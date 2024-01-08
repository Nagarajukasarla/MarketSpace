import { createContext, useState } from "react";
import { getProducts } from "../api/getProducts";

export const Cart = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [fetchedDataStatus, setFetchedDataStatus] = useState(false);

    const loadData = async () => {
        const response = await getProducts();
        if (response) {
            setProducts(response.products);
            setFetchedDataStatus(true);
            console.log("Products are loaded!");
        }
    };
    return <Cart.Provider value={{ products, setProducts, cart, setCart, loadData, fetchedDataStatus }}>{children}</Cart.Provider>;
};

export default Context;
