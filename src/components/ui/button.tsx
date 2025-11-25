"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-600",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 focus:ring-slate-600",
    outline:
      "border border-slate-600 bg-transparent hover:bg-slate-800 text-slate-100 focus:ring-slate-600",
    ghost:
      "hover:bg-slate-800 text-slate-300 hover:text-slate-100 focus:ring-slate-600",
    destructive: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-6 text-base",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
