import React from 'react'
import contactimg from '../assets/images/contactimg.png'
import contactelips from '../assets/images/contact-elips.png'

const Contact = () => {
  return (
    <div className='mt-100 pb-50 position-relative'>
      <img className='contact-elips' src={contactelips} alt="#" />
      <div className="container"> 
      <div className="row">
        <div className="col-lg-6 col-12">    
         <div className='d-flex align-items-center '>
                 <span className='about-us text-gredient'>Contact US</span>
                <hr className='line text-gredient1' />
         </div>
           <h2 className='about-h pt-14 pb-50'>Get in touch!</h2>  
           <div className='d-flex align-items-center gap-30 mb-30'>
                                <input type="text" placeholder='Full Name' className=' common-cls outline-none pb-15' />
                                <input type="text" placeholder='Email address' className=' common-cls outline-none pb-15' />
                            </div>
                            <input className='w-100 outline-none pb-15 mb-30 common-cls' type="text" placeholder='Company Name ' />
                            <textarea className='w-100 outline-none pb-15 common-cls ' name="id" placeholder="Message"></textarea> 
                            <div className="pt-40"><button className='btn-buy'>Submit</button>
                                </div>     
                               
     
      </div>
      <div className="col-lg-6 col-12">
        <img className='w-100' src={contactimg} alt="" />
      </div>
      </div>
      </div> 
      
    </div>
  )
}

export default Contact
