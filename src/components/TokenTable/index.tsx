"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTokens, setLoading, setError } from "@/store/slices/tokensSlice";
import { TokenColumn } from "./TokenColumn";
import { TokenTableHeader } from "./TokenTableHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useWebSocket } from "@/hooks/useWebSocket";

export default function TokenTable() {
  const dispatch = useAppDispatch();
  const { items, loading, error, filters } = useAppSelector(
    (state) => state.tokens
  );

  // Fetch initial tokens
  const {
    data,
    isLoading,
    error: queryError,
  } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
  });

  // WebSocket for real-time updates
  useWebSocket();

  useEffect(() => {
    if (data) {
      dispatch(setTokens(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (queryError) {
      dispatch(
        setError(
          queryError instanceof Error
            ? queryError.message
            : "Failed to fetch tokens"
        )
      );
    }
  }, [queryError, dispatch]);

  // Filter tokens
  const filteredTokens = items.filter(
    (token) =>
      token.symbol.toLowerCase().includes(filters.search.toLowerCase()) ||
      token.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  // Group tokens by category
  const newPairs = filteredTokens.filter(
    (token) => token.category === "new-pairs"
  );
  const finalStretch = filteredTokens.filter(
    (token) => token.category === "final-stretch"
  );
  const migrated = filteredTokens.filter(
    (token) => token.category === "migrated"
  );

  if (loading && !items.length) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-80" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-32" />
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-20" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
        <h3 className="font-semibold text-destructive">Error</h3>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-black/80 backdrop-blur-sm border border-gray-800/50 rounded-lg">
      <div className="flex-shrink-0">
        <TokenTableHeader />
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 border-t border-gray-700/50 min-h-0">
        <TokenColumn
          title="New Pairs"
          tokens={newPairs}
          totalCount={newPairs.length}
        />
        <TokenColumn
          title="Final Stretch"
          tokens={finalStretch}
          totalCount={finalStretch.length}
        />
        <TokenColumn
          title="Migrated"
          tokens={migrated}
          totalCount={migrated.length}
        />
      </div>
    </div>
  );
}
