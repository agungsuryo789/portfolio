import React from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface BlogSubtextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BlogSubtext: React.FC<BlogSubtextProps> = ({ children, className, ...props }) => {
  const mergedClassName = mergeClassNames(
    "text-gray-600",
    className
  );
  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};

export default BlogSubtext;
