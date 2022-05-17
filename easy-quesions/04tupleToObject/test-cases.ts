import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = typeof tuple

//1.字面量类型

let str = '123'
type s = typeof str

const strConst = "234"  //常量
type sc = typeof strConst

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

console.log(typeof tuple)

// 非类型世界 => typeof 类型世界

//1.typeof
//2.字面量类型