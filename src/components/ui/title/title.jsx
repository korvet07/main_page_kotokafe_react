import React from "react";
import "./style.css";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

function Title({ children, size, level }) {
	const CustomTitleTag = `h${level}`;
  return <CustomTitleTag className={`title${size ? ` title_${size}` : ""}`}>{children}</CustomTitleTag>;
}

export default Title;
