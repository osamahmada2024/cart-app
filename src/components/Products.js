import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../rtk/Slices/ProductsSlice";
import { addproduct } from "../rtk/Slices/CartSlice";
import { useNavigate } from "react-router";
function Products() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch());
  }, []);
  const Navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row>
        {product.map((pro) => (
          <Col xs={12} md={6} lg={3} className="my-4" key={pro.id}>
            <Card
              style={{ minHeight: "380px", boxShadow: "2px 2px 2px orangered" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "200px" }}
                src={pro.image}
              />
              <Card.Body>
                <Card.Title>
                  {pro.title.length > 20
                    ? `${pro.title.slice(0, 20)}...`
                    : pro.title}
                </Card.Title>
                <Card.Text>
                  {pro.description.length > 100
                    ? `${pro.description.slice(0, 100)}...`
                    : pro.description}
                  ...
                </Card.Text>
                <p>
                  <mark>${pro.price}</mark>
                </p>
                <Button
                  onClick={() => dispatch(addproduct(pro))}
                  variant="primary"
                >
                  Add To Cart
                </Button>{" "}
                <Button
                  onClick={() => Navigate(`/product-desc/${pro.id}`)}
                  variant="secondary"
                  className="ms-5"
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
