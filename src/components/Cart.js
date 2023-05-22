import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../service/product/productContext";
import { checkImage } from "../service/base/utils";
import cartService from "../service/cart/cartService";
import ModalNoti from "./ModalNoti";
const Cart = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [total, setTotal] = useState();
  const [orderId, setOrderId] = useState(undefined)

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    const fetchImageUrls = async () => {
      const checkedUrls = await Promise.all(
        cart.map((prod) => checkImage(prod.image))
      );
      setImageUrl(checkedUrls);
    };

    fetchImageUrls();
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const [message, setMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOrder = async ()=>{
    const orderData = {items:[]}
    cart.map(p=>{
      orderData.items.push({
                            productId:p.id,
                            quantity: p.qty
                          })
    })
    const response = await cartService.order(orderData)
    console.log('response is : ', response)
    const mess = response.data.message
    setIsModalOpen(true);
    if(mess === "Success"){
      setMessage(mess)
      setOrderId(response.data.data.id)
    }
    else
      setMessage(response.data.errorCodes[0].message)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod, index) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image style={{ width: '500px', height: '150px', objectFit: 'cover' }}
                    src={imageUrl[index]}
                    alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>{prod.price} VND</Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="form-group">
          <Button type="button" onClick={handleOrder}>
            Order Food
          </Button>
          <ModalNoti isOpen={isModalOpen} onRequestClose={handleCloseModal} message={message} />
          <div id="orderId" hidden>{orderId}</div>
        </div>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total} VND</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
