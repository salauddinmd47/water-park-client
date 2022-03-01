import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from './Package'; 
import Title from './Title';

const packages = [
    {
        packageName:'standard day ticket',
        price:55,
        details:"This ticket grants access to main waterpark attractions, including waterslides, pools and a lounge zone"
    },
    {
        packageName:'premium day ticket',
        price:99,
        details:"Enjoy all of the park's activities plus a number of free cocktails and an exclusive VIP relaxation zone."
    },
    {
        packageName:'family day ticket',
        price:120,
        details:"Save money with our family programme. Two adult plus two kids' tickets and a lot of fun in our park!"
    },
    {
        packageName:'weekly stay pass',
        price:150,
        details:"Living in a hotel near the park and want to spend all the time here? With this pass you save up to 50 %"
    },
]
const Packages = () => {
    return (
        <div className='bg-light package-section'>
            <Container>
            <Title heading="packages" subtitle="out ticket packages"/>
          
            <Row xs={1} md={4} className="g-4">
                {
                    packages.map(pkg=> <Package 
                        pkg={pkg}
                        key={pkg.packageName} 
                        > 
                        </Package>)
                }
            </Row> 
        </Container>  
        </div>
    );
};

export default Packages;