import { CommandCenterSnapshot, LogEntry } from './snapshot-store';

export class RuntimeEngine {
  private state: CommandCenterSnapshot;
  private listeners: Set<(snapshot: CommandCenterSnapshot) => void> = new Set();
  private bootInterval: any = null;
  private extractionInterval: any = null;

  constructor() {
    this.state = {
      bootSequence: 0,
      extractionProgress: 0,
      isExtracted: false,
      logs: [],
      totalFragments: 15682,
      activeLayer: 'extraction',
      merkleroot: "26856B24C50750F0C69C1EEB86A69EF777777",
      recoveryAnchor: "donadams1969.eth"
    };
  }

  public getSnapshot(): CommandCenterSnapshot {
    return { ...this.state };
  }

  public subscribe(listener: (snapshot: CommandCenterSnapshot) => void) {
    this.listeners.add(listener);
    listener(this.getSnapshot());
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const snap = this.getSnapshot();
    this.listeners.forEach(l => l(snap));
  }

  private addLog(msg: string, type: "info" | "warning" | "success" = "info") {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    this.state.logs = [{ time, msg, type }, ...this.state.logs].slice(0, 40);
    this.notify();
  }

  public startBoot() {
    if (this.bootInterval) return;
    this.bootInterval = setInterval(() => {
      if (this.state.bootSequence >= 100) {
        clearInterval(this.bootInterval);
        this.state.bootSequence = 100;
      } else {
        this.state.bootSequence += 2;
      }
      this.notify();
    }, 20);
  }

  public setActiveLayer(layer: string) {
    this.state.activeLayer = layer;
    this.notify();
  }

  public executeSeparation() {
    if (this.extractionInterval) return;

    this.state.isExtracted = false;
    this.state.extractionProgress = 0;
    this.notify();

    this.addLog("INITIATING MODULAR RUNTIME SEPARATION...", "warning");
    this.addLog("EXTRACTING AUTHORITY FROM PRESENTATION LAYER...", "info");

    this.extractionInterval = setInterval(() => {
      this.state.extractionProgress += Math.floor(Math.random() * 500) + 300;

      if (this.state.extractionProgress >= this.state.totalFragments) {
        this.state.extractionProgress = this.state.totalFragments;
        this.state.isExtracted = true;
        this.addLog("EXTRACTION COMPLETE: REACT IS NOW PROJECTION-ONLY.", "success");
        this.addLog("RUNTIME ENGINE ANCHORED TO 14D CORE.", "success");
        this.addLog("COMMAND SNAPSHOT CONTRACT LATCHED.", "success");
        clearInterval(this.extractionInterval);
        this.extractionInterval = null;
      } else {
        if (this.state.extractionProgress % 2000 < 500) {
          this.addLog(`Re-coding fragment 0x${this.state.extractionProgress.toString(16)} to Evidence Layer...`, "info");
        }
      }
      this.notify();
    }, 50);
  }
}

// Singleton runtime instance
export const runtime = new RuntimeEngine();
