import { easeInOut, motion } from 'framer-motion';
import React from 'react'
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import image from "../assets/manu.jpg"

function Landing() {
    motion
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.3"  className='w-full h-screen bg-slate-900 pt-1'>
        <div className='textstructure mt-36 px-20'>
            {["we create","eye opening","presentations"].map((item,index)=>(
            <div className='masker'>
                <div className='w-fit flex  items-end overflow-hidden'>
                    {index==1 && (
                    <motion.div initial={{width:0}}
                     animate={{width:"9vw"}} 
                     transition={{ease:[0.68, -0.6, 0.32, 1.6],duration:1}}
                     className='rounded mr-[1vw] w-[11vw] h-[5.7vw] bg-green-800  leading-[6vw] mt-[3px] flex justify-center items-center'>
                        <img className="w-full h-full object-cover bg-cover "src={image} alt="" />

                    </motion.div>)}
                 <h1 className=" text-white text-[5.5vw] h-[5.5vw] leading-[5vw]  uppercase font-['Founders_Grotesk_Font_Family_(Fontmirror)/Test Founders Grotesk Bold 700.otf'] font-bold tracking-tighter">{item}</h1>
            </div>
            </div>
            ))}
           
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center'>
            {[
                "for private comapnies",
                "frome the first pitch to ipo"
            ].map((item,index)=>(
                <p className='text-md font-light tracking-tighter leading-none text-white'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className="text-white px-5 py-3 border-[1px] border-zinc-700 rounded-full font-light text-md uppercase mt-2">start the project</div>
                <div className='w-8 h-8 rounded-full flex items-center justify-center border-[2px] border-zinc-700'>
                    <span className="rotate-[45deg] text-white">
                <HiOutlineArrowSmallUp />
                </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Landing