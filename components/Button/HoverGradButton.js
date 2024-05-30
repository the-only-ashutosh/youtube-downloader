"use client";
import React from "react";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

const HoverGradButton = ({ children, className, end }) => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-md"
      endContent={end}
      className={`${className}`}
    >
      <span>{children}</span>
    </HoverBorderGradient>
  );
};

export default HoverGradButton;
