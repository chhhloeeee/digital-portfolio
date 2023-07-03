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
  border-bottom: 2px solid #f5f5f5;
  padding-bottom: 60px;
  div:nth-last-of-type(1) {
    text-align: left;
    font-weight: bold;
    h1 {
      font-size: 70px;
      color: #d41919;
    }
    p {
      font-size: 22px;
    }
    strong {
      color: #d41919;
    }
  }
`;

export default StyledHeader;
