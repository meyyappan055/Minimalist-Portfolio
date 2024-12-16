import React from 'react';
import profile_pic from "../assets/profile_pic.jpg";
import linkedin from "../assets/linkedin.svg";

const Main = () => {
  return (
    <section className="portfolio-container flex h-screen overflow-hidden bg-black">
        <div className='flex-row bg-black w-1/2'>
            <div className='main-text'>
                <img src={profile_pic} className='w-40 mt-32 ml-60 rounded-5xl' alt="Profile pic" />
                <h1 className='text-white font-inter font-semibold  text-3xl mt-4 ml-60'>Meyyappan</h1>
                <h2 className='text-white font-inter font-semibold  text-xl mt-3 ml-56'>Student | Developer</h2>
            </div>
            
        </div>

        <div className='flex-row bg-blue w-[55%] rounded-l-5xl '>

        </div>
    </section>
  )
};

export default Main;
