import React from 'react';
import SliderHome from '../Components/Slider/sliderhome'; // Adjust the path
import OurPrograms from '../Components/section2-home/OurPrograms'; // Adjust the path

function Home() {
  return (
    <div className='home'>
      <SliderHome />
      <OurPrograms/>
      </div>
  );
}

export default Home;

// src/
// |-- assets/
// |   |-- images/
// |   |   |-- logo.png
// |   |   |-- logo-light.png
// |   |   |-- slide1.jpg
// |   |   |-- slide2.jpg
// |   |   |-- slide3.jpg
// |-- Components/
// |   |-- footer/
// |   |   |-- footer.css
// |   |   |-- footer.jsx
// |   |-- header/
// |   |   |-- header.css
// |   |   |-- header.jsx
// |   |-- Slider/
// |   |   |-- sliderhome.css
// |   |   |-- sliderhome.jsx
// |-- pages/
// |   |-- home.css
// |   |-- home.jsx
// |-- ...