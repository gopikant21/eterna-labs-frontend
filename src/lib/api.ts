import type { Token } from "@/types/token";

// Mock token data that mimics the Axiom Trade interface
const MOCK_TOKENS: Omit<Token, "timestamp">[] = [
  // New Pairs
  {
    id: "token-1",
    symbol: "3DMAX",
    name: "ALRI_raft",
    price: 5.03,
    priceChange24h: 2.0,
    priceChangePercentage24h: 13.0,
    marketCap: 164000,
    volume24h: 28000,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 164000,
    holders: 27,
    transactions24h: 3,
    sniperHolding: 12.5,
    insidersHolding: 8.3,
    bundleHolding: 15.2,
    bonding: 78.5,
    proTraders: 5,
    kols: 2,
    devMigrations: 0,
    devCreated: 3,
    globalFeesPaid: 1250.75,
  },
  {
    id: "token-2",
    symbol: "ZYO",
    name: "BTEL_dope",
    price: 3.69,
    priceChange24h: 0.181,
    priceChangePercentage24h: 5.0,
    marketCap: 17000,
    volume24h: 62000,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 17000,
    holders: 43,
    transactions24h: 1,
    sniperHolding: 7.8,
    insidersHolding: 4.2,
    bundleHolding: 9.6,
    bonding: 65.3,
    proTraders: 3,
    kols: 1,
    devMigrations: 1,
    devCreated: 7,
    globalFeesPaid: 892.33,
  },
  {
    id: "token-3",
    symbol: "Juha",
    name: "CFR3_pump",
    price: 4.12,
    priceChange24h: -0.518,
    priceChangePercentage24h: -7.0,
    marketCap: 12000,
    volume24h: 1290,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 12000,
    holders: 33,
    transactions24h: 1,
    sniperHolding: 18.7,
    insidersHolding: 11.4,
    bundleHolding: 22.1,
    bonding: 45.8,
    proTraders: 2,
    kols: 0,
    devMigrations: 0,
    devCreated: 1,
    globalFeesPaid: 567.82,
  },
  {
    id: "token-4",
    symbol: "$BAILAN",
    name: "EQCI_pump",
    price: 3.77,
    priceChange24h: 0.8,
    priceChangePercentage24h: 2.0,
    marketCap: 1000,
    volume24h: 573,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 1000,
    holders: 14,
    transactions24h: 3,
    sniperHolding: 25.3,
    insidersHolding: 16.7,
    bundleHolding: 31.2,
    bonding: 23.4,
    proTraders: 1,
    kols: 0,
    devMigrations: 0,
    devCreated: 2,
    globalFeesPaid: 134.56,
  },
  // Final Stretch
  {
    id: "token-5",
    symbol: "AgentM",
    name: "BVQO_GVsE",
    price: 1.42,
    priceChange24h: 0.28,
    priceChangePercentage24h: 20.0,
    marketCap: 1000,
    volume24h: 520622,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 1000,
    holders: 2,
    transactions24h: 141,
    sniperHolding: 45.2,
    insidersHolding: 35.8,
    bundleHolding: 12.4,
    bonding: 87.9,
    proTraders: 8,
    kols: 3,
    devMigrations: 2,
    devCreated: 12,
    globalFeesPaid: 2456.89,
  },
  {
    id: "token-6",
    symbol: "CSGN",
    name: "BVGx_RoB8",
    price: 9.45,
    priceChange24h: 0.22,
    priceChangePercentage24h: 19.0,
    marketCap: 17000,
    volume24h: 1000,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 17000,
    holders: 14,
    transactions24h: 832,
    sniperHolding: 32.1,
    insidersHolding: 28.5,
    bundleHolding: 19.8,
    bonding: 72.3,
    proTraders: 6,
    kols: 2,
    devMigrations: 1,
    devCreated: 9,
    globalFeesPaid: 1789.45,
  },
  {
    id: "token-7",
    symbol: "Geck",
    name: "CTRE_VVHB",
    price: 7.06,
    priceChange24h: -0.19,
    priceChangePercentage24h: -19.0,
    marketCap: 3000,
    volume24h: 1000,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 3000,
    holders: 52,
    transactions24h: 26,
    sniperHolding: 15.6,
    insidersHolding: 22.3,
    bundleHolding: 18.9,
    bonding: 56.7,
    proTraders: 4,
    kols: 1,
    devMigrations: 1,
    devCreated: 5,
    globalFeesPaid: 986.34,
  },
  {
    id: "token-8",
    symbol: "DBBW",
    name: "H2ak_MUIH",
    price: 4.9,
    priceChange24h: 0.1,
    priceChangePercentage24h: 0.0,
    marketCap: 1000,
    volume24h: 819,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 1000,
    holders: 1,
    transactions24h: 0,
    sniperHolding: 67.8,
    insidersHolding: 89.2,
    bundleHolding: 45.6,
    bonding: 12.1,
    proTraders: 0,
    kols: 0,
    devMigrations: 0,
    devCreated: 1,
    globalFeesPaid: 45.67,
  },
  // Migrated
  {
    id: "token-9",
    symbol: "NVIDIA",
    name: "535x_2FPm",
    price: 46.3,
    priceChange24h: 12.0,
    priceChangePercentage24h: 75.0,
    marketCap: 3000,
    volume24h: 404,
    category: "migrated",
    chain: "SOL",
    liquidity: 3000,
    holders: 2,
    transactions24h: 21,
    sniperHolding: 5.2,
    insidersHolding: 12.8,
    bundleHolding: 8.9,
    bonding: 95.5,
    proTraders: 12,
    kols: 8,
    devMigrations: 3,
    devCreated: 25,
    globalFeesPaid: 4567.89,
  },
  {
    id: "token-10",
    symbol: "Cyberscope",
    name: "9ThE_Gp4i",
    price: 1.09,
    priceChange24h: 0.04,
    priceChangePercentage24h: 95.0,
    marketCap: 2000,
    volume24h: 153,
    category: "migrated",
    chain: "SOL",
    liquidity: 2000,
    holders: 21,
    transactions24h: 100,
    sniperHolding: 8.7,
    insidersHolding: 15.4,
    bundleHolding: 12.1,
    bonding: 89.3,
    proTraders: 9,
    kols: 4,
    devMigrations: 2,
    devCreated: 18,
    globalFeesPaid: 2345.67,
  },
  {
    id: "token-11",
    symbol: "SPIRIT",
    name: "4X9m_pump",
    price: 24.1,
    priceChange24h: -12.0,
    priceChangePercentage24h: -50.0,
    marketCap: 5000,
    volume24h: 58177,
    category: "migrated",
    chain: "SOL",
    liquidity: 5000,
    holders: 26,
    transactions24h: 169,
    sniperHolding: 23.4,
    insidersHolding: 34.7,
    bundleHolding: 28.9,
    bonding: 76.2,
    proTraders: 15,
    kols: 7,
    devMigrations: 4,
    devCreated: 31,
    globalFeesPaid: 8934.56,
  },
  {
    id: "token-12",
    symbol: "FORGEAI",
    name: "6xdC_pump",
    price: 12.2,
    priceChange24h: -11.0,
    priceChangePercentage24h: 0.0,
    marketCap: 5000,
    volume24h: 614,
    category: "migrated",
    chain: "SOL",
    liquidity: 5000,
    holders: 52,
    transactions24h: 0,
    sniperHolding: 14.8,
    insidersHolding: 19.6,
    bundleHolding: 16.3,
    bonding: 83.4,
    proTraders: 11,
    kols: 5,
    devMigrations: 3,
    devCreated: 22,
    globalFeesPaid: 5678.9,
  },
  // Additional tokens
  {
    id: "token-13",
    symbol: "MOONX",
    name: "Moon_Exchange",
    price: 8.95,
    priceChange24h: 1.23,
    priceChangePercentage24h: 15.9,
    marketCap: 89000,
    volume24h: 12500,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 89000,
    holders: 67,
    transactions24h: 8,
    sniperHolding: 9.8,
    insidersHolding: 6.4,
    bundleHolding: 11.7,
    bonding: 82.1,
    proTraders: 7,
    kols: 3,
    devMigrations: 1,
    devCreated: 14,
    globalFeesPaid: 3456.78,
  },
  {
    id: "token-14",
    symbol: "DEGEN",
    name: "DegenApe_coin",
    price: 2.34,
    priceChange24h: -0.45,
    priceChangePercentage24h: -16.1,
    marketCap: 45000,
    volume24h: 8900,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 45000,
    holders: 89,
    transactions24h: 15,
    sniperHolding: 21.3,
    insidersHolding: 18.9,
    bundleHolding: 26.4,
    bonding: 54.7,
    proTraders: 6,
    kols: 2,
    devMigrations: 0,
    devCreated: 8,
    globalFeesPaid: 1987.65,
  },
  {
    id: "token-15",
    symbol: "PEPE2",
    name: "PepeRevenge",
    price: 0.0034,
    priceChange24h: 0.0012,
    priceChangePercentage24h: 54.5,
    marketCap: 156000,
    volume24h: 34500,
    category: "new-pairs",
    chain: "SOL",
    liquidity: 156000,
    holders: 234,
    transactions24h: 42,
    sniperHolding: 3.2,
    insidersHolding: 2.8,
    bundleHolding: 5.1,
    bonding: 91.4,
    proTraders: 18,
    kols: 12,
    devMigrations: 2,
    devCreated: 45,
    globalFeesPaid: 7234.56,
  },
  {
    id: "token-16",
    symbol: "ROCKET",
    name: "RocketFuel_v2",
    price: 15.67,
    priceChange24h: 2.89,
    priceChangePercentage24h: 22.6,
    marketCap: 78000,
    volume24h: 19800,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 78000,
    holders: 145,
    transactions24h: 28,
    sniperHolding: 16.7,
    insidersHolding: 24.1,
    bundleHolding: 19.8,
    bonding: 68.9,
    proTraders: 13,
    kols: 6,
    devMigrations: 2,
    devCreated: 28,
    globalFeesPaid: 4532.89,
  },
  {
    id: "token-17",
    symbol: "ALPHA",
    name: "AlphaProtocol",
    price: 6.78,
    priceChange24h: -0.98,
    priceChangePercentage24h: -12.6,
    marketCap: 23000,
    volume24h: 5600,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 23000,
    holders: 78,
    transactions24h: 12,
    sniperHolding: 27.4,
    insidersHolding: 31.2,
    bundleHolding: 24.6,
    bonding: 59.8,
    proTraders: 8,
    kols: 3,
    devMigrations: 1,
    devCreated: 16,
    globalFeesPaid: 2876.54,
  },
  {
    id: "token-18",
    symbol: "BETA",
    name: "BetaNetwork",
    price: 3.45,
    priceChange24h: 0.67,
    priceChangePercentage24h: 24.1,
    marketCap: 34000,
    volume24h: 8900,
    category: "final-stretch",
    chain: "SOL",
    liquidity: 34000,
    holders: 123,
    transactions24h: 19,
    sniperHolding: 11.9,
    insidersHolding: 17.6,
    bundleHolding: 14.2,
    bonding: 74.3,
    proTraders: 10,
    kols: 4,
    devMigrations: 2,
    devCreated: 19,
    globalFeesPaid: 3789.12,
  },
  {
    id: "token-19",
    symbol: "GAMMA",
    name: "GammaChain",
    price: 89.45,
    priceChange24h: 15.23,
    priceChangePercentage24h: 20.5,
    marketCap: 245000,
    volume24h: 67800,
    category: "migrated",
    chain: "SOL",
    liquidity: 245000,
    holders: 456,
    transactions24h: 89,
    sniperHolding: 4.1,
    insidersHolding: 7.8,
    bundleHolding: 6.3,
    bonding: 96.7,
    proTraders: 25,
    kols: 18,
    devMigrations: 5,
    devCreated: 67,
    globalFeesPaid: 15678.9,
  },
  {
    id: "token-20",
    symbol: "DELTA",
    name: "DeltaForce",
    price: 0.56,
    priceChange24h: -0.12,
    priceChangePercentage24h: -17.6,
    marketCap: 12000,
    volume24h: 3400,
    category: "migrated",
    chain: "SOL",
    liquidity: 12000,
    holders: 67,
    transactions24h: 23,
    sniperHolding: 19.7,
    insidersHolding: 26.4,
    bundleHolding: 22.1,
    bonding: 73.8,
    proTraders: 7,
    kols: 3,
    devMigrations: 2,
    devCreated: 11,
    globalFeesPaid: 1567.89,
  },
  {
    id: "token-21",
    symbol: "OMEGA",
    name: "OmegaVault",
    price: 234.56,
    priceChange24h: 45.67,
    priceChangePercentage24h: 24.2,
    marketCap: 567000,
    volume24h: 123400,
    category: "migrated",
    chain: "SOL",
    liquidity: 567000,
    holders: 789,
    transactions24h: 156,
    sniperHolding: 2.3,
    insidersHolding: 4.7,
    bundleHolding: 3.8,
    bonding: 98.2,
    proTraders: 42,
    kols: 28,
    devMigrations: 7,
    devCreated: 89,
    globalFeesPaid: 28934.56,
  },
  {
    id: "token-22",
    symbol: "SIGMA",
    name: "SigmaDAO",
    price: 7.89,
    priceChange24h: -1.23,
    priceChangePercentage24h: -13.5,
    marketCap: 45000,
    volume24h: 12300,
    category: "migrated",
    chain: "SOL",
    liquidity: 45000,
    holders: 234,
    transactions24h: 45,
    sniperHolding: 13.6,
    insidersHolding: 18.9,
    bundleHolding: 15.7,
    bonding: 81.4,
    proTraders: 16,
    kols: 9,
    devMigrations: 3,
    devCreated: 34,
    globalFeesPaid: 6789.23,
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTokens(): Promise<Token[]> {
  await delay(1000); // Simulate network delay

  const tokens = MOCK_TOKENS.map((token) => ({
    ...token,
    timestamp: Date.now(),
  }));

  // Randomly throw an error 10% of the time to test error handling
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch tokens");
  }

  return tokens;
}

export async function fetchTokenById(id: string): Promise<Token | null> {
  await delay(500);

  const token = MOCK_TOKENS.find((t) => t.id === id);
  return token ? { ...token, timestamp: Date.now() } : null;
}

// Generate random updates for all token variables for WebSocket simulation
export function generatePriceUpdate(token: Token): {
  tokenId: string;
  price: number;
  change24h: number;
  changePercentage24h: number;
  marketCap: number;
  volume24h: number;
  holders: number;
  transactions24h: number;
  sniperHolding: number;
  insidersHolding: number;
  bundleHolding: number;
  bonding: number;
  proTraders: number;
  kols: number;
  devMigrations: number;
  devCreated: number;
  globalFeesPaid: number;
  timestamp: number;
} {
  // Small random price movement (-2% to +2%)
  const priceMultiplier = 1 + (Math.random() - 0.5) * 0.04;
  const newPrice = Number((token.price * priceMultiplier).toFixed(3));

  const change24h = Number((newPrice - token.price).toFixed(3));
  const changePercentage24h = Number(
    ((change24h / token.price) * 100).toFixed(2)
  );

  // Generate random updates for market data (-5% to +5%)
  const marketCapMultiplier = 1 + (Math.random() - 0.5) * 0.1;
  const volumeMultiplier = 1 + (Math.random() - 0.5) * 0.2;

  // Generate random updates for holder data (-2% to +2%)
  const holdersMultiplier = 1 + (Math.random() - 0.5) * 0.04;
  const transactionsMultiplier = 1 + (Math.random() - 0.5) * 0.3;

  // Generate random updates for holding percentages (-1% to +1%)
  const sniperChange = (Math.random() - 0.5) * 2;
  const insidersChange = (Math.random() - 0.5) * 2;
  const bundleChange = (Math.random() - 0.5) * 2;
  const bondingChange = (Math.random() - 0.5) * 1;

  // Generate random updates for trader counts (0 to +2 or -1)
  const proTradersChange = Math.floor((Math.random() - 0.3) * 3);
  const kolsChange = Math.floor((Math.random() - 0.4) * 2);

  // Occasionally update dev stats
  const devMigrationsChange =
    Math.random() < 0.1 ? Math.floor(Math.random() * 2) : 0;
  const devCreatedChange =
    Math.random() < 0.05 ? Math.floor(Math.random() * 3) : 0;

  // Update global fees based on volume change
  const feesMultiplier = 1 + (Math.random() - 0.5) * 0.15;

  return {
    tokenId: token.id,
    price: newPrice,
    change24h,
    changePercentage24h,
    marketCap: Math.max(
      1000,
      Math.floor((token.marketCap || 0) * marketCapMultiplier)
    ),
    volume24h: Math.max(
      100,
      Math.floor((token.volume24h || 0) * volumeMultiplier)
    ),
    holders: Math.max(1, Math.floor((token.holders || 1) * holdersMultiplier)),
    transactions24h: Math.max(
      0,
      Math.floor((token.transactions24h || 0) * transactionsMultiplier)
    ),
    sniperHolding: Math.max(
      0,
      Math.min(
        100,
        Number(((token.sniperHolding || 0) + sniperChange).toFixed(1))
      )
    ),
    insidersHolding: Math.max(
      0,
      Math.min(
        100,
        Number(((token.insidersHolding || 0) + insidersChange).toFixed(1))
      )
    ),
    bundleHolding: Math.max(
      0,
      Math.min(
        100,
        Number(((token.bundleHolding || 0) + bundleChange).toFixed(1))
      )
    ),
    bonding: Math.max(
      0,
      Math.min(100, Number(((token.bonding || 0) + bondingChange).toFixed(1)))
    ),
    proTraders: Math.max(0, (token.proTraders || 0) + proTradersChange),
    kols: Math.max(0, (token.kols || 0) + kolsChange),
    devMigrations: (token.devMigrations || 0) + devMigrationsChange,
    devCreated: (token.devCreated || 0) + devCreatedChange,
    globalFeesPaid: Number(
      ((token.globalFeesPaid || 0) * feesMultiplier).toFixed(2)
    ),
    timestamp: Date.now(),
  };
}
