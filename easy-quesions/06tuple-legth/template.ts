type Length<T extends readonly any[]> = T['length']

// const a = ['1','2',1] as const

// type b = typeof a

// const c:b =['1','2',1]