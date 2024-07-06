import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./practice.css";

const Practice = () => {
  const [visibleDivs, setVisibleDivs] = useState([]); // Initially show the first div

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const divs = document.querySelectorAll(".landing-div");
    const newVisibleDivs = [...visibleDivs];

    divs.forEach((div, index) => {
      if (
        scrollPosition >= div.offsetTop + div.clientHeight / 2 &&
        !newVisibleDivs.includes(index)
      ) {
        newVisibleDivs.push(index);
      }
    });

    setVisibleDivs(newVisibleDivs);
  };

  useEffect(() => {
    // Trigger initial animation for the first div after a short delay
    setTimeout(() => {
      setVisibleDivs([0]);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToPage = () => {};

  return (
    <>
      <Nav />
      <div className="landing-page">
        <div
          className={`landing-div ${visibleDivs.includes(0) ? "visible" : ""}`}
        >
          <div className="left-content">
            <h2>Onboarding and Training</h2>
            <p>Key points:</p>
            <ul>
              <li>Lengthy onboarding processes</li>
              <li>Hindering productivity</li>
              <li>Improve efficiency</li>
            </ul>
            <button>
              <Link to="/onboarding">Learn More</Link>
            </button>
          </div>
          <div className="right-content"> 
            <img
              src="https://attensi.com/wp-content/uploads/employee-onboarding-scaled.jpg"
              alt="Onboarding and Training"
            />
          </div>
        </div>
        <div
          className={`landing-div ${visibleDivs.includes(1) ? "visible" : ""}`}
        >
          <div className="right-content">
            <img
              src="https://lh4.googleusercontent.com/proxy/pj96rgWZfLiaeGvmzQb9528ehhKX_3Or76RHVY_JWaPsLnmcKcPCoCMdNoV93qLVUcjBDimfPAcNKe_XifDssd9Rsi6n2INovYF6SDdJkjODpzDAZC0Y4wNYNNPCHtHUW02Ek3UaLuzflBE"
              alt="Chat Analysis"
            />
          </div>
          <div className="left-content">
            <h2>Previous Chat Analysis for Project Engineers</h2>
            <p>Key points:</p>
            <ul>
              <li>Implement a robust system to process chat data.</li>
              <li>Analyze ticket data to derive actionable insights.</li>
              <li>Enhance decision-making for Project Engineers.</li>
            </ul>
            <button>
              <Link to="/analytics">Go to Analytics Page</Link>
            </button>
          </div>
        </div>
        <div
          className={`landing-div ${visibleDivs.includes(2) ? "visible" : ""}`}
        >
          <div className="left-content">
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li>Increases Productivity</li>
              <li>Enhances Efficiency</li>
              <li>Improves Accuracy</li>
            </ul>
            <button>
              <Link to="/faqs">Check FAQs</Link>
            </button>
          </div>
          <div className="right-content">
            <img
              src="https://www.greengeeks.com/support/wp-content/uploads/2016/02/faq.jpg"
              alt="FAQs"
            />
          </div>
        </div>
        <div
          className={`landing-div ${visibleDivs.includes(3) ? "visible" : ""}`}
        >
          <div className="right-content">
            <img
              src="https://images.spiceworks.com/800x451/wp-content/uploads/2023/12/11210202/best-generative-AI-chatbots.jpg"
              alt="Practice chat"
            />
          </div>
          <div className="left-content">
            <h2>Take Your First Chat with Chat Bot!</h2>
            <p>Key points:</p>
            <ul>
              <li>Enhanced efficiency while actually working on chat!</li>
              <li>familiar with the responses</li>
              <li>Help PE in their learning curve</li>
            </ul>
            <button>
              <Link to="/chat">Let's Go</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Practice;
