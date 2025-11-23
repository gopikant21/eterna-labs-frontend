"use client";

import { Token } from "@/types/token";
import { TokenCard } from "./TokenCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
  totalCount: number;
}

export function TokenColumn({ title, tokens, totalCount }: TokenColumnProps) {
  return (
    <div className="flex flex-col h-full border-r border-white/10 last:border-r-0 overflow-y-auto">
      <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
          {totalCount}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-600/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slate-500/70">
        <div className="">
          {tokens.length === 0 ? (
            <div className="rounded-lg border border-dashed border-muted p-8 text-center">
              <p className="text-muted-foreground">No tokens found</p>
            </div>
          ) : (
            tokens.map((token) => {
              const bondingValue = token.bonding ?? 0;

              // Determine text color based on bonding value
              const getBondingColor = (value: number) => {
                if (value >= 80) return "text-green-400";
                if (value >= 60) return "text-yellow-400";
                if (value >= 40) return "text-orange-400";
                return "text-red-400";
              };

              const textColor = getBondingColor(bondingValue);

              return (
                <Tooltip key={token.id}>
                  <TooltipTrigger asChild>
                    <div>
                      <TokenCard token={token} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <span className={textColor}>Bonding: {bondingValue}%</span>
                  </TooltipContent>
                </Tooltip>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
