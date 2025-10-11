import React from "react";
import styles from "./TxtWrap.module.css";

interface TxtWrapProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const TxtWrap = ({ children, style }: TxtWrapProps) => {
  return (
    <p className={styles.textStyle} style={style}>
      {children}
    </p>
  );
};

export default TxtWrap;
