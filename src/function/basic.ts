// 変数名を定義しない場合defaultに設定しなければ呼びさせないので注意

// アロー関数
// : void returnで値を返さない関数
export const logMessage = (message: string): void => {
  console.log('アロー関数: ', message)
}

// 名前付き関数
export const logMessage2 = function logMessage2 (message: string): void {
  console.log('名前付き関数: ', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('関数式: ', message)
}

// アロー関数の省略記述
export const logMessage4 = (message: string): void =>
  console.log('アロー関数の省略記述: ', message)

export const alwaysThrowError = function (message: string): never {
  throw new Error(`エラーメッセージ: ${message}`)
}