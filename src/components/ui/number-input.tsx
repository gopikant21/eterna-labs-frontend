"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  className?: string;
  debounceMs?: number;
}

export const NumberInput = React.memo<NumberInputProps>(function NumberInput({
  value,
  onChange,
  placeholder,
  min,
  max,
  className,
  debounceMs = 300,
}) {
  const [localValue, setLocalValue] = useState<string>(value?.toString() ?? "");
  const [isFocused, setIsFocused] = useState(false);

  // Sync external value changes to local state when not focused
  useEffect(() => {
    if (!isFocused) {
      setLocalValue(value?.toString() ?? "");
    }
  }, [value, isFocused]);

  // Debounced onChange
  useEffect(() => {
    if (isFocused) {
      const timeoutId = setTimeout(() => {
        const numValue = localValue === "" ? null : parseFloat(localValue);
        if (numValue !== value) {
          onChange(numValue);
        }
      }, debounceMs);

      return () => clearTimeout(timeoutId);
    }
  }, [localValue, onChange, debounceMs, isFocused, value]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Allow empty string, numbers, and decimal points
      if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
        setLocalValue(newValue);
      }
    },
    []
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // Immediately sync on blur
    const numValue = localValue === "" ? null : parseFloat(localValue);
    if (numValue !== value) {
      onChange(numValue);
    }
  }, [localValue, onChange, value]);

  return (
    <input
      type="text"
      inputMode="decimal"
      value={localValue}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      min={min}
      max={max}
      className={cn(
        "flex h-9 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-1 text-sm text-slate-100 placeholder:text-slate-400 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent",
        "hover:border-slate-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  );
});
