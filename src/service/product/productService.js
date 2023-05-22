import axios from "axios";
import { base_url } from "../base/baseUrl";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvd25lckBnbWFpbC5jb20iLCJpZCI6NjYsIm5hbWUiOiJDaOG7pyBj4butYSBow6BuZyIsInJvbGVzIjpbIk9XTkVSIl0sImlhdCI6MTY4NDY1NzY1NSwiZXhwIjoxNjg0NzQ0MDU1fQ.yk0HKg_lu_stfh_uHcmJnNRfWwnGqS3nsFjbTSc0eIQ"
const getProducts = async () => {
    console.log('running getproducts..')
    const response = await axios.get(`${base_url}product/?page=1&size=15`, token);
    return response.data.data.content;
};
const productService = {
    getProducts
};

export default productService;
