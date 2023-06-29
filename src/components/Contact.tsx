import { styled } from "styled-components";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={className}>
      <h1>Contact</h1>
    </div>
  );
};

const StyledContact = styled(Contact)``;

export default StyledContact;
