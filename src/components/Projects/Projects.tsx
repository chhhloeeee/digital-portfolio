import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import HulerDays from "../../Images/HulerDays.png";
import Calculator from "../../Images/calculator.png";
import HulerLoan from "../../Images/hulerLoan.png";
import PricingPage from "../../Images/pricingPage.png";
import { DivWrapper } from "../DivWrapper";
import { BorderWrapper } from "../BorderWrapper";

interface ProjectsProps {
  className?: string;
  id: string;
}

const Projects = ({ className, id }: ProjectsProps) => {
  const HulerDaysTxt = () => {
    return (
      <p>
        HulerDays is a simple leave management system written using NextJS and
        Golang, Typescript and Styled-Components. <br /> <br />I developed this
        app as part of my dissertation with the intention of it being used by
        Huler if they wish. The app consists of a user and admin account which
        allows the admin to approve or deny leave requests. <br /> <br /> Other
        features include: login and logout functionality, request leave
        functionality, manage leave page, calendar view page and the company
        policies page.
      </p>
    );
  };
  const CalculatorTxt = () => {
    return (
      <p>
        The ROI calculator was built into Huler’s website which is written in
        NestJS. The calculator is made up of a multi-part form which calculates
        the ROI based on various inputs. As well, I have stored the currency in
        context meaning the user can switch from £ to $ at any given point.
      </p>
    );
  };
  const PricingTxt = () => {
    return (
      <p>
        Similar to the ROI calculator, I built the pricing page for Huler. This
        involved styling and creating the components in NextJS and adding the
        content to the page through WordPress.
      </p>
    );
  };
  const HulerLoanTxt = () => {
    return (
      <p>
        HulerLoan is an equipment loaning system which I built during once of my
        modules at university. The app is written in Java and NextJS. HulerLoan
        constists of a login and logout functionality along with the ability for
        a manager to create equipment and manage loans. Users can take out a
        loan for any item and select which specification of the item they would
        like.
      </p>
    );
  };
  return (
    <div className={className} id={id}>
      <div>
        <h1>Projects</h1>
        <DivWrapper>
          <ProjectCard
            src={HulerDays}
            alt="HulerDays landing page"
            title="HulerDays"
            content={<HulerDaysTxt />}
            bttnText="View in GitHub"
            href="https://github.com/chhhloeeee/HulerDays"
          />
        </DivWrapper>
        <BorderWrapper>
          <ProjectCard
            src={Calculator}
            alt="Calculator"
            title="ROI Calculator for Huler"
            content={<CalculatorTxt />}
            bttnText="View Vercel Deployment"
            href="https://huler-website-im158rkq5-huler.vercel.app/calculator"
          />
        </BorderWrapper>
        <BorderWrapper>
          <ProjectCard
            src={PricingPage}
            alt="Pricing page"
            title="Pricing Page for Huler"
            content={<PricingTxt />}
            bttnText="View Vercel Deployment"
            href="https://huler-website-3op6vb7my-huler.vercel.app/pricing"
          />
        </BorderWrapper>
        <DivWrapper>
          <ProjectCard
            src={HulerLoan}
            alt="HulerLoan landig page"
            title="HulerLoan"
            content={<HulerLoanTxt />}
            bttnText="View in GitHub"
            href="https://github.com/chhhloeeee/HulerLoan-frontend"
          />
        </DivWrapper>
      </div>
    </div>
  );
};

const StyledProjects = styled(Projects)`
  position: relative;
  min-height: 70vh;
  font-size: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    padding-top: 2rem;
    @media (max-width: 750px) {
      padding-top: 6rem;
    }
  }
`;

export default StyledProjects;
