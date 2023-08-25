import React from 'react'
import OurPrograms1 from '../../assets/images/our-programs-1.jpg'
import OurPrograms2 from '../../assets/images/our-programs-2.jpg'
import OurPrograms3 from '../../assets/images/our-programs-3.jpg'

function OurPrograms() {
    return (
        <div className='our-programs'>
            <div className='our-programs-main'>
                <div className='our-programs-data'>
                    <div className='our-programs-title'>
                        <h1>OUR PROGRAMS</h1>
                    </div>
                    <div className='our-programs-details'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum?
                        </p>
                    </div>
                </div>
                <div className='our-programs-tiles'>
                    <div className='our-programs-tiles-1'>
                        <div className='tiles-1-img'>
                            <img src={OurPrograms1} alt="image1" />
                        </div>
                        <div className='tiles-1-breadcrumbs'>
                            <p><span className='first'>Coaching</span><span className='second'>Strength</span></p>
                        </div>
                        <div className='tiles-1-title'>
                            <h1>Gym day</h1>
                        </div>
                        <div className='hover-animation'>

                        </div>
                    </div>
                    <div className='our-programs-tiles-1'>
                        <div className='tiles-2-img'>
                            <img src={OurPrograms2} alt="image2" />
                        </div>
                        <div className='tiles-1-breadcrumbs'>
                            <p><span className='first'>Coaching</span><span className='second'>Strength</span></p>
                        </div>
                        <div className='tiles-1-title'>
                            <h1>Cardio workout</h1>                             
                        </div>
                        <div className='hover-animation'>
                            
                        </div>
                    </div>
                    <div className='our-programs-tiles-1'>
                        <div className='tiles-3-img'>
                            <img src={OurPrograms3} alt="image3" />
                        </div>
                        <div className='tiles-1-breadcrumbs'>
                            <p><span className='first'>Coaching</span><span className='second'>Strength</span></p>
                        </div>
                        <div className='tiles-1-title'>
                            <h1>Body strength</h1>                             
                        </div>
                        <div className='hover-animation'>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurPrograms