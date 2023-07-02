import { styled } from "styled-components";

interface ReferenceGridProps {
  className?: string;
}

const ReferenceGrid = ({ className }: ReferenceGridProps) => {
  return (
    <div className={className}>
      <div>
        <p>
          "Like many tech businesses globally, challenging economic
          circumstances have led us to make the difficult decision to right-size
          our teams to protect the long-term future of our business. This right
          sizing of teams, no way reflects the talen, passion or dedication
          Chloe has shown since she joined us. Any company would be lucky to
          have Chloe - she will be greatly missed."
        </p>
        <h2>Suzi Archer, Staff Director</h2>
        <p>Huler</p>
      </div>
      <div>
        <p>
          "From the moment Chloe joined our team, her level of enthusiasm and
          dedication were truly remarkable. She possesses an infectious passion
          for her work and a genuine desire to continuously improve everything
          she does. Chloe's positive attitude and unwavering commitment to
          excellence have consistenly inspired those around her, creating a
          vibrant and motivated team environment.
          <br /> <br />
          Throughout, her time with us, Chloe demonstrated an exceptional
          aptitude for frontend development. She quickly grasped complex
          concepts and eagerly took on new Challenges, always seeking
          opportunities to expand her skill set."
        </p>
        <h2>Joe Ciavucco, Tech Lead & Line Manager</h2>
      </div>
      <div>
        <p>
          "The level of expertise, attention to detail, and thoroughness you
          consistently demonstrate in your work surpass what one would typically
          expect from someone in an Apprentice Developer role. The quality of
          your work rivals that of experienced and qualified developers, and it
          speaks volumes about you."
        </p>
        <h2>Brian Lunnon, QA Analyst</h2>
      </div>
      <div>
        <p>
          "I originally employed Chloe as a degree apprentice at AirSensa and
          she joined me when I came to Huler. Chloe is a bright and gifted
          developer who is constantly building her skills.
          <br /> <br />
          Chloe's enthusiasm and willingness to take on tasks is infectious and
          her overall attitude to her work and her colleagues makes her a joy to
          work with. Given the opportunity, I would not hesitate to hire Chloe
          again."
        </p>
        <h2>Gary Barnett, CTO</h2>
      </div>
    </div>
  );
};

const StyledReferenceGrid = styled(ReferenceGrid)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  width: 90%;
  color: black;
  h2,
  p {
    font-size: 20px;
    margin: 0;
  }
  > div {
    text-align: left;
    padding: 10px;
  }
  h2 {
    color: #d41919;
  }
  @media (max-width: 750px) {
    display: block;
  }
`;

export default StyledReferenceGrid;
