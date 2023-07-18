// ジェネリック関数
function identity(input) {
    return input;
}
var stringy = identity('me');
var numeric = identity(123);
console.log(typeof stringy, typeof numeric);
