// 配列に型を指定する
export const arraySample = () => {
  const colors: string[] = ['red', 'yellow']
  // const colors: Array<string> でも同じ意味
  colors.push('green')

  // string型でないのでpushできません
  // colors.push(000)

  console.log('配列の全ての値に型を指定', colors);

  // 型の合併型
  const ids: (string | number)[] = ['abc', 123]
  // どちらもpushできる
  ids.push('def')
  ids.push(456)

  console.log(ids);
}