type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown>?MyAwaited<X>:X : never;


//infer  相当于x
//1.只能在 条件类型里面室友
//2.设置未知数 变量
