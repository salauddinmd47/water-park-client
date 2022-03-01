import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Package = ({pkg}) => {
    console.log(pkg)
    const {packageName, price, details} = pkg;
    return (
        <Col  >
        <Card className="border-0 shadow-sm" > 
          <Card.Body className=" my-3 package-container ">
             <h2>{pkg.packageName}</h2>
            <div className='d-flex align-items-center justify-content-center'>
            <h2 className='price'> <span>$</span> {price} <span>/person</span></h2>
            </div>
            <Card.Text className=" my-4">
               {details}
            </Card.Text> 
            
          </Card.Body>
          <Button className='rounded-0 border-0 main-btn' >Book Now</Button>
         
        </Card>
      </Col>
    );
};

export default Package;