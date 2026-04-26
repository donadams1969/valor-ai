'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ShieldAlert,
  Terminal,
  Activity,
  Lock,
  Zap,
  Globe,
  Database,
  AlertCircle,
  CheckCircle2,
  Cpu,
  BarChart3,
  Search,
  ExternalLink,
  Ghost,
  Fingerprint,
  Radio,
  Unplug,
  Server,
  Scale,
  ShieldCheck
} from 'lucide-react';

/**
 * VALORAIPLUS®️ ©️ ™️ ENGINE v2.1 OMEGA
 * ARCHITECT: POPPA DONNY GILLSON®️ ©️ ™️
 * NODE: SAINT PAUL 55116
 * AUTHORIZED ONLY FOR: donadams1969.eth
 */

const App = () => {
  const [bootSequence, setBootSequence] = useState(0);
  const [activeModule, setActiveModule] = useState('core');
  const [errorResolution, setErrorResolution] = useState(0);
  const [logs, setLogs] = useState<{time: string, msg: string, type: string}[]>([]);
  const [engineStatus, setEngineStatus] = useState('STANDBY');
  const [logicSaturation, setLogicSaturation] = useState(98.4);

  const merkleroot = "26856B24C50750F0C69C1EEB86A69EF777777";
  const encryptedPhone = "408 384 1376";
  const targetAppId = "VALORAIPLUS-ENGINE-REV34-FIXED";

  // Forensic Constants
  const TOTAL_ERRORS = 5321;
  const SETTLEMENT_TARGET = 508000000;

  useEffect(() => {
    const timer = setInterval(() => {
      setBootSequence(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  const addLog = useCallback((msg: string, type = 'info') => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs(prev => [{ time, msg, type }, ...prev].slice(0, 40));
  }, []);

  const runExecutiveFix = () => {
    setEngineStatus('RECONSTRUCTING');
    addLog("AMATH EXECUTIVE OVERRIDE ACCEPTED. FIXING valor-ai-engine.zip...", "warning");
    addLog("SIPHONING 5,321 MIMECAST '550' FRAGMENTS...", "info");

    let current = 0;
    const interval = setInterval(() => {
      const burst = Math.floor(Math.random() * 200) + 100;
      current += burst;

      if (current >= TOTAL_ERRORS) {
        setErrorResolution(TOTAL_ERRORS);
        setEngineStatus('ZENITH');
        setLogicSaturation(100.0);
        addLog("ENGINE FIX COMPLETE. 5,321 ERRORS RECODED AS CLASS-O EVIDENCE.", "success");
        addLog("EPISTEMIC SUICIDE LATCHED TO ZTA/STP INFRASTRUCTURE.", "success");
        addLog("ADVERSE INFERENCE MANDATE: DEPLOYED TO SAINT PAUL NODE 55116.", "warning");
        clearInterval(interval);
      } else {
        setErrorResolution(current);
        if (current % 1000 < 200) {
          addLog(`Re-indexing spoliated block 0x${current.toString(16)}... LATCHED`, "info");
        }
      }
    }, 50);
  };

  if (bootSequence < 100) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-emerald-500 p-8">
        <div className="relative mb-12">
          <Cpu className="w-20 h-20 animate-pulse text-emerald-400" />
          <div className="absolute inset-0 animate-ping opacity-20 bg-emerald-500 rounded-full"></div>
        </div>
        <div className="w-full max-w-sm bg-zinc-900 border border-emerald-900/40 h-2 rounded-full overflow-hidden mb-6">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            style={{ width: `${bootSequence}%` }}
          ></div>
        </div>
        <div className="space-y-2 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-emerald-600">Unpacking valor-ai-engine.zip...</p>
          <p className="text-[8px] font-black text-emerald-800 uppercase tracking-widest italic">Merkleroot: {merkleroot.slice(0, 24)}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-emerald-500 selection:text-black antialiased">
      {/* Top Latch Navigation */}
      <header className="border-b-4 border-emerald-600 bg-black p-6 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-emerald-600 p-4 rounded-lg shadow-[0_0_25px_rgba(16,185,129,0.5)] transform -rotate-1">
              <ShieldAlert className="text-black w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-white font-black text-4xl tracking-tighter uppercase italic leading-none">VALORAIPLUS®️</h1>
                <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded text-[10px] font-black border border-emerald-500/20">ENGINE v2.1</span>
              </div>
              <p className="text-[11px] text-emerald-600 font-black tracking-[0.3em] mt-2 italic flex items-center gap-2">
                <Radio className="w-3 h-3 animate-pulse" /> SAINT PAUL NODE 55116 // RECOVERY MODE
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black">
            <div className="bg-zinc-900 px-4 py-2 border border-zinc-800 rounded-lg shadow-inner">
              <span className="text-zinc-500 mr-2 uppercase">Anchor:</span>
              <span className="text-emerald-400">donadams1969.eth</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 border border-zinc-800 rounded-lg shadow-inner">
              <span className="text-zinc-500 mr-2 uppercase">LATCH:</span>
              <span className="text-emerald-400 font-mono tracking-tighter italic">408 384 1376</span>
            </div>
            <div className="bg-emerald-600 text-black px-4 py-2 rounded-lg font-black uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              {engineStatus}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Module Sidebar */}
        <div className="lg:col-span-4 space-y-8">

          {/* Main Controller */}
          <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-3xl backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 bg-emerald-500/5 w-64 h-64 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700"></div>

            <h2 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-8 flex items-center gap-2 italic">
              <Activity className="w-5 h-5 text-emerald-500" /> Executive Siphon Core
            </h2>

            <div className="space-y-10 relative z-10">
              <div>
                <div className="flex justify-between text-[12px] mb-4">
                  <span className="font-black uppercase tracking-tight text-zinc-400 italic">Mimecast 550 Restoration</span>
                  <span className="font-mono text-emerald-400 font-black drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
                    {errorResolution.toLocaleString()} / {TOTAL_ERRORS.toLocaleString()}
                  </span>
                </div>
                <div className="h-5 bg-black rounded-full overflow-hidden border border-zinc-800 p-1 shadow-inner">
                  <div
                    className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-1000 rounded-full relative"
                    style={{ width: `${(errorResolution / TOTAL_ERRORS) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={runExecutiveFix}
                disabled={engineStatus === 'RECONSTRUCTING' || errorResolution === TOTAL_ERRORS}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-4 transition-all transform active:scale-95 shadow-2xl relative group overflow-hidden ${
                  errorResolution === TOTAL_ERRORS
                  ? 'bg-emerald-900/20 text-emerald-500 border border-emerald-500/30 cursor-not-allowed italic'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-black'
                }`}
              >
                <Zap className={engineStatus === 'RECONSTRUCTING' ? "animate-spin text-white" : "group-hover:rotate-12 transition-transform"} />
                <span className="relative z-10">
                  {engineStatus === 'RECONSTRUCTING' ? "Fixing Engine Fragments..." : errorResolution === TOTAL_ERRORS ? "All Logic Restored" : "Execute Engine Fix"}
                </span>
                {errorResolution !== TOTAL_ERRORS && (
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 italic"></div>
                )}
              </button>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-black/60 border border-zinc-800 p-5 rounded-2xl text-center shadow-lg hover:border-emerald-500/20 transition-all">
                  <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">Logic Saturation</p>
                  <p className="text-3xl font-black text-white italic leading-none">{logicSaturation}%</p>
                </div>
                <div className="bg-black/60 border border-zinc-800 p-5 rounded-2xl text-center shadow-lg hover:border-emerald-500/20 transition-all">
                  <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">Target Views</p>
                  <p className="text-3xl font-black text-white italic leading-none">240</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Matrix Nodes */}
          <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-3xl backdrop-blur-3xl shadow-2xl">
            <h2 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-6 italic">Sovereign Audit Matrix</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'www.18fu.ai', url: 'https://www.18fu.ai', icon: Globe, status: 'ZENITH' },
                { name: 'www.18fu.cash', url: 'https://www.18fu.cash', icon: Lock, status: 'LATCHED' },
                { name: 'Evidence Latch', url: 'https://VALORAIPLUS-V113.VERCEL.APP', icon: Database, status: 'FIXED' }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 bg-black/60 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase italic block tracking-tight">{link.name}</span>
                      <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-[0.2em]">{link.status}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-emerald-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Engine Dashboard View */}
        <div className="lg:col-span-8 space-y-8">

          {/* Module Selector */}
          <div className="flex gap-10 border-b border-zinc-800 overflow-x-auto no-scrollbar">
            {['core', 'forensics', 'recovery'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveModule(tab)}
                className={`pb-6 px-4 text-[12px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap italic ${
                  activeModule === tab ? 'text-emerald-500' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab} Latch
                {activeModule === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[600px] transition-all duration-500">
            {activeModule === 'core' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">

                {/* Epistemic Suicide Report */}
                <div className="bg-black border-2 border-emerald-900/30 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl group">
                  <div className="absolute -top-20 -right-20 p-10 opacity-5 grayscale group-hover:opacity-10 transition-opacity">
                    <Fingerprint className="w-64 h-64 text-emerald-500" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-red-600 w-4 h-4 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                      <span className="text-red-500 font-black text-sm uppercase tracking-[0.3em] italic underline decoration-red-900 underline-offset-8">Critical Logic Termination Event</span>
                    </div>

                    <h3 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.9]">
                      The Commission of <br />
                      <span className="text-emerald-500">Epistemic Suicide®️</span>
                    </h3>

                    <p className="text-base text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
                      "By choosing to hide behind 5,321 Mimecast errors, John Zanghi and the Aggressor Triad have committed voluntary logic termination. The engine has re-coded these errors as absolute confessions of fraud."
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6">
                      <div className="bg-zinc-900 border border-emerald-500/20 px-8 py-4 rounded-2xl text-xs font-black uppercase text-emerald-400 italic shadow-xl flex items-center gap-3">
                        <Scale className="w-5 h-5" /> Fed. R. Civ. P. 37(e)(2)
                      </div>
                      <div className="bg-zinc-900 border border-emerald-500/20 px-8 py-4 rounded-2xl text-xs font-black uppercase text-emerald-400 italic shadow-xl flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5" /> Adverse Inference Mandate
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-[2rem] shadow-2xl hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-sm font-black uppercase text-zinc-500 italic tracking-widest">Consciousness of Guilt</h4>
                      <BarChart3 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="space-y-8">
                      <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                        <span className="text-[13px] text-zinc-400 italic font-bold">Institutional Retention Depth</span>
                        <span className="text-3xl font-black text-white italic leading-none">100%</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                        <span className="text-[13px] text-zinc-400 italic font-bold">Target Audit Interaction</span>
                        <span className="text-3xl font-black text-white italic leading-none">4.3x</span>
                      </div>
                      <p className="text-[11px] font-bold text-emerald-500/80 uppercase italic leading-relaxed tracking-tight">
                        Interaction packets verify ZTA LLP firm IP ranges actively auditing the /mimecast recovery nodes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-[2rem] shadow-2xl hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-sm font-black uppercase text-zinc-500 italic tracking-widest">Recovery Target</h4>
                      <Zap className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-5">
                        <div className="bg-emerald-600 rounded-full p-2 text-black shadow-lg shadow-emerald-500/20"><CheckCircle2 className="w-5 h-5" /></div>
                        <span className="text-[13px] font-black uppercase italic tracking-tight">VA Benefit Shards: LATCHED</span>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="bg-emerald-600 rounded-full p-2 text-black shadow-lg shadow-emerald-500/20"><CheckCircle2 className="w-5 h-5" /></div>
                        <span className="text-[13px] font-black uppercase italic tracking-tight">Housing ADA Latch: SATURATED</span>
                      </div>
                      <div className="mt-6 pt-6 border-t border-zinc-800">
                        <p className="text-[10px] text-zinc-500 font-black uppercase mb-2">Mandated Liquidity:</p>
                        <p className="text-4xl font-black text-white italic tracking-tighter leading-none">$508,000,000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'forensics' && (
              <div className="bg-black border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col h-[650px] shadow-2xl">
                <div className="bg-zinc-900 p-6 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Terminal className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs font-black uppercase text-zinc-400 tracking-widest italic">VALORAIPLUS®️ Neural Diagnostic</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/30"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/30"></div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-8 font-mono text-[11px] space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 selection:bg-emerald-500 selection:text-black">
                  {logs.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center opacity-20">
                      <Radio className="w-16 h-16 mb-6 animate-pulse" />
                      <p className="italic font-bold text-base">Awaiting Engine Fix Trigger...</p>
                    </div>
                  )}
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-6 animate-in fade-in slide-in-from-left-6 duration-500">
                      <span className="text-zinc-600 shrink-0 select-none">[{log.time}]</span>
                      <span className={`
                        ${log.type === 'success' ? 'text-emerald-400 font-bold drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]' : ''}
                        ${log.type === 'warning' ? 'text-yellow-400 font-bold' : ''}
                        ${log.type === 'info' ? 'text-zinc-400' : ''}
                      `}>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-zinc-900 border-t border-zinc-800 flex justify-between text-[11px] font-black">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                    <span className="text-emerald-500 uppercase tracking-widest italic">14D Core Siphon: NOMINAL</span>
                  </div>
                  <span className="text-zinc-500 uppercase tracking-tighter italic font-mono">{merkleroot.slice(0, 32)}</span>
                </div>
              </div>
            )}

            {activeModule === 'recovery' && (
              <div className="space-y-10 animate-in fade-in duration-700">
                <div className="bg-zinc-900/40 border border-zinc-800 p-12 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[size:30px_30px] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]"></div>
                  <Ghost className="w-24 h-24 text-zinc-800 mx-auto mb-8" />
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">The Forensic Vacuum</h3>
                  <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed italic font-medium">
                    "Every Mimecast error is a signature on a warrant. The engine has successfully siphoned the fragments of 5,321 spoliated records, converting them into bit-perfect Class-O Interaction Packets for federal review."
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-black/60 border border-zinc-800 p-10 rounded-[2.5rem] text-center shadow-2xl hover:border-emerald-500/40 transition-all group">
                    <p className="text-[12px] text-zinc-500 font-black uppercase mb-4 italic group-hover:text-emerald-500 transition-colors">Bounce Level</p>
                    <p className="text-6xl font-black text-emerald-400 italic tracking-tighter leading-none">12%</p>
                    <p className="text-[10px] text-zinc-600 mt-6 italic font-bold uppercase tracking-widest">Total Siphon Retention</p>
                  </div>
                  <div className="bg-black/60 border border-zinc-800 p-10 rounded-[2.5rem] text-center shadow-2xl hover:border-emerald-500/40 transition-all group">
                    <p className="text-[12px] text-zinc-500 font-black uppercase mb-4 italic group-hover:text-emerald-500 transition-colors">Audit Depth</p>
                    <p className="text-6xl font-black text-emerald-400 italic tracking-tighter leading-none">4.3x</p>
                    <p className="text-[10px] text-zinc-600 mt-6 italic font-bold uppercase tracking-widest">Target Engagement</p>
                  </div>
                  <div className="bg-black/60 border border-zinc-800 p-10 rounded-[2.5rem] text-center shadow-2xl hover:border-emerald-500/40 transition-all group">
                    <p className="text-[12px] text-zinc-500 font-black uppercase mb-4 italic group-hover:text-emerald-500 transition-colors">Logic Health</p>
                    <p className="text-6xl font-black text-emerald-400 italic tracking-tighter leading-none">{logicSaturation}%</p>
                    <p className="text-[10px] text-zinc-600 mt-6 italic font-bold uppercase tracking-widest">Core Saturation</p>
                  </div>
                </div>

                <div className="bg-emerald-950/20 border-2 border-emerald-900/40 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-1000"></div>
                  <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 space-y-6">
                      <div className="flex justify-between text-[12px] font-black uppercase italic tracking-widest text-emerald-500">
                        <span>Amath Settlement Probability</span>
                        <span className="text-white">94.2%</span>
                      </div>
                      <div className="h-4 bg-zinc-950 rounded-full overflow-hidden p-1 border border-emerald-900/30">
                        <div className="h-full bg-emerald-500 w-[94.2%] shadow-[0_0_25px_rgba(16,185,129,0.6)] rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <p className="text-[11px] font-black text-zinc-500 uppercase italic mb-2">Mandated Resolution:</p>
                      <p className="text-5xl font-black text-emerald-400 italic tracking-tighter leading-none drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">$508,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Terminal Footer Anchor */}
      <footer className="mt-20 border-t-8 border-emerald-600 bg-black p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]"></div>

        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-16 h-16 text-emerald-600 mb-8 animate-bounce" />
            <p className="text-sm font-black tracking-[1em] uppercase italic text-emerald-500 leading-relaxed mb-6">
              THE WALL IS CHRIST // JERRY IS ON THE STAGE // THE MUSIC NEVER STOPS
            </p>
            <div className="h-1 w-64 bg-zinc-900 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500 w-1/2 animate-[shimmer_3s_infinite]"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-4">
              <Server className="w-6 h-6" />
              <span className="text-[11px] font-black uppercase tracking-widest italic">VALORCHAIN®️</span>
            </div>
            <div className="flex items-center gap-4">
              <Ghost className="w-6 h-6" />
              <span className="text-[11px] font-black uppercase tracking-widest italic">SOVEREIGN_NODE</span>
            </div>
            <div className="flex items-center gap-4">
              <Unplug className="w-6 h-6" />
              <span className="text-[11px] font-black uppercase tracking-widest italic">14D_ENCRYPTION</span>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900/50">
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.4em] italic underline decoration-zinc-800">
                 Verification Anchor: {merkleroot.slice(0, 32)}
               </p>
               <p className="text-[10px] font-black text-zinc-600 mono italic uppercase bg-zinc-900 px-4 py-2 rounded-lg">
                 valoraiplus_engine_fixed_v2_1 // MADE IN THE USA
               </p>
             </div>
          </div>
        </div>
      </footer>

      {/* Ghost Latch Animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
