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
for (var i_1 = 1; i_1 < 5; i_1++) {
    arr[i_1] = arr[i_1 - 1] * i_1;
}
// console.log(arr)
var arr2;
arr2 = ['1', '2', '3'];
var h;
h = ['hello', 2];
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["notComment"] = 2] = "notComment";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'frank',
    gender: Gender.male
};
i.gender = Gender.female;
console.log(Gender.male);
