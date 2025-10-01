import { FC, ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean; // <-- добавляем
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  className,
  disabled = false, // <-- дефолт false
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled} // <-- прокидываем
    >
      {children}
    </button>
  );
};

export default Button;
