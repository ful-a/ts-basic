export const basicTypeString = (name: string, otherUsers?: string[]): void => {
  if (!otherUsers) {
    console.log('Hello', name)
  } else {
    const users: string = otherUsers.join(', ')
    console.log(`Hello ${users} and ${name}`)
  }
}

type checkNumber = (num: number, moreNumber?: number[]) => void
export const basicTypeNumber: checkNumber = (num, moreNumber) => {
  if (!moreNumber) {
    console.log('value is', num)
  } else {
    let total: number = moreNumber.reduce((preValue, nowValue) => preValue + nowValue)
    total += num
    console.log('total is', total)
  }
}


// ジェネリック型を使ったシグネチャー指定
// ジェネリック型...  型専用の変数定義
//                  特定の型名が決まっておらず、代入された型名で判定を行う
// シグネチャー...  関数で使われる引数や戻り値の型の組み合わせ
// type 変数<型用の変数> = {
type Generics<T> = {
  // Tを変数として再利用できます
  (value: T, Array?: T[]): void
}

export const genericsTypeString: Generics<string> = (name, otherUsers) => {
  if (!otherUsers) {
    console.log('Hello', name)
  } else {
    const users: string = otherUsers.join(', ')
    console.log(`Hello ${users} and ${name}`)
  }
}

export const genericsTypeNumber: Generics<number> = (num, moreNumber) => {
  if (!moreNumber) {
    console.log('value is', num)
  } else {
    let total: number = moreNumber.reduce((preValue, nowValue) => preValue + nowValue)
    total += num
    console.log('total is', total)
  }
}


