export type LogType = "info" | "warning" | "success";

export interface LogEntry {
  time: string;
  msg: string;
  type: LogType;
}

export interface CommandCenterSnapshot {
  bootSequence: number;
  extractionProgress: number;
  isExtracted: boolean;
  logs: LogEntry[];
  totalFragments: number;
  activeLayer: string;
  merkleroot: string;
  recoveryAnchor: string;
  reasons: any[];
}

const mockSnapshot: CommandCenterSnapshot = {
  bootSequence: 100,
  extractionProgress: 15682,
  isExtracted: true,
  logs: [],
  totalFragments: 15682,
  activeLayer: 'terminal',
  merkleroot: '26856B24C50750F0C69C1EEB86A69EF777777',
  recoveryAnchor: 'donadams1969.eth',
  reasons: []
};

export function getSnapshot(traceId: string) {
  return { snapshot: mockSnapshot };
}
