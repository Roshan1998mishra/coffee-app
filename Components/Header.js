import React from 'react';
import Link from 'next/link';
import SimpleSlider from './Slick';

const Header = () => {
  const head = ["About", "Service", "Menu", "Contact"];
  return (
    <>
      <div className='slider w-full'>
        <SimpleSlider />
        <div className='text-center bantext'>
          <h1 className='serving'>We have been Serving</h1>
          <h1 className='cofee'>COFFEE</h1>
        </div>
      </div>

      <div className='logo'>
          <h1 className='text-white'>COFFEE</h1>
        </div>



      <div className='myheader p-4'> 
      <div>
        <ul className='flex gap-8 cursor-pointer nav'>
        <Link href={'/'}>Home</Link>
          {head.map((item, index) => (
            <li key={index}>
              {index === 0 || index === 1 || index === 2 || index ===3  ? (
                <Link href={`/${item.toLowerCase()}`} passHref>
                  {item}
                </Link>
              ) : (
                <span>{item}</span> 
              )}
            </li>
          ))}
        </ul>
      </div>
        </div>

        {/* new header */}

        {/* <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
               <h1 className='logotext text-white'>COFFEE</h1>
            </div>

            <div className='col-lg-10'>
            <ul className='flex gap-8 cursor-pointer nav'>
        <Link href={'/'}>Home</Link>
          {head.map((item, index) => (
            <li key={index}>
              {index === 0 || index === 1 || index === 2 || index ===3  ? (
                <Link href={`/${item.toLowerCase()}`} passHref>
                  {item}
                </Link>
              ) : (
                <span>{item}</span> 
              )}
            </li>
          ))}
        </ul>


            </div>

          </div>

        </div> */}
        
    </>
  );
};

export default Header;
