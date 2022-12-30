let b: {
    name: string,
    age?: number,
};

b = {name: 'hello'}

let c: { name: string, [propName: string]: any }
c = {name: 'frank', age: 12, gender: 'male'}