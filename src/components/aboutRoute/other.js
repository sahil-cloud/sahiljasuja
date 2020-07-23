import React from 'react';
import { NavLink } from 'react-router-dom';


function Other() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div className="flex mx-auto flex-wrap mb-20">
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white tracking-wider " to="/about/">
                            About
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white tracking-wider " to="/about/general">
                            General
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/education">
                            Education
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800  text-white tracking-wider" to="/about/skills">
                            Skills
      </NavLink>
                        <NavLink className="sm:px-6 py-3 w-1/2 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 border-teal-500 bg-teal-700 text-white tracking-wider rounded-t" to="/about/other">
                            Vision
      </NavLink>
                    </div>
                    <section className="text-gray-500 body-font bg-gray-900">
                        <div className="container px-5 py-4 mx-auto">
                            <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                                <p className="lg:w-1/2 w-full leading-relaxed text-white">I want to develop certains things using the future technologies like AR and AI to make the lives of middle-class and poor people good and also make a change in our Education system</p>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="border border-gray-800 p-6 rounded-lg">
                                       
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Hobbies</h2>
                                        <p className="leading-relaxed text-base">
                                            Cooking <br />
                                            playing sports <br />
                                            Learning new things <br />
                                            Listning songs <br />

                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="border border-gray-800 p-6 rounded-lg">
                                        
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Tech Intrests</h2>
                                        <p className="leading-relaxed text-base">
                                            Data Science <br />
                                            Cyber Security <br />
                                            AR <br />
                                            AI <br />

                                        </p>
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

export default Other;