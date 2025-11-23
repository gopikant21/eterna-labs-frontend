export interface Token {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  price: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCap: number;
  volume24h: number;
  totalSupply?: number;
  circulatingSupply?: number;
  category: "new-pairs" | "final-stretch" | "migrated";
  timestamp: number;
  chain?: string;
  contract?: string;
  liquidity?: number;
  holders?: number;
  transactions24h?: number;
  // New variables requested
  sniperHolding?: number; // Amount/percentage held by snipers
  insidersHolding?: number; // Amount/percentage held by insiders
  bundleHolding?: number; // Amount/percentage held in bundles
  bonding?: number; // Bonding percentage
  proTraders?: number; // Number of professional traders
  kols?: number; // Number of Key Opinion Leaders
  devMigrations?: number; // Number of dev migrations/created
  devCreated?: number; // Number of tokens created by this dev
  globalFeesPaid?: number; // Total global fees paid
}

export interface TokenMetrics {
  price: number;
  volume: number;
  marketCap: number;
  change24h: number;
  changePercentage24h: number;
  liquidity: number;
  holders: number;
  transactions: number;
  sniperHolding: number;
  insidersHolding: number;
  bundleHolding: number;
  bonding: number;
  proTraders: number;
  kols: number;
  devMigrations: number;
  devCreated: number;
  globalFeesPaid: number;
}

export interface PriceUpdate {
  tokenId: string;
  price: number;
  change24h: number;
  changePercentage24h: number;
  timestamp: number;
}

export interface WebSocketMessage {
  type: "PRICE_UPDATE" | "MARKET_UPDATE" | "NEW_TOKEN";
  data: PriceUpdate | Token;
}

export type SortField =
  | "symbol"
  | "price"
  | "priceChange24h"
  | "marketCap"
  | "volume24h"
  | "holders"
  | "transactions24h"
  | "sniperHolding"
  | "insidersHolding"
  | "bundleHolding"
  | "bonding"
  | "proTraders"
  | "kols"
  | "devMigrations"
  | "devCreated"
  | "globalFeesPaid";
export type SortDirection = "asc" | "desc";

export interface TableSort {
  field: SortField;
  direction: SortDirection;
}

export interface TokenFilters {
  search: string;
  category?: Token["category"];
  minPrice?: number;
  maxPrice?: number;
  minMarketCap?: number;
  maxMarketCap?: number;
}
