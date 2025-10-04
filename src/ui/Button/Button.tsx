import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  onClick,
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
