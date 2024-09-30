

const Contact = () => {
  return (

   <div className="h-[120vh] font-['Neue_Montreal'] text-[#1f2937]">
   
    <h1 className="text-center text-8xl mt-[6%]  font-['Apercu_Pro_Light']  capitalize  ">Get in touch with us</h1>
     
    <div className=" flex gap-[5%]  mt-[5%]">


      <div className=" border border-zinc-300 shadow-lg  w-[25vw] ml-[5%] p-10 rounded-md hover:scale-[1.1]">
         
         <img className="h-[15vw] rounded-lg ml-[3vw]" src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/05/email-logo.jpg" alt="" />

         <h3 className="text-5xl text-center m-2">Drop us a mail</h3>
         <h3 className="text-center text-xl">We'd love to hear from you</h3>

      </div>


      <div className=" border border-zinc-300 shadow-lg  w-[25vw]  p-10 rounded-md hover:scale-[1.1]  ">
         
         <img className="h-[15vw] rounded-lg ml-[3vw]" src="https://www.shutterstock.com/image-vector/call-us-icon-260nw-241733206.jpg" alt="" />

         <h3 className="text-5xl text-center m-2 capitalize">call us</h3>
         <h3 className="text-center text-xl">7am-11pm</h3>
      

      </div>

  
     <div className=" border border-zinc-300 shadow-lg  w-[25vw] p-10 rounded-md hover:scale-[1.1]">
   
   <img className="h-[15vw] rounded-lg ml-[3vw]" src="https://icon-library.com/images/home-address-icon/home-address-icon-7.jpg" alt="" />

   <h3 className="text-5xl text-center m-2">Visit Us</h3>
   <h3 className="text-center text-xl">Rajendra nagar Delhi-110025</h3>

     </div>





    </div>
    
 



    </div>
  )
}

export default Contact;