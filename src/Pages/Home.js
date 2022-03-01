import React from 'react';
import AboutBanner from '../components/AboutBanner';
import Banner from '../components/Banner';
import Childcare from '../components/Childcare';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Packages from '../components/Packages';
import Services from '../components/Services';
 
 

const Home = () => {
    return (
        <div>
          <NavigationBar/>
          <Banner bannerStyle="main-banner"  >
              <div className="banner-heading">

                  <h2>family place to feel <br/> happy and safe</h2>
                  <p>All the waterslides are proved to safe <br/> our lifegaurd is always ready to save </p>
              </div>
          </Banner>
          <Services></Services>
          <AboutBanner/>
          <Packages/>
          <Childcare/>
          <Footer></Footer> 
        </div>
    );
};

export default Home;