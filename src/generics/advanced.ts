// 様々なジェネリック型のシグネチャ

// 基本的な書き方
// type Generics<T> = {
//   (array: T[], initialValue: T): T
// }

// 完全な呼び出しシグネチャ（個々のシグネチャにジェネリック型を割り当てる）
// type Generic2 = {
//   <T>(array: T[], initialValue: T): T
//   <U>(array: U[], initialValue: U): U
// }

// // 呼び出しシグネチャの省略記法
// type Generic3<T> = (array: T[], initialValue: T) => T
// type Generic4 = <T>(array: T[], initialValue: T) => T

export default function advancedSample() {
  // Generic3の引数を複数に
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  // 型名を割り当てて簡単に解説

  // Mapに２つのジェネリック型を使います（今回はstring型とnumber型）
  // type Map<string, number> = 
  // (
    // 変数1: 文字列の配列
    // array: string[], 
    // 変数2: callback関数
    // callback関数の中身は(文字列型のitem)を数値型として使用
    // fn: (item: string) => number
  // 返り値は数値型の配列
  // ) => number[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      // result[i] = fn( array[i] => Number(item) )
      // array[i]の文字列を数値型に変換してresult[i]に代入
      result[i] = fn(array[i])
    }
    return result
  }
  const numbers = mapStringsToNumbers(['123', '456', '001'], item => Number(item))
  console.log('数値型に変換された:', numbers)

  // 数値型のnumbersを文字列に再変換
  // ジェネリック型を使っているのでMapの型定義を逆にするだけで実行できる
  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }
                                  // ( 変数1,     変数2(即時関数) )
  const strings = mapNumbersToStrings( numbers, item => String(item) )
  console.log('数値型から文字列型に変換された:', strings)
}
