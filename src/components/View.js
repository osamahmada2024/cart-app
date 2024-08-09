import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Fetch } from "../rtk/Slices/ProductsSlice";

function View() {
  var product = useSelector((state) => state.products);
  const id = useParams().id;
  var pro;
  if (product.length) {
    pro = product.find((pro) => pro.id == id);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch());
  }, []);
  return (
    <Container>
      <Card style={{ minHeight: "380px", boxShadow: "2px 2px 2px orangered" }}>
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          src={pro ? pro.image : ""}
        />
        <Card.Body>
          <Card.Title>{pro ? pro.title : ""}</Card.Title>
          <Card.Text>
            {pro ? pro.description : ""}
            ...
          </Card.Text>
          <p>
            <mark>${pro ? pro.price : ""}</mark>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default View;
