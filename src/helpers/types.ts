export function notNullish<T> (obj: T | null | undefined): obj is T {
  return obj !== undefined && obj !== null
}
