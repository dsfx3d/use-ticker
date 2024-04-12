// eslint-disable-next-line @typescript-eslint/ban-types
export function bind<A extends any[]>(fn: Function, ...args: A) {
  return fn.bind(undefined, ...args);
}
