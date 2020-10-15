import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Header from '../Header/Header';
import frame from '../../../images/logos/Frame.png';
import Icons from '../Icons/Icons';
import Works from '../Works/Works';


const Home = () => {
    return (
        <main>

            <div style={{ backgroundColor: '#FBD062', height: '500px'}}>
                <Header></Header>
                <div className='d-flex container'>
                    <div className='col-md-6 mt-5'>
                        <h1 style={{fontWeight: '880'}}>Let's Grow Your 
                            <br /> Brand To The 
                            <br /> Next Level</h1>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dicta?</small>
                        <br />
                        <br />
                        <Link to='/login'>
                            <Button variant='dark' className='ml-3' >Hire Us</Button>
                        </Link>
                    </div>

                    <div className='col-md-6 mt-5'>
                        <img src={frame} alt="" className='w-75 img-fluid' />
                    </div>
                </div>
            </div>
            <Icons></Icons>


            <Works></Works>

        </main>
    );
};

export default Home;