"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrendingUp, DollarSign, Users, Power, X } from "lucide-react";

export function P1Component() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [slippage, setSlippage] = useState("20");
  const [priority, setPriority] = useState("0.001");
  const [bribe, setBribe] = useState("0.01");
  const [autoFee, setAutoFee] = useState(false);
  const [maxFee, setMaxFee] = useState("0.1");
  const [mevMode, setMevMode] = useState<"off" | "reduced" | "secure">("off");
  const [rpc, setRpc] = useState("https://a..e.com");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <div className="text-sm text-white cursor-pointer hover:text-blue-400 transition-colors">
              P1
            </div>
          </DialogTrigger>
        </TooltipTrigger>

        {/* Tooltip Content */}
        <TooltipContent
          side="bottom"
          className="w-full p-0 bg-black/95 backdrop-blur-sm border-gray-800 shadow-xl rounded-none"
        >
          <div className="">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-800/70 transition-colors cursor-pointer">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400">20%</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-800/70 transition-colors cursor-pointer">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-yellow-400">0.001</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-800/70 transition-colors cursor-pointer">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-400">0.01</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-800/70 transition-colors cursor-pointer">
              <Power className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-400">Off</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      {/* Dialog Content */}
      <DialogContent className="bg-gray-900/95 backdrop-blur-sm border-gray-700 text-white max-w-md p-0">
        <DialogHeader className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium">
              Trading Settings
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="px-4">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab("buy")}
              className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === "buy"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Buy Settings
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === "sell"
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Sell Settings
            </button>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Slippage */}
            <div className="bg-gray-800/50 rounded-lg p-3">
              <input
                type="text"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
                className="w-full bg-transparent text-center text-lg font-medium text-white outline-none"
              />
              <div className="text-xs text-gray-400 text-center mt-1 flex items-center justify-center gap-1">
                <span>%</span>
                <span>SLIPPAGE</span>
              </div>
            </div>

            {/* Priority */}
            <div className="bg-gray-800/50 rounded-lg p-3">
              <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-transparent text-center text-lg font-medium text-white outline-none"
              />
              <div className="text-xs text-gray-400 text-center mt-1 flex items-center justify-center gap-1">
                <DollarSign className="w-3 h-3" />
                <span>PRIORITY</span>
              </div>
            </div>

            {/* Bribe */}
            <div className="bg-gray-800/50 rounded-lg p-3">
              <input
                type="text"
                value={bribe}
                onChange={(e) => setBribe(e.target.value)}
                className="w-full bg-transparent text-center text-lg font-medium text-white outline-none"
              />
              <div className="text-xs text-gray-400 text-center mt-1 flex items-center justify-center gap-1">
                <span>💰</span>
                <span>BRIBE</span>
              </div>
            </div>
          </div>

          {/* Auto Fee */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={autoFee}
                onChange={(e) => setAutoFee(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-600"
              />
              <span className="text-sm text-gray-300">Auto Fee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>MAX FEE</span>
              <input
                type="text"
                value={maxFee}
                onChange={(e) => setMaxFee(e.target.value)}
                className="w-16 bg-gray-800 rounded px-2 py-1 text-white text-center outline-none"
              />
            </div>
          </div>

          {/* MEV Mode */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-300">MEV Mode</span>
              <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <div className="flex gap-2">
              {["off", "reduced", "secure"].map((mode) => (
                <label
                  key={mode}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="mevMode"
                    value={mode}
                    checked={mevMode === mode}
                    onChange={(e) => setMevMode(e.target.value as any)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-300 capitalize">
                    {mode === "off" && "🔘 Off"}
                    {mode === "reduced" && "🔵 Reduced"}
                    {mode === "secure" && "🔒 Secure"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* RPC */}
          <div className="mb-6">
            <div className="text-xs text-gray-400 mb-1">RPC</div>
            <input
              type="text"
              value={rpc}
              onChange={(e) => setRpc(e.target.value)}
              className="w-full bg-gray-800/50 rounded px-3 py-2 text-white text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mb-4">
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
