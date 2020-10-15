import React from 'react';
import Slack from '../../../images/logos/slack.png'
import Google from '../../../images/logos/google.png'
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
import './Icons.css';




const Icons = () => {
    return (
        <section>

            <div className='container'>
                <div className='row mt-5 mb-5 d-flex justify-content-around'>

                    <div className='col-md-2 py-3'>
                        <img className='iconImage' src={Slack} alt="" />
                    </div>

                    <div className='col-md-2 py-3 '>
                        <img className='iconImage' src={Google} alt="" />
                    </div>
                    <div className='col-md-2  py-3'>
                        <img className='iconImage' src={Uber} alt="" />
                    </div>
                    <div className='col-md-2 py-3'>
                        <img className='iconImage' src={Netflix} alt="" />
                    </div>
                    <div className='col-md-2 py-3'>
                        <img className='iconImage' src={Airbnb} alt="" />
                    </div>







                </div>




            </div>
        </section>
    );
};

export default Icons;