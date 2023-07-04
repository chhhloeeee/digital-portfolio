import { styled } from "styled-components";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={className}>
      <ul>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#cv">CV</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
        <a href="#contact">Contact</a>
      </ul>
    </div>
  );
};

const StyledNavBar = styled(NavBar)`
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 2px solid #f5f5f5;

  ul {
    display: table;
  }
  ul,
  a {
    float: none;
    display: inline-block;
    text-align: center;
    padding: 5px 16px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  a:hover {
    color: #d41919;
    transition: 0.5s ease;
  }
`;

export default StyledNavBar;
