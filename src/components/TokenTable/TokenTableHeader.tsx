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
      
    </div>
  );
}
