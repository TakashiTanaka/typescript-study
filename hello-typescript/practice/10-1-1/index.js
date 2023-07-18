// 明示的なジェネリック呼び出しの型
function logWrapper(callback) {
    return function (input) {
        console.log('Input:', input);
        callback(input);
    };
}
var test = logWrapper(function (input) {
    console.log(input.length);
});
test('test');
logWrapper(function (input) {
    console.log(input.length);
});
