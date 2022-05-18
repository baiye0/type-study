//第一种
// type First<T extends any[]> = T extends []?never:T[0]

//第二种 indexed
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

//第三种
type ages = [1,2,3]

//union
type t1 = ages[number]

//看看某个值是不是在union里面
//第三种
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

//第四种 infer类型推断
type First<T extends any[]> = T extends [infer First,... infer rest] ? First : never