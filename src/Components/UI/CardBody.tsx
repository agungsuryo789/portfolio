import React from "react";
import { mergeClassNames } from "../utils/mergeClassNames";

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
  const mergedClassName = mergeClassNames(
    "",
    className
  );
  return <div {...props} className={mergedClassName}>{children}</div>;
};

export default CardBody;
