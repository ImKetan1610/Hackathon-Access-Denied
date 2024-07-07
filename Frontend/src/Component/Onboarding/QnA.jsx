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

const QnA = () => {
  const [run, setRun] = useState(false);

  const steps = [
    {
      target: ".step-1",
      content: "Step 1: Setup before QnA Session Video setup Audio clarity",
    },
    {
      target: ".step-2",
      content:
        "Step 2: Explain the topic for which this QnA session is arranged eg: Hi, I’m Apoorva Dwivedi (PE name) I’m here to take your doubts regarding MERN-1 sprint.",
    },
    {
      target: ".step-3",
      content:
        "Step 3: Try to make the QnA interactive, when a user ask you his/her doubt then ask them their own approach first eg: How did you approached this problem, what step did you take to resolve it, which part is not clear to you etc.",
    },
    {
      target: ".step-4",
      content:
        "Step 4: Try to give them approach first, in place of giving direct solution.",
    },
    {
      target: ".step-5",
      content:
        "Step 5: Try to take doubts from the chat box of the meet too, do not ignore them.",
    },
    {
      target: ".step-6",
      content:
        "Step 6: If you are not able to solve the doubt at the exact moment, then assure them that you will try to find the solution and let them know in the next session. Do not waste whole time on that single doubt. Move forward with other doubts.",
    },
    {
      target: ".step-7",
      content:
        "Step 7: After the given time, conclude the session if all the doubts are resolved",
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
              Project Engineer QnA Onboarding Guidelines
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
                  Step 1: Setup before QnA Session
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Do the required setup before joining the QnA session:
                  <ul>
                    <li>Video setup</li>
                    <li>Audio clarity</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-2" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 2: Explain the QnA Topic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Explain the topic for which this QnA session is arranged:
                  <ul>
                    <li>
                      Hi, I’m Apoorva Dwivedi (PE name). I’m here to take your
                      doubts regarding MERN-1 sprint.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-3" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 3: Interactive QnA
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Try to make the QnA interactive:
                  <ul>
                    <li>
                      When a user asks a doubt, ask them about their own
                      approach first.
                    </li>
                    <li>
                      Example questions: How did you approach this problem? What
                      steps did you take to resolve it? Which part is not clear
                      to you?
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-4" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 4: Provide Approach First
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Try to give them an approach first, instead of giving a direct
                  solution.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-5" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 5: Address Chat Box Doubts
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Try to take doubts from the chat box of the meeting as well.
                  Do not ignore them.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-6" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 6: Manage Unsolved Doubts
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  If you are unable to solve a doubt immediately, assure them
                  that you will try to find the solution and let them know in
                  the next session. Do not spend excessive time on a single
                  doubt; move forward with others.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="step-7" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 7: Conclude the Session
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  After the allocated time, conclude the session if all doubts
                  are resolved.
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

export default QnA;
