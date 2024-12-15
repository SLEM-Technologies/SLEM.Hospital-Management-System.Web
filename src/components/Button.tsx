import React, { ReactNode,MouseEventHandler } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
    children: ReactNode; // Accepts anything renderable in React (string, JSX, etc.)
    onClick?: MouseEventHandler<HTMLButtonElement>; // Correctly typed onClick handler
    styles?: string; // Optional styles as a string
    type?: "button" | "submit" | "reset"; // Optional button types
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick, styles, type }) => {
    if (styles === undefined) {
        styles = "bg-primaryBlue text-white hover:bg-primaryBlueHover transition-colors duration-200";
    }
    return (
        <button
            type={type}
            className={clsx("w-full md:w-auto px-4 py-2 font-medium rounded-md text-sm", styles)} onClick={onClick}>
            
            {children}
        </button>
    )
}
export default Button;