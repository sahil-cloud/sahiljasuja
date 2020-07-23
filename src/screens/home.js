import React,{useEffect} from 'react';
import web from '../images/aa1.jpg';
import Typical from 'react-typical';

function Home() {


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
    console.log(voices[0]);
    let text = [
      "Hello",
      "Welcome to Mr Jasuja's Portfolio I am his personal assistant Avni",
      "Here you will get to know everthing about Sahil jasuja",
      "and for any query mail him at sahiljasuja666@gmail.com or call him at 9782356004",
    ];

    const speakText = new SpeechSynthesisUtterance(text);
    speakText.voice = voices[0];
    synth.speak(speakText);

    speakText.onerror = function (event) {
      console.log(
        "An error has occurred with the speech synthesis: " + event.error
      );
    };
  };
    return (
      <>
        <div>
          <section className="text-gray-500 bg-gray-900 body-font relative">
            <div className="absolute inset-0 bg-gray-900">
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src={web}
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/2 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-white text-lg mb-1 font-medium title-font py-8"></h2>
                <p className="leading-relaxed mb-5 text-gray-500"></p>
                <h2
                  className="text-white text-lg mb-4 font-medium title-font mt-lg-5"
                  style={{ fontSize: 33 }}
                >
                  I am
                  <span
                    className="ml-3"
                    style={{
                      color: "lightseagreen",
                      borderBottom: "2px solid lightsalmon",
                    }}
                  >
                    <Typical
                      loop={Infinity}
                      wrapper="b"
                      steps={["SAHIL JASUJA", 5000]}
                    />
                  </span>
                </h2>
                <p
                  className="leading-relaxed mb-5 text-gray-500 mr-3"
                  style={{ fontSize: 26 }}
                >
                  I am a
                  <Typical
                    className="ml-4 text-red-300"
                    style={{
                      color: "lightseagreen",
                      borderBottom: "2px solid lightsalmon",
                    }}
                    loop={Infinity}
                    wrapper="b"
                    steps={[
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
                </p>

                <div className="flex rounded-lg p-2 flex-col">
                  <div className="flex items-center"></div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-white">
                      <a
                        href="https://github.com/sahil-cloud"
                        className="mr-4 mb-2"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        <i
                          className="fa fa-github-square"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sahil-jasuja-180b831b2"
                        className="mr-4 mb-2"
                        target="_blank"
                        style={{ color: "skyblue" }}
                      >
                        <i
                          className="fa fa-linkedin-square"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                      <a
                        href="https://www.facebook.com/sahil.jasuja.566"
                        className="mr-4 mb-2"
                        target="_blank"
                        style={{ color: "blue" }}
                      >
                        <i
                          className="fa fa-facebook-official"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                      <a
                        href="https://www.instagram.com/thesahiljasuja7"
                        className="mr-4 mb-2"
                        target="_blank"
                        style={{ color: "red" }}
                      >
                        <i
                          className="fa fa-instagram"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                      <a
                        href="mailto:sahiljasuja666@gmail.com"
                        target="_blank"
                        className="text-red-600"
                      >
                        <i
                          className="fa fa-google-plus-official"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                    </p>
                    <button className="text-red-300" onClick={speak1}>
                      My Assistant - Click here
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3"></p>
              </div>
            </div>
            <footer className="text-gray-500 body-font relative z-10">
              <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                  © 2020 sahiljasuja —
                  <a
                    href="https://gmail.com/sahiljasuja666"
                    className="text-white ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @sahiljasuja666@gmail.com
                  </a>
                </p>
              </div>
            </footer>
          </section>
        </div>
      </>
    );
}

export default Home;