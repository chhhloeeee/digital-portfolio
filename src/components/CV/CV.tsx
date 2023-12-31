import { styled } from "styled-components";
import { BorderWrapper } from "../BorderWrapper";
import { DivWrapper } from "../DivWrapper";
import File from "../icons/File";
import { IconWrapper } from "../IconWrapper";

interface CVProps {
  className?: string;
  id: string;
}

const CV = ({ className, id }: CVProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <IconWrapper>
          <File />
          <h1>CV</h1>
        </IconWrapper>
        <BorderWrapper>
          <h2>Skills</h2>
          <ul>
            <li>Golang, JavaScript, HTML, CSS React, NextJS</li>
            <li>
              Certification in ‘RESTful API web services testing & documentation
              with Swagger’
            </li>
            <li>Certification in ‘Mastering Go Programming’</li>
          </ul>
        </BorderWrapper>
        <BorderWrapper>
          <h2>Work Experience</h2>
          <h3>Huler</h3>
          <h4>Apprentice/ Front End Developer</h4>
          <h5>JANUARY 2022 to JULY 2023</h5>
          <ul>
            <li>
              {" "}
              Implementing features and fixes with exposure to WordPress, styled
              components, and typescript
            </li>
            <li>
              Working closely with design and development teams to accurately
              translate mock-ups to clean code, as well integrate with back-end
              APIs
            </li>
            <li>
              Maintain project documentation (change logs, responding in
              tickets, team/ project updates)
            </li>
            <li>
              Maintain developer standards around internal coding standards and
              best practice
            </li>
            <li>Conduct & contribute to code reviews</li>
            <li> Developed AWS knowledge</li>
          </ul>
        </BorderWrapper>
        <DivWrapper>
          <h2>Education</h2>
          <h3>University of Winchester</h3>
          <h5>2020-PRESENT</h5>
          <p>
            Digital and Technology Solutions Degree Apprenticeship: Software
            Engineering Predicted 1st, course ending July 2023
          </p>
          <br />
          <h3>Peter Symonds Sixth form College</h3>
          <h5>2018-2020</h5>
          <p>D** in IT and A in business studies</p>
        </DivWrapper>
      </div>
    </div>
  );
};

const StyledCV = styled(CV)`
  position: relative;
  display: block;
  padding-top: 138px;
  background-color: #f5f5f5;
  padding-bottom: 84px;
  text-align: left;

  h1 {
    font-size: 40px;
  }

  > div {
    margin: auto;
    width: 40%;
    h2 {
      font-size: 28px;
      margin: 0;
      padding-bottom: 30px;
    }
    h3 {
      font-size: 24px;
      color: #d41919;
      margin-bottom: 4px;
    }
    h4 {
      margin: 0;
      margin-bottom: 4px;
    }

    h5 {
      font-size: 14px;
      color: #88888a;
      margin-top: 0;
      letter-spacing: 1.1px;
    }
    li {
      font-size: 18px;
      line-height: 3;
      font-weight: 600;
    }
    p {
      margin: 0;
      font-size: 18px;
      line-height: 2;
      font-weight: 600;
    }
  }
  svg {
    padding-right: 21px;
  }
  @media (max-width: 1000px) {
    > div {
      width: 60%;
    }
  }
  @media (max-width: 750px) {
    > div {
      width: 70%;
    }
  }
  @media (max-width: 600px) {
    > div {
      width: 80%;
      text-align: justify;
      ul {
        padding-left: 0%;
      }
    }
  }
`;

export default StyledCV;
