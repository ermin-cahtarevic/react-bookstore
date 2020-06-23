import React from 'react';
import Signup from './authentication/Signup';
import Navbar from './Navbar';
import '../styles/home.css';

const Home = () => (
  <div>
    <Navbar />
    <div className="home-body">
      <img className="home-img" alt="Woman reading book" src="https://cdn.dribbble.com/users/651768/screenshots/5725408/image.png" />
      <Signup />
    </div>
  </div>
);

export default Home;
