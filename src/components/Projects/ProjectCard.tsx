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
        <img src={src} alt={alt}></img>
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
  display: block;
  padding-bottom: 3rem;
  img {
    border-radius: 20px;
    width: 700px;
  }

  > div:nth-last-of-type(1) {
    justify-items: center;
    padding: 40px;
    h2 {
      color: #d41919;
    }
  }
  a {
    min-width: 150px;
    font-size: 15px;
    background-color: white;
    border: 3px solid #d41919;
    border-radius: 10px;
    font-family: inherit;
    padding: 10px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    img {
      width: 600px;
    }
  }
  @media (max-width: 750px) {
    img {
      width: 500px;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 300px;
    }
  }
`;
export default StyledProjectCard;
