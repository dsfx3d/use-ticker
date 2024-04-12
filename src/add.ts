export function add(delta: number): (value: number) => number {
  return (value: number) => value + delta;
}
