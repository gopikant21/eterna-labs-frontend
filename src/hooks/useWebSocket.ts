"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateTokenPrice } from "@/store/slices/tokensSlice";
import { generatePriceUpdate } from "@/lib/api";

export function useWebSocket() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.tokens);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    // Simulate WebSocket connection with periodic updates
    intervalRef.current = setInterval(() => {
      // Update 1-10 random tokens each time
      const tokensToUpdate = items.length > 0 ? [...items]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 10) + 1) : [];

      tokensToUpdate.forEach((token) => {
        const update = generatePriceUpdate(token);
        dispatch(updateTokenPrice(update));
      });
    }, 1000); // Update every 1 second

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items, dispatch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
}
