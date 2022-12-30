let a: any;
a = 1;
a = 'hello';

let b: unknown;
b = 2;
b = true;

let c: number;
c = a;
c = b as number;

function fn(): void {
    return null;
}

function fn2():never{
    throw new Error('error happen')
}