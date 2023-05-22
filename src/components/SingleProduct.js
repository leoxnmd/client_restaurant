import { Card, Button } from "react-bootstrap";
import { CartState } from "../service/product/productContext";
import { checkImage } from "../service/base/utils";
import React, { useEffect, useState } from "react";
import cartService from "../service/cart/cartService";

const SingleProduct = ({ prod }) => {
  const [imageUrl, setImageUrl] = useState("");

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    checkImageUrl();
  }, [prod]);

  const checkImageUrl = async () => {
    const checkedUrl = await checkImage(prod.image);
    setImageUrl(checkedUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cart = await cartService.getItemCart();
      dispatch({ type: "SET_CART", payload: cart });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={imageUrl} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> {prod.price} VND</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
