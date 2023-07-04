import { styled } from "styled-components";
import ChloePicture from "./CV/ChloePicture";

interface HeaderProps {
  className?: string;
  id: string;
}

const Header = ({ className, id }: HeaderProps) => {
  return (
    <div className={className} id={id}>
      <ChloePicture />
      <div>
        <h1>Hello!</h1>
        <p>
          I'm <strong>Chloe</strong>, a <strong>Frontend Developer</strong>{" "}
          based in Lymington <br /> with a passion for meaningful and usable UI.
        </p>
      </div>
    </div>
  );
};

const StyledHeader = styled(Header)`
  padding-top: 200px;
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  margin: auto;
  grid-gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-bottom: 2px solid rgba(77, 77, 78, 0.2);
  padding-bottom: 60px;
  > div {
    text-align: left;
    font-weight: bold;
    h1 {
      font-size: 70px;
      margin-bottom: 0;
      color: #d41919;
    }
    p {
      margin-top: 17px;
      font-size: 22px;
    }
    strong {
      color: #d41919;
    }
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 750px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
    padding-bottom: 70px;
    > div {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 450px) {
    display: block;
    margin: auto;
    align-items: center;
    > div {
      text-align: center;
    }
  }
`;

export default StyledHeader;
