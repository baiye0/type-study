type MyExclude<T, U> = T extends U?never:T

type a = MyExclude<'a' | 'b' | 'c', 'a'>

// 条件类型
// T extends U ? X : Y
// 若类型T可被赋值给类型U, 那么结果类型就是X类型, 否则就是Y类型

// T为类型A和类型B的联合类型, 结果类型会变成多个条件类型的联合类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)