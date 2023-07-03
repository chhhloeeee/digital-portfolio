import { styled } from "styled-components";
import { CVWrapper } from "../BorderWrapper";
import { DivWrapper } from "../DivWrapper";

interface CVProps {
  className?: string;
  id: string;
}

const CV = ({ className, id }: CVProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>CV</h1>
        <DivWrapper>
          <h2>Skills</h2>
          <ul>
            <li>Golang, JavaScript, HTML, CSS React, NextJS</li>
            <li>
              Certification in ‘RESTful API web services testing & documentation
              with Swagger’
            </li>
            <li>Certification in ‘Mastering Go Programming’</li>
          </ul>
        </DivWrapper>
        <CVWrapper>
          <h2>Work Experience</h2>
          <h3>Apprentice/ Front End Developer</h3>
          <h3>
            Huler,{" "}
            <a href="huler.io" target="_blank" rel="noopener noreferrer">
              huler.io
            </a>
          </h3>
          <p>
            January 2022 to July 2023
            <ul>
              <li>
                {" "}
                Implementing features and fixes with exposure to WordPress,
                styled components, and typescript
              </li>
              <li>
                Working closely with design and development teams to accurately
                translate mock-ups to clean code, as well integrate with
                back-end APIs
              </li>
              <li>
                Maintain project documentation (change logs, responding in
                tickets, team/ project updates)
              </li>
              <li>
                Maintain developer standards around internal coding standards
                and best practice
              </li>
              <li>Conduct & contribute to code reviews</li>
              <li> Developed AWS knowledge</li>
            </ul>
          </p>
        </CVWrapper>
        <DivWrapper>
          <h2>Education History</h2>
          <h3>University of Winchester</h3>
          <p>2020- Present</p>
          <p>
            Digital and Technology Solutions Degree Apprenticeship: Software
            Engineering Predicted 1st, course ending July 2023
          </p>
          <br />
          <h3>Peter Symonds Sixth form College</h3>
          <p>2018-2020</p>
          <p>D** in IT and A in business studies</p>
        </DivWrapper>
      </div>
    </div>
  );
};

const StyledCV = styled(CV)`
  position: relative;
  display: block;
  padding-top: 119px;
  background-color: #f5f5f5;
  padding-bottom: 134px;
  text-align: left;
  > div {
    margin: auto;
    width: 40%;
  }
  h1 {
    font-size: 30px;
    color: #d41919;
  }

  > div {
    h2 {
      font-size: 20px;
      margin: 0;
    }
    li {
      font-size: 18px;
    }
    p {
      margin: 0;
    }
  }
`;

export default StyledCV;
