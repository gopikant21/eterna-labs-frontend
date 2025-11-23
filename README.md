# Axiom Trade Token Discovery Table - Replica

This is a pixel-perfect replica of Axiom Trade's token discovery table built with Next.js 14, TypeScript, Tailwind CSS, Redux Toolkit, and React Query.

## 🚀 Features

### Core Features

- **Three Token Columns**: New Pairs, Final Stretch, Migrated
- **Interactive Components**: Tooltips, Popovers, Modal dialogs
- **Real-time Updates**: Mock WebSocket for live price updates with smooth color transitions
- **Search & Filter**: Real-time token search functionality
- **Loading States**: Skeleton loaders with shimmer effects
- **Error Handling**: Comprehensive error boundaries and user feedback

### Technical Implementation

- **Next.js 14**: App Router with TypeScript (strict mode)
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Redux Toolkit**: Centralized state management for tokens
- **React Query**: Data fetching with caching and background updates
- **Radix UI**: Accessible headless components (Tooltip, Popover, Dialog)
- **Atomic Architecture**: Reusable components with separation of concerns

### Performance Features

- **Memoized Components**: React.memo for optimized re-renders
- **Smooth Animations**: CSS transitions for hover effects and state changes
- **Efficient Updates**: Targeted Redux updates for price changes
- **Progressive Loading**: Skeleton states while data loads

### Interaction Patterns

- **Hover Effects**: Smooth scale and shadow transitions on token cards
- **Click Actions**: Detailed popover and modal interactions
- **Keyboard Navigation**: Full accessibility support via Radix primitives
- **Visual Feedback**: Loading states and error handling

## 🏗️ Architecture

```
src/
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── tooltip.tsx
│   │   ├── popover.tsx
│   │   ├── dialog.tsx
│   │   └── skeleton.tsx
│   └── TokenTable/         # Token table components
│       ├── index.tsx       # Main table component
│       ├── TokenCard.tsx   # Individual token card
│       ├── TokenColumn.tsx # Column wrapper
│       └── TokenTableHeader.tsx # Search and controls
├── store/                  # Redux store
│   ├── index.ts
│   └── slices/
│       └── tokensSlice.ts
├── hooks/                  # Custom hooks
│   └── useWebSocket.ts
├── lib/                    # Utilities
│   ├── api.ts             # Mock API functions
│   └── utils.ts           # Helper functions
└── types/                  # TypeScript definitions
    └── token.ts
```

## 📦 Installation & Setup

1. **Install dependencies**:

```powershell
npm install
```

2. **Start development server**:

```powershell
npm run dev
```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### TokenCard

- Memoized component for performance
- Integrated Tooltip, Popover, and Modal interactions
- Real-time price updates with smooth color transitions
- Responsive design with hover effects

### WebSocket Mock

- Simulates real-time price updates every 2 seconds
- Updates 1-3 random tokens per cycle
- Smooth price transitions with percentage calculations

### Redux Store

- Normalized token state management
- Optimistic updates for real-time data
- Error handling and loading states

## 🎨 Design System

### Color Tokens

- Background: `hsl(222.2 84% 4.9%)`
- Foreground: `hsl(210 40% 98%)`
- Accent Colors: Green/Red for price changes
- Muted: `hsl(215 20.2% 65.1%)`

### Typography

- Font: Inter with system fallbacks
- Responsive text sizing
- Proper contrast ratios for accessibility

## 🔧 Customization

### Adding New Token Categories

1. Update the `Token['category']` type in `src/types/token.ts`
2. Add category filter logic in `TokenTable/index.tsx`
3. Update mock data in `src/lib/api.ts`

### Modifying WebSocket Behavior

Edit `src/hooks/useWebSocket.ts` to adjust:

- Update frequency
- Number of tokens updated per cycle
- Price change magnitude

### Styling Adjustments

- Modify Tailwind config in `tailwind.config.js`
- Update CSS custom properties in `app/globals.css`
- Adjust component-specific styles

## 📊 Performance

The application is optimized for:

- **< 100ms interaction times**
- **No layout shifts** during loading
- **Smooth 60fps animations**
- **Minimal bundle size** with code splitting

### Performance Features

- Component memoization with React.memo
- Efficient Redux selectors
- React Query caching and background updates
- CSS-based animations for smooth performance

## 🧪 Testing

To add tests (recommended for production):

```powershell
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

## 📈 Future Enhancements

- [ ] Implement actual WebSocket connection
- [ ] Add more sophisticated filtering and sorting
- [ ] Integrate real market data APIs
- [ ] Add chart visualizations
- [ ] Implement user preferences persistence
- [ ] Add keyboard shortcuts
- [ ] Mobile-optimized interactions

## 🏆 Requirements Compliance

✅ **Next.js 14 App Router + TypeScript (strict)**  
✅ **Tailwind CSS for styling**  
✅ **Redux Toolkit for state management**  
✅ **React Query for data fetching**  
✅ **Radix UI for accessible components**  
✅ **Memoized components for performance**  
✅ **Real-time WebSocket mock**  
✅ **Loading states with skeletons**  
✅ **Error boundaries and handling**  
✅ **Variety of interaction patterns**  
✅ **Atomic component architecture**

---

Built with ❤️ for pixel-perfect trading interfaces.
