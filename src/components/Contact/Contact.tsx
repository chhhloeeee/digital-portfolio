import { styled } from "styled-components";
import ContactGrid from "./ContactGrid";

interface ContactProps {
  className?: string;
  id: string;
}

const Contact = ({ className, id }: ContactProps) => {
  return (
    <div className={className} id={id}>
      <ContactGrid />
    </div>
  );
};

const StyledContact = styled(Contact)`
  height: 223px;
  position: relative;
  background-color: #d41919;
  display: flex;
  justify-content: center;
`;

export default StyledContact;
