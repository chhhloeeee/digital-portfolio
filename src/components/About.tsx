import { styled } from "styled-components";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <h1>About</h1>
    </div>
  );
};

const StyledAbout = styled(About)``;

export default StyledAbout;
