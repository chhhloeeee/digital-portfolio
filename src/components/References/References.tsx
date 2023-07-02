import { styled } from "styled-components";
import ReferenceGrid from "./ReferenceGrid";

interface ReferencesProps {
  className?: string;
  id: string;
}

const References = ({ className, id }: ReferencesProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>References</h1>
        <ReferenceGrid />
      </div>
    </div>
  );
};

const StyledReferences = styled(References)`
  position: relative;
  min-height: 70vh;
  font-size: 20px;
  border-top: solid 15px white;
  border-bottom: solid 15px white;
  color: #d41919;
  > div {
    padding-top: 2rem;
  }
  @media (max-width: 750px) {
    > div {
      padding-top: 3rem;
    }
  }
  @media (max-width: 600px) {
    > div {
      padding-top: 6rem;
    }
  }
`;

export default StyledReferences;
