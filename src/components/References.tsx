import { styled } from "styled-components";
import { DivWrapper } from "./DivWrapper";
import { BorderWrapper } from "./BorderWrapper";

interface ReferencesProps {
  className?: string;
  id: string;
}

const References = ({ className, id }: ReferencesProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>References</h1>
        <DivWrapper>
          <p>
            “Like many tech businesses globally, challenging economic
            circumstances have led us to make the difficult decision to
            right-size our teams to protect the long-term future of our
            business. This right sizing of teams, no way reflects the talen,
            passion or dedication Chloe has shown since she joined us. Any
            company would be lucky to have Chloe - she will be greatly missed.”
          </p>
          <h2>Suzi Archer</h2>
          <h3>Staff Director, Huler</h3>
        </DivWrapper>
        <BorderWrapper>
          <p>
            “From the moment Chloe joined our team, her level of enthusiasm and
            dedication were truly remarkable. She possesses an infectious
            passion for her work and a genuine desire to continuously improve
            everything she does. Chloe’s positive attitude and unwavering
            commitment to excellence have consistenly inspired those around her,
            creating a vibrant and motivated team environment.
            <br /> <br />
            Throughout, her time with us, Chloe demonstrated an exceptional
            aptitude for frontend development. She quickly grasped complex
            concepts and eagerly took on new Challenges, always seeking
            opportunities to expand her skill set.”
          </p>
          <h2>Joe Ciavucco</h2>
          <h3>Tech Lead & Line Manager, Huler</h3>
        </BorderWrapper>
        <BorderWrapper>
          <p>
            “The level of expertise, attention to detail, and thoroughness you
            consistently demonstrate in your work surpass what one would
            typically expect from someone in an Apprentice Developer role. The
            quality of your work rivals that of experienced and qualified
            developers, and it speaks volumes about you.”
          </p>
          <h2>Brian Lunnon </h2>
          <h3>QA Analyst, Huler</h3>
        </BorderWrapper>
        <DivWrapper>
          <p>
            “I originally employed Chloe as a degree apprentice at AirSensa and
            she joined me when I came to Huler. Chloe is a bright and gifted
            developer who is constantly building her skills.
            <br /> <br />
            Chloe’s enthusiasm and willingness to take on tasks is infectious
            and her overall attitude to her work and her colleagues makes her a
            joy to work with. Given the opportunity, I would not hesitate to
            hire Chloe again.”
          </p>
          <h2>Gary Barnett</h2>
          <h3>CTO, Huler</h3>
        </DivWrapper>
      </div>
    </div>
  );
};

const StyledReferences = styled(References)`
  position: relative;
  display: block;
  padding-top: 138px;
  background-color: #f5f5f5;
  padding-bottom: 84px;
  text-align: left;
  > div {
    margin: auto;
    width: 40%;
  }

  p {
    font-size: 18px;
    line-height: 2;
  }
  h2,
  h3 {
    font-weight: bolder;
    margin: 0;
  }
  h2 {
    color: #d41919;
    font-size: 20px;
    padding-bottom: 4px;
  }
  h3 {
    font-size: 14px;
  }
  /* @media (max-width: 750px) {
    > div {
      padding-top: 3rem;
    }
  }
  @media (max-width: 600px) {
    > div {
      padding-top: 6rem;
    }
  } */
`;

export default StyledReferences;
