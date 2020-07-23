import React from 'react';
import ibm from '../images/ibm.jpg';
import ai from '../images/ai.jpg';
import google from '../images/google.jpg';
import isb from '../images/isb.jpg';
import micro from '../images/micro.jpg';
import aws from '../images/aws.jpg';
import Typical from "react-typical";

function Certificates() {
    return (

        <>


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
                                        "My Certificates",
                                        4000,

                                    ]}
                                />
                            </h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">I have done a lot of courses online because i like learning new things <br />
                                    I have done courses offered by Google,AWS,Ibm etc <br />
                                    Some of the Certificates are:
                                    </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={micro} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Microsoft Virtual Intership</h2>

                            <a href="https://github.com/sahil-cloud/certificates/tree/master/mico%20internship" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={google} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Google IT</h2>
                            <a href="https://coursera.org/share/01419d48005c04af0e9905e50aa0772c" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={ibm} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Cyber Security</h2>
                            <a href="https://coursera.org/share/b84fe91a05a5459d84afa1d9f20beb37" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>


                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={ai} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">AI</h2>
                        
                            <a href="https://coursera.org/share/2d0cd46e6f3da93a0d63bb1a6bd36630" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>

                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={isb} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Trading Basics</h2>
                            <a href="https://coursera.org/share/110c7fc5af5b817ac17139f69c38111a" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>

                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={aws} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">AWS</h2>
                            
                            <a href="https://coursera.org/share/ae1cd2ad7208321219c40d625bc3db16" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "white" }}>
                                Certificate


                            </a>
                        </div>



                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                            <div className="w-24 h-full bg-teal-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">I have got many more certificates</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">My Github Repo for Certificates<br />
                                <a href="https://github.com/sahil-cloud/certificates" className="text-teal-500 inline-flex items-center mt-3" target="_blank" style={{ color: "black" }}>
                                    <i className="fa fa-github-square mr-3" style={{ fontSize: 30 }}> <span className="ml-2 text-teal-500" style={{ fontSize: 25 }}>Github</span> </i>


                                </a>
                            </p>
                        </div>

                    </div>


                </div>
            </section>           

        </>


    );
}

export default Certificates;