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
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
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

const Chat = () => {
  const [run, setRun] = useState(false);

  const steps = [
    {
      target: ".chat-step-1",
      content:
        'After receiving a chat, if you are unsure about the user’s problem, ask for additional information. Use canned responses like "Could you please provide more details or a screenshot of the issue?"',
    },
    {
      target: ".chat-step-2",
      content:
        "Once you understand the issue, try to solve it promptly. Most issues should be resolved within 40 minutes.",
    },
    {
      target: ".chat-step-3",
      content:
        'Stay responsive to the user throughout the resolution process. Use canned responses like "We are actively working on your issue. Please wait for a moment."',
    },
    {
      target: ".chat-step-4",
      content:
        "If further interaction is needed, provide a Google Meet link for a real-time discussion to resolve the query effectively.",
    },
    {
      target: ".ticket-step-1",
      content:
        "If unable to resolve a chat issue within 1 hour, convert it into a ticket for further investigation and resolution.",
    },
    {
      target: ".ticket-step-2",
      content:
        "Tickets should be resolved within 4 hours. Provide detailed documentation of the solution approach without sharing direct code snippets.",
    },
    {
      target: ".ticket-step-3",
      content:
        'After resolving a ticket, mark it with appropriate labels indicating the resolution method (e.g., "Resolved on chat/Meet") and the level of assistance provided (e.g., "Minimal help", "Maximum help", "Medium help").',
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
        <Container className="pt-14" maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h1" color="primary">
                PE Chat and Tickets Onboarding Guidelines
              </Typography>
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
            <Accordion className="chat-step-1" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 1: Handling Chats
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  After receiving a chat, if you are unsure about the user’s
                  problem, ask for additional information. Use canned responses
                  like "Could you please provide more details or a screenshot of
                  the issue?"
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="chat-step-2" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 2: Resolving Issues
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Once you understand the issue, try to solve it promptly. Most
                  issues should be resolved within 40 minutes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="chat-step-3" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 3: Stay Responsive
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Stay responsive to the user throughout the resolution process.
                  Use canned responses like "We are actively working on your
                  issue. Please wait for a moment."
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="chat-step-4" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 4: Further Interaction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  If further interaction is needed, provide a Google Meet link
                  for a real-time discussion to resolve the query effectively.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="ticket-step-1" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 5: Converting to Tickets
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  If unable to resolve a chat issue within 1 hour, convert it
                  into a ticket for further investigation and resolution.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="ticket-step-2" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 6: Ticket Resolution
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Tickets should be resolved within 4 hours. Provide detailed
                  documentation of the solution approach without sharing direct
                  code snippets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="ticket-step-3" sx={{ boxShadow: 3, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h2" color="primary">
                  Step 7: Finalize and Close
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  After resolving a ticket, mark it with appropriate labels
                  indicating the resolution method (e.g., "Resolved on
                  chat/Meet") and the level of assistance provided (e.g.,
                  "Minimal help", "Maximum help", "Medium help").
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

export default Chat;
