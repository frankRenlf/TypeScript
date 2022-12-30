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
// console.log(arr)


let arr2: Array<string>;
arr2 = ['1', '2', '3']

let h: [string, number];
h = ['hello', 2];


enum Gender {
    Male,
    Female,
    NotComment
}

let i: {
    name: string,
    gender: 0 | 1
}
i = {
    name: 'frank',
    gender: Gender.Male,
}
i.gender = Gender.Female

console.log(Gender.Male)

let j: { name: string } & { age: number }
j = {
    name: 'lily',
    age: 11
}

type myType = 1 | 2 | 3;
let m: myType;
m = 2;