import React from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface BlogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

const Blog: React.FC<BlogProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  const mergedClassName = mergeClassNames("p-2", className);
  return (
    <div className={mergedClassName} {...props}>
      <h3 className="font-bold text-xl">{title}</h3>
      {children}
    </div>
  );
};

export default Blog;
