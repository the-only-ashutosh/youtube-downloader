"use client";
import React from "react";
import { BackgroundBeams } from "./UI/background-beams";
import { BackgroundGradient } from "./UI/background-gradient";

export const BackgroundBeam = () => {
  return <BackgroundBeams />;
};

export const BackgroundGrad = ({ children }) => {
  return <BackgroundGradient>{children}</BackgroundGradient>;
};
