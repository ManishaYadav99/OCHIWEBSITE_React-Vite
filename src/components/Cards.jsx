import React from 'react'

function Cards() {
  return (
    <div className='w-full  h-screen flex items-center justify-center gap-10 px-20'>
        <div className='relative container w-1/2 h-[50vh] '>
          <div className='card1 rounded-xl w-full h-full bg-[#004d43] relative flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
            <button className='absolute bottom-10 left-9 rounded border-2 text-white text-semibold'>&copy;2019-2022</button>
          </div>

        </div>
      <div className='container relative w-1/2 h-[50vh] flex gap-5 '>
      <div className='realtive card1 rounded-xl w-1/2 h-full bg-[#162321] items-center justify-center flex'>
        <h1 className='text-4xl text-white tracking-tighter font-semibold'>Clutch</h1>
      <button className='absolute bottom-10 left-9 rounded border-2 text-white text-semibold'>&copy;2019-2022</button>
      </div>
    <div className='relative card1 rounded-xl w-1/2 h-full bg-[#162321] flex items-center justify-center'>
      <img className="w-[8vw] h-[15vh]"src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
    <button className='absolute bottom-10 left-9 rounded border-2 text-white text-semibold'>&copy;2019-2022</button>
    </div>


      </div>
    </div>
  )
}

export default Cards