# Eterna Labs Frontend - Token Discovery Dashboard

A sophisticated real-time token discovery dashboard built with Next.js 14, featuring comprehensive trading settings, WebSocket connections, and professional UI components.

## 🚀 Features

### Core Features

- **Three Token Columns**: New Pairs, Final Stretch, Migrated
- **P1/P2/P3 Trading Components**: Interactive trading settings with hover tooltips and click dialogs
- **Real-time WebSocket**: Live token updates every 1 second via dedicated WebSocket server
- **Comprehensive Token Data**: Market cap, volume, holders, sniper/insider holdings, bonding %, and more
- **Professional UI**: Modern black theme with glass morphism effects
- **Trading Settings Modal**: Complete trading configuration with Buy/Sell tabs

### Advanced Token Variables

- **Market Metrics**: Market cap, 24h volume, transactions, global fees paid
- **Holder Analytics**: Total holders, professional traders, KOLs (Key Opinion Leaders)
- **Risk Indicators**: Sniper holding %, insiders holding %, bundle holding %
- **Developer Metrics**: Dev migrations, dev created tokens, bonding percentage
- **Real-time Updates**: All variables update dynamically via WebSocket

### Technical Implementation

- **Next.js 14**: App Router with TypeScript (strict mode)
- **Tailwind CSS**: Utility-first styling with custom dark theme
- **Redux Toolkit**: Centralized state management for tokens
- **React Query**: Data fetching with caching and background updates
- **shadcn/ui**: Modern component library with Radix UI primitives
- **WebSocket Server**: Dedicated TypeScript server for real-time data
- **Atomic Architecture**: Modular, reusable components

### Interactive Components

- **P1/P2/P3 Components**: Decoupled trading settings with unique configurations
- **Hover Tooltips**: Quick stats preview on hover
- **Click Dialogs**: Full trading settings modal with tabs
- **Dynamic Updates**: All token variables update in real-time
- **Professional Styling**: Modern black theme with smooth transitions

## 🏗️ Architecture

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── tooltip.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   └── skeleton.tsx
│   └── TokenTable/         # Token table components
│       ├── index.tsx       # Main table component
│       ├── TokenCard.tsx   # Individual token card
│       ├── TokenColumn.tsx # Column wrapper
│       ├── P1Component.tsx # P1 trading settings
│       ├── P2Component.tsx # P2 trading settings
│       ├── P3Component.tsx # P3 trading settings
│       └── TokenTableHeader.tsx # Search and controls
├── store/                  # Redux store
│   ├── index.ts
│   └── slices/
│       └── tokensSlice.ts
├── hooks/                  # Custom hooks
│   └── useWebSocket.ts    # WebSocket client
├── lib/                    # Utilities
│   ├── api.ts             # API functions & mock data
│   └── utils.ts           # Helper functions
├── types/                  # TypeScript definitions
│   └── token.ts           # Extended token interface
└── scripts/                # Server scripts
    └── start-websocket.ts  # WebSocket server
```

## 📦 Installation & Setup

1. **Install dependencies**:

```powershell
npm install
```

2. **Start WebSocket server**:

```powershell
npm run websocket:dev
```

3. **Start development server** (in new terminal):

```powershell
npm run dev
```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### P1/P2/P3 Components

- **Dual Functionality**: Hover tooltips + click dialogs
- **Trading Settings**: Slippage, priority, bribe, auto fee, MEV mode
- **shadcn Tabs**: Professional Buy/Sell settings tabs
- **Independent State**: Each component maintains its own configuration
- **Unique Values**: Different default settings per component

### WebSocket Integration

- **Real-time Updates**: 1-second intervals with random token selection
- **Comprehensive Variables**: Updates all token metrics simultaneously
- **Connection Management**: Auto-reconnect with heartbeat system
- **Error Handling**: Robust connection error recovery

### Token Card

- **Extended Data**: 10+ token variables with tooltips
- **Modern Styling**: Black theme with hover effects
- **Professional Icons**: Lucide icons for all metrics
- **Color Coding**: Dynamic colors based on values (bonding %, price changes)

## 🔧 WebSocket Server

### Dedicated Server Features

- **TypeScript Implementation**: Fully typed WebSocket server
- **Client Management**: Track multiple connected clients
- **Token Subscriptions**: Clients subscribe to specific tokens
- **Real-time Broadcasting**: 1-second update intervals
- **Comprehensive Updates**: All token variables updated per cycle

### Server Commands

```powershell
# Start WebSocket server in development
npm run websocket:dev

# Start WebSocket server in production
npm run websocket:start

# Run both frontend and WebSocket server
npm run dev:all
```

## 🎨 Design System

### Modern Black Theme

- **Primary Background**: `bg-black/80` with backdrop blur
- **Card Background**: `bg-black/95` with glass morphism
- **Borders**: `border-gray-800/50` for subtle definition
- **Text Colors**: White primary, gray-400 secondary
- **Accent Colors**: Green (positive), Red (negative), Blue (interactive)

### Interactive Elements

- **Hover Effects**: Color transitions without transformations
- **Glass Morphism**: `backdrop-blur-sm` effects
- **Professional Shadows**: `shadow-xl` with black/70 opacity
- **Smooth Transitions**: `transition-colors duration-300`

## 🔧 Customization

### Adding New Token Variables

1. Update the `Token` interface in `src/types/token.ts`
2. Add mock data in `src/lib/api.ts`
3. Update WebSocket server in `scripts/start-websocket.ts`
4. Add display logic in `TokenCard.tsx`

### Modifying Trading Settings

Edit individual P components (`P1Component.tsx`, etc.) to adjust:

- Default values for slippage, priority, bribe
- MEV mode configurations
- RPC endpoints
- Dialog styling and layout

### WebSocket Configuration

Modify `scripts/start-websocket.ts` to adjust:

- Update frequency (default: 1000ms)
- Number of tokens updated per cycle
- Variable update ranges and constraints

## 📊 Performance

The application is optimized for:

- **< 50ms WebSocket message handling**
- **Smooth 60fps animations**
- **Efficient state updates** with Redux Toolkit
- **Memoized components** for optimal re-renders

### Performance Features

- Component memoization with React.memo
- Efficient WebSocket subscription management
- Optimized Redux selectors and updates
- CSS-based animations for smooth performance
- Real-time data updates without UI blocking

## 🧪 WebSocket Testing

Test WebSocket connectivity:

```powershell
# Check if WebSocket server is running
netstat -an | findstr :8080

# Test WebSocket connection (using wscat if installed)
wscat -c ws://localhost:8080/ws
```

## 📈 Future Enhancements

- [ ] **Multi-timeframe Data**: 1m, 5m, 1h token updates
- [ ] **Advanced Filtering**: Complex multi-variable filters
- [ ] **Chart Integration**: Price history and volume charts
- [ ] **Portfolio Tracking**: User token watchlists
- [ ] **Alert System**: Price and volume alerts
- [ ] **Mobile Optimization**: Touch-friendly trading settings
- [ ] **Advanced Analytics**: ML-powered token insights

## 🏆 Technical Requirements Compliance

✅ **Next.js 14 App Router + TypeScript (strict)**  
✅ **Tailwind CSS with modern black theme**  
✅ **Redux Toolkit for comprehensive state management**  
✅ **React Query for efficient data fetching**  
✅ **shadcn/ui with Radix UI primitives**  
✅ **Real-time WebSocket server and client**  
✅ **Professional component architecture**  
✅ **Comprehensive token variable system**  
✅ **Advanced trading settings components**  
✅ **Modern UI with glass morphism effects**

## 🚀 Trading Features

### P1/P2/P3 Trading Components

- **P1**: Conservative settings (20% slippage, 0.001 priority, Off auto-fee)
- **P2**: Balanced settings (15% slippage, 0.002 priority, On auto-fee)
- **P3**: Aggressive settings (10% slippage, 0.005 priority, Secure MEV)

### Trading Settings Modal

- **Buy/Sell Tabs**: Separate configurations for buy and sell orders
- **Slippage Control**: Customizable slippage tolerance
- **Priority Fees**: MEV protection with priority fee settings
- **Bribe Settings**: Front-running protection mechanisms
- **Auto Fee Management**: Dynamic fee optimization
- **MEV Modes**: Off, Reduced, Secure protection levels
- **Custom RPC**: Configurable RPC endpoints

---

Built with ❤️ for professional DeFi trading interfaces.
│ ├── TokenCard.tsx # Individual token card
│ ├── TokenColumn.tsx # Column wrapper
│ └── TokenTableHeader.tsx # Search and controls
├── store/ # Redux store
│ ├── index.ts
│ └── slices/
│ └── tokensSlice.ts
├── hooks/ # Custom hooks
│ └── useWebSocket.ts
├── lib/ # Utilities
│ ├── api.ts # Mock API functions
│ └── utils.ts # Helper functions
└── types/ # TypeScript definitions
└── token.ts

````