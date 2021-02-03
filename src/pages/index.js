import React from 'react';
import Testimonial from '../components/Testimonials/Testimonial/Testimonial'
import WebsiteDevelopers from '../components/WebsiteDevelopers/WebsiteDevelopers'


const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        // display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }} >
       {/* <h1>Home</h1> */}
        <Testimonial/>
        <WebsiteDevelopers/>


       <div className="container">
       </div>



    </div>
  );
};

export default Home;
