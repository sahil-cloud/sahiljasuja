import React from 'react';
import { NavLink } from 'react-router-dom';
import flutter from '../../images/fff.jpg';
import rn from '../../images/rn.png';
import Typical from "react-typical";


function Mobile() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-20 ">
                        <NavLink className="sm:px-6 py-3 w-1/2  lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white tracking-wider" to="/projects">
                            Python
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider" to="/projects/javascript">
                            JavaScript
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 bg-teal-700 text-white border-teal-500 tracking-wider rounded-t" to="/projects/mobile">
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
                                                "Mobile App Projects",
                                                4000,

                                            ]}
                                        />
                                    </h1>
                                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">I am a beginner Mobile App developer <br />
                                    Some of my projects are: <br />
                                       
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={flutter} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Exercise App in flutter</h2>
                                    <p className="text-base leading-relaxed mt-2">This is a fitness app in flutter</p>

                                    <a href="https://github.com/sahil-cloud/fitness-app-with-flutter" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={rn} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">You tube clone</h2>
                                    <p className="text-base leading-relaxed mt-2">This is a clone to you tube app made in React native </p>

                                    <a href="https://github.com/sahil-cloud/youtube-clone" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>
                                    </a>
                                    <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40sahiljasuja666/Youtube-70601e4d6ed847ed8b66b16bc66aab62-signed.apk" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                         <span className="ml-2 text-white" style={{ fontSize: 15 }}>Download App</span> 
                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={rn} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Exercise app in React native</h2>
                                    <p className="text-base leading-relaxed mt-2">Exercise app built in React native</p>

                                    <a href="https://github.com/sahil-cloud/Exercise-app-react-native" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>
                                    </a>
                                    <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40sahiljasuja666/FitnessHub-0fc2a3a286384d55b1ee430e61ea532e-signed.apk" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <span className="ml-2 text-white" style={{ fontSize: 15 }}>Download App</span>
                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={rn} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Weather app in React native</h2>
                                    <p className="text-base leading-relaxed mt-2">Weather app built in React native</p>

                                    <a href="https://github.com/sahil-cloud/weater-app-native" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>
                                    </a>
                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={rn} />
                                    </div>
                                    <h2 className="text-xl font-medium title-font text-white mt-5">Contact app in React native</h2>
                                    <p className="text-base leading-relaxed mt-2">Contact app built in React native</p>

                                    <a href="https://github.com/sahil-cloud/person-info-" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                        <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>
                                    </a>
                                </div>

                            </div>

                            <div className="flex flex-col mt-8">
                                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className="w-24 h-full bg-teal-500"></div>
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Many More Awesome Mobile App Projects</h1>
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

export default Mobile;