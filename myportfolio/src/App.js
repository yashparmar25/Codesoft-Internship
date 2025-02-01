/* eslint-disable no-unused-vars */
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Section/HeroSection";
import Skills from "./components/Section/Skills";
import Experience from "./components/Section/Experience";
import Education from "./components/Section/Education";
import StarCanvas from "./components/canvas/stars.jsx";
import Projects from "./components/Section/Projects.jsx";
import Contact from "./components/Section/Contact.jsx";
import Footer from "./components/Section/Footer.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <StarCanvas />
          <div>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
            </Wrapper>
            <Contact />
            <Footer />
          </div>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
