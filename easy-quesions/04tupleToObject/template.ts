type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]:P
}

// keyof array -> 索引

//T[number]遍历数组