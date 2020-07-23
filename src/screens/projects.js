import React from 'react';
import {NavLink} from 'react-router-dom';
import py from '../images/python.png';
import Ai from '../images/Ai_avni.jpg';
import auto from '../images/automation.jpg';
import dino from '../images/chromedino.png';
import Typical from "react-typical";


function Projects() {
    return (

        <>


            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-20 ">
                        <NavLink className="sm:px-6 py-3 w-1/2  lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium bg-teal-700 inline-flex items-center leading-none  border-gray-800 text-white border-teal-500 tracking-wider rounded-t" to="/projects">
                            Python
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider" to="/projects/javascript">
                            JavaScript
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white  tracking-wider " to="/projects/mobile">
                            Mobile App
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/projects/php">
                            Php
      </NavLink>
                    
                    </div>

                    <section className="text-gray-500 bg-gray-900 body-font">
                        <div className="container px-5 py-4 mx-auto">
                            <div className="flex flex-col">
                                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className="w-24 h-full bg-teal-500"></div>
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                                        <Typical
                                            className="ml-2 text-red-300"
                                            style={{
                                                color: "lightseagreen",
                                                borderBottom: "2px solid lightsalmon",
                                            }}
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[
                                                "Python Projects",
                                                4000,
                                                
                                            ]}
                                        />

                                    </h1>
                                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">I am an advance Python developer <br />
                                    I know many python Libraries like Tkinter , Selenium ,Pyautogui ,Numpy,Pandas and many more <br />
                                    Some of the projects are:
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={Ai} />
        </div>
                                        <h2 className="text-xl font-medium title-font text-white mt-5">Avni - personal assistant</h2>
                                        <p className="text-base leading-relaxed mt-2">This is Avni AI personal assistant made in python using libraries like Speechrecognition,Pyautogui etc</p>
                                       
                                    <a href="https://github.com/sahil-cloud/AVNI---AI-in-python" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                            <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{fontSize:25}}>Github</span> </i>

                                
                                        </a>
                                    </div>
                                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img alt="content" className="object-cover object-center h-full w-full" src={py} />
        </div>
                                            <h2 className="text-xl font-medium title-font text-white mt-5">Tkinter Projects</h2>
                                            <p className="text-base leading-relaxed mt-2">More than 10 TKinter Projects like: Scientific calculator ,egg catcher ,youtube downloader and many more</p>
                                    <a href="https://github.com/sahil-cloud/Tkinter-projects" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                        </div>
                                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-cover object-center h-full w-full" src={auto} />
        </div>
                                                <h2 className="text-xl font-medium title-font text-white mt-5">Selenium Projects</h2>
                                                <p className="text-base leading-relaxed mt-2">More than 5 Selenium projects are built like : fb login etc. Selenium is a very powerful tool to do automation</p>
                                    <a href="https://github.com/sahil-cloud/selenium-automation" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                            </div>


                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={dino} />
                                </div>
                                <h2 className="text-xl font-medium title-font text-white mt-5">chromedino Automation</h2>
                                <p className="text-base leading-relaxed mt-2">Automating the boring Chrome Dino game with</p>
                                <a href="https://github.com/sahil-cloud/chromedino-automate" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                    <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                </a>
                            </div>

                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={py} />
                                </div>
                                <h2 className="text-xl font-medium title-font text-white mt-5">Snake game in python</h2>
                                <p className="text-base leading-relaxed mt-2">Snake game in pygame-Python</p>
                                <a href="https://github.com/sahil-cloud/Game-dev-with-python" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                    <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                </a>
                            </div>

                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={auto} />
                                </div>
                                <h2 className="text-xl font-medium title-font text-white mt-5">InstaBot</h2>
                                <p className="text-base leading-relaxed mt-2">Automating Instagram Completely using python</p>
                                <a href="https://github.com/sahil-cloud/InstaBot-with-python" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                    <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                </a>
                            </div>


                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={py} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">WebScrapping</h2>
                                    <p className="text-base leading-relaxed mt-2">WebScrapping using python</p>
                                    <a href="https://github.com/sahil-cloud/webscrapping-with-python" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                </div>

                                
                                   

                        </div>
                                    <div className="flex flex-col mt-8">
                                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                                            <div className="w-24 h-full bg-teal-500"></div>
                                        </div>
                                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Many More Awesome Python Projects</h1>
                                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">My Github Repo <br />
                                                <a href="https://github.com/sahil-cloud/" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                                    <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                                </a>
                                    </p>
                                        </div>
                              
                                </div>

            
                                    </div>
</section>

                </div>
                </section>

        </>


    );
}

export default Projects;