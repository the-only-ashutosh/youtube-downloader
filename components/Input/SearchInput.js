"use client";
import React from "react";
import { Input, Button, Spinner } from "@nextui-org/react";
import Arrow from "./Arrow";
import styles from "./input.module.css";
import { Text } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const SearchInput = ({ onSearch, ini, loading }) => {
  const inputRef = React.useRef(null);
  const { theme } = useTheme();
  return (
    <div className="flex search_dim overscroll-none">
      <Input
        ref={inputRef}
        name="search-input"
        placeholder="Paste your video link here..."
        classNames={{
          input: [
            "bg-transparent",
            "text-purple/40 dark:text-purple/80",
            "h-[10vh] text-medium",
            "placeholder:text-default-700/50 placeholder:text-medium dark:placeholder:text-white/60",
          ],
          inputWrapper: [
            "h-fit",
            "rounded-lg",
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-transparent",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "focus-within:!bg-default-200/50",
            "dark:hover:bg-default/70",
            "dark:focus-within:!bg-default/60",
            "!cursor-text",
          ],
          innerWrapper: ["bg-transparent", "rounded-lg"],
          mainWrapper: ["h-fit", "rounded-lg"],
        }}
        onChange={() => {
          ini();
        }}
        onPaste={() => {
          setTimeout(() => {
            if (inputRef.current.value) {
              if (String(inputRef.current.value).includes("&pp=")) {
                inputRef.current.value = String(inputRef.current.value).split(
                  "&pp="
                )[0];
              }
              onSearch(inputRef.current.value);
            }
          }, 10);
        }}
        endContent={
          <Button
            endContent={!loading && <Arrow className={`${styles.child}`} />}
            className={`ml-1 rounded-md hover:border ${styles.shake}`}
            onPress={() => {
              if (inputRef.current.value) {
                if (String(inputRef.current.value).includes("&pp=")) {
                  inputRef.current.value = String(inputRef.current.value).split(
                    "&pp="
                  )[0];
                }
                onSearch(inputRef.current.value);
              }
            }}
          >
            {!loading && <Text className={`${styles.child}`}>Download</Text>}
            {loading && (
              <Spinner
                size="sm"
                color={theme === "dark" ? "white" : "success"}
              />
            )}
          </Button>
        }
      />
    </div>
  );
};

export default SearchInput;
