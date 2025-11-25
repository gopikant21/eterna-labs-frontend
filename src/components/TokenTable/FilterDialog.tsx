"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NumberInput } from "@/components/ui/number-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FilterState,
  DEFAULT_FILTER_STATE,
  FilterOptions,
} from "@/types/filter";
import { cn } from "@/lib/utils";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentFilters: FilterState;
  onApplyFilters: FilterOptions["onApplyFilters"];
  onResetFilters: FilterOptions["onResetFilters"];
}

// Memoized range input component to prevent unnecessary re-renders
const RangeInput = React.memo<{
  label: string;
  value: { min: number | null; max: number | null };
  onChange: (range: { min: number | null; max: number | null }) => void;
  placeholder?: { min?: string; max?: string };
}>(function RangeInput({ label, value, onChange, placeholder }) {
  const handleMinChange = useCallback(
    (min: number | null) => {
      onChange({ ...value, min });
    },
    [value, onChange]
  );

  const handleMaxChange = useCallback(
    (max: number | null) => {
      onChange({ ...value, max });
    },
    [value, onChange]
  );

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        <NumberInput
          value={value.min}
          onChange={handleMinChange}
          placeholder={placeholder?.min || "Min"}
          className="text-xs"
        />
        <NumberInput
          value={value.max}
          onChange={handleMaxChange}
          placeholder={placeholder?.max || "Max"}
          className="text-xs"
        />
      </div>
    </div>
  );
});

// Memoized category selector
const CategorySelector = React.memo<{
  selectedCategories: FilterState["categories"];
  onChange: (categories: FilterState["categories"]) => void;
}>(function CategorySelector({ selectedCategories, onChange }) {
  const categories = [
    { value: "new-pairs" as const, label: "New Pairs" },
    { value: "final-stretch" as const, label: "Final Stretch" },
    { value: "migrated" as const, label: "Migrated" },
  ];

  const toggleCategory = useCallback(
    (category: FilterState["categories"][number]) => {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category];
      onChange(newCategories);
    },
    [selectedCategories, onChange]
  );

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-200">Categories</label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.value);
          return (
            <button
              key={category.value}
              onClick={() => toggleCategory(category.value)}
              className={cn(
                "px-3 py-1.5 text-xs rounded-md transition-colors border",
                isSelected
                  ? "bg-slate-600 border-slate-500 text-slate-100"
                  : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
});

// Memoized sort selector
const SortSelector = React.memo<{
  sortBy: FilterState["sortBy"];
  sortOrder: FilterState["sortOrder"];
  onSortByChange: (sortBy: FilterState["sortBy"]) => void;
  onSortOrderChange: (sortOrder: FilterState["sortOrder"]) => void;
}>(function SortSelector({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}) {
  const sortOptions = [
    { value: "marketCap" as const, label: "Market Cap" },
    { value: "volume24h" as const, label: "24h Volume" },
    { value: "price" as const, label: "Price" },
    { value: "priceChangePercentage24h" as const, label: "24h Change" },
    { value: "holders" as const, label: "Holders" },
    { value: "bonding" as const, label: "Bonding" },
    { value: "sniperHolding" as const, label: "Sniper Holding" },
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-200">Sort By</label>
      <div className="space-y-2">
        <select
          value={sortBy}
          onChange={(e) =>
            onSortByChange(e.target.value as FilterState["sortBy"])
          }
          className="w-full h-9 px-3 py-1 text-sm bg-slate-900/50 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-slate-900"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => onSortOrderChange("desc")}
            className={cn(
              "flex-1 px-3 py-1.5 text-xs rounded-md transition-colors border",
              sortOrder === "desc"
                ? "bg-slate-600 border-slate-500 text-slate-100"
                : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50"
            )}
          >
            Descending
          </button>
          <button
            onClick={() => onSortOrderChange("asc")}
            className={cn(
              "flex-1 px-3 py-1.5 text-xs rounded-md transition-colors border",
              sortOrder === "asc"
                ? "bg-slate-600 border-slate-500 text-slate-100"
                : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50"
            )}
          >
            Ascending
          </button>
        </div>
      </div>
    </div>
  );
});

export function FilterDialog({
  open,
  onOpenChange,
  currentFilters,
  onApplyFilters,
  onResetFilters,
}: FilterDialogProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(currentFilters);

  // Sync external filter changes to local state
  React.useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  // Optimized update functions
  const updateMarketCapRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, marketCapRange: range }));
    },
    []
  );

  const updateVolumeRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, volumeRange: range }));
    },
    []
  );

  const updatePriceRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, priceRange: range }));
    },
    []
  );

  const updatePriceChangeRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, priceChangeRange: range }));
    },
    []
  );

  const updateHoldersRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, holdersRange: range }));
    },
    []
  );

  const updateProTradersRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, proTradersRange: range }));
    },
    []
  );

  const updateKolsRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, kolsRange: range }));
    },
    []
  );

  const updateTransactionsRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, transactionsRange: range }));
    },
    []
  );

  const updateGlobalFeesRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, globalFeesRange: range }));
    },
    []
  );

  const updateBondingRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, bondingRange: range }));
    },
    []
  );

  const updateSniperHoldingRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, sniperHoldingRange: range }));
    },
    []
  );

  const updateInsidersHoldingRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, insidersHoldingRange: range }));
    },
    []
  );

  const updateBundleHoldingRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, bundleHoldingRange: range }));
    },
    []
  );

  const updateDevMigrationsRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, devMigrationsRange: range }));
    },
    []
  );

  const updateDevCreatedRange = useCallback(
    (range: { min: number | null; max: number | null }) => {
      setLocalFilters((prev) => ({ ...prev, devCreatedRange: range }));
    },
    []
  );

  const updateCategories = useCallback(
    (categories: FilterState["categories"]) => {
      setLocalFilters((prev) => ({ ...prev, categories }));
    },
    []
  );

  const updateSortBy = useCallback((sortBy: FilterState["sortBy"]) => {
    setLocalFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const updateSortOrder = useCallback((sortOrder: FilterState["sortOrder"]) => {
    setLocalFilters((prev) => ({ ...prev, sortOrder }));
  }, []);

  const handleApplyFilters = useCallback(() => {
    onApplyFilters(localFilters);
    onOpenChange(false);
  }, [localFilters, onApplyFilters, onOpenChange]);

  const handleResetFilters = useCallback(() => {
    setLocalFilters(DEFAULT_FILTER_STATE);
    onResetFilters();
  }, [onResetFilters]);

  const hasChanges = useMemo(() => {
    return JSON.stringify(localFilters) !== JSON.stringify(currentFilters);
  }, [localFilters, currentFilters]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold text-slate-100">
            Filter Tokens
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Customize your token search with advanced filtering options
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="market" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-700">
            <TabsTrigger
              value="market"
              className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
            >
              Market Data
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
            >
              Community
            </TabsTrigger>
            <TabsTrigger
              value="risk"
              className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
            >
              Risk & Holdings
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
            >
              General
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RangeInput
                label="Market Cap"
                value={localFilters.marketCapRange}
                onChange={updateMarketCapRange}
                placeholder={{ min: "Min Market Cap", max: "Max Market Cap" }}
              />
              <RangeInput
                label="24h Volume"
                value={localFilters.volumeRange}
                onChange={updateVolumeRange}
                placeholder={{ min: "Min Volume", max: "Max Volume" }}
              />
              <RangeInput
                label="Price"
                value={localFilters.priceRange}
                onChange={updatePriceRange}
                placeholder={{ min: "Min Price", max: "Max Price" }}
              />
              <RangeInput
                label="24h Price Change (%)"
                value={localFilters.priceChangeRange}
                onChange={updatePriceChangeRange}
                placeholder={{ min: "Min Change", max: "Max Change" }}
              />
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RangeInput
                label="Holders"
                value={localFilters.holdersRange}
                onChange={updateHoldersRange}
                placeholder={{ min: "Min Holders", max: "Max Holders" }}
              />
              <RangeInput
                label="Pro Traders"
                value={localFilters.proTradersRange}
                onChange={updateProTradersRange}
                placeholder={{ min: "Min Pro Traders", max: "Max Pro Traders" }}
              />
              <RangeInput
                label="KOLs"
                value={localFilters.kolsRange}
                onChange={updateKolsRange}
                placeholder={{ min: "Min KOLs", max: "Max KOLs" }}
              />
              <RangeInput
                label="Transactions"
                value={localFilters.transactionsRange}
                onChange={updateTransactionsRange}
                placeholder={{
                  min: "Min Transactions",
                  max: "Max Transactions",
                }}
              />
              <RangeInput
                label="Global Fees"
                value={localFilters.globalFeesRange}
                onChange={updateGlobalFeesRange}
                placeholder={{ min: "Min Fees", max: "Max Fees" }}
              />
            </div>
          </TabsContent>

          <TabsContent value="risk" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RangeInput
                label="Bonding"
                value={localFilters.bondingRange}
                onChange={updateBondingRange}
                placeholder={{ min: "Min Bonding", max: "Max Bonding" }}
              />
              <RangeInput
                label="Sniper Holding (%)"
                value={localFilters.sniperHoldingRange}
                onChange={updateSniperHoldingRange}
                placeholder={{ min: "Min %", max: "Max %" }}
              />
              <RangeInput
                label="Insiders Holding (%)"
                value={localFilters.insidersHoldingRange}
                onChange={updateInsidersHoldingRange}
                placeholder={{ min: "Min %", max: "Max %" }}
              />
              <RangeInput
                label="Bundle Holding (%)"
                value={localFilters.bundleHoldingRange}
                onChange={updateBundleHoldingRange}
                placeholder={{ min: "Min %", max: "Max %" }}
              />
              <RangeInput
                label="Dev Migrations"
                value={localFilters.devMigrationsRange}
                onChange={updateDevMigrationsRange}
                placeholder={{ min: "Min Migrations", max: "Max Migrations" }}
              />
              <RangeInput
                label="Dev Created"
                value={localFilters.devCreatedRange}
                onChange={updateDevCreatedRange}
                placeholder={{ min: "Min Created", max: "Max Created" }}
              />
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-6">
            <div className="space-y-6">
              <CategorySelector
                selectedCategories={localFilters.categories}
                onChange={updateCategories}
              />
              <SortSelector
                sortBy={localFilters.sortBy}
                sortOrder={localFilters.sortOrder}
                onSortByChange={updateSortBy}
                onSortOrderChange={updateSortOrder}
              />
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="pt-6 border-t border-slate-800">
          <div className="flex justify-between w-full">
            <Button
              variant="ghost"
              onClick={handleResetFilters}
              className="text-slate-400 hover:text-slate-200"
            >
              Reset All
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-slate-600 text-slate-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleApplyFilters}
                disabled={!hasChanges}
                className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
