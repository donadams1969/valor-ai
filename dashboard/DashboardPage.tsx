import React from "react";
import ValorCompleteDashboard from "./ValorCompleteDashboard";

/**
 * Full-page dashboard route for VALOR AI+
 * Compatible with Vite + React Router / Next.js App Router / wouter.
 */
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#eaf8fb]">
      <ValorCompleteDashboard />
    </main>
  );
}
