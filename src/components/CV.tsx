import { styled } from "styled-components";
import ChloePicture from "./CV/ChloePicture";
import ContactMe from "./CV/ContactMe";
import WorkExperience from "./CV/WorkExperience";
import Skills from "./CV/Skills";
import Education from "./CV/Education";

interface CVProps {
  className?: string;
  id: string;
}

const CV = ({ className, id }: CVProps) => {
  return (
    <div className={className} id={id}>
      <ChloePicture />
      <ContactMe>
        <h1>Contact Me</h1>
        <p>
          <a
            href="https://www.linkedin.com/in/chloeebakerr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/chloeebakerr
          </a>
        </p>
        <p>
          <a
            href="mailto:isabelchloe2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            isabelchloe2@gmail.com
          </a>
        </p>
        <p>07889879826</p>
        <p>Location: Lymington</p>
      </ContactMe>
      <WorkExperience>
        <h1>Work Experience</h1>
        <h2>Apprentice/ Front End Developer</h2>
        <h2>
          Huler,{" "}
          <a href="huler.io" target="_blank" rel="noopener noreferrer">
            huler.io
          </a>
        </h2>
        <p>
          January 2022 to July 2023
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
        </p>
      </WorkExperience>
      <Skills>
        <h1>Skills</h1>
        <ul>
          <li>Golang, JavaScript, HTML, CSS React, NextJS</li>
          <li>
            Certification in ‘RESTful API web services testing & documentation
            with Swagger’
          </li>
          <li>Certification in ‘Mastering Go Programming’</li>
        </ul>
      </Skills>
      <Education>
        <h1>Education History</h1>
        <h2>University of Winchester</h2>
        <p>2020- Present</p>
        <p>
          Digital and Technology Solutions Degree Apprenticeship: Software
          Engineering Predicted 1st, course ending July 2023
        </p>
        <h2>Peter Symonds Sixth form College</h2>
        <p>2018-2020</p>
        <p>D** in IT and A in business studies</p>
      </Education>
    </div>
  );
};

const StyledCV = styled(CV)`
  position: relative;
  min-height: 80vh;
  font-size: 20px;
  margin: auto;
  width: 90%;
  padding-top: 3rem;
  overflow-y: scroll;
  h1 {
    font-size: 30px;
    color: #d41919;
  }
  h2 {
    font-size: 20px;
  }
  > div {
    padding-top: 2rem;
  }
`;

export default StyledCV;
