interface Page {
  readonly text: string;
}

function read(page: Page) {
  console.log(page.text); // 読み取りはOK
  page.text += '!!'; // readonlyなため、代入はNG
}

// 書き込み可能なtextプロパティを持つオブジェクト型と推論される
const page2 = {
  text: 'hello world!',
};

page2.text += '!!';

// page2はPage型の要件を満たすため、readはpage2を受け取れる
read(page2);
