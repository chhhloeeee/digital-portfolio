import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import HulerDays from "../../Images/HulerDays.png";
import Calculator from "../../Images/calculator.png";
import HulerLoan from "../../Images/hulerLoan.png";
import PricingPage from "../../Images/pricingPage.png";

interface ProjectsProps {
  className?: string;
  id: string;
}

const Projects = ({ className, id }: ProjectsProps) => {
  return (
    <div className={className} id={id}>
      <div>
        <h1>Projects</h1>
        <ProjectCard
          src={HulerDays}
          alt="HulerDays landing page"
          title="HulerDays"
          content="HulerDays is a simple leave management system written using NextJS and Golang, Typescript and Styled-Components.
          I developed this app as part of my dissertation with the intention of it being used by Huler if they wish. 
          The app consists of a a user and admin account which allows the admin to approve or
          deny leave requests.Other features include: login and logout functionality, request leave functionality, manage leave page, 
          calendar view page and the company policies page."
          bttnText="View in GitHub"
          href="https://github.com/chhhloeeee/HulerDays"
        />
        <ProjectCard
          src={Calculator}
          alt="Calculator"
          title="ROI Calculator for Huler"
          content="The ROI calculator was built into Huler's website which is written in NestJS.
          The calulator is made up of a multi-part form which calculates the ROI based on various inputs. 
          As well, I have stored the currency in context meaning the user can switch from £ to $ at any given point."
          bttnText="Link to Vercel deployment"
          href="https://huler-website-im158rkq5-huler.vercel.app/calculator"
        />
        <ProjectCard
          src={PricingPage}
          alt="Pricing page"
          title="Pricing Page for Huler"
          content="Similar to the ROI calulator, I built the pricing page for Huler. This involved styling and creating
          the components in NextJS and adding the content to the page through WordPress. "
          bttnText="Link to Vercel deployment"
          href="https://huler-website-3op6vb7my-huler.vercel.app/pricing"
        />
        <ProjectCard
          src={HulerLoan}
          alt="HulerLoan landig page"
          title="HulerLoan"
          content="HulerLoan is an equipment loaning system which I built during once of my modules at university.
          The app is written in Java and NextJS. HulerLoan constists of a login and logout functionality along with the
          ability for a manager to create equipment and manage loans. Users can take out a loan for any item and select
          which specification of the item they would like"
          bttnText="Link to GitHub"
          href="https://github.com/chhhloeeee/HulerLoan-frontend"
        />
      </div>
    </div>
  );
};

const StyledProjects = styled(Projects)`
  position: relative;
  min-height: 70vh;
  font-size: 20px;
  text-align: left;
  width: 40%;
  margin: auto;
  > div {
    padding-top: 2rem;
    @media (max-width: 750px) {
      padding-top: 6rem;
    }
  }
  h1 {
    color: #d41919;
    padding-bottom: 2rem;
  }
`;

export default StyledProjects;
