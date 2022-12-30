let b: {
    name: string,
    age?: number,
};

b = {name: 'hello'}

let c: { name: string, [attribute: string]: any }
c = {name: 'frank', age: 12, gender: 'male', birth: '2000-09-30'}

let fn: (a: string, b: number) => number;
fn = function (x, y) {
    return x.length + y;
}

let arr: number[];
arr = []
arr[0] = 1
for (let i = 1; i < 5; i++) {
    arr[i] = arr[i - 1] * i;
}
console.log(arr)


let arr2: Array<string>;
arr2 = ['1', '2', '3']

let h: [string, number];
h = ['hello', 2];

let i: {
    name: string,
    gender: string
}
i = {
    name: 'frank',
    gender: 'male',
}