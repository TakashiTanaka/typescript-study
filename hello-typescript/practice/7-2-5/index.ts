// インデックスシグネチャ
// インターフェースのオブジェクトが任意のキーを受け取り、そのキーが特定の型を持つことを表現できる
// しかし、完全に型安全を保証できないので、任意のキーと値のペアを保管したい場合は、Mapを使うほうが良い

interface WordCounts {
	[i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;

counts.cherry = false; // booleanをnumberに割り当てることができないためエラー