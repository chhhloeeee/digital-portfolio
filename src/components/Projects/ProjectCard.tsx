import { styled } from "styled-components";

interface ProjectCardProps {
  className?: string;
  src: string;
  alt: string;
  title: string;
  content: string;
  bttnText: string;
  href: string;
}

const ProjectCard = ({
  className,
  src,
  alt,
  title,
  content,
  bttnText,
  href,
}: ProjectCardProps) => {
  return (
    <div className={className}>
      <div>
        <img src={src} alt={alt} width="700"></img>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {bttnText}
        </a>
      </div>
    </div>
  );
};

const StyledProjectCard = styled(ProjectCard)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  img {
    border-radius: 20px;
  }

  > div:nth-last-of-type(1) {
    justify-items: center;
    padding-left: 15rem;
    max-width: 500px;
    h2 {
      color: #d41919;
    }
  }
  a {
    min-width: 150px;
    font-size: 15px;
    background-color: white;
    border: 3px solid #d41919;
    border-radius: 20px;
    font-family: inherit;
    padding: 10px;
    cursor: pointer;
  }
`;
export default StyledProjectCard;
