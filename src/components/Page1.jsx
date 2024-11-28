// eslint-disable-next-line no-unused-vars
import React from 'react'
import bmw1 from '../assets/bmw1.mp4'
import BasicExample from './BasicExample'
const Page1 = () => {
    return (
        <>
            <div className='main'>
                <video autoPlay loop muted>
                    <source  src={bmw1} type='video/mp4'/>
                </video>
               <div className='content'>
                <BasicExample/>
               </div>
               <div className=' text-[50px] font-[f1] p-[10px] ml-[100px] mt-[200px] position-absolute top-1 text-white'>
                <h1>The magic of exclusive moments</h1>
                <div className='text-[20px] p-[50px]'>
                <button className='w-[150px] h-[50px] p-[10px] border-white border-2 rounded-none text-center'>Read More</button>
                </div>
                    
               </div>
            </div>
            

        </>

    )
}

export default Page1
