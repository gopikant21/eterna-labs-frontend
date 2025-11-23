import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  Token,
  PriceUpdate,
  TableSort,
  TokenFilters,
} from "@/types/token";

interface TokensState {
  items: Token[];
  loading: boolean;
  error: string | null;
  lastUpdated: number | null;
  sort: TableSort;
  filters: TokenFilters;
  selectedToken: string | null;
}

const initialState: TokensState = {
  items: [],
  loading: false,
  error: null,
  lastUpdated: null,
  sort: {
    field: "marketCap",
    direction: "desc",
  },
  filters: {
    search: "",
  },
  selectedToken: null,
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.lastUpdated = Date.now();
    },
    addToken: (state, action: PayloadAction<Token>) => {
      const existingIndex = state.items.findIndex(
        (token) => token.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items[existingIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }
      state.lastUpdated = Date.now();
    },
    updateTokenPrice: (state, action: PayloadAction<PriceUpdate>) => {
      const { tokenId, price, change24h, changePercentage24h, timestamp } =
        action.payload;
      const token = state.items.find((t) => t.id === tokenId);
      if (token && timestamp > token.timestamp) {
        token.price = price;
        token.priceChange24h = change24h;
        token.priceChangePercentage24h = changePercentage24h;
        token.timestamp = timestamp;
      }
      state.lastUpdated = Date.now();
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSort: (state, action: PayloadAction<TableSort>) => {
      state.sort = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<TokenFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSelectedToken: (state, action: PayloadAction<string | null>) => {
      state.selectedToken = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setTokens,
  addToken,
  updateTokenPrice,
  setError,
  setSort,
  setFilters,
  setSelectedToken,
  clearError,
} = tokensSlice.actions;

export default tokensSlice.reducer;
