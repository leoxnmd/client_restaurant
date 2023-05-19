import axios from "axios";
import { base_url } from "../base/baseUrl";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvd25lckBnbWFpbC5jb20iLCJpZCI6NjYsIm5hbWUiOiJDaOG7pyBj4butYSBow6BuZyIsInJvbGVzIjpbIk9XTkVSIl0sImlhdCI6MTY4NDQwMzU2MywiZXhwIjoxNjg0NDg5OTYzfQ.AIqMyhBAAMRDyfiIZ6k_tWLngqSlDSz3LHFAeMhBnw4';
const getProducts = async () => {
    const response = await axios.get(`${base_url}product/?page=1&size=15
    `, token);
    return response.data.data.content;
};
const productService = {
    getProducts
};

export default productService;
