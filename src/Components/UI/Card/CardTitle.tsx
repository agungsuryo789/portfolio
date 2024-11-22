import React from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const mergedClassName = mergeClassNames(
    `my-4 font-semibold text-gray-500 text-base uppercase`,
    className
  );

  return (
    <>
      <p className={mergedClassName} {...props}>{children}</p>
    </>
  );
};

export default CardTitle;
