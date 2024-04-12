import React from 'react'
import backimage from '../assets/image.jpg'


function About() {
  return (
    <div className='w-full  bg-[#CDEA68] rounded-tl-2xl p-20'>
        <h1 className="tracking-tighter font-['Neue_Montreal'] text-[3vw] font-md -leading-[5vw]">
            Ochi is a strategic partner for fast-grow­ing tech businesses that need
             to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great 
             peo­ple.</h1>
             <div className='mt-20 card w-full border-t-[4px] border-[#819a2d] flex gap-5'>
             <div className='w-1/2'>
                <h1 className="text-3xl font-semibold tracking-tight">Our Approach:</h1>
                <button className='flex gap-10 item-center px-9 mt-4 mr-4 py-5 bg-zinc-800 rounded-full text-white '>Read more
                <div className='w-5 h-5 bg-zinc-300 rounded-full'></div>
                </button>
             </div>
             <div className='card1 rounded-xl items-center w-1/2 h-[70vh] bg-gray-500 mt-3'>
             <img className="w-full h-full rounded"src={backimage}></img>
             </div>
             
            </div>
             
    </div>
  )
}

export default About