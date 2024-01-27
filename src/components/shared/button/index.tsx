import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant?: "primary" | "outlined";
  size?: "small" | "medium" | "large";
  link?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  onClick,
  className,
  ...props
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return "bg-zinc-900 dark:bg-zinc-100 border-zinc-900 dark:border-zinc-100 hover:bg-zinc-800 hover:border-zinc-800 dark:hover:bg-zinc-200 dark:hover:border-zinc-200";
      case "outlined":
        return "border-zinc-900 dark:border-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-100";
    }
  };

  const getColor = () => {
    switch (variant) {
      case "primary":
        return "text-white dark:text-zinc-900";
      case "outlined":
        return "text-zinc-900 dark:text-white hover:text-white dark:hover:text-zinc-900";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm px-3 py-1";
      case "medium":
        return "px-5 py-2";
      case "large":
        return "text-lg px-7 py-3";
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "rounded-md capitalize inline-flex justify-start items-center transition duration-200 ease-in-out font-semibold border-2",
        getSizeClass(),
        getColor(),
        getBackgroundColor(),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  variant: "primary",
  size: "medium"
};
