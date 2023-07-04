import { styled } from "styled-components";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

interface ContactProps {
  className?: string;
  id: string;
}

const Contact = ({ className, id }: ContactProps) => {
  return (
    <div className={className} id={id}>
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

const StyledContact = styled(Contact)`
  height: 223px;
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  font-size: 18px;
  background-color: #d41919;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 75px;
  p,
  a {
    float: right;
    color: white;
  }

  > div {
    clear: both;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    padding-right: 21px;
  }

  @media (max-width: 750px) {
    display: block;
  }
`;

export default StyledContact;
