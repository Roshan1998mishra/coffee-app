import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[#7B3F00]'>
    <div className='container'>
        <div>
            <h1 className='text-center text-5xl offer'>50% OFF</h1>
            <h1 className='text-center text-white'>Sunday Special Offer</h1>
            <p className='text-center text-white'>Only for Sunday from 1st Jan to 30th Jan 2045</p>
        </div>

        <form className='text-center flex justify-center py-4'>
            <input type='text' placeholder='YOUR EMAIL'></input>
            <button type='button' className='btn bg-black text-white'>SignUp</button>
        </form>

    </div>
    </div>
    
  )
}

export default Signup