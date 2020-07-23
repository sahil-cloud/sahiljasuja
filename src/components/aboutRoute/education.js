import React from 'react';
import { NavLink } from 'react-router-dom';


function Education() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-20 ">
                        <NavLink className="sm:px-6 py-3 w-1/2  lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white tracking-wider" to="/about/">
                            About
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider" to="/about/general">
                            General
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 bg-teal-700 text-white border-teal-500 tracking-wider rounded-t" to="/about/education">
                            Education
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/skills">
                            Skills
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/other">
                            Vision
      </NavLink>
                    </div>
                    <section className="text-gray-500 bg-gray-900 body-font">
                        <div className="container px-5 py-4 mx-auto">
                            <div className="text-center mb-10">
                                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> "Education is the most powerful weapon which you can use to change the World" ........<span className="text-white"> Nelson Mandela </span></p>
                                <div className="flex mt-6 justify-center">
                                    <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                                    
                                    <div className="flex-grow">
                                        <h2 className="text-white text-lg title-font font-medium mb-3">10th Class</h2>
                                        <p className="leading-relaxed text-base">I have completed my secondary education from 'RBSE' from Jhalawar,Rajasthan <br/>
                                        And I scored 89.83% 
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                                   
                                    <div className="flex-grow">
                                        <h2 className="text-white text-lg title-font font-medium mb-3">12th Class</h2>
                                        <p className="leading-relaxed text-base">I have completed my sen. secondary education in PCM from 'RBSE' from Kota,Rajasthan <br />
                                        And I scored 92.40%
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                                   
                                    <div className="flex-grow">
                                        <h2 className="text-white text-lg title-font font-medium mb-3">Btech (CS)</h2>
                                        <p className="leading-relaxed text-base">I am currently in 3rd year in computer science engineering from Medicaps University ,Indore(MP) <br />
                                        And till now my CGPA is 7.6</p>
                                       
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </section>
                </div>
            </section>

        </>


    );
}

export default Education;