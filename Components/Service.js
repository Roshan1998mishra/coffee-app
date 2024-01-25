import React from 'react'
import Image from 'next/image'
import service from "@/public/Images/service.jpg";
import servicee from "@/public/Images/servicee.jpg";
import serviceee from "@/public/Images/serviceee.jpg";
import serviceeee from "@/public/Images/serviceeee.jpg";


const Services = () => {
  return (
    <>
   <div className='container my-8'>
    <h1 className='text-center about '>OUR SERVICE</h1>
    <h1 className='text-center '>Fresh & Organic Beans</h1> 
    </div>

    <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
               <Image src={service} alt='service'></Image>
            </div>

            <div className='col-lg-3'> 
            <h1>Fastest Door Delivery</h1>
            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum 
            takima erat tempor</p>
            </div>

            <div className='col-lg-3'>
                <Image src={servicee} alt='servicee'></Image>
            </div>
            <div className='col-lg-3'>
             <h1>Fresh Coffee Beans</h1>
             <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum 
                takima erat tempor</p>
            </div>
</div>
</div>

{/* second line */}

<div className='container my-4'>
        <div className='row'>
            <div className='col-lg-3'>
               <Image src={serviceee} alt='serviceee'></Image>
            </div>

            <div className='col-lg-3'> 
            <h1>Best Quality Coffee</h1>
            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum 
            takima erat tempor</p>
            </div>

            <div className='col-lg-3'>
                <Image src={serviceeee} alt='serviceeee'></Image>
            </div>
            <div className='col-lg-3'>
             <h1>Online Table Booking</h1>
             <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum 
                takima erat tempor</p>
            </div>
</div>
</div>


    </>
  )
}

export default Services;