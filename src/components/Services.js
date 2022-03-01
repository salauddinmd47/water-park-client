import React from 'react';
import waterIcon from '../images/water-slide.png'
import riverIcon from '../images/swimming.png'
import swimmingPool from '../images/slide.png'
import { Container, Row } from 'react-bootstrap';
import Service from './Service';
import Title from './Title';
const services = [
    {name:'Watersides',
    des:'Huge variety of steep and gentle slides for harmless fun or extreme', 
    icon:waterIcon,
    bgColor: '#0FB787'
    },
    {
        name:'River Rides',
        des:'We offer an excellent range of river cruise packages for any taste',
        icon:riverIcon,
        bgColor: '#3945a7'
    },
    {
        name:'Pools',
        des:'Swim 50m lanes, gentle widths or enjoy a great happy family day',
        icon:swimmingPool,
        bgColor: '#0c0d0f'
    }

]
const Services = () => {
    return (
        <div className='mt-5'>
        <Title heading=" category" subtitle="our featured category"/>
        <Container className="my-5">
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service=> <Service 
                        service={service}>
                         key={service.name}   
                        </Service>)
                }
            </Row>
            
        </Container>
        </div>
    );
};

export default Services;