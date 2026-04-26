export const COST_MODE = process.env.NEXT_PUBLIC_COST_MODE ?? "ZERO";

// ZERO -> no DB, no polling
// CACHE -> cached API only
// LIVE_ADMIN -> DB/admin diagnostics only

export function shouldCallSupabase(isAuth: boolean, isPrivateWrite: boolean, cannotBeStatic: boolean): boolean {
    if (COST_MODE === "ZERO" || COST_MODE === "CACHE") return false;
    return isAuth && isPrivateWrite && cannotBeStatic;
}
