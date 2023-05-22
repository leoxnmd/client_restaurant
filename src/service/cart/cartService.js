import axios from "axios";
import { base_url } from "../base/baseUrl";
import { config } from "../base/axiosconfig";

const getCart = async () => {
    const response = await axios.get(`${base_url}cart-detail/get-cart-detail`);

    return response.data.data;
};
const createItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail/save`, cart);

    return response.data.data;
};

const updateItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail`, cart.id);

    return response.data.data;
};

const delItemCart = async (cart) => {
    const response = await axios.post(`${base_url}cart-detail/update-quantity`, cart);

    return response.data.data;
};

const order = async (order)=>{
    const response = await axios.post(`${base_url}order/staff`, order, config);
    return response;
}

const cartService = {
    createItemCart,
    getCart,
    updateItemCart,
    delItemCart,
    order
};

export default cartService;
