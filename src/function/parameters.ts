// 変数名?: 型名 変数に値が渡されなくても関数を実行できる
export const isUserSignIn = (userId: string, userName?: string): boolean => {
  if (userId === "abc") {
    console.log('User is signed in! Username is', userName)
    return true
  } else {
    console.log('User isn\'t sign in!')
    return false
  }
}

// 引数に初期値を設定した関数
export const isUserSignIn2 = (userId: string, userName: string = 'notName user'): boolean => {
  if (userId === "abc") {
    console.log('User is signed in! Username is', userName)
    return true
  } else {
    console.log('User isn\'t sign in!')
    return false
  }
}

// 可変数引数を引数にした関数
// ...引数 可変数引数
export const restParameters = (...productsPrice: number[]) => {
  // 配列に対して
  // reduce((現在の処理結果, 処理をする配列の要素) => { 処理内容 })
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  // }, 初期値)
  }, 0)
}

// 呼び出しシグネチャ
// type 変数名 = (引数: 型名) => 返り値の型名
type UserCheck = (userId: string, userName?: string) => boolean
// export const isUserSignIn3 = (userId: string, userName?: string): boolean => {
export const isUserSignIn3: UserCheck = (userId, userName) => {
  if (userId === "abc") {
    console.log('User is signed in! Username is', userName)
    return true
  } else {
    console.log('User isn\'t sign in!')
    return false
  }
}
