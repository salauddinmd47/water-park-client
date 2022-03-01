import React from 'react';
import { Button, Container } from 'react-bootstrap';

const AboutBanner = () => {
    return (
        <div className='about-banner'>
            <Container className="about-message">
            <div className=' w-90 mx-auto text-white'>
            <h2>We have everything you want and need to make <br/> your waterpark experience safe & comfortable!</h2>
            <p>ll the waterslides are guaranteed to be safe, and our lifeguards are <br/> always ready to help in case of any danger or emergency.</p>
            <Button className='main-btn border-0'>MORE ABOUT US</Button>
            </div>
            </Container>
        </div>
    );
};

export default AboutBanner;