import React, { useState } from "react";
import Button from "./UI/Button";

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid grid-cols-4">
      <div className="col-span-2 text-left">
        <h1 className="text-3xl uppercase font-bold">{title}</h1>
      </div>
      <div className="col-span-2 text-right">
        <Button className="bg-transparent" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
