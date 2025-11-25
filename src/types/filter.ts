export interface FilterState {
  // Market Data
  marketCapRange: { min: number | null; max: number | null };
  volumeRange: { min: number | null; max: number | null };
  priceRange: { min: number | null; max: number | null };
  priceChangeRange: { min: number | null; max: number | null };

  // Community & Activity
  holdersRange: { min: number | null; max: number | null };
  proTradersRange: { min: number | null; max: number | null };
  kolsRange: { min: number | null; max: number | null };
  transactionsRange: { min: number | null; max: number | null };
  globalFeesRange: { min: number | null; max: number | null };

  // Risk & Holdings
  bondingRange: { min: number | null; max: number | null };
  sniperHoldingRange: { min: number | null; max: number | null };
  insidersHoldingRange: { min: number | null; max: number | null };
  bundleHoldingRange: { min: number | null; max: number | null };
  devMigrationsRange: { min: number | null; max: number | null };
  devCreatedRange: { min: number | null; max: number | null };

  // General
  categories: ("new-pairs" | "final-stretch" | "migrated")[];
  sortBy:
    | "marketCap"
    | "volume24h"
    | "price"
    | "priceChangePercentage24h"
    | "holders"
    | "bonding"
    | "sniperHolding";
  sortOrder: "asc" | "desc";
}

export interface FilterOptions {
  onApplyFilters: (filters: FilterState) => void;
  onResetFilters: () => void;
  initialFilters?: Partial<FilterState>;
}

export const DEFAULT_FILTER_STATE: FilterState = {
  // Market Data
  marketCapRange: { min: null, max: null },
  volumeRange: { min: null, max: null },
  priceRange: { min: null, max: null },
  priceChangeRange: { min: null, max: null },

  // Community & Activity
  holdersRange: { min: null, max: null },
  proTradersRange: { min: null, max: null },
  kolsRange: { min: null, max: null },
  transactionsRange: { min: null, max: null },
  globalFeesRange: { min: null, max: null },

  // Risk & Holdings
  bondingRange: { min: null, max: null },
  sniperHoldingRange: { min: null, max: null },
  insidersHoldingRange: { min: null, max: null },
  bundleHoldingRange: { min: null, max: null },
  devMigrationsRange: { min: null, max: null },
  devCreatedRange: { min: null, max: null },

  // General
  categories: [],
  sortBy: "marketCap",
  sortOrder: "desc",
};
