"use client";

import React, { memo } from "react";
import { Token } from "@/types/token";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  Info,
  ExternalLink,
  Link,
  Search,
  Users,
  Zap,
  Ghost,
  ChefHat,
  Boxes,
  Copy,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TokenCardProps {
  token: Token;
}

export const TokenCard = memo(({ token }: TokenCardProps) => {
  const isPositive = token.priceChangePercentage24h >= 0;
  const priceColor = isPositive ? "text-green-400" : "text-red-400";
  const changeIcon = isPositive ? TrendingUp : TrendingDown;

  const formatPrice = (price: number) => {
    if (price >= 1) return `$${price.toFixed(2)}`;
    return `$${price.toFixed(4)}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (!marketCap) return "$0";
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(1)}K`;
    return `$${marketCap.toFixed(0)}`;
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer p-2 hover:shadow-lg hover:shadow-slate-900/50 group">
      <div className="flex items-center gap-3">
        {/* Left avatar */}
        <div className="relative">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center text-white font-bold text-xs border border-purple-500/30">
            {token.symbol.slice(0, 3)}
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Middle content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <h3 className="text-white font-semibold text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                      {token.symbol}
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Token Symbol</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-slate-400 text-xs truncate max-w-32 hover:text-slate-300 transition-colors duration-200 cursor-pointer">
                      {token.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Token Name</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Copy className="h-3 w-3 text-slate-400 hover:text-blue-400 transition-all duration-200 cursor-pointer hover:scale-110" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Contract Address</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-green-400 hover:text-green-300 transition-colors duration-200 cursor-pointer">
                      {Math.floor(Math.random() * 60) + 1}m
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Time Since Launch</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1 hover:bg-slate-800/50 rounded px-1 py-0.5 transition-all duration-200 cursor-pointer">
                      <Users className="h-3 w-3 text-blue-400" />
                      <span>{token.holders ?? 1}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total Holders</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1 hover:bg-slate-800/50 rounded px-1 py-0.5 transition-all duration-200 cursor-pointer">
                      <div className="w-3 h-3 rounded-full border border-slate-500 hover:border-slate-400 transition-colors duration-200"></div>
                      <span>{token.proTraders ?? 0}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Professional Traders</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1 hover:bg-slate-800/50 rounded px-1 py-0.5 transition-all duration-200 cursor-pointer">
                      <Search className="h-3 w-3 text-blue-400 hover:text-blue-300 transition-colors duration-200" />
                      <span>{token.kols ?? 1}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Key Opinion Leaders (KOLs)</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-orange-400 hover:text-orange-300 transition-colors duration-200 cursor-pointer hover:bg-slate-800/50 rounded px-1 py-0.5">
                      <span>
                        {token.devMigrations ?? 0}/{token.devCreated ?? 0}
                      </span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Dev Migrations/Created </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Right stats */}
            <div className="text-right">
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-end justify-end gap-2 hover:bg-slate-800/50 rounded px-2 py-1 transition-all duration-200 cursor-pointer group">
                    <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                      MC
                    </div>
                    <div className="text-cyan-400 font-bold text-sm group-hover:text-cyan-300 transition-colors duration-200">
                      {formatMarketCap(token.marketCap)}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Market Cap</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-end justify-end gap-2 hover:bg-slate-800/50 rounded px-2 py-1 transition-all duration-200 cursor-pointer group">
                    <div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-200">
                      V
                    </div>
                    <div className="text-white font-semibold text-sm group-hover:text-slate-200 transition-colors duration-200">
                      {formatMarketCap(token.volume24h)}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>24h Volume</p>
                </TooltipContent>
              </Tooltip>

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <span className="text-slate-400">F</span>
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-0.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"></div>
                  <div className="w-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-white font-medium hover:text-cyan-400 transition-colors duration-200 cursor-pointer hover:bg-slate-800/50 rounded px-1 py-0.5">
                      {token.globalFeesPaid ?? 0}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Global Fees Paid</p>
                  </TooltipContent>
                </Tooltip>

                <span className="text-slate-400">TX</span>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-white font-medium hover:text-cyan-400 transition-colors duration-200 cursor-pointer hover:bg-slate-800/50 rounded px-1 py-0.5">
                      {token.transactions24h ?? 0}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>24h Transactions</p>
                  </TooltipContent>
                </Tooltip>
                <div className="w-6 h-0.5 bg-gradient-to-r from-green-400 via-green-400 to-red-400 rounded-full ml-1"></div>
              </div>
            </div>
          </div>

          {/* Bottom row with percentages and SOL button */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium border border-slate-800 rounded-full p-1",
                      priceColor
                    )}
                  >
                    <Users className="h-3 w-3" />
                    {Math.abs(token.priceChangePercentage24h).toFixed(0)}%
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>24h Price Change</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 text-green-400 text-xs font-medium border border-slate-800 rounded-full p-1 hover:border-slate-700 hover:bg-slate-800/50 hover:text-green-300 transition-all duration-200 cursor-pointer hover:scale-105">
                    <ChefHat className="h-3 w-3" />
                    {token.bonding ?? 0}%
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bonding Percentage</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium border border-slate-800 rounded-full p-1 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200 cursor-pointer hover:scale-105",
                      priceColor
                    )}
                  >
                    <TrendingDown className="h-3 w-3" />
                    {token.sniperHolding}%
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sniper Holding</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 text-green-400 text-xs font-medium border border-slate-800 rounded-full p-1 hover:border-slate-700 hover:bg-slate-800/50 hover:text-green-300 transition-all duration-200 cursor-pointer hover:scale-105">
                    <Ghost className="h-3 w-3" />
                    {token.insidersHolding ?? 0}%
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Insiders Holding</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-1 text-green-400 text-xs font-medium border border-slate-800 rounded-full p-1 hover:border-slate-700 hover:bg-slate-800/50 hover:text-green-300 transition-all duration-200 cursor-pointer hover:scale-105">
                    <Boxes className="h-3 w-3" />
                    {token.bundleHolding ?? 0}%
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bundle Holding</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded-full flex items-center gap-1 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95">
              <Zap className="h-3 w-3 group-hover:animate-pulse" />0 SOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

TokenCard.displayName = "TokenCard";
