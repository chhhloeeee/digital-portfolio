import { styled } from "styled-components";

interface ProjectsProps {
  className?: string;
  id: string;
}

const Projects = ({ className, id }: ProjectsProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>Projects</h1>
      </div>
    </div>
  );
};

const StyledProjects = styled(Projects)`
  position: relative;
  min-height: 70vh;
  font-size: 20px;
  border-top: solid 15px white;
  border-bottom: solid 15px white;
  > div {
    padding-top: 2rem;
  }
`;

export default StyledProjects;
