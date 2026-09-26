import { Suspense } from "react";
import Link from "next/link";

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
          The Gates of Olympus have been unlocked.
        </p>
        
        <Link 
          href="/login" 
          className="mt-12 py-3.5 px-8 rounded bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E5A823] text-[#241a00] font-serif text-lg font-extrabold uppercase tracking-widest hover:brightness-110 shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all"
        >
          Enter the Gates of Olympus (Login)
        </Link>
      </div>
    </main>
  );
}
