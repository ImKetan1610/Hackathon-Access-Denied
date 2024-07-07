import React, { useState } from "react";
import Joyride from "react-joyride";
import {
  Button,
  CssBaseline,
  Typography,
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    body1: {
      fontSize: "1rem",
      marginBottom: "1rem",
    },
  },
});

const Mock = () => {
  const [run, setRun] = useState(false);

  const steps = [
    {
      target: ".step-1",
      content: "Start with your basic introduction.",
    },
    {
      target: ".step-2",
      content:
        "Ask the candidate to introduce themselves, including their past experience and reasons for switching to a new profile.",
    },
    {
      target: ".step-3",
      content: "Explain the flow of the mock interview, including the rounds.",
    },
    {
      target: ".step-4",
      content: "Ask 2-3 questions from HTML/CSS.",
    },
    {
      target: ".step-5",
      content: "Ask 3-4 questions from JavaScript.",
    },
    {
      target: ".step-6",
      content: "Ask 3-4 questions from React.",
    },
    {
      target: ".step-7",
      content:
        "Ask 3-4 questions from DSA and request the candidate to share their screen.",
    },
    {
      target: ".step-8",
      content: "Ask the candidate to showcase their best project.",
    },
    {
      target: ".step-9",
      content: "Fill up the feedback form after concluding the interview.",
    },
  ];

  const handleClickStart = () => {
    setRun(true);
  };

  return (
    <>
      <Nav />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" className="main-container pt-14">
          <Box sx={{ my: 4 }}>
            <Typography variant="h1" color="primary">
              Project Engineer Mocks Onboarding Guidelines
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickStart}
              >
                Start Onboarding Tour
              </Button>
              <Joyride
                steps={steps}
                run={run}
                continuous
                showSkipButton
                locale={{
                  last: "End Tour",
                  skip: "Skip Tour",
                }}
              />
            </Box>
            <Accordion className="step-1" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 1: Introduction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Hi, I’m [PE Name]. I’m here to take your mock interview.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-2" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 2: Candidate Introduction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask the candidate to introduce themselves, including past
                  experience and reasons for switching to a new profile.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-3" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 3: Explain Mock Interview Flow
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Explain the flow of the mock interview:
                  <Box mt={2}>
                    <ul>
                      <li>1. Start with an introduction.</li>
                      <li>
                        2. Ask about the candidate's background and experience.
                      </li>
                      <li>
                        3. Inform them about the rounds: HTML, CSS, JavaScript,
                        React, DSA, and Project discussion.
                      </li>
                      <li>
                        4. Detailed question Bank is provided:
                        <Link to="https://docs.google.com/document/d/1EadT9A3aHFer8Y43BAi3yOc2P7My3dWiMvCFwli2xvE/edit">
                          {" "}
                          here{" "}
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-4" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 4: HTML/CSS Questions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask 2-3 questions from HTML/CSS:
                  <Box mt={2}>
                    <ul>
                      <li>1. What is the CSS Box Model?</li>
                      <li>2. What are inline & block elements?</li>
                      <li>
                        3. What is the difference between position: relative and
                        position: absolute?
                      </li>
                      <li>
                        4. How to set media queries for different devices?
                      </li>
                      <li>5. What is a meta tag in HTML?</li>
                      <li>
                        6. Differentiate between semantic and non-semantic tags
                      </li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-5" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 5: JavaScript Questions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask 3-4 questions from JavaScript:
                  <Box mt={2}>
                    <ul>
                      <li>1. What are Promises?</li>
                      <li>2. What is type coercion?</li>
                      <li>3. What are callback functions?</li>
                      <li>
                        4. What is this keyword? What does it point to by
                        default? How does this work for arrow and regular
                        function?
                      </li>
                      <li>
                        5. Difference between arrow function and regular
                        functions
                      </li>
                      <li>6. What are Closures in JS?</li>
                      <li>
                        7. What are the differences between setTimeout() and
                        setInterval()?
                      </li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-6" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 6: React Questions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask 3-4 questions from React:
                  <Box mt={2}>
                    <ul>
                      <li>
                        1. What is the difference between virtual DOM and real
                        DOM?
                      </li>
                      <li>2. What are lifecycle methods?</li>
                      <li>
                        3. Why use useState instead of var in React components?
                      </li>
                      <li>4. Explain useEffect</li>
                      <li>5. What is ReactJS?</li>
                      <li>6. What are hooks in ReactJS?</li>
                      <li>
                        7. What are the differences between State and Props in
                        ReactJS?
                      </li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-7" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 7: DSA Questions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask 3-4 questions from DSA and request the candidate to share
                  their screen:
                  <Box mt={2}>
                    <ul>
                      <li>Merge Sorted Array</li>
                      <li>Rotate Array</li>
                      <li>Reverse words in a string</li>
                      <li>Capitalize the title</li>
                      <li>Find the first palindromic string</li>
                      <li>Maximum number of words found in sentences</li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-8" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 8: Project Showcase
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ask the candidate to showcase their best project. Ask them to
                  open the code and live hosted version. Questions to ask:
                  <Box mt={2}>
                    <ul>
                      <li>
                        Where did you face difficulty and how did you overcome
                        it?
                      </li>
                      <li>
                        Explain specific parts of the UI/functionality and their
                        implementation.
                      </li>
                    </ul>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="step-9" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 9: Feedback
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  After concluding the interview, fill up the feedback form.
                  Give marks from 1 to 3 in all 6 sections (HTML/CSS,
                  JavaScript, React, DSA, Project, and Overall Impression).
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Mock;
