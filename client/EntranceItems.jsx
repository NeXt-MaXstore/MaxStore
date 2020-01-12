import React from "react";
import http from "./http.jsx";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
  CardBody,
  CardLink,
  CardSubtitle
} from "reactstrap";

class EntranceItems extends React.Component {

  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    http.get("/api/items", (err, products) => {
      if (err) console.log(err)
      else {
        this.setState({ products })
      }
    })
  }

  render() {
    return (
      <Row className="m-4 p-4 ">
        {this.state.products.map(one => {
          return (
            <Col key={one._id} sm="3">
              <Card className="my-2">
                <CardImg className="border"
                  top
                  width="100%"
                  src={"http://127.0.0.1:3000/api/uploads/" + one.photo}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{one.name}</CardTitle>
                  <CardSubtitle className="text-muted">Price : ${one.price}</CardSubtitle>
                  {/* <CardText>{one.description}</CardText> */}
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default EntranceItems;
