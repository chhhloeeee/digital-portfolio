import { styled } from "styled-components";

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
    </div>
  );
};

const StyledAbout = styled(About)`
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
  > div {
    margin: auto;
    width: 60%;
    padding: 1rem 1rem;
    font-size: 20px;
    strong,
    h1 {
      color: #d41919;
    }
  }
  h1 {
    padding: 1rem 1rem;
    font-size: 90px;
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 60px;
    }
    > div {
      width: 80%;
    }
  }
  @media (max-width: 750px) {
    > div {
      padding-top: 2rem;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 40px;
    }
    > div {
      padding-top: 4rem;
      width: 90%;
    }
  }
`;

export default StyledAbout;
