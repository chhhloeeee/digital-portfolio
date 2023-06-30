import { styled } from "styled-components";

interface ContactGridProps {
  className?: string;
}

const ContactGrid = ({ className }: ContactGridProps) => {
  return (
    <div className={className}>
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

const StyledContactGrid = styled(ContactGrid)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  width: 60%;
  p,
  a {
    color: white;
  }

  > div {
    text-align: center;
  }
`;

export default StyledContactGrid;
