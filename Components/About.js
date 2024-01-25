import React from 'react'
import Image from 'next/image'
import about from "@/public/Images/about.png";

const About = () => {
  return (
    <>
    <div className='about-section my-16'>
    <h1 className='text-center about'>ABOUT US</h1>
    <p className='text-center  font-black text-5xl'>Serving Since 1950</p>
    </div>

    <div className='container'>
        <div className='row'>
            <div className='col-lg-4'> 
                <h1>Our Story</h1>
                <p>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. 
                    Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                </p>

                <div>
                <button className='btn bg-black text-white learnm'>Learn More</button> 
                </div>
            </div>

            <div className='col-lg-4'>
                <Image src={about} alt='about'></Image>
            </div>

            <div className='col-lg-4'>
                <h1>Our Vision</h1>
                <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. 
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>

                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <div>
                    <button type='button' className='btn text-white bg-black learnm'>Learn More</button> 
                </div>
            </div>
    </div>
</div>
    </>
  )
}

export default About