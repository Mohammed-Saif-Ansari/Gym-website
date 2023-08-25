import React, { useState } from 'react';
import '../Slider/sliderhome.css';

function SliderHome() {
  const [activeSlide, setActiveSlide] = useState('slider-1');

  const handleLinkClick = (slideId) => {
    setActiveSlide(slideId);
  };

  return (
    <div className='slider-section1'>
      <div className='slider-bundle'>
        <div className={`slide slide-1 ${activeSlide === 'slider-1' ? '' : 'hidden'}`}>
          <div className='slide-content'>
            <div className='slide-title'>
              <h1>
                BEST PROGRAMS FOR BEST RESULTS
              </h1>
            </div>
            <div className='slide-para'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, provident!
              </p>
            </div>
            <div className='slide-button'>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className={`slide slide-2 ${activeSlide === 'slider-2' ? '' : 'hidden'}`}>
          <div className='slide-content'>
            <div className='slide-title'>
              <h1>
                BEST PROGRAMS FOR BEST RESULTS
              </h1>
            </div>
            <div className='slide-para'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, provident!
              </p>
            </div>
            <div className='slide-button'>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className={`slide slide-3 ${activeSlide === 'slider-3' ? '' : 'hidden'}`}>
          <div className='slide-content'>
            <div className='slide-title'>
              <h1>
                BEST PROGRAMS FOR BEST RESULTS
              </h1>
            </div>
            <div className='slide-para'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, provident!
              </p>
            </div>
            <div className='slide-button'>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-button">
        <p>
          <a href="#" id='slider-1' onClick={() => handleLinkClick('slider-1')} className="js-btn btn" data-btn-scroll="true" data-btn-autoplay="play">
            <svg width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle className="js-circle circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="3" fill="none" />
            </svg>1
          </a>

          <a href="#" id='slider-2' onClick={() => handleLinkClick('slider-2')} className="js-btn btn" data-btn-scroll="true" data-btn-autoplay="play">
            <svg width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle className="js-circle circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="3" fill="none" />
            </svg>2
          </a>
          <a href="#" id='slider-3' onClick={() => handleLinkClick('slider-3')} className="js-btn btn" data-btn-scroll="true" data-btn-autoplay="play">
            <svg width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle className="js-circle circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="3" fill="none" />
            </svg>3
          </a>
        </p>
      </div>
    </div>
  );
}

export default SliderHome;
