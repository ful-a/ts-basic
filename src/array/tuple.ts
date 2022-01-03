export const tupleSample = () => {
  // 配列の型定義
  let responce: [number, string] = [100, 'foo']
  responce = [200, 'hoge']

  // 2つの要素が含まれる配列と指定しているので
  // 指定した値の数は合わないのでエラーが発生する
  // responce = [300, 'fuge', 'more']

  // 指定した方と違う場合もエラーが出ます
  // responce = ['fuge', 300]
  console.log('配列の値それぞれに型を指定', responce);
}

export const tupleSample2 = () => {
  // 読み込み専用の配列
  const readOnlyArray: readonly string[] = ['one', 'two', 'three']
  // ↓の書き方でも同じ意味です
  //  readonly -> Readonlyに変わっているので注意
  // let readOnlyArray: ReadonlyArray<string> = ['one', 'two', 'three']
  // let readOnlyArray: Readonly<string[]> = ['one', 'two', 'three']

  // 読み込み専用なので追加や書き換えができない
  // readOnlyArray.push('four')
  // readOnlyArray[2] = 'four'
  console.log('読み込み専用の配列', readOnlyArray);

}