import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Package from "./Package";
import Title from "./Title";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="bg-light package-section">
      <Container>
        <Title heading="packages" subtitle="out ticket packages" />

        <Row xs={1} md={4} className="g-4">
          {packages.map((pkg) => (
            <Package pkg={pkg} key={pkg._id}></Package>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
