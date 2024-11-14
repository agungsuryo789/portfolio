import React, { HTMLAttributes } from "react";


interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <div className="border-2 border-gray-900 dark:border-gray-200 hover:bg-green-400 my-1 mr-2 p-2 border-dotted w-max hover:text-black cursor-pointer" {...props}>
        {children}
      </div>
    </div>
  );
};

export default Badge;
