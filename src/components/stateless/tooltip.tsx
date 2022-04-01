import React from "react";
import styles from "./tooltip.module.css";

interface TooltipProps {
  value: string;
}
const Tooltip: React.FC<TooltipProps> = ({ children, value }) => {
  return (
    <span className={styles["has-tooltip"]}>
      {children}
      <span className={styles["tooltip"]}>{value}</span>
    </span>
  );
};

export default Tooltip;
