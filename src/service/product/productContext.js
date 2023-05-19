import { createContext, useContext, useReducer, useEffect, useState } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "../base/Reducers";
import axios from "axios";
import { config } from "../base/axiosconfig";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/product/?page=1&size=15", config);
      const data = response.data.data.content;

      const products = data.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      }));
      dispatch({ type: 'SET_PRODUCTS', payload: products });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {isLoading ? ( // Render loading state while fetching data
        <div>Loading...</div>
      ) : (
        children // Render children when data has been fetched
      )}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
