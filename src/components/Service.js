import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name, des, icon,bgColor} = service
    return (
        <Col  >
        <Card className="py-5" style={{ backgroundColor:`${bgColor}`}}>
           <img style={{ width:'100px', margin:'auto', }} src={icon} alt="" />
          <Card.Body className="text-white my-3">
            <Card.Title> {name}</Card.Title>
            <Card.Text className=" my-4">
               {des}
            </Card.Text>
            <a href="/#" className='text-white'>learn more</a>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;