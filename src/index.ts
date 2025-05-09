
export default function add(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}