import { styled } from "styled-components";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

interface ContactGridProps {
  className?: string;
}

const ContactGrid = ({ className }: ContactGridProps) => {
  return (
    <div className={className}>
      <div>
        <LinkedIn />
        <p>
          <a
            href="https://www.linkedin.com/in/chloeebakerr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/chloeebakerr
          </a>
        </p>
      </div>
      <div>
        <Mail />
        <p>
          <a
            href="mailto:isabelchloe2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            isabelchloe2@gmail.com
          </a>
        </p>
      </div>
      <div>
        <Phone />
        <p>07889879826</p>
      </div>
    </div>
  );
};

const StyledContactGrid = styled(ContactGrid)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  > div {
    text-align: center;
    clear: both;
    display: flex;
    align-items: center;
    p,
    a {
      color: white;
      float: right;
    }
    svg {
      padding-right: 21px;
    }
  }
  @media (max-width: 1000px) {
    grid-gap: 20px;
    font-size: 16px;
    > div {
      svg {
        padding-right: 10px;
      }
    }
  }
  @media (max-width: 750px) {
    grid-gap: 10px;
    font-size: 14px;
    > div {
      svg {
        padding-right: 5px;
      }
    }
  }
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

export default StyledContactGrid;
