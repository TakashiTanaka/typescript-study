// 呼び出しシグネチャ
// 関数として呼び出せる値について、その呼び出し方法を型システムで記述したもの

type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

const typedFunctionAlias: FunctionAlias = input => input.length;

const typedCallSignature: CallSignature = input => input.length;

interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(keepsTrackOfCalls);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
  console.log('no idea!');
}

hasCallCount = doesNotHaveCount; // countを持っていないためエラー
