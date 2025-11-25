"use client";

import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { FilterDialog } from "./FilterDialog";
import {
  FilterState,
  FilterOptions,
  DEFAULT_FILTER_STATE,
} from "@/types/filter";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FilterButtonProps {
  onApplyFilters: FilterOptions["onApplyFilters"];
  onResetFilters: FilterOptions["onResetFilters"];
  currentFilters?: FilterState;
  hasActiveFilters?: boolean;
}

export function FilterButton({
  onApplyFilters,
  onResetFilters,
  currentFilters,
  hasActiveFilters = false,
}: FilterButtonProps) {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsFilterDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsFilterDialogOpen(false);
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleOpenDialog}
            className="p-1 hover:bg-slate-800 rounded transition-colors group"
            aria-label="Open filter dialog"
          >
            <SlidersHorizontal
              className={`w-5 h-5 transition-colors ${
                hasActiveFilters
                  ? "text-blue-400"
                  : "text-slate-400 group-hover:text-slate-300"
              }`}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <span>Filter tokens</span>
        </TooltipContent>
      </Tooltip>

      <FilterDialog
        open={isFilterDialogOpen}
        onOpenChange={setIsFilterDialogOpen}
        currentFilters={currentFilters || DEFAULT_FILTER_STATE}
        onApplyFilters={onApplyFilters}
        onResetFilters={onResetFilters}
      />
    </>
  );
}
