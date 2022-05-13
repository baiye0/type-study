type MyPick<T, K extends keyof T> = {
  [P in K]:T[P]
}

// 1.keyof
type Point = { x: number; y: number }
type P = keyof Point

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish

type Mapish = { [k: string]: boolean }
type M = keyof Mapish

