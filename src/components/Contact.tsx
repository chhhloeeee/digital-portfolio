import { styled } from "styled-components";

interface ContactProps {
  className?: string;
  id: string;
}

const Contact = ({ className, id }: ContactProps) => {
  return (
    <div className={className} id={id}>
      <div className="custom-shape-divider-top-1688052376">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h1>Contact</h1>
    </div>
  );
};

const StyledContact = styled(Contact)`
  position: relative;
  height: 30vh;
  font-size: 20px;
  background-color: #d41919;

  h1 {
    position: absolute;
    color: white;
    left: 5%;
    top: 5%;
  }
  .custom-shape-divider-top-1688052376 {
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1688052376 svg {
    position: relative;
    display: block;
    width: calc(151% + 1.3px);
    height: 130px;
  }

  .custom-shape-divider-top-1688052376 .shape-fill {
    fill: white;
  }
`;

export default StyledContact;
