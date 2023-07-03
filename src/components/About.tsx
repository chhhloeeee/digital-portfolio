import { styled } from "styled-components";

interface AboutProps {
  className?: string;
  id: string;
}

const About = ({ className, id }: AboutProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <p>
          I am due to gradute The University of Winchester at the end of July
          with a predicted 1st in{" "}
          <strong>Digital and Technology Solutions (Software Engineer)</strong>{" "}
          with <strong>4 years</strong> of professional experience.
        </p>
        <p>
          Over the years I have gained experince working with{" "}
          <strong>React, NextJS, Typescript</strong> and{" "}
          <strong>Styled-Components</strong> and really love working with this
          stack. I also have some experience with SQL, Golang and AWS.
        </p>
        <p>
          Outside of work I spend most of my time either at the gym or
          socialising with friends. I am a very <strong>driven person</strong>{" "}
          and <strong>I love to learn new things!</strong> Recently I’ve picked
          up sewing as well as teaching myself Spanish which is going very well.
        </p>
      </div>
    </div>
  );
};

const StyledAbout = styled(About)`
  > div {
    margin: auto;
    width: 40%;
    font-size: 20px;
    text-align: justify;
    line-height: 2;
    padding-bottom: 140px;
    strong,
    h1 {
      color: #d41919;
    }
  }
  h1 {
    padding: 1rem 1rem;
    font-size: 90px;
  }
  /* @media (max-width: 1200px) {
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
  } */
`;

export default StyledAbout;
