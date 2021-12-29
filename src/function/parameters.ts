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