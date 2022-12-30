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