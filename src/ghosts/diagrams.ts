interface GhostPart {
  type: string;
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
interface GhostDiagram {
  parts: GhostPart[];
  links: [number, number, number?, number?][];
}

const node = (type: string, name: string, x: number, y: number, w = 2, h = 1): GhostPart => ({
  type,
  name,
  x,
  y,
  w,
  h,
});
export const ghostDiagrams: Record<string, GhostDiagram> = {
  first: { parts: [node('Input', 'Input', 0, 1), node('LED', 'LED', 5, 1, 1)], links: [[0, 1]] },
  nand: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('AND', 'AND', 5, 1, 2, 2),
      node('NOT', 'NOT', 9, 1, 1),
      node('Output', 'OUT', 12, 1),
    ],
    links: [
      [0, 2],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  half: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 4),
      node('XOR', 'XOR', 5, 0, 2, 2),
      node('AND', 'AND', 5, 4, 2, 2),
      node('Output', 'SUM', 10, 0),
      node('Output', 'CARRY', 10, 4),
    ],
    links: [
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
    ],
  },
  full: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('Input', 'Cin', 0, 7),
      node('Custom', 'HALF 1', 5, 1, 2, 3),
      node('Custom', 'HALF 2', 10, 2, 2, 3),
      node('OR', 'OR', 15, 6, 2, 2),
      node('Output', 'SUM', 15, 2),
      node('Output', 'CARRY', 20, 6),
    ],
    links: [
      [0, 3],
      [1, 3],
      [3, 4],
      [2, 4],
      [3, 5, 1],
      [4, 5, 1],
      [4, 6],
      [5, 7],
    ],
  },
  alarm: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('Input', 'ENABLE', 5, 6),
      node('OR', 'OR', 5, 1, 2, 2),
      node('AND', 'AND', 10, 2, 2, 2),
      node('LED', 'Alarm', 15, 2, 1),
    ],
    links: [
      [0, 3],
      [1, 3],
      [3, 4],
      [2, 4],
      [4, 5],
    ],
  },
  mux: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 4),
      node('Input', 'S', 0, 8),
      node('NOT', 'NOT', 4, 7, 1),
      node('AND', 'AND', 8, 0, 2, 2),
      node('AND', 'AND', 8, 4, 2, 2),
      node('OR', 'OR', 13, 2, 2, 2),
      node('Output', 'OUT', 18, 2),
    ],
    links: [
      [0, 4],
      [1, 5],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
      [5, 6],
      [6, 7],
    ],
  },
  pulse: {
    parts: [
      node('Clock', '500 ms', 0, 0),
      node('Input', 'ENABLE', 0, 4),
      node('AND', 'AND', 5, 1, 2, 2),
      node('Counter', 'Counter', 10, 1),
    ],
    links: [
      [0, 2],
      [1, 2],
      [2, 3],
    ],
  },
  not: {
    parts: [node('Input', 'A', 0, 0), node('NOT', 'NOT', 5, 0, 1), node('LED', 'L', 8, 0, 1)],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  andor: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 4),
      node('AND', 'AND', 5, 0, 2, 2),
      node('OR', 'OR', 5, 4, 2, 2),
      node('LED', 'AND', 10, 0, 1),
      node('LED', 'OR', 10, 4, 1),
    ],
    links: [
      [0, 2],
      [1, 2, 0, 1],
      [0, 3],
      [1, 3, 0, 1],
      [2, 4],
      [3, 5],
    ],
  },
  xor: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('XOR', 'XOR', 5, 0, 2, 2),
      node('LED', 'DIFF', 10, 0, 1),
    ],
    links: [
      [0, 2],
      [1, 2, 0, 1],
      [2, 3],
    ],
  },
  button: {
    parts: [node('Button', 'PRESS', 0, 0), node('LED', 'LAMP', 5, 0, 1)],
    links: [[0, 1]],
  },
  delay: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Delay', '400 ms', 5, 0, 2, 2),
      node('LED', 'LATE', 9, 0, 1),
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  counter: {
    parts: [
      node('Button', 'PRESS', 0, 0),
      node('Counter', 'COUNT', 5, 0, 2),
      node('LED', 'BIT 0', 9, 0, 1),
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  rgb: {
    parts: [
      node('Input', 'R', 0, 0),
      node('Input', 'G', 0, 3),
      node('Input', 'B', 0, 6),
      node('RGBLed', 'COLOUR', 5, 0, 3, 3),
    ],
    links: [
      [0, 3, 0, 0],
      [1, 3, 0, 1],
      [2, 3, 0, 2],
    ],
  },
  display: {
    parts: [node('DipSwitch', 'BINARY', 0, 0, 2, 4), node('Display', 'HEX', 6, 0, 3, 4)],
    links: [
      [0, 1, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 2, 2],
      [0, 1, 3, 3],
    ],
  },
  bus: {
    parts: [
      node('Input', 'ONE', 0, 1),
      node('Splitter', 'FAN OUT', 5, 1, 2, 4),
      node('LED', 'L0', 10, 0, 1),
      node('LED', 'L1', 10, 1, 1),
      node('LED', 'L2', 10, 2, 1),
      node('LED', 'L3', 10, 3, 1),
    ],
    links: [
      [0, 1],
      [1, 2, 0],
      [1, 3, 1],
      [1, 4, 2],
      [1, 5, 3],
    ],
  },
  merger: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('Input', 'C', 0, 6),
      node('Input', 'D', 0, 9),
      node('Merger', 'ANY', 5, 1, 2, 4),
      node('LED', 'L', 10, 1, 1),
    ],
    links: [
      [0, 4, 0, 0],
      [1, 4, 0, 1],
      [2, 4, 0, 2],
      [3, 4, 0, 3],
      [4, 5],
    ],
  },
  bar: {
    parts: [node('DipSwitch', 'BINARY', 0, 0, 2, 4), node('BarGraph', 'LEVEL', 6, 0, 2, 4)],
    links: [
      [0, 1, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 2, 2],
      [0, 1, 3, 3],
    ],
  },
  tone: {
    parts: [
      node('Input', '1', 0, 0),
      node('Input', '2', 0, 3),
      node('Input', '4', 0, 6),
      node('Input', '8', 0, 9),
      node('Tone', 'SOUND', 5, 0, 3, 4),
    ],
    links: [
      [0, 4, 0, 0],
      [1, 4, 0, 1],
      [2, 4, 0, 2],
      [3, 4, 0, 3],
    ],
  },
  procedural: {
    parts: [
      node('Input', 'A', 0, 0),
      node('Input', 'B', 0, 3),
      node('Procedural', 'A && B', 5, 0, 2, 2),
      node('LED', 'L', 9, 0, 1),
    ],
    links: [
      [0, 2],
      [1, 2, 0, 1],
      [2, 3],
    ],
  },
  motor: {
    parts: [node('Input', 'ON', 0, 0), node('Motor', 'SPIN', 5, 0, 2)],
    links: [[0, 1]],
  },
  seven: {
    parts: [
      node('DipSwitch', 'A–D', 0, 0, 2, 4),
      node('DipSwitch', 'E–DP', 0, 8, 2, 4),
      node('SevenSegment', 'DIGIT', 6, 2, 3, 4),
    ],
    links: [
      [0, 2, 0, 0],
      [0, 2, 1, 1],
      [0, 2, 2, 2],
      [0, 2, 3, 3],
      [1, 2, 0, 4],
      [1, 2, 1, 5],
      [1, 2, 2, 6],
      [1, 2, 3, 7],
    ],
  },
  lookup: {
    parts: [
      node('Input', 'A0', 0, 1),
      node('ROM', 'ROM A5', 5, 1, 3, 4),
      node('LED', 'D0', 11, 1, 1),
      node('LED', 'D1', 11, 4, 1),
      node('LED', 'D2', 11, 7, 1),
      node('LED', 'D3', 11, 10, 1),
    ],
    links: [
      [0, 1],
      [1, 2, 0],
      [1, 3, 1],
      [1, 4, 2],
      [1, 5, 3],
    ],
  },
};
