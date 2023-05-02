import React from "react";

export const Spacer = ({ className }: { className?: string }) => (
  <div className={`h-0.5 w-full ${className ? className : ""}`} />
);
