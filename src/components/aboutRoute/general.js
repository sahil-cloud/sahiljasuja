import React from 'react';
import { NavLink } from 'react-router-dom';
import Typical from "react-typical";


function General() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-5">
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider" to="/about/">
                            About
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium bg-teal-700 inline-flex items-center leading-none  border-gray-800 border-teal-500 text-white tracking-wider rounded-t" to="/about/general">
                            General
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/education">
                            Education
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/skills">
                            Skills
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/other">
                            Vision
      </NavLink>
                    </div>
                    </div>
                <section className="text-gray-500 body-font bg-gray-900">
                    <div className="container px-5 mx-auto">
                        <div class="flex flex-col text-center w-full mb-4">
                        <h2 class="text-xs tracking-widest font-medium title-font mb-1">

                                <Typical
                                    className="ml-2 text-red-300"
                                    style={{
                                        color: "lightseagreen",
                                        borderBottom: "2px solid lightsalmon",
                                    }}
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "Name : Sahil Jasuja",
                                        4000,
                                        "Age : 20",
                                        2000,
                                        "Contact : 9782356004",
                                        2000,
                                        "Email : sahiljasuja666@gmail.com",
                                        2000,
                                      
                                    ]}
                                />

                        </h2>
                        </div>
                        <div className="flex flex-wrap">
                            
                            <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-10 border-l-2 border-gray-800">
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Name : <p className="text-white inline-flex items-center">Sahil Jasuja</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Age : <p className="text-white inline-flex items-center">20</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Birthday : <p className="text-white inline-flex items-center">09 May 2000</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">City : <p className="text-white inline-flex items-center">Indore , India</p></h2>
                               
                                
                            </div>
                            <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-10 border-l-2 border-gray-800">
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Phone : <p className="text-white inline-flex items-center">+91 - 9782356004</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Mail : <p className="text-white inline-flex items-center">sahiljasuja666@gmail.com</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Degree : <p className="text-white inline-flex items-center">B.tech(CS)</p></h2>
                                <h2 className="text-lg sm:text-xl text-teal-500 font-medium title-font mb-2">Freelance : <p className="text-white inline-flex items-center">Available</p></h2>


                            </div>
                           
                        </div>
                    </div>
                </section>

                </section>
                   

        </>


    );
}

export default General;