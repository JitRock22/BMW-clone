// eslint-disable-next-line no-unused-vars
import React from 'react'
import bmw1 from '../assets/bmw1.mp4'
import bmw2 from '../assets/BMW2.mp4'
import bmw3 from '../assets/bmw3.mp4'
import BasicExample from './BasicExample'
const Page1 = () => {
    return (
        <>
            <div className='main'>
                <video autoPlay loop muted>
                    <source src={bmw1} type='video/mp4' />
                </video>
                <div className='content'>
                    <BasicExample />
                </div>
                <div className='m1 absolute top-0  text-[50px] font-[f1]'>
                    <h1>BMW M5</h1>
                    <h2>The magic of exclusive moments</h2>
                    <button className='text-[20px] p-[18px] mt-[15px] border-2'>READ MORE</button>
                </div>
            </div>
            <div className='m2'>
                <div className='m3'>
                    {/* <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-00-teaser-high.jpg?imwidth=360" alt="" /> */}
                    <video autoPlay loop muted>
                        <source src={bmw2} type='video/mp4' />
                    </video>
                </div>
                <div className='m3'>
                    {/* <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-00-teaser-high.jpg?imwidth=360" alt="" /> */}
                    <div>
                        <h1 className='text-[50px] mt-[90px] font-[f1]'>Performance Redefined:<br />
                            <span>Drive the <b className='font-[f1]'>BMW M3<br /><button className='text-[20px] p-[18px] mt-[15px] border-2 border-black'>BOOK NOW</button> </b></span></h1>

                    </div>
                </div>
            </div>
            <div className='m2'>
                <div className='m3'>
                    <h1 className='text-[45px] mt-[90px] font-[f1]'>Revolutionizing Performance:<br />
                        <span className=' text-center'> The Legendary  <br /><b className='font-[f1]'>BMW M4<br /><button className='text-[20px] p-[18px] mt-[15px] border-2 border-black'>BOOK NOW</button> </b></span></h1>


                </div>
                <div className='m3'>
                    <video autoPlay loop muted>
                        <source src={bmw3} type='video/mp4' />
                    </video>
                </div>
            </div>


        </>

    )
}

export default Page1
