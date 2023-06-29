import { styled } from "styled-components";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
    </div>
  );
};

const StyledNavBar = styled(NavBar)`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 1rem 2rem;
    overflow: hidden;
  }

  li {
    float: right;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: inherit;
    font-weight: bold;
    font-size: 18px;
  }
`;

export default StyledNavBar;
