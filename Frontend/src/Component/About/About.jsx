import React from "react";
import Nav from "../Nav/Nav";
import img from "./../../assets/alokkumar.jpeg";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const members = [
    {
      name: "Ketan Makode",
      role: "Frontend Developer",
      img: "https://media.licdn.com/dms/image/D5603AQHmisevs6V-Wg/profile-displayphoto-shrink_200_200/0/1711565017432?e=2147483647&v=beta&t=2gxdXF049G8KQ53xOdouFjL_DKFruEzC2XH5LmLtem4",
      linkedin: "https://www.linkedin.com/in/ketan-makode/",
      github: "https://github.com/imketan1610",
      description:
        "Ketan is a skilled frontend developer with a passion for building responsive and user-friendly web applications.",
    },
    {
      name: "Alok Kumar",
      role: "Backend Developer",
      img,
      linkedin: "https://www.linkedin.com/in/alokkr11/",
      github: "https://github.com/alokkr11",
      description:
        "Alok specializes in backend development and has extensive experience with Java and springboot.",
    },
    {
      name: "Apoorva Dwivedi",
      role: "Full Stack Developer",
      img: "https://media.licdn.com/dms/image/D4D03AQF69aCwTttNTw/profile-displayphoto-shrink_200_200/0/1665229816307?e=2147483647&v=beta&t=9WTAk2LeALJq_9YQIjS74bQDPopS09LF8SFKnnlE2jQ",
      linkedin: "https://www.linkedin.com/in/apoorva-dwivedi-6717b7185/",
      github: "https://github.com/Apoorv0503",
      description:
        "Apoorva is a versatile full stack developer who excels in both frontend and backend technologies.",
    },
    {
      name: "Rajibul Molla",
      role: "Backend Developer",
      img: "https://media.licdn.com/dms/image/C4D03AQEjsE2SzPxTDg/profile-displayphoto-shrink_200_200/0/1654877089115?e=2147483647&v=beta&t=ppa1zcSRVyyYd6Jo_pLDNKv0tCr9MI0TLZ-lBnhpI2E",
      linkedin: "https://www.linkedin.com/in/rajibul-molla-719879234/",
      github: "https://github.com/RaJiBuLmOlLaPGEC",
      description:
        "Rajibul specializes in backend development and has extensive experience with Java and springboot.",
    },
  ];

  return (
    <>
      <Nav />
      <div className="bg-blue-50 min-h-screen p-28 shadow-sm">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          About Us
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg shadow-xl p-6 text-center border-[1px] border-slate-300"
            >
              <div className="w-34 h-34 rounded-full mb-4 border-8 border-blue-400">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-34 h-34 m-auto w-[100%] rounded-full "
                />
              </div>
              <h2 className="text-2xl font-bold text-blue-800">
                {member.name}
              </h2>
              <p className="text-blue-700 italic">{member.role}</p>
              <p className="text-blue-600 mt-2">{member.description}</p>
              <div className="flex justify-center mt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
