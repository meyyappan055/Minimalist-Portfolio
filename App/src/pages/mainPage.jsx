import React from 'react';
import profile_pic from "../assets/profile_pic.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/Instagram.svg";
import mail from "../assets/mail.svg";
import { bootstrap, css3, javascript, tailwindcss, c, cplusplus, docker, express, git, githubicon, html5, mongodb, mysql, python , fastapi} from "../assets/devicons/index.js";



const Main = () => {
  return (
    <section className="portfolio-container flex h-screen overflow-hidden bg-black">
        <div className='flex-row bg-black w-1/2'>
            <div className='main-text'>
                <img src={profile_pic} className='w-40 mt-32 ml-60 rounded-5xl' alt="Profile pic" />
                <h1 className='text-white font-inter font-semibold  text-3xl mt-4 ml-60'>Meyyappan</h1>
                <h2 className='text-white font-inter font-semibold  text-xl mt-3 ml-56'>Student | Developer </h2>
            </div>

          
            <div className='icons flex mt-20'>
              <h1 className='text-white font-inter font-semibold  text-xl mt-4 ml-58'>Connect with me !</h1>
              <div className='absolute flex gap-4 mt-14 ml-58 '>
                <a href="https://linkedin.com/in/meyyappan-l">< img className="w-7 ml-1" src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/meyyappan055">< img className='w-7' alt="github" src={github} /></a>
                <a href="mailto:meyyappan055@gmail.com">< img className='w-8' alt="mail" src={mail} /></a>
                <a href="">< img className='w-7' alt="instagram" src={instagram} /></a>
                
              </div>
              
            </div>
        </div>

        <div className='flex-row bg-blue w-[55%] rounded-l-5xl '>
          <div>
            <h1 className='font-inter font-bold ml-8 mt-8 text-5xl'>Tech Stack</h1>
          </div>

          <div className="flex flex-wrap gap-6 p-5 mt-8 ml-8 shadow-2xl">
            <div className="flex flex-col items-center">
              <img src={python} alt="python" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center ">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={javascript} alt="javascript" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center ">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={c} alt="c" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center ">C</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cplusplus} alt="cplusplus" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">C++</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-6 p-5 ml-8 shadow-lg'>
            <div className="flex flex-col items-center">
              <img src={html5} alt="html5" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={css3} alt="css3" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={bootstrap} alt="bootstrap" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={tailwindcss} alt="tailwindcss" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">Tailwind</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-6 p-5 ml-8 shadow-2xl'>
            <div className="flex flex-col items-center">
              <img src={fastapi} alt="fastapi" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center ">FastAPI</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={express} alt="express" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">Express</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mongodb} alt="mongodb" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mysql} alt="mysql" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={docker} alt="docker" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">Docker</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={git} alt="git" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center ">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={githubicon} alt="github" className="w-12 h-12" />
              <p className="mt-2 text-black text-lg font-bold text-center">GitHub</p>
            </div>
          </div>

          <div>
              <a href=""> {/* will link resume later*/}
                <button className='text-black bg-blue font-inter font-bold text-2xl ml-10 mt-32 rounded-2xl shadow-2xl shadow-zinc-700 p-3'>Résumé</button>
              </a>
            </div>
        </div>
        
    </section>
  )
};

export default Main;
