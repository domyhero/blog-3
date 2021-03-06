var int32 = new Int32Array(5);
int32[0] = 10;
int32[1] = 20;

console.log(int32.buffer);
// typed array 内部的 array buffer实例
// ArrayBuffer { byteLength: 20 }

console.log(int32.length);
// typed array 里元素的数目，在初始化的时候就固定了
// 输出：5

console.log(int32.byteLength);
// typed array 对应的字节长度，int32每个元素对应4个字节
// 输出：20