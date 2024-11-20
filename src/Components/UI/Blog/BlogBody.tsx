import React from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface BlogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BlogBody: React.FC<BlogBodyProps> = ({ children, className, ...props }) => {
  const mergedClassName = mergeClassNames(
    "",
    className
  );
  return <div {...props} className={mergedClassName}>{children}</div>;
};

export default BlogBody;
