import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/carousel-1.png';
import pic2 from '../../../images/carousel-2.png';
import pic3 from '../../../images/carousel-3.png';
import './Works.css';



const Works = () => {
    return (
        <div className='carousel-pic'>
            <h2> <span style={{color:'white', marginTop: '10px'}} >Here are some of  </span> <span style={{color: 'seagreen'}}>our works</span> </h2>

            <div >
            <Carousel >
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-25 mt-5 img-fluid slideImage"
                        src={pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-25 mt-5 img-fluid slideImage"
                        src={pic2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-25 mt-5 img-fluid slideImage"
                        src={pic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Works;