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

  > div {
    justify-items: center;
    width: 860px;
    line-height: 2;
    font-size: 18px;
    img {
      border-radius: 20px;
      width: 860px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    p {
      padding: 10px 0;
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
  }

  @media (max-width: 1000px) {
    > div {
      width: 700px;
      img {
        width: 700px;
      }
    }
  }
  @media (max-width: 750px) {
    > div {
      width: 500px;
      img {
        width: 500px;
      }
      a {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 600px) {
    > div {
      width: 400px;
      img {
        width: 400px;
      }
    }
  }
  @media (max-width: 450px) {
    > div {
      width: 300px;
      img {
        width: 300px;
      }
    }
  }
`;
export default StyledProjectCard;
