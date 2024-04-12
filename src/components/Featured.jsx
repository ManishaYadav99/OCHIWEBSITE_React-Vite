import { motion,useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  
  const cards=[useAnimation(),useAnimation()];
  const handleHover=(index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-10 bg-slate-800'>
        
        <div className='w-full px-10 pb-20 border-b-[1px] border-zinc-200'>
            <h1 className='tracking-tight text-white text-6xl font-["Neue_Montreal"] '> Featured Project</h1>
       </div>
       <div className='px-20'> 
        <div className='cards w-full flex gap-10 mt-10'>
        <motion.div 
        onHoverStart={()=>handleHover(0)}
        onHoverEnd={()=>handleHoverEnd(0)}
        
        className='relative cardcontainer rounded w-1/2 h-[75vh]'>
            <h1 className='overflow-hidden flex absolute  text-6xl tracking-tighter left-full leading-none -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#819a2d] font-semibold'>
              {"FYDE".split("").map((item,index)=>(
               <motion.span 
               initial={{y:"100%"}}
               animate={cards[0]}
               transition={{ease:[0.76, 0, 0.24, 1],
                delay:index*.05}}
               className='inline-block'>{item}</motion.span>

              ))}
            </h1>
            <div className='card w-full h-full overflow-hidden'>
                <img  className="bg-cover h-full w-full" src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
            </div>
        </motion.div>
        <motion.div 
        onHoverStart={()=>handleHover(1)}
        onHoverEnd={()=>handleHoverEnd(1)}
        className='cardcontainer relative rounded w-1/2 h-[75vh]'>
        <h1 className=' absolute  flex overflow-hidden text-6xl tracking-tighter  right-full leading-none translate-x-1/2 -translate-y-1/2 top-1/2 text-[#819a2d] font-semibold'>
        {"VISE".split("").map((item,index)=>(
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.76, 0, 0.24, 1],delay:index*.05}}
                className='inline-block'>{item}</motion.span>

              ))}
        </h1>
             <div className='card w-full h-full overflow-hidden'>
             <img  className="bg-cover w-full h-full" src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
             </div>
        </motion.div>

        </div>
       </div>
       </div>



  )
}

export default Featured
