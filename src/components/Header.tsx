import { styled } from "styled-components";
import OrgangeGradient from "../Images/orangeGradient.png";

interface HeaderProps {
  className?: string;
  id: string;
}

const Header = ({ className, id }: HeaderProps) => {
  return (
    <div className={className} id={id}>
      <h1>Portfolio</h1>
      <p>Chloe Baker | Software Developer</p>
    </div>
  );
};

const StyledHeader = styled(Header)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 70px;
  background-image: url(${OrgangeGradient});
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 3rem;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    margin-top: -7rem;
  }
`;

export default StyledHeader;
