var b;
b = { name: 'hello' };
var c;
c = { name: 'frank', age: 12, gender: 'male', birth: '2000-09-30' };
var fn;
fn = function (x, y) {
    return x.length + y;
};
var arr;
arr = [];
arr[0] = 1;
for (var i = 1; i < 5; i++) {
    arr[i] = arr[i - 1] * i;
}
console.log(arr);
