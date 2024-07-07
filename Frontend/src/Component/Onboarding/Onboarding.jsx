import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Onboarding.css";
import support from "../../assets/support.jpg";
import tech from "../../assets/tech.jpg";

const Onboarding = () => {
  return (
    <>
      <Nav />
      <main className="onboarding-main">
        <section className="onboarding-column">
          <div className="onboarding-content onboarding-content-left">
            <nav className="onboarding-menu">
              <Link to="/chatTicket" className="onboarding-menu-link">
                Chats and Tickets
              </Link>
              <Link to="/qna" className="onboarding-menu-link">
                QnA
              </Link>
              <Link to="/mock" className="onboarding-menu-link">
                Mocks
              </Link>
            </nav>
            <article className="onboarding-content-inner">
              <h1 className="onboarding-title-medium">Welcome</h1>
              <p className="onboarding-paragraph">
                Welcome to the onboarding page for the Project Engineers, Here
                you can explore the guidelines for onboarding on chats, tickets,
                QnA, and Mocks.
              </p>
              <button className="onboarding-btn onboarding-btn-neutral">Choose from Above Options</button>
            </article>
            <footer className="onboarding-footer">
              <p>Crio PE Onboarding</p>
            </footer>
          </div>
          <div className="onboarding-content onboarding-content-center">
            <img src={support} className="onboarding-content-image" alt="Support" />
            <article className="onboarding-content-inner">
              <h2 className="onboarding-title-medium">The Process</h2>
              <p className="onboarding-paragraph">
                This involves understanding the users' problems, leveraging
                their deep knowledge of the MERN stack, and communicating
                solutions in an easily comprehensible manner.
              </p>
            </article>
          </div>
          <div className="onboarding-content onboarding-content-right">
            <article className="onboarding-content-inner">
              <h2 className="onboarding-title-medium">The Aim</h2>
              <p className="onboarding-paragraph">
                The aim of a Project Engineer (PE) handling chats, tickets, and
                Q&A for users regarding MERN stack tech doubts should be to
                provide timely, accurate, and clear guidance to help users
                resolve their technical issues efficiently.
              </p>
            </article>
            <img src={tech} className="onboarding-content-image" alt="Tech" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Onboarding;
