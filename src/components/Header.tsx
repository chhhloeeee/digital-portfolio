import { styled } from "styled-components";
import OrgangeGradient from "../Images/orangeGradient.png";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <h1>Portfolio</h1>
      <p>Chloe Baker | Software Developer</p>
    </div>
  );
};

const StyledHeader = styled(Header)`
  margin-top: -6rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 70px;
  background-image: url(${OrgangeGradient});
  h1 {
    font-family: "Caprasimo", sans-serif;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    margin-top: -7rem;
  }
`;

export default StyledHeader;
