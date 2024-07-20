import React from "react";
import { mergeClassNames } from "../utils/mergeClassNames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  const mergedClassName = mergeClassNames(
    "flex flex-row border-dotted border-2 border-black p-2",
    className
  );
  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
