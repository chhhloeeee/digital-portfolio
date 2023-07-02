import { styled } from "styled-components";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={className}>
      <ul>
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
        <a href="#cv">CV</a>
        <a href="#about">About Me</a>
        <a href="#home">Home</a>
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

  a {
    float: right;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;

    @media (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

export default StyledNavBar;
