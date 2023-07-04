import styled from "styled-components";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CV from "./components/CV/CV";
import References from "./components/References";
import StyledHeader from "./components/Header";

interface HomeProps {
  className?: string;
}

function Home({ className }: HomeProps) {
  return (
    <div className={className}>
      <NavBar />
      <StyledHeader id="home" />
      <About id="about" />
      <CV id="cv" />
      <Projects id="projects" />
      <References id="references" />
      <Contact id="contact" />
    </div>
  );
}

const StyledHome = styled(Home)`
  text-align: center;
  font-family: "Outfit", sans-serif;
  overflow: hidden;
`;
export default StyledHome;
