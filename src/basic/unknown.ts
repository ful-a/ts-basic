export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('#8 I write unknown type. but this type show', typeof maybeNumber, 'and value is', maybeNumber)

  // unknownと他の要素との比較は可能
  const isFoo = maybeNumber === "foo"
  console.log('#8 I compare', typeof maybeNumber, 'and', typeof isFoo, ',and value is', isFoo)

  // maybeNumberはunknown型なのでunknownとnumberタイプだと計算できない
  // const sum = maybeNumber + 10
  
  // unknown型を処理したい場合、その値の型を明示的にする必要がある
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('#8 this type is', typeof maybeNumber, 'and value is', maybeNumber)
    console.log('#8 if add 10, value is', sum)
  }
}