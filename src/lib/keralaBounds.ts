/** Tight bounds used to fit Kerala on initial load. */
export const KERALA_BOUNDS: [[number, number], [number, number]] = [
  [8.7, 75.3],
  [12.2, 76.9],
];

/** Wider bounds used as hard scroll limits so the user cannot pan away from Kerala. */
export const KERALA_MAX_BOUNDS: [[number, number], [number, number]] = [
  [7.5, 74.0],
  [13.5, 78.2],
];
