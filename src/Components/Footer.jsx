import React from 'react'
import footerlogo from '../assets/images/footerlogo.png'
import footerelips1 from '../assets/images/footer-elips1.png'
import footerelips2 from '../assets/images/footer-elips2.png'
import footerelips3 from '../assets/images/footer-elips3.png'
import footerelips4 from '../assets/images/footer-elips4.png'

const Footer = () => {
  return (
    <div className='pt-50 footer-bg position-relative'>
      <div className="container">
        <div className="d-flex align-items-center flex-column justify-content-center pt-78">
                <img src={footerlogo} alt="" />
                <p className='footer-p'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                <div className='d-flex align-items-center gap-51 pt-34'>
                        <p className='common-p'>Navigation</p>
                        <p className='common-p'>Company</p>
                        <p className='common-p'>Contact</p>
                </div>
        </div>
      </div>
      <div className='footer-l'>
        <p className='footer-lp text-center py-15'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
      </div>
      <img className='f-elips1' src={footerelips1} alt="#" />
      <img className='f-elips2' src={footerelips2} alt="#" />
      <img className='f-elips3' src={footerelips3} alt="#" />
      <img className='f-elips4' src={footerelips4} alt="#" />
    </div>
  )
}

export default Footer
