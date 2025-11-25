import {TokenTable} from "@/components/TokenTable";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-black/50">
      <div className="w-full h-full flex flex-col py-8 px-4">
        <div className="mb-8 flex-shrink-0">
          <h1 className="text-4xl font-bold text-foreground mb-2">Pulse</h1>
          <p className="text-muted-foreground">Token Discovery Dashboard</p>
        </div>
        <div className="flex-1 min-h-0">
          <TokenTable />
        </div>
      </div>
    </main>
  );
}
