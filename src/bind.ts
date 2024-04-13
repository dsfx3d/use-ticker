export function bind<F extends (...args: any[]) => any>(
  fn: F,
  ...args: Parameters<F>
): () => ReturnType<F> {
  return fn.bind(undefined, ...args);
}
