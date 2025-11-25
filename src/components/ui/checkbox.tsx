"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export function Checkbox({
  id,
  checked,
  onChange,
  label,
  className,
}: CheckboxProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-0 focus:ring-offset-slate-900"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-300 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
