import React, { HTMLAttributes } from "react";


interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <div className="border-dotted border-2 border-black w-max my-1 p-2 mr-2" {...props}>
        {children}
      </div>
    </div>
  );
};

export default Badge;
