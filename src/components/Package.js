import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({ pkg }) => {
  const { packageName, price, details, _id } = pkg;
  return (
    <Col>
      <Card className="border-0 shadow-sm">
        <Card.Body className=" my-3 package-container ">
          <h2>{packageName}</h2>
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="price">
              {" "}
              <span>$</span> {price} <span>/person</span>
            </h2>
          </div>
          <Card.Text className=" my-4">{details}</Card.Text>
        </Card.Body>
        <Link to={`/booking/${_id}`}>
          <Button className="rounded-0 border-0 main-btn w-100">
            Book Now
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default Package;
