// ジェネリック関数

function identity<T>(input: T) {
  return input;
}

const stringy = identity('me'); // string
const numeric = identity(123); // number

console.log(typeof stringy, typeof numeric);

// アロー関数スタイル
const identityArrowStyle = <T>(input: T) => input;
