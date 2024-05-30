"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ModeSwitch() {
  const [selected, setSelected] = useState(
    localStorage.getItem("theme") === "light"
  );
  const { setTheme } = useTheme();

  return (
    <Switch
      isSelected={selected}
      name="Theme switch"
      size="lg"
      color="secondary"
      thumbIcon={selected ? <SunIcon /> : <MoonIcon />}
      onValueChange={(bool) => {
        if (bool) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
        setSelected(bool);
      }}
    ></Switch>
  );
}
