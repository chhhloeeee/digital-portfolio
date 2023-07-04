import React from "react";
import LinkedIn from "./LinkedIn";
import Award from "./Award";
import Briefcase from "./Briefcase";
import File from "./File";
import Mail from "./Mail";
import Phone from "./Phone";

interface IconType {
  name: string;
}

interface ListProps {
  [key: string]: React.ElementType;
}

export const iconList: ListProps = {
  linkedIn: LinkedIn,
  award: Award,
  briefcase: Briefcase,
  file: File,
  mail: Mail,
  phone: Phone,
};

const Icon = ({ name }: IconType) => {
  const IconComponent = iconList[name];

  return IconComponent ? <IconComponent /> : <div />;
};
export default Icon;
