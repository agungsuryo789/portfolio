import React from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {

  const mergedClassName = mergeClassNames(
    `border-4 border-black bg-white shadow-xl rounded-md p-0 dark:border-white dark:bg-slate-950
      cursor-default dark:text-white`,
    className
  );

  return (
    <div
      className={mergedClassName}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
