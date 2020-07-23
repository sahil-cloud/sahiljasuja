import React from 'react';
import '../App.css';
import imga from '../images/avi4.jpg';
import { NavLink } from 'react-router-dom';
import Typical from "react-typical";



function About() {

  const synth = window.speechSynthesis;
  let voices = [];

  const getVoices = () => {
    voices = synth.getVoices();
  };
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }
  const speak1 = () => {
    console.log("speak");
    // console.log(voices[8]);
    let text =
     ["Sahil is a computer science engineer currently working on mobile app development and cybersecurity",
     "he is looking forward to learn new technologies like argumented reality and Artificial intelligence etc"
    ]
    let speakText = new SpeechSynthesisUtterance(text);
    speakText.voice = voices[0];
    synth.speak(speakText);
  };


  

    return (
      <>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
              <NavLink
                className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium bg-teal-700 inline-flex items-center leading-none  border-gray-800  border-teal-500 text-white tracking-wider rounded-t"
                to="/about/"
              >
                About
              </NavLink>
              <NavLink
                className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider"
                to="/about/general"
              >
                General
              </NavLink>
              <NavLink
                className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none   border-gray-800 text-white tracking-wider"
                to="/about/education"
              >
                Education
              </NavLink>
              <NavLink
                className="sm:px-6 py-3 w-1/2 lg:mr-5 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800  text-white tracking-wider"
                to="/about/skills"
              >
                Skills
              </NavLink>
              <NavLink
                className="sm:px-6 py-3 w-1/2 sm:w-auto mb-2 justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  border-gray-800 text-white  tracking-wider"
                to="/about/other"
              >
                Vision
              </NavLink>
            </div>
            <img
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src={imga}
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-white">
                I am a
                <Typical
                  className="ml-2 text-red-300"
                  style={{
                    color: "lightseagreen",
                    borderBottom: "2px solid lightsalmon",
                  }}
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Computer Science Engineer",
                    4000,
                    "Python developer",
                    2000,
                    "Full stack Web developer",
                    2000,
                    "Mobile App developer",
                    2000,
                    "DS and CyberSecurity Learner",
                    2000,
                  ]}
                />
              </h1>
              <button className="text-red-300 " onClick={speak1}>
                Let My assistant describe
              </button>
              <hr />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I am currently a Python developer , a full stack Web developer
                and Mobile App developer and Freelancer <br />
                I am looking forward to learn new technologies like Data Science
                , Artificial Intelligence , Cyber Security , Cloud Computing ,
                AR <br />
                Currently I am working on Mobile App development , Data Science
                and Cyber Security
              </p>
            </div>
          </div>
        </section>
      </>
    );
}

export default About;