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
    `mt-0 bg-gradient-to-b from-sky-200 via-sky-300 to-sky-100 mb-2 py-1 border-b-[1px] border-black text-black text-base dark:border-white`,
    className
  );

  return (
    <p className={mergedClassName} {...props}>
      {children}
    </p>
  );
};

export default CardTitle;
