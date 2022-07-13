import React from 'react'

const About = () => {

  
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ' >
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          I am a Full Stack Developer based in Mumbai. I have Bachelor of Science degree in Computer Science from University of Mumbai.
          Currenty, I love to work on web application using technologies like
            React, Node JS, Express JS and Redux.
        </p>
        <br/>
        <p className='text-xl '>
        I strive to build beautiful web applications through carefully crafted code and user-centric design.
           
        </p>
     </div>  
    </div>
  )
}

export default About;