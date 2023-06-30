import styled from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CV from "./components/CV";
import References from "./components/References/References";

interface HomeProps {
  className?: string;
}

function Home({ className }: HomeProps) {
  return (
    <div className={className}>
      <NavBar />
      <Header id="home" />
      <About id="about" />
      <CV id="cv" />
      <References id="references" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

const StyledHome = styled(Home)`
  text-align: center;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
`;
export default StyledHome;
