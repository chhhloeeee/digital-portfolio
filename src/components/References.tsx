import { styled } from "styled-components";

interface ReferencesProps {
  className?: string;
  id: string;
}

const References = ({ className, id }: ReferencesProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>References</h1>
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
  > div {
    padding-top: 2rem;
  }
`;

export default StyledReferences;
