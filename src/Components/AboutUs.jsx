import React from 'react'
import aboutimg1 from '../assets/images/aboutus-img-1.png'

const AboutUs = () => {
  return (
    <div className='py-50'>
        <div className="container">
                <div className="row  justify-content-center align-items-center">
                        <div className="col-lg-6 col-12 pt-20 pb-30">                             
                            <img className='w-100' src={aboutimg1} alt="#" />
                        </div>
                        <div className="col-lg-6 col-12">
                                <div className='d-flex align-items-center '>
                                        <span className='about-us text-gredient'>About Us</span>
                                        <hr className='line text-gredient1' />
                                </div>
                                <h2 className='about-h pt-14'>What is <span className='text-gredient'>Maître D?</span></h2>
                                <p className='about-p'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs
