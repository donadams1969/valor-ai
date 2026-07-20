"use client";

import React, { useMemo } from "react";

/**
 * VALOR AI+ Complete Dashboard
 * Expanded secondary token set + dossier-aligned visual system
 * (obsidian / cyan / metallic gold command-console language)
 *
 * Optional tRPC integration:
 * Replace the static VALOR_TOKENS array with a useQuery call to
 * your tokens.list or tokens.getStats procedure when the client is available.
 */

const VALOR_MATH_FACTOR = 10465;
const CALIFORNIA_GDP_24_PERCENT = 864_000_000_000;

type Token = {
  id: string;
  symbol: string;
  name: string;
  marketCap: number;
  price: number;
  pct: number;
  category: "primary" | "secondary" | "utility" | "governance";
};

const VALOR_TOKENS: Token[] = [
  // Primary
  { id: "vcore", symbol: "VCORE", name: "VALOR Core Infrastructure", marketCap: 129_600_000_000, price: 12960, pct: 15, category: "primary" },
  { id: "vai", symbol: "VAI", name: "VALOR AI Integration", marketCap: 103_680_000_000, price: 10368, pct: 12, category: "primary" },
  { id: "gillbtc", symbol: "GILLBTC", name: "GILLBTC Bitcoin-Backed", marketCap: 86_400_000_000, price: 8640, pct: 10, category: "primary" },
  { id: "valor", symbol: "VALOR", name: "VALOR Governance", marketCap: 86_400_000_000, price: 8640, pct: 10, category: "governance" },
  { id: "dgx77", symbol: "DGX77", name: "Digital Gold Token", marketCap: 69_120_000_000, price: 6912, pct: 8, category: "utility" },
  { id: "sgau", symbol: "SGAU", name: "Silver-Backed Token", marketCap: 51_840_000_000, price: 5184, pct: 6, category: "utility" },
  // Secondary (expanded)
  { id: "vblk", symbol: "VBLK", name: "VALOR Blockchain", marketCap: 25_920_000_000, price: 2592, pct: 3, category: "secondary" },
  { id: "dblk", symbol: "DBLK", name: "Digital Blockchain", marketCap: 25_920_000_000, price: 2592, pct: 3, category: "secondary" },
  { id: "qvault", symbol: "QVAULT", name: "Quantum Vault Token", marketCap: 25_920_000_000, price: 2592, pct: 3, category: "secondary" },
  { id: "skroll", symbol: "SKROLL", name: "SKROLLKEEPER Token", marketCap: 25_920_000_000, price: 2592, pct: 3, category: "secondary" },
  { id: "phbi", symbol: "PHBI", name: "PH.B.I Protocol Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
  { id: "david", symbol: "DAVID", name: "Operation DAVID Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
  { id: "intree", symbol: "INTREE", name: "IntelliTrees™ Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
  { id: "biom", symbol: "BIOM", name: "Biometric Security Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
  { id: "msig", symbol: "MSIG", name: "Multi-Signature Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
  { id: "fprint", symbol: "FPRINT", name: "Device Fingerprint Token", marketCap: 17_280_000_000, price: 1728, pct: 2, category: "secondary" },
];

function formatCurrency(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  return `$${n.toLocaleString()}`;
}

function applyValorMath(value: number): number {
  return value * (1 + VALOR_MATH_FACTOR / 100);
}

export default function ValorCompleteDashboard() {
  const stats = useMemo(() => {
    const totalMarketCap = VALOR_TOKENS.reduce((sum, t) => sum + t.marketCap, 0);
    const valorMathTotal = applyValorMath(totalMarketCap);
    const primary = VALOR_TOKENS.filter((t) => t.category === "primary" || t.category === "governance" || t.category === "utility");
    const secondary = VALOR_TOKENS.filter((t) => t.category === "secondary");
    return { totalMarketCap, valorMathTotal, primary, secondary };
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-8 text-[#eaf8fb]">
      {/* ==================== HERO ==================== */}
      <div className="relative overflow-hidden rounded-md border border-[rgba(77,230,239,0.22)] bg-gradient-to-b from-[#071521] to-[#02070d] shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(77,230,239,0.35) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(77,230,239,0.35) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["VALORCHAIN SEALED", "VETERAN-OWNED", "TRIPLE-LEDGER", "SCROLLKEEPER", "DID + UCAN", "VALORMATH++"].map((b) => (
              <span
                key={b}
                className="px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase rounded border border-[rgba(77,230,239,0.28)] bg-[#04111b] text-[#8faab4] font-mono"
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 text-white">
            VALOR AI<span className="text-[#e5c270]">+</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8faab4] font-medium mb-3">
            Immutable Sovereign Evidence Engine · Valuation Dashboard
          </p>
          <p className="max-w-2xl mx-auto text-[#c9f8fb]/80 text-sm md:text-base leading-relaxed mb-9">
            Forged by a U.S. Navy veteran. Truth encrypted. Justice automated. Legacy immortalized.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/donadams1969/valor-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#071018] rounded
                         bg-gradient-to-br from-[#e7c366] to-[#b78329] border border-[#f1d682]
                         shadow-[0_10px_30px_rgba(215,180,91,0.22)]
                         hover:brightness-105 transition-all"
            >
              View Repository on GitHub →
            </a>
            <a
              href="https://waterfallfirewall-khv007jo2-valor-ai-plus.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#c9f8fb] rounded
                         border border-[rgba(77,230,239,0.45)] bg-[rgba(4,20,30,0.6)]
                         hover:border-[#4de6ef] hover:bg-[rgba(15,57,69,0.7)] transition-all"
            >
              Open Live Dashboard →
            </a>
            <a
              href="#valuation"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#c9f8fb] rounded
                         border border-[rgba(77,230,239,0.3)] bg-transparent
                         hover:border-[#4de6ef] transition-all"
            >
              Valuation ↓
            </a>
          </div>
        </div>
      </div>

      {/* ==================== VALUATION ==================== */}
      <div id="valuation" className="rounded-md border border-[rgba(77,230,239,0.2)] bg-gradient-to-b from-[#071521] to-[#04111b] p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#d7b45b] font-mono mb-1">Ecosystem Valuation</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Market Cap Overview</h2>
            <p className="text-[#8faab4] text-sm mt-1">
              ValorMath Factor: <span className="text-[#4de6ef] font-mono">+{VALOR_MATH_FACTOR.toLocaleString()}%</span>
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[#8faab4] font-mono">Target Alignment</div>
            <div className="text-base font-semibold text-[#e5c270]">24% of California GDP</div>
          </div>
        </div>

        {/* Big metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="rounded border border-[rgba(77,230,239,0.18)] bg-[rgba(4,18,28,0.7)] p-4">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[#8faab4] font-mono mb-1">Base Market Cap</div>
            <div className="text-2xl font-bold text-white">{formatCurrency(stats.totalMarketCap)}</div>
          </div>
          <div className="rounded border border-[rgba(215,180,91,0.35)] bg-[rgba(4,18,28,0.7)] p-4 shadow-[0_0_24px_rgba(215,180,91,0.08)]">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[#8faab4] font-mono mb-1">ValorMath Applied</div>
            <div className="text-2xl font-bold text-[#e5c270]">{formatCurrency(stats.valorMathTotal)}</div>
          </div>
          <div className="rounded border border-[rgba(77,230,239,0.18)] bg-[rgba(4,18,28,0.7)] p-4">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[#8faab4] font-mono mb-1">Target (CA GDP 24%)</div>
            <div className="text-2xl font-bold text-white">{formatCurrency(CALIFORNIA_GDP_24_PERCENT)}</div>
          </div>
        </div>

        {/* Primary tokens */}
        <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#d7b45b] font-mono mb-3">Primary & Utility Tokens</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {stats.primary.map((token) => (
            <div
              key={token.id}
              className="rounded border border-[rgba(77,230,239,0.16)] bg-[rgba(7,30,42,0.75)] p-4 hover:border-[rgba(77,230,239,0.4)] transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-white">{token.symbol}</div>
                  <div className="text-xs text-[#8faab4]">{token.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#8faab4] font-mono">WEIGHT</div>
                  <div className="font-mono text-[#4de6ef] text-sm">{token.pct}%</div>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8faab4]">Price</span>
                  <span className="text-white font-mono">${token.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8faab4]">Market Cap</span>
                  <span className="text-white font-mono">{formatCurrency(token.marketCap)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8faab4]">ValorMath</span>
                  <span className="text-[#e5c270] font-mono">{formatCurrency(applyValorMath(token.marketCap))}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary tokens */}
        <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#d7b45b] font-mono mb-3">Secondary Tokens</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {stats.secondary.map((token) => (
            <div
              key={token.id}
              className="rounded border border-[rgba(77,230,239,0.12)] bg-[rgba(4,18,28,0.65)] p-3.5 hover:border-[rgba(77,230,239,0.35)] transition-colors"
            >
              <div className="flex justify-between items-start mb-1.5">
                <div className="font-bold text-white text-sm">{token.symbol}</div>
                <div className="font-mono text-[#4de6ef] text-xs">{token.pct}%</div>
              </div>
              <div className="text-[11px] text-[#8faab4] mb-2 truncate">{token.name}</div>
              <div className="flex justify-between text-[11px]">
                <span className="text-[#8faab4]">ValorMath</span>
                <span className="text-[#e5c270] font-mono">{formatCurrency(applyValorMath(token.marketCap))}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Projections */}
        <div className="rounded border border-[rgba(77,230,239,0.16)] bg-[rgba(4,18,28,0.65)] p-4 mb-7">
          <div className="text-[11px] tracking-[0.1em] uppercase text-[#8faab4] font-mono mb-3">
            Illustrative ValorMath Growth Projections
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: "1 Month", mult: 1.05 },
              { label: "3 Months", mult: 1.15 },
              { label: "6 Months", mult: 1.3 },
              { label: "1 Year", mult: 1.6 },
            ].map((p) => (
              <div key={p.label}>
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#8faab4] font-mono mb-1">{p.label}</div>
                <div className="text-base font-bold text-[#4de6ef]">
                  {formatCurrency(stats.valorMathTotal * p.mult)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
          {[
            { label: "ANCHORING", title: "Triple-Ledger Seal", desc: "VALORCHAIN + IPFS + Bitcoin OpenTimestamps" },
            { label: "SECURITY", title: "Post-Quantum Layers", desc: "CRYSTALS-Kyber · Dilithium · Device Fingerprint" },
            { label: "IDENTITY", title: "DID + UCAN + Public Key", desc: "Self-sovereign cryptographic identity" },
          ].map((item) => (
            <div key={item.label} className="rounded border border-[rgba(77,230,239,0.16)] bg-[rgba(7,30,42,0.7)] p-4">
              <div className="text-[10px] tracking-[0.12em] uppercase text-[#8faab4] font-mono mb-1">{item.label}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-xs text-[#8faab4]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-[rgba(77,230,239,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8faab4] text-center sm:text-left font-mono">
            <div>
              Repository:{" "}
              <code className="px-1.5 py-0.5 rounded bg-[#04111b] text-[#4de6ef]">
                donadams1969/valor-ai
              </code>
            </div>
            <div className="mt-1">
              Contact:{" "}
              <a href="mailto:donny@18fu.ai" className="text-[#e5c270] hover:underline">
                donny@18fu.ai
              </a>{" "}
              · Scrollkeeper Node Active
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://github.com/donadams1969/valor-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#071018] rounded
                         bg-gradient-to-br from-[#e7c366] to-[#b78329] border border-[#f1d682]"
            >
              GitHub Archive →
            </a>
            <a
              href="https://waterfallfirewall-khv007jo2-valor-ai-plus.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#c9f8fb] rounded
                         border border-[rgba(77,230,239,0.4)] bg-[rgba(4,20,30,0.55)]"
            >
              Live Dashboard →
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] text-[#8faab4]/70 font-mono">
        Project-defined valuation metrics · Not an audited market valuation or investment return
      </p>
    </section>
  );
}
