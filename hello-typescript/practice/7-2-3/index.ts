// 関数とメソッド

interface HasBothFunctionTypes {
  property: () => string; // プロパティ構文
  method(): string; // メソッド構文
}

const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};

hasBoth.property();
hasBoth.method();