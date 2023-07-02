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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-image: url(${OrgangeGradient});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-bottom: 3rem;
  h1 {
    font-size: 120px;
    margin: 0;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    margin: 0;
  }
  @media (max-width: 1000px) {
    background-size: cover;
    h1 {
      font-size: 90px;
    }
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 25px;
    }
  }
  @media (max-width: 450px) {
    padding-top: 1rem;
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export default StyledHeader;
