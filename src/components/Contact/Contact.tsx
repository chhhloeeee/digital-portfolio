import { styled } from "styled-components";

interface ContactProps {
  className?: string;
  id: string;
}

const Contact = ({ className, id }: ContactProps) => {
  return (
    <div className={className} id={id}>
      <div>
        {" "}
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
        {" "}
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
    color: white;
  }

  > div {
    text-align: center;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    display: block;
  }
`;

export default StyledContact;
