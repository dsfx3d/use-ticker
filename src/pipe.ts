export function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C {
  return bc(ab(a));
}
