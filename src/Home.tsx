import styled from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

interface HomeProps {
  className?: string;
}

function Home({ className }: HomeProps) {
  return (
    <div className={className}>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

const StyledHome = styled(Home)`
  text-align: center;
  font-family: sofia-pro, sans-serif;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  overflow: hidden;
`;
export default StyledHome;
