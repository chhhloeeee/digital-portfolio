import { styled } from "styled-components";
import ReactImg from "../Images/undraw_react.svg";

interface AboutProps {
  className?: string;
  id: string;
}

const About = ({ className, id }: AboutProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>Hello!</h1>
        <p>
          I'm <strong>Chloe</strong>, a <strong>Frontend Developer</strong>{" "}
          based in Lymington with a passion for meaningful and usable UI. I am
          due to gradute The University of Winchester at the end of July with a
          predicted 1st in
          <strong>
            {" "}
            Digital and Technology Solutions (Software Engineer){" "}
          </strong>
          with <strong>4 years</strong> of professional experience. <br />
          <br />
          Over the years I have gained experince working with{" "}
          <strong>React, NextJS, Typescript</strong> and{" "}
          <strong>Styled-Components</strong> and really love working with this
          stack. I also have some experience with SQL, Golang and AWS. <br />
          <br />
          Outside of work I spend most of my time either at the{" "}
          <strong>gym</strong> or <strong>socialising</strong> with friends. I
          am a very <strong>driven person</strong> and{" "}
          <strong>I love to learn new things!</strong> Recently I've picked up
          sewing as well as teaching myself Spanish which is going very well.
        </p>
      </div>
      <img src={ReactImg} alt="girl with React logo"></img>
    </div>
  );
};

const StyledAbout = styled(About)`
  position: relative;
  min-height: 70vh;
  font-size: 20px;
  border-top: solid 15px white;
  border-bottom: solid 15px white;
  padding: 0 6rem;
  > div {
    float: left;
    width: 50%;
    height: 100%;
    padding: 5rem 1rem;
    h1 {
      font-family: "Caprasimo", sans-serif;
    }
    strong,
    h1 {
      color: #f12336;
    }
  }
  img {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: 400px;
    padding-left: 10rem;
  }
`;

export default StyledAbout;
