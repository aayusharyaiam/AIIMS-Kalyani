import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950"></div>
      
      <div className="z-10 flex flex-col items-center space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-amber-500 drop-shadow-md">
          ODYSSEY
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-slate-300">
          AIIMS Kalyani Portal
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-8">
          Welcome to the Greek Mythos Experience. Awaiting Stitch design components to render the Acropolis Dashboard and Gates of Olympus...
        </p>
        
        <div className="mt-12 p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <p className="text-amber-400 font-mono text-sm">
            Ready to integrate the provided Stitch designs once the URLs are provided.
          </p>
        </div>
      </div>
    </main>
  );
}
