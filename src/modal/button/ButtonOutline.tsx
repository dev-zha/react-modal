import React from "react";

interface ButtonOutlineProps {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonOutline({
  type = "button",
  children,
  onClick,
}: ButtonOutlineProps) {
  return (
    <button type={type} onClick={onClick} className="btn-outline">
      {children}
    </button>
  );
}
