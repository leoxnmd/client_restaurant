import axios from "axios";
import { base_url } from "../baseUrl";

const getCart = async () => {
    const response = await axios.get(`${base_url}cart-detail/get-cart-detail`);

    return response.data.data;
};
const createItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail/save`, cart);

    return response.data.data;
};

const updateItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail`, ids);

    return response.data.data;
};

const delItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail/update-quantity`, cart);

    return response.data.data;
};

const productService = {
    createCart,
    getCart,
    updateItemCart,
    delItemCart
};

export default cartService;
