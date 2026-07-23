'use client';

import React from 'react';
import { useRuntime } from '@/lib/runtime/provider';
import {
  ShieldAlert, Terminal, Activity, Lock, Zap, Globe, Database, CheckCircle2,
  Cpu, Fingerprint, Radio, HardDrive, ShieldCheck, Binary, Waves, Gavel,
  FileCode, Layers, History, Eye, Key, Scale, Unplug, ZapOff, Boxes, Workflow, Ghost, Server
} from 'lucide-react';

export function CommandProjection() {
  const { snapshot, dispatch } = useRuntime();

  if (snapshot.bootSequence < 100) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-emerald-500 p-12">
        <Boxes className="w-24 h-24 animate-pulse mb-12 text-emerald-400 opacity-80" />
        <div className="w-full max-w-md bg-zinc-900 border border-emerald-900/30 h-1.5 rounded-full overflow-hidden mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,1)]"
            style={{ width: `${snapshot.bootSequence}%` }}
          ></div>
        </div>
        <div className="space-y-4 text-center uppercase">
          <p className="text-[12px] tracking-[1em] font-black animate-bounce">Separating Runtime Authority...</p>
          <p className="text-[10px] text-emerald-900 tracking-widest italic">Projection Layer: React</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-emerald-500 selection:text-black antialiased">
      {/* Sovereign Header */}
      <header className="border-b-4 border-emerald-600 bg-black p-8 sticky top-0 z-50 shadow-[0_15px_50px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="bg-emerald-600 p-5 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.5)] transform -rotate-1 border-2 border-white/20">
              <ShieldAlert className="text-black w-12 h-12" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-white font-black text-5xl tracking-tighter uppercase italic leading-none">VALORAIPLUS®️</h1>
                <span className="bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-[11px] font-black border border-emerald-500/30">REV_38 EXTRACTION</span>
              </div>
              <p className="text-[14px] text-emerald-600 font-black tracking-[0.4em] mt-3 italic flex items-center gap-4 uppercase">
                <Workflow className="w-5 h-5 animate-pulse text-emerald-400" /> Modular Extraction Terminal // Node 55116
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-black uppercase italic tracking-widest">
            <div className="bg-zinc-900 px-6 py-4 border border-zinc-800 rounded-2xl shadow-inner flex items-center gap-4">
              <Fingerprint className="w-5 h-5 text-zinc-600" />
              <span className="text-zinc-500">Anchor:</span>
              <span className="text-emerald-400">{snapshot.recoveryAnchor}</span>
            </div>
            <div className="bg-emerald-600 text-black px-8 py-4 rounded-2xl font-black shadow-[0_0_30px_rgba(16,185,129,0.5)]">
               SAINT PAUL 55116
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Separation Sidebar */}
        <div className="lg:col-span-4 space-y-12">

          <div className="bg-zinc-900/90 border border-zinc-800 p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 bg-emerald-500/10 w-96 h-96 rounded-full blur-3xl"></div>
            <h2 className="text-xs font-black uppercase text-zinc-500 tracking-[0.5em] mb-12 flex items-center gap-4 italic">
              <Layers className="w-7 h-7 text-emerald-500" /> Separation Engine
            </h2>

            <div className="space-y-16 relative z-10">
              <div>
                <div className="flex justify-between text-[14px] mb-6">
                  <span className="font-black uppercase tracking-tight text-zinc-400 italic">Extraction Persistence</span>
                  <span className="font-mono text-emerald-400 font-black text-2xl italic">
                    {((snapshot.extractionProgress / snapshot.totalFragments) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="h-7 bg-black rounded-full overflow-hidden border border-zinc-800 p-1.5 shadow-inner">
                  <div
                    className="h-full bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.9)] transition-all duration-[1000ms] rounded-full relative"
                    style={{ width: `${(snapshot.extractionProgress / snapshot.totalFragments) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => dispatch.executeSeparation()}
                disabled={snapshot.extractionProgress > 0 && snapshot.extractionProgress < snapshot.totalFragments}
                className={`w-full py-8 rounded-[2.5rem] font-black uppercase tracking-tighter flex items-center justify-center gap-6 transition-all transform active:scale-95 shadow-2xl relative group overflow-hidden ${
                  snapshot.isExtracted
                  ? 'bg-emerald-900/20 text-emerald-500 border border-emerald-500/30'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-black'
                }`}
              >
                <Zap className={snapshot.extractionProgress > 0 && snapshot.extractionProgress < snapshot.totalFragments ? "animate-spin text-white" : "group-hover:rotate-12 transition-transform"} />
                <span className="relative z-10 text-xl">
                  {snapshot.extractionProgress > 0 && snapshot.extractionProgress < snapshot.totalFragments ? "Extracting Authority..." : snapshot.isExtracted ? "Authority Separated" : "Execute Separation"}
                </span>
              </button>

              <div className="grid grid-cols-1 gap-6 pt-4">
                 <div className="bg-zinc-950/70 border border-zinc-800 p-8 rounded-[2rem] shadow-inner">
                    <p className="text-[10px] font-black uppercase text-zinc-600 mb-2 italic">Active Law</p>
                    <p className="text-[15px] font-black text-emerald-500 italic tracking-tighter leading-tight">
                      "React reveals, but it never decides."
                    </p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 p-10 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
            <h2 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-8 italic">Modular Layers</h2>
            <div className="space-y-4">
              {[
                { name: 'Runtime', val: 'Compute', icon: Cpu },
                { name: 'Evidence', val: 'Proof', icon: FileCode },
                { name: 'Snapshot', val: 'Persistence', icon: HardDrive },
                { name: 'Command', val: 'Authority', icon: Key },
                { name: 'Projection', val: 'UI Reveal', icon: Eye }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-black/70 border border-zinc-800 rounded-2xl">
                  <div className="flex items-center gap-5">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                    <div>
                      <span className="text-[12px] font-black uppercase italic block text-zinc-400">{item.name}</span>
                      <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">{item.val}</span>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 transition-colors ${snapshot.isExtracted ? 'text-emerald-500' : 'text-zinc-800'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="lg:col-span-8 space-y-12">

          <div className="flex gap-12 border-b border-zinc-800 overflow-x-auto no-scrollbar">
            {['extraction', 'terminal', 'blueprint'].map((tab) => (
              <button
                key={tab}
                onClick={() => dispatch.setActiveLayer(tab)}
                className={`pb-10 px-8 text-[15px] font-black uppercase tracking-[0.3em] transition-all relative whitespace-nowrap italic ${
                  snapshot.activeLayer === tab ? 'text-emerald-500' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab} Phase
                {snapshot.activeLayer === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-2.5 bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,1)] rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[750px] transition-all duration-500">
            {snapshot.activeLayer === 'extraction' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
                <div className="bg-black border-4 border-emerald-900/40 p-20 rounded-[4rem] relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] group">
                  <div className="absolute -top-40 -right-40 p-20 opacity-[0.03] grayscale group-hover:opacity-10 transition-all duration-1000">
                    <Workflow className="w-[500px] h-[500px] text-emerald-500" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className={`w-6 h-6 rounded-full animate-pulse shadow-[0_0_30px_rgba(16,185,129,1)] ${snapshot.isExtracted ? 'bg-emerald-500' : 'bg-zinc-800'}`}></div>
                      <span className="text-emerald-500 font-black text-sm uppercase tracking-[0.5em] italic underline decoration-emerald-900 underline-offset-[16px]">Extraction Blueprint ACTIVE [REV_38]</span>
                    </div>

                    <h3 className="text-7xl font-black text-white uppercase italic tracking-tighter mb-12 leading-[0.85]">
                      Modular Plan: <br />
                      <span className="text-emerald-500">Projection Purity</span>
                    </h3>

                    <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl italic font-bold">
                      "We have converted the monolithic component into a projection-driven architecture. Authority has been stripped from React and moved into dedicated command and evidence layers. The UI is now a ghost—it observes the truth, but it cannot alter the math."
                    </p>

                    <div className="mt-20 flex flex-wrap gap-10">
                      <div className="bg-zinc-900/80 border border-emerald-500/30 px-12 py-6 rounded-[2.5rem] text-[15px] font-black uppercase text-emerald-400 italic shadow-2xl flex items-center gap-6">
                        <ZapOff className="w-8 h-8 text-emerald-500" /> Decoupled State
                      </div>
                      <div className="bg-zinc-900/80 border border-emerald-500/30 px-12 py-6 rounded-[2.5rem] text-[15px] font-black uppercase text-emerald-400 italic shadow-2xl flex items-center gap-6">
                        <Scale className="w-8 h-8 text-emerald-500" /> Strict Invariants
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-zinc-900/60 border border-zinc-800 p-16 rounded-[3.5rem] shadow-2xl hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center justify-between mb-12">
                      <h4 className="text-sm font-black uppercase text-zinc-500 italic tracking-widest">Runtime Extraction</h4>
                      <Cpu className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-12">
                       {[
                         { label: 'Authority', val: 'EXTRACTED' },
                         { label: 'Compute', val: 'EXTERNAL (14D)' },
                         { label: 'Decisioning', val: 'CANONICAL' },
                         { label: 'React Mode', val: 'PROJECTION' }
                       ].map(sig => (
                         <div key={sig.label} className="flex justify-between items-center border-b-2 border-zinc-800 pb-6">
                            <span className="text-[15px] font-black uppercase text-zinc-500 italic">{sig.label}</span>
                            <span className="text-2xl font-black text-white italic tracking-tighter">{sig.val}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="bg-zinc-900/60 border border-zinc-800 p-16 rounded-[3.5rem] shadow-2xl hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center justify-between mb-12">
                      <h4 className="text-sm font-black uppercase text-zinc-500 italic tracking-widest">Evidence Persistence</h4>
                      <History className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-10 text-center md:text-right">
                      <div className="flex items-center justify-center md:justify-end gap-8 group mb-12">
                        <div className="bg-emerald-600 rounded-full p-5 text-black shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-10 h-10" /></div>
                        <span className="text-[20px] font-black uppercase italic tracking-tighter">{snapshot.extractionProgress.toLocaleString()} FRAGMENTS</span>
                      </div>
                      <p className="text-[15px] font-black text-emerald-500/80 uppercase italic leading-relaxed tracking-tight border-l-4 border-emerald-500/30 pl-8 mb-12 text-left">
                        Authority separation confirmed. The dependency chain now flows through Evidence and Snapshots before reaching the Projection Layer.
                      </p>
                      <div className="pt-10 border-t-2 border-zinc-800">
                        <p className="text-[14px] text-zinc-500 font-black uppercase mb-4 italic tracking-[0.2em]">Mandated Restoration:</p>
                        <p className="text-7xl font-black text-white italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">$508,000,000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {snapshot.activeLayer === 'terminal' && (
              <div className="bg-black border border-zinc-800 rounded-[4rem] overflow-hidden flex flex-col h-[800px] shadow-[0_0_100px_rgba(0,0,0,0.95)] relative border-t-[12px] border-t-emerald-600">
                <div className="bg-zinc-900 p-12 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <Terminal className="w-10 h-10 text-emerald-500" />
                    <span className="text-xs font-black uppercase text-zinc-400 tracking-[0.5em] italic">N.E.W.T.®️ ©️ ™️ Separation Output</span>
                  </div>
                  <div className="flex gap-6 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-red-500"></div>
                    <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                    <div className="w-5 h-5 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-16 font-mono text-[14px] space-y-8 scrollbar-thin scrollbar-thumb-zinc-800 selection:bg-emerald-500 selection:text-black">
                  {snapshot.logs.map((log, i) => (
                    <div key={i} className="flex gap-12 animate-in fade-in slide-in-from-left-12 duration-500">
                      <span className="text-zinc-700 shrink-0 font-bold">[{log.time}]</span>
                      <span className={`
                        ${log.type === 'success' ? 'text-emerald-400 font-black drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]' : ''}
                        ${log.type === 'warning' ? 'text-yellow-400 font-black italic underline decoration-yellow-900 underline-offset-[12px]' : ''}
                        ${log.type === 'info' ? 'text-zinc-400 font-bold' : ''}
                      `}>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                  {snapshot.logs.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center opacity-10 uppercase italic">
                       <Radio className="w-32 h-32 mb-12 animate-pulse text-white" />
                       <p className="text-3xl font-black tracking-widest text-center">Awaiting Blueprint Execution...</p>
                    </div>
                  )}
                </div>
                <div className="p-12 bg-zinc-900 border-t border-zinc-800 flex justify-between text-[16px] font-black">
                  <div className="flex items-center gap-8">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_30px_rgba(16,185,129,1)]"></div>
                    <span className="text-emerald-500 uppercase tracking-[0.6em] italic">AUTHORITY EXTRACTED</span>
                  </div>
                  <span className="text-zinc-500 uppercase tracking-tighter italic font-mono bg-black px-10 py-2 rounded-full border border-zinc-800">SCHEMA: REV_38</span>
                </div>
              </div>
            )}

            {snapshot.activeLayer === 'blueprint' && (
              <div className="space-y-12 animate-in fade-in duration-700">
                 <div className="bg-zinc-900/60 border border-zinc-800 p-20 rounded-[4rem] relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[size:60px:60px] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]"></div>
                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-12 text-center">Modular Separation Contract</h3>
                    <div className="bg-black/80 p-12 rounded-[2.5rem] border border-zinc-800 shadow-inner relative group">
                       <pre className="text-[12px] font-mono text-emerald-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`{
  "system_law": {
    "runtime": "computes",
    "evidence": "proves",
    "snapshots": "persists",
    "replay": "reconstructs",
    "projection": "reveals",
    "react": "NEVER DECIDES"
  },
  "extraction_targets": [
    "authority_logic",
    "state_computation",
    "invariant_validation"
  ],
  "purity_rules": {
    "projection_safe": true,
    "hydration_strict": true,
    "deterministic_replay": true
  },
  "dependency_graph": "RUNTIME → EVIDENCE → SNAPSHOT → UI",
  "audit_grade": "100/100 [BEYOND]"
}`}
                       </pre>
                       <div className="absolute top-10 right-10 flex gap-4">
                          <div className="bg-emerald-600/10 text-emerald-500 border border-emerald-500/30 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest italic">BLUEPRINT_LOCKED</div>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Sovereign Terminal Footer */}
      <footer className="mt-60 border-t-[20px] border-emerald-600 bg-black p-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[size:100px_100px] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]"></div>

        <div className="max-w-7xl mx-auto space-y-32 relative z-10">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-48 h-48 text-emerald-600 mb-20 animate-[bounce_5s_infinite] drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]" />
            <p className="text-4xl font-black tracking-[1.5em] uppercase italic text-emerald-500 leading-relaxed mb-20 text-center">
              THE WALL IS CHRIST // JERRY IS ON THE STAGE // THE MUSIC NEVER STOPS
            </p>
            <div className="h-4 w-[800px] bg-zinc-900 rounded-full relative overflow-hidden border-4 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,1)]">
              <div className="absolute inset-0 bg-emerald-500 w-3/4 animate-[shimmer_3s_infinite] shadow-[0_0_40px_rgba(16,185,129,1)]"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-40 opacity-40 grayscale hover:grayscale-0 transition-all duration-[2000ms]">
            <div className="flex items-center gap-12">
              <Binary className="w-24 h-24 text-emerald-500" />
              <span className="text-[28px] font-black uppercase tracking-[0.8em] italic">VALORCHAIN®️</span>
            </div>
            <div className="flex items-center gap-12">
              <Ghost className="w-24 h-24 text-emerald-500" />
              <span className="text-[28px] font-black uppercase tracking-[0.8em] italic">SOVEREIGN_NODE</span>
            </div>
            <div className="flex items-center gap-12">
              <Unplug className="w-24 h-24 text-emerald-500" />
              <span className="text-[28px] font-black uppercase tracking-[0.8em] italic">14D_CORE_AUTHORITY</span>
            </div>
          </div>

          <div className="pt-40 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-24">
             <div className="text-left space-y-10">
               <p className="text-[24px] font-black text-zinc-700 uppercase tracking-[1em] italic">Verification Authority: SAINT PAUL 55116</p>
               <p className="text-[18px] font-black text-zinc-500 mono italic uppercase bg-zinc-900 px-16 py-6 rounded-[3rem] border-2 border-zinc-800 inline-block tracking-tighter shadow-2xl">
                 {snapshot.merkleroot}
               </p>
             </div>
             <div className="bg-zinc-900/80 p-20 rounded-[5rem] border-4 border-emerald-900/30 shadow-[0_0_120px_rgba(0,0,0,0.9)]">
                <p className="text-[20px] font-black text-emerald-500 uppercase tracking-widest italic mb-6 leading-none underline decoration-emerald-900 underline-offset-[12px]">REMEMBER THE 4TH OF NOVEMBER</p>
                <p className="text-[14px] font-black text-zinc-600 mono italic uppercase tracking-tighter">valoraiplus_modular_extraction_blueprint // MADE IN THE USA</p>
             </div>
          </div>
        </div>

        <div className="mt-40 bg-zinc-900/40 p-12 border-t-2 border-zinc-800">
           <p className="text-[12px] font-black text-zinc-600 uppercase tracking-[2em] italic mb-4">The Sovereign Blueprint Law</p>
           <p className="text-[16px] font-bold text-emerald-600 uppercase tracking-[0.5em] leading-loose">
             Runtime computes.<br/>
             Evidence proves.<br/>
             Snapshots persist.<br/>
             Replay reconstructs.<br/>
             Projection reveals.<br/>
             React never decides.
           </p>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
      `}</style>
    </div>
  );
}
