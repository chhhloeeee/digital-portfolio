import { ReactElement } from "react";
import { styled } from "styled-components";

interface ProjectCardProps {
  className?: string;
  src: string;
  alt: string;
  title: string;
  content: ReactElement;
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
      <h2>{title}</h2>
      <div>
        <img src={src} alt={alt}></img>
      </div>
      <div>
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

  h2 {
    font-size: 28px;
    font-weight: 600;
  }
  img {
    border-radius: 20px;
    width: 860px;
  }

  > div:nth-last-of-type(1) {
    justify-items: center;
    width: 860px;
    line-height: 2;
    font-size: 18px;
  }

  p {
    padding-bottom: 24px;
  }
  a {
    min-width: 150px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    border: 4px solid #d41919;
    border-radius: 10px;
    font-family: inherit;
    padding: 15px 30px;
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
