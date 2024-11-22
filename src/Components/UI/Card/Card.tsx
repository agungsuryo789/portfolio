import React, { useState } from "react";
import { mergeClassNames } from "../../utils/mergeClassNames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 35; 
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 35;
    setRotation({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const mergedClassName = mergeClassNames(
    `border-4 border-white bg-slate-100 shadow-xl rounded-xl p-2
     hover:transition-transform duration-100 cursor-default dark:text-gray-700 dark:border-sky-800`,
    className
  );

  return (
    <div
      className={mergedClassName}
      {...props}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        perspective: "800px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card;
