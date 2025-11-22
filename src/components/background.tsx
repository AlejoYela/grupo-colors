import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4",
        variant === "top" &&
        "from-black/50 via-black to-black/80 rounded-t-4xl rounded-b-2xl bg-linear-to-b via-20% ",
        variant === "bottom" &&
        "from-black via-black to-black/20 rounded-t-2xl rounded-b-4xl bg-linear-to-b ",
        className,
      )}
    >
      {children}
    </div>
  );
};
