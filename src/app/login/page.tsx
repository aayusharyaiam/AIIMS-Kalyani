"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Key, Badge, Eye, EyeOff, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col justify-center min-h-screen px-4 md:px-6">
      <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-lowest/90 border border-[#D4AF37]/25 p-4 sm:p-7 lg:p-12 shadow-[0_0_50px_-10px_rgba(212,175,55,0.18)]">
        
        {/* Ambient Ambrosia & Olympian Golden Background Glows */}
        <div className="absolute -top-36 -left-36 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#F2CA50]/10 to-transparent blur-[110px] pointer-events-none"></div>
        <div className="absolute -bottom-36 -right-36 w-96 h-96 rounded-full bg-gradient-to-tl from-[#38BDF8]/15 via-[#D4AF37]/15 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[90px] pointer-events-none"></div>
        
        {/* Greek Key Meander Border Line Decoration */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-60"></div>

        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* Left Column: Greek Mythology Odyssey Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between p-4 sm:p-7 rounded-lg bg-surface-container/70 border border-[#D4AF37]/20 backdrop-blur-md relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none text-primary" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15%" cy="20%" fill="currentColor" r="2.5"></circle>
              <circle cx="35%" cy="32%" fill="currentColor" r="1.5"></circle>
              <circle cx="70%" cy="18%" fill="currentColor" r="3"></circle>
              <circle cx="85%" cy="45%" fill="currentColor" r="1.5"></circle>
              <circle cx="55%" cy="65%" fill="currentColor" r="2.5"></circle>
              <circle cx="25%" cy="80%" fill="currentColor" r="1.5"></circle>
              <circle cx="75%" cy="85%" fill="currentColor" r="2"></circle>
              <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75" x1="15%" x2="35%" y1="20%" y2="32%"></line>
              <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75" x1="35%" x2="70%" y1="32%" y2="18%"></line>
              <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75" x1="55%" x2="75%" y1="65%" y2="85%"></line>
              <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75" x1="25%" x2="55%" y1="80%" y2="65%"></line>
            </svg>
            
            <div className="relative flex flex-col gap-4">
              <div className="flex flex-wrap gap-1 mt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/90 border border-[#D4AF37]/30 text-[#FFE088] text-[10px] tracking-[0.16em] uppercase font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse"></span>
                  SACRED PORTAL ENCRYPTED • HERMES PROTOCOL 26.0
                </div>
              </div>
            </div>

            <div className="relative my-7 flex flex-col gap-4">
              <div className="inline-block">
                <p className="font-cinzel text-xs text-[#D4AF37] tracking-[0.24em] font-bold uppercase">// THE GATES OF OLYMPUS // ODYSSEY 2026</p>
                <h2 className="font-cinzel text-3xl sm:text-4xl text-on-surface font-extrabold mt-1 leading-tight tracking-wide">
                  Cross the Threshold,<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2A3] via-[#D4AF37] to-[#7BD0FF]">Voyager.</span>
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant/90 leading-relaxed max-w-md">
                Enter the realm where ancient mythos converges with modern intellect. Unlock your passage to the Athlos arenas, sanctuary lodging in Elysium, and the nocturnal revels of Mount Olympus.
              </p>
              
              <div className="relative mt-2 rounded-lg overflow-hidden bg-surface-container-lowest/80 border border-[#D4AF37]/25 p-3.5 shadow-inner">
                <div className="flex items-center justify-between font-label-md text-xs text-on-surface-variant mb-3">
                  <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold tracking-wider uppercase">
                    ATHENIAN TELEMETRY
                  </span>
                  <span className="text-[#7BD0FF] tracking-wider text-[11px] font-mono">22.975° N, 88.526° E</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded bg-surface-container/80 border border-[#D4AF37]/15">
                    <div className="font-cinzel text-xl sm:text-2xl text-[#F2CA50] font-bold">40+</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-on-surface-variant font-medium mt-1">Sacred Trials</div>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container/80 border border-[#D4AF37]/15">
                    <div className="font-cinzel text-xl sm:text-2xl text-[#7BD0FF] font-bold">12K</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-on-surface-variant font-medium mt-1">Initiates</div>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container/80 border border-[#D4AF37]/15">
                    <div className="font-cinzel text-xl sm:text-2xl text-[#FFE088] font-bold">4</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-on-surface-variant font-medium mt-1">Starlit Bacchanals</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative pt-1 flex items-center justify-between text-[11px] tracking-widest uppercase font-mono text-on-surface-variant/80 border-t border-[#D4AF37]/15 mt-3 pt-3">
              <span>EXPEDITION PROTOCOL // 26.0</span>
              <span className="flex items-center gap-1.5 text-[#F2CA50]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2CA50] animate-ping"></span>
                OLYMPUS CONVERGED
              </span>
            </div>
          </div>
          
          {/* Right Column: Auth Terminal */}
          <div className="lg:col-span-6 flex flex-col justify-center p-4 sm:p-7 rounded-lg bg-surface-container/95 border border-[#D4AF37]/25 backdrop-blur-xl shadow-2xl relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {isSignUp ? (
                <motion.div 
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col"
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-cinzel font-bold tracking-[0.2em] uppercase">
                        INITIATION RITE
                      </span>
                      <Shield className="text-[#7BD0FF] w-5 h-5" />
                    </div>
                    <h1 className="font-cinzel text-2xl sm:text-3xl text-on-surface font-bold tracking-tight mt-1">Join the Quest.</h1>
                    <p className="font-body-sm text-sm text-on-surface-variant">Forge your identity to enter the 2026 Mythos.</p>
                  </div>
                  
                  <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-sm text-on-surface font-medium">First Name</label>
                        <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Perseus" type="text" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-sm text-on-surface font-medium">Last Name</label>
                        <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Jackson" type="text" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-sm text-on-surface font-medium">Email Address</label>
                      <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="hero@olympus.aiims.edu" type="email" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-sm text-on-surface font-medium">Secret Cipher (Password)</label>
                      <div className="relative">
                        <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-[#D4AF37] transition-colors">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="w-full mt-2 py-3.5 px-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E5A823] text-[#241a00] font-cinzel text-sm font-extrabold uppercase tracking-[0.16em] hover:brightness-110 shadow-[0_0_24px_rgba(212,175,55,0.4)] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2">
                      <span>BECOME AN INITIATE</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col"
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-cinzel font-bold tracking-[0.2em] uppercase">
                        SEEKER'S ACCESS
                      </span>
                      <Shield className="text-[#7BD0FF] w-5 h-5" />
                    </div>
                    <h1 className="font-cinzel text-2xl sm:text-3xl text-on-surface font-bold tracking-tight mt-1">Welcome Back, Champion.</h1>
                    <p className="font-body-sm text-sm text-on-surface-variant">Present your credentials or Student Identity to enter the 2026 Mythos.</p>
                  </div>
                  
                  <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-sm text-on-surface font-medium flex items-center gap-1.5">Initiate Email or Roll ID</label>
                        <span className="text-[10px] tracking-wider font-mono text-on-surface-variant/75 uppercase hidden sm:block">AIIMS / COLLEGE ID</span>
                      </div>
                      <div className="relative">
                        <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="champion@olympus.aiims.edu" type="text" />
                        <Badge className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-sm text-on-surface font-medium flex items-center gap-1.5">Secret Cipher (Password)</label>
                        <a className="text-xs text-[#D4AF37] hover:text-[#FFE088] underline-offset-2 hover:underline transition-colors font-medium tracking-wide" href="#forgot">Forgot Cipher?</a>
                      </div>
                      <div className="relative">
                        <input className="w-full px-4 py-3 rounded bg-surface-container-lowest border border-[#D4AF37]/30 text-on-surface font-body-md text-sm placeholder-outline focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-[#D4AF37] transition-colors">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full mt-2 py-3.5 px-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E5A823] text-[#241a00] font-cinzel text-sm font-extrabold uppercase tracking-[0.16em] hover:brightness-110 shadow-[0_0_24px_rgba(212,175,55,0.4)] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2">
                      <span>ENTER THE SANCTUARY</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full h-px bg-[#D4AF37]/20"></div>
              <span className="absolute bg-surface-container px-3 text-[11px] font-cinzel text-on-surface-variant uppercase tracking-widest">
                or invoke via
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="w-full py-2.5 px-3 rounded bg-surface-container-high/90 hover:bg-surface-container-highest border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 text-on-surface text-xs font-semibold flex items-center justify-center gap-2.5 transition-all" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.8 5 12 5z" fill="#EA4335"></path>
                  <path d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z" fill="#4285F4"></path>
                  <path d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.9z" fill="#FBBC05"></path>
                  <path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.2-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z" fill="#34A853"></path>
                </svg>
                <span>Google</span>
              </button>
              <button className="w-full py-2.5 px-3 rounded bg-surface-container-high/90 hover:bg-surface-container-highest border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 text-on-surface text-xs font-semibold flex items-center justify-center gap-2 transition-all" type="button">
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
            </div>
            
            <div className="text-center mt-5 pt-3">
              <p className="text-xs text-on-surface-variant">
                {isSignUp ? "Already an initiate?" : "Not yet initiated into Odyssey?"} 
                <button onClick={() => setIsSignUp(!isSignUp)} className="text-[#D4AF37] font-semibold hover:underline hover:text-[#FFE088] ml-1 tracking-wide">
                  {isSignUp ? "Sign In Now" : "Join the Quest"}
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
