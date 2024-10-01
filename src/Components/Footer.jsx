import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black  p-8 '>

      <div className="upperpart flex justify-between">
                
                <div className='logo   flex flex-col gap-4'>

                  <img src="/foodmania.png" alt="logo" className='w-36 h-36' />
                   <h3 className='text-white'>Where every meal is a deal!</h3>
               
                     <div className="social flex gap-2 text-white ml-8">

                          <div className='font-3xl'><FaLinkedin /></div>
                          <div><FaSquareInstagram /></div>
                          <div><FaTwitter /></div>
                          <div> < FaFacebookF/> </div>




                     </div>

                </div>

                 <div className='middle text-white flex flex-col gap-4'>
                     <h1 className='text-3xl text-bold'>Company</h1>
                     <div className='flex flex-col gap-2 text-white ml-7'>

                          <div>Home</div>
                          <div>About us</div>
                          <div>grocery</div>
                          <div>Privacy policy</div>



                     </div>


                 </div>

                   <div className='text-white flex flex-col gap-4'>

                    <div className='text-3xl'>Contact us</div>
                             
                             <div>

                                <div>+91-96672732345</div>
                                <div>Food-Mania@gmail.com</div>
                               
                             </div>



                   </div>


      </div>
    

     <div className='lower'>


    <div className="line w-[98%] h-[2px] bg-white ml-1 mr-1 mt-4 mb-4"></div>
    <div className='m-4 text-white text-center'>&copy; 2024 All Right reserved</div>


     </div>


    </div>
  )
}

export default Footer;