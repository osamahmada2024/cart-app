import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeproduct } from "../rtk/Slices/CartSlice";
function Cart() {
  const cart = useSelector((state) => state.cart);
  var x = 1;
  const Total = cart.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
          Total Price:<mark className="me-5">${Total}</mark> {"   "}
          <span style={{ fontWeight: "500" }} className="ms-5 ">
            <mark>clear cart</mark>:{"    "}
          </span>
          <Button
            className=" mb-3"
            onClick={()=>dispatch(clear())}
            variant="danger"
          >
            clear
          </Button>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>Image</th>
              <th>price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pro) => {
              return (
                <tr key={pro.id}>
                  <td>{pro.id}</td>
                  <td>{pro.title}</td>
                  <td>
                    <img style={{ width: "100px" }} src={pro.image} />
                  </td>
                  <td>${pro.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeproduct(pro.id))}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
