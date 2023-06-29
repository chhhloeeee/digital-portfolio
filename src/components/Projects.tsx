import { styled } from "styled-components";

interface ProjectsProps {
  className?: string;
  id: string;
}

const Projects = ({ className, id }: ProjectsProps) => {
  return (
    <div className={className} id={id}>
      <h1>Projects</h1>
    </div>
  );
};

const StyledProjects = styled(Projects)`
  min-height: 70vh;
`;

export default StyledProjects;
