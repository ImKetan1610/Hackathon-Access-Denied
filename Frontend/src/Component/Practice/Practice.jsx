import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
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
            <button onClick={() => goToPage("/onboarding")}>Learn More</button>
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
          <div className="left-content">
            <h2>Onboarding and Training</h2>
            <p>Key points:</p>
            <ul>
              <li>Lengthy onboarding processes</li>
              <li>Hindering productivity</li>
              <li>Improve efficiency</li>
            </ul>
            <button onClick={() => goToPage("/onboarding")}>Learn More</button>
          </div>
          <div className="right-content">
            <img
              src="https://attensi.com/wp-content/uploads/employee-onboarding-scaled.jpg"
              alt="Onboarding and Training"
            />
          </div>
        </div>
        <div
          className={`landing-div ${visibleDivs.includes(2) ? "visible" : ""}`}
        >
          <div className="left-content">
            <h2>Onboarding and Training</h2>
            <p>Key points:</p>
            <ul>
              <li>Lengthy onboarding processes</li>
              <li>Hindering productivity</li>
              <li>Improve efficiency</li>
            </ul>
            <button onClick={() => goToPage("/onboarding")}>Learn More</button>
          </div>
          <div className="right-content">
            <img
              src="https://attensi.com/wp-content/uploads/employee-onboarding-scaled.jpg"
              alt="Onboarding and Training"
            />
          </div>
        </div>
        <div
          className={`landing-div ${visibleDivs.includes(3) ? "visible" : ""}`}
        >
          <div className="left-content">
            <h2>Onboarding and Training</h2>
            <p>Key points:</p>
            <ul>
              <li>Lengthy onboarding processes</li>
              <li>Hindering productivity</li>
              <li>Improve efficiency</li>
            </ul>
            <button onClick={() => goToPage("/onboarding")}>Learn More</button>
          </div>
          <div className="right-content">
            <img
              src="https://attensi.com/wp-content/uploads/employee-onboarding-scaled.jpg"
              alt="Onboarding and Training"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Practice;
