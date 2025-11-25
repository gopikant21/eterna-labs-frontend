"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  label?: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select option",
  className,
  label,
}: SelectProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-xs font-medium text-slate-300">{label}</label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "flex h-9 w-full appearance-none rounded-md border border-slate-700 bg-slate-900/50 px-3 py-1 pr-8 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 transition-colors",
            "hover:border-slate-600",
            className
          )}
        >
          <option value="" disabled className="bg-slate-900">
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-slate-900 text-slate-100"
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 pointer-events-none" />
      </div>
    </div>
  );
}
