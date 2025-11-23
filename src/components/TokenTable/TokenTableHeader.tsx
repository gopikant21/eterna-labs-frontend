"use client";

import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFilters } from "@/store/slices/tokensSlice";

export function TokenTableHeader() {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.tokens);

  const handleSearchChange = (value: string) => {
    dispatch(setFilters({ search: value }));
  };

  return (
    <div className="flex items-center justify-between">
      <div className="relative w-100">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search tokens..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="text-sm text-muted-foreground">
        Real-time token discovery powered by WebSocket
      </div>
    </div>
  );
}
