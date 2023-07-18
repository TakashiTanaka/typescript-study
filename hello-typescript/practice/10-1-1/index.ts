// 明示的なジェネリック呼び出しの型

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log('Input:', input);
    callback(input);
  };
}

// 型：(input: string) => void
logWrapper((input: string) => {
  console.log(input.length);
});

// 型：(input: unknown) => void
// 推論できない型引数については、デフォルトでunknown型を想定するため、エラーが出てしまう
logWrapper(input => {
  console.log(input.length);
});

// 明示的なジェネリック型引数を使って関数を呼び出し
// その型引数が何であるかを明確に示せる
logWrapper<string>((input) => console.log(input.length));

// これはエラーになる
logWrapper<string>((input: boolean) => {})

// これはジェネリック型引数・関数のパラメーター型として明示的にstringを指定しているけど、どちらかは削除できる
logWrapper<string>((input: string) => {})
