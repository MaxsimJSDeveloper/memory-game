import { FC, ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
