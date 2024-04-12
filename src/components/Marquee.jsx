import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full h-[50vh] bg-[#004D43] py-20 rounded mb-5'>
        <div className='text-white text  flex pr-20 whitespace-nowrap border-t-2 border-b-2 border-zinc-300'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase pt-2 text-[11vw] leading-none  py-5 -mb-[8] font-[Founders_Grotesk_Font_Family_(Fontmirror)/Test Founders Grotesk Bold 700.otf] font-bold tracking-tighter'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase pt-2 text-[11vw] leading-none  py-5 -mb-[8] font-[Founders_Grotesk_Font_Family_(Fontmirror)/Test Founders Grotesk Bold 700.otf] font-bold tracking-tighter'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:5}} className='uppercase pt-2 text-[11vw] leading-none  py-5 -mb-[8] font-[Founders_Grotesk_Font_Family_(Fontmirror)/Test Founders Grotesk Bold 700.otf] font-bold tracking-tighter'>We are Ochi</motion.h1>
        </div>


    </div>
  )
}

export default Marquee