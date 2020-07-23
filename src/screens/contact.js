import React from 'react';

function Contact() {
    return (

        <>

            <section className="text-gray-500 bg-gray-900 body-font relative">
                <div className="absolute inset-0 bg-gray-900">
                    <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.314209813725!2d75.83900121371018!3d22.67934418512795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4330d26ad5%3A0x7da6be546436ac8a!2sSahaj%20Residency!5e0!3m2!1sen!2sin!4v1587070107400!5m2!1sen!2sin" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
                </div>
                <div className="container px-5 py-4 mx-auto relative z-10">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
                    </div>
                  
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg  bg-gray-800 p-8 flex-col">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
              <i className="fa fa-envelope"></i>

                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">Email</h2>
                                        </div>
                                        <div className="flex-grow">
                                   
                                            <p className="leading-relaxed text-base" >
                                        <a href="mailto:sahiljasuja666@gmail.com" style={{ color: "white" }}>
                                                sahiljasuja666@gmail.com
                                    </a>
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg bg-gray-800 p-8 flex-col">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                        <i className="fa fa-mobile"></i>

                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">Call me</h2>
                                        </div>
                                        <div className="flex-grow">
                                    <p className="leading-relaxed text-base" >
                                        <a href="tel:+919782356004" style={{ color: "white" }}>
                                            +91-9782356004
                                    </a>
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg bg-gray-800 p-8 flex-col">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                        <i className="fa fa-map-marker"></i>

                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">Address</h2>
                                        </div>
                                        <div className="flex-grow">
                                    <p className="leading-relaxed text-white" >
                                       
                                            J-603,Sahaj Residency,Kesar bagh <br />
                                            Indore ,India
                                    
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                           
                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a className="text-teal-500" href="mailto:sahiljasuja666@gmail.com">sahiljasuja666@gmail.com</a>
                                <div className="p-4 md:w-full">
                                    <div className="flex rounded-lg bg-gray-800 p-8 flex-col">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                                <i className="fa fa-share-alt"></i>

                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">Social Profiles</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-white" >
                                                <a href="https://github.com/sahil-cloud" className="mr-3 mb-2" target="_blank" style={{ color: "black" }}>
                                                    <i className="fa fa-github-square" style={{fontSize:30}}></i>

                                    </a>
                                                <a href="https://www.linkedin.com/in/sahil-jasuja-180b831b2" className="mr-3 mb-2" target="_blank" style={{ color: "skyblue" }}>
                                                    <i className="fa fa-linkedin-square" style={{ fontSize: 30 }}></i>

                                                </a>
                                                <a href="https://www.facebook.com/sahil.jasuja.566" className="mr-3 mb-2" target="_blank" style={{ color: "blue" }}>
                                                    <i className="fa fa-facebook-official" style={{ fontSize: 30 }}></i>

                                                </a>
                                                <a href="https://www.instagram.com/thesahiljasuja7" target="_blank" style={{ color: "red" }}>
                                                    <i className="fa fa-instagram" style={{ fontSize: 30 }}></i>

                                                </a>
                                             
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
</section>

        </>


    );
}

export default Contact;