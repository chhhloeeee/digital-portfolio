import { styled } from "styled-components";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  return (
    <div className={className}>
      <h1>Projects</h1>
    </div>
  );
};

const StyledProjects = styled(Projects)``;

export default StyledProjects;
