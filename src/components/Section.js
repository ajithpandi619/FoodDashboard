import Card from "react-bootstrap/Card";
import "./Section.css";
import { Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import food1 from "../assets/Food1.jpg";
import food2 from "../assets/Food2.jpg";
import food3 from "../assets/Food3.jpg";
import food4 from "../assets/Food4.jpg";
import food5 from "../assets/Food5.jpeg";
import food6 from "../assets/Food6.jpeg";
import food7 from "../assets/Food7.jpeg";
import food8 from "../assets/Food8.jpeg";
import AddtoCart from "./AddtoCart";
import React, { useState } from "react";

function Section() {
  const [cart, setCart] = useState([]);

  const addToCart = (foodName, price) => {
    const existingItemIndex = cart.findIndex((item) => item.name === foodName);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = {
        name: foodName,
        price: price,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (foodName) => {
    const updatedCart = cart.filter((item) => item.name !== foodName);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ marginLeft: "-105px" }} className="sections container   ">
      <div>
        <Filter></Filter>
        <Row className=" " style={{ marginTop: "90px" }}>
          <Col className="gy-4 Card_Col">
            <Card
              onClick={() => addToCart("Schewan Egg Noodles", 25.0)}
              className="card_C"
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 mb-0"
                height={"50px"}
                variant="top"
                src={food1}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Schewan Egg <br></br>Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            <Card
              onClick={() => addToCart(" Stir Egg Fry Udon Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food5}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Stir Egg Fry <br></br>Udon Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart(" Thai Style Fried Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food2}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Thai Style Fried<br></br> Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart("Chinese Prawn Spaghetti", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food3}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Chinese Prawn <br></br>Spaghetti
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() =>
                addToCart(" Japaneese Soba Settings Noodles", 25.0)
              }
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food4}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Japaneese Soba Settings <br></br>Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart("Chinese Prawn Spaghetti", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food7}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Chinese Prawn<br></br> Spaghetti
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart("Chilli Garlic Thai Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food5}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Chilli Garlic Thai<br></br> Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart(" Schewan Egg Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food6}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Schewan Egg <br></br>Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
        <Row>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart(" Thai Style Fried Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food7}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Thai Style Fried<br></br> Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart("  Schewan Egg Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food8}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Schewan Egg <br></br>Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            {" "}
            <Card
              onClick={() => addToCart(" Stir Egg Fry Udon Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food4}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Stir Egg Fry<br></br> Udon Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="gy-4">
            <Card
              onClick={() => addToCart("Chilli Garlic Thai Noodles", 25.0)}
              style={{
                width: "10rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <Card.Img
                className="w-50  ca_img border rounded-circle m-4 mb-0 "
                height={"50px"}
                variant="top"
                src={food5}
                alt=""
              />
              <Card.Body>
                <Card.Text className="text-center card_text">
                  Chilli Garlic Thai <br></br>Noodles
                </Card.Text>
                <Card.Title className="text-center card_price">
                  $25.00
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Col>
        <AddtoCart
          cart={cart}
          total={calculateTotal()}
          removeFromCart={removeFromCart}
        />
      </Col>
    </div>
  );
}

export default Section;
