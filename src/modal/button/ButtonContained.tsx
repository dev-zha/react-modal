import React from "react";

interface ButtonContainedProps {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonContained({
  type = "button",
  children,
  onClick,
}: ButtonContainedProps) {
  return (
    <button type={type} onClick={onClick} className="btn-contained">
      {children}
    </button>
  );
}
