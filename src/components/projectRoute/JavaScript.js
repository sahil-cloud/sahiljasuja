import React from 'react';
import { NavLink } from 'react-router-dom';
import js from '../../images/js1.png';
import mern from '../../images/mern.jpg';
import post from '../../images/post.png';
import Typical from "react-typical";


function JavaScript() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-20 ">
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white tracking-wider" to="/projects">
                            Python
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none bg-teal-700  border-gray-800 text-white border-teal-500 tracking-wider rounded-t" to="/projects/javascript">
                            JavaScript
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider " to="/projects/mobile">
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
                                                "JavaScript Projects",
                                                4000,

                                            ]}
                                        />
                                    </h1>
                                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">I am an advance JavaScript developer <br />
                                    I know Vanila javascript also Many of Its libraries and Frameworks like:<br />
                                    React , React Native ,Node.js and the famous MERN stack <br />
                                    Some of the projects are:<br />
                                    <span style={{color:"white"}}>This website is also built in pure React</span> 
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={mern} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Insta-Clone</h2>
                                    <p className="text-base leading-relaxed mt-2">This is an Insta Clone App build in MERN stack</p>

                                    <a href="https://github.com/sahil-cloud/insta-clone-MERN-" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={post} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Postman clone</h2>
                                    <p className="text-base leading-relaxed mt-2">This is an Postman Clone App build in vanila javascript</p>

                                    <a href="https://github.com/sahil-cloud/Postman-in-js" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={js} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Vanilla Javascript Projects</h2>
                                    <p className="text-base leading-relaxed mt-2">5-6 Vanilla Javascript Projects are built like:news app,weather app etc</p>

                                    <a href="https://github.com/sahil-cloud/vanila-js" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                </div>

                                </div>

                            <div className="flex flex-col mt-8">
                                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className="w-24 h-full bg-teal-500"></div>
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Many More Awesome JavaScript Projects</h1>
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

export default JavaScript;