"use client";

import { useState, useMemo } from "react";
import { FilterState, DEFAULT_FILTER_STATE } from "@/types/filter";
import { Token } from "@/types/token";

export function useTokenFilters(tokens: Token[]) {
  const [filterState, setFilterState] =
    useState<FilterState>(DEFAULT_FILTER_STATE);

  const filteredTokens = useMemo(() => {
    let filtered = [...tokens];

    // Apply market data filters
    if (
      filterState.marketCapRange.min !== null ||
      filterState.marketCapRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.marketCap;
        const minCheck =
          filterState.marketCapRange.min === null ||
          value >= filterState.marketCapRange.min;
        const maxCheck =
          filterState.marketCapRange.max === null ||
          value <= filterState.marketCapRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.volumeRange.min !== null ||
      filterState.volumeRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.volume24h;
        const minCheck =
          filterState.volumeRange.min === null ||
          value >= filterState.volumeRange.min;
        const maxCheck =
          filterState.volumeRange.max === null ||
          value <= filterState.volumeRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.priceRange.min !== null ||
      filterState.priceRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.price;
        const minCheck =
          filterState.priceRange.min === null ||
          value >= filterState.priceRange.min;
        const maxCheck =
          filterState.priceRange.max === null ||
          value <= filterState.priceRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.priceChangeRange.min !== null ||
      filterState.priceChangeRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.priceChangePercentage24h;
        const minCheck =
          filterState.priceChangeRange.min === null ||
          value >= filterState.priceChangeRange.min;
        const maxCheck =
          filterState.priceChangeRange.max === null ||
          value <= filterState.priceChangeRange.max;
        return minCheck && maxCheck;
      });
    }

    // Apply community & activity filters
    if (
      filterState.holdersRange.min !== null ||
      filterState.holdersRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.holders ?? 0;
        const minCheck =
          filterState.holdersRange.min === null ||
          value >= filterState.holdersRange.min;
        const maxCheck =
          filterState.holdersRange.max === null ||
          value <= filterState.holdersRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.proTradersRange.min !== null ||
      filterState.proTradersRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.proTraders ?? 0;
        const minCheck =
          filterState.proTradersRange.min === null ||
          value >= filterState.proTradersRange.min;
        const maxCheck =
          filterState.proTradersRange.max === null ||
          value <= filterState.proTradersRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.kolsRange.min !== null ||
      filterState.kolsRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.kols ?? 0;
        const minCheck =
          filterState.kolsRange.min === null ||
          value >= filterState.kolsRange.min;
        const maxCheck =
          filterState.kolsRange.max === null ||
          value <= filterState.kolsRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.transactionsRange.min !== null ||
      filterState.transactionsRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.transactions24h ?? 0;
        const minCheck =
          filterState.transactionsRange.min === null ||
          value >= filterState.transactionsRange.min;
        const maxCheck =
          filterState.transactionsRange.max === null ||
          value <= filterState.transactionsRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.globalFeesRange.min !== null ||
      filterState.globalFeesRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.globalFeesPaid ?? 0;
        const minCheck =
          filterState.globalFeesRange.min === null ||
          value >= filterState.globalFeesRange.min;
        const maxCheck =
          filterState.globalFeesRange.max === null ||
          value <= filterState.globalFeesRange.max;
        return minCheck && maxCheck;
      });
    }

    // Apply risk & holdings filters
    if (
      filterState.bondingRange.min !== null ||
      filterState.bondingRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.bonding ?? 0;
        const minCheck =
          filterState.bondingRange.min === null ||
          value >= filterState.bondingRange.min;
        const maxCheck =
          filterState.bondingRange.max === null ||
          value <= filterState.bondingRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.sniperHoldingRange.min !== null ||
      filterState.sniperHoldingRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.sniperHolding ?? 0;
        const minCheck =
          filterState.sniperHoldingRange.min === null ||
          value >= filterState.sniperHoldingRange.min;
        const maxCheck =
          filterState.sniperHoldingRange.max === null ||
          value <= filterState.sniperHoldingRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.insidersHoldingRange.min !== null ||
      filterState.insidersHoldingRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.insidersHolding ?? 0;
        const minCheck =
          filterState.insidersHoldingRange.min === null ||
          value >= filterState.insidersHoldingRange.min;
        const maxCheck =
          filterState.insidersHoldingRange.max === null ||
          value <= filterState.insidersHoldingRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.bundleHoldingRange.min !== null ||
      filterState.bundleHoldingRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.bundleHolding ?? 0;
        const minCheck =
          filterState.bundleHoldingRange.min === null ||
          value >= filterState.bundleHoldingRange.min;
        const maxCheck =
          filterState.bundleHoldingRange.max === null ||
          value <= filterState.bundleHoldingRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.devMigrationsRange.min !== null ||
      filterState.devMigrationsRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.devMigrations ?? 0;
        const minCheck =
          filterState.devMigrationsRange.min === null ||
          value >= filterState.devMigrationsRange.min;
        const maxCheck =
          filterState.devMigrationsRange.max === null ||
          value <= filterState.devMigrationsRange.max;
        return minCheck && maxCheck;
      });
    }

    if (
      filterState.devCreatedRange.min !== null ||
      filterState.devCreatedRange.max !== null
    ) {
      filtered = filtered.filter((token) => {
        const value = token.devCreated ?? 0;
        const minCheck =
          filterState.devCreatedRange.min === null ||
          value >= filterState.devCreatedRange.min;
        const maxCheck =
          filterState.devCreatedRange.max === null ||
          value <= filterState.devCreatedRange.max;
        return minCheck && maxCheck;
      });
    }

    // Apply category filter
    if (filterState.categories.length > 0) {
      filtered = filtered.filter((token) =>
        filterState.categories.includes(token.category)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const getValue = (token: Token): number => {
        switch (filterState.sortBy) {
          case "marketCap":
            return token.marketCap;
          case "volume24h":
            return token.volume24h;
          case "price":
            return token.price;
          case "priceChangePercentage24h":
            return token.priceChangePercentage24h;
          case "holders":
            return token.holders ?? 0;
          case "bonding":
            return token.bonding ?? 0;
          case "sniperHolding":
            return token.sniperHolding ?? 0;
          default:
            return 0;
        }
      };

      const aValue = getValue(a);
      const bValue = getValue(b);

      if (filterState.sortOrder === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return filtered;
  }, [tokens, filterState]);

  const hasActiveFilters = useMemo(() => {
    const defaultState = DEFAULT_FILTER_STATE;

    return (
      // Market data filters
      filterState.marketCapRange.min !== defaultState.marketCapRange.min ||
      filterState.marketCapRange.max !== defaultState.marketCapRange.max ||
      filterState.volumeRange.min !== defaultState.volumeRange.min ||
      filterState.volumeRange.max !== defaultState.volumeRange.max ||
      filterState.priceRange.min !== defaultState.priceRange.min ||
      filterState.priceRange.max !== defaultState.priceRange.max ||
      filterState.priceChangeRange.min !== defaultState.priceChangeRange.min ||
      filterState.priceChangeRange.max !== defaultState.priceChangeRange.max ||
      // Community & activity filters
      filterState.holdersRange.min !== defaultState.holdersRange.min ||
      filterState.holdersRange.max !== defaultState.holdersRange.max ||
      filterState.proTradersRange.min !== defaultState.proTradersRange.min ||
      filterState.proTradersRange.max !== defaultState.proTradersRange.max ||
      filterState.kolsRange.min !== defaultState.kolsRange.min ||
      filterState.kolsRange.max !== defaultState.kolsRange.max ||
      filterState.transactionsRange.min !==
        defaultState.transactionsRange.min ||
      filterState.transactionsRange.max !==
        defaultState.transactionsRange.max ||
      filterState.globalFeesRange.min !== defaultState.globalFeesRange.min ||
      filterState.globalFeesRange.max !== defaultState.globalFeesRange.max ||
      // Risk & holdings filters
      filterState.bondingRange.min !== defaultState.bondingRange.min ||
      filterState.bondingRange.max !== defaultState.bondingRange.max ||
      filterState.sniperHoldingRange.min !==
        defaultState.sniperHoldingRange.min ||
      filterState.sniperHoldingRange.max !==
        defaultState.sniperHoldingRange.max ||
      filterState.insidersHoldingRange.min !==
        defaultState.insidersHoldingRange.min ||
      filterState.insidersHoldingRange.max !==
        defaultState.insidersHoldingRange.max ||
      filterState.bundleHoldingRange.min !==
        defaultState.bundleHoldingRange.min ||
      filterState.bundleHoldingRange.max !==
        defaultState.bundleHoldingRange.max ||
      filterState.devMigrationsRange.min !==
        defaultState.devMigrationsRange.min ||
      filterState.devMigrationsRange.max !==
        defaultState.devMigrationsRange.max ||
      filterState.devCreatedRange.min !== defaultState.devCreatedRange.min ||
      filterState.devCreatedRange.max !== defaultState.devCreatedRange.max ||
      // General filters
      filterState.categories.length !== defaultState.categories.length ||
      filterState.sortBy !== defaultState.sortBy ||
      filterState.sortOrder !== defaultState.sortOrder
    );
  }, [filterState]);

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilterState(newFilters);
  };

  const handleResetFilters = () => {
    setFilterState(DEFAULT_FILTER_STATE);
  };

  return {
    filteredTokens,
    filterState,
    hasActiveFilters,
    handleApplyFilters,
    handleResetFilters,
  };
}
