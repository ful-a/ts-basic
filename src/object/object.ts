export const objectSample = () => {
  // 呼び出すことができないオブジェクト型
  // const getObject: object = {
  //   name: 'furu',
  //   age: 27
  // }
  // console.log(getObject.name);

  // オブジェクトを呼び出すには
  let getObject2: {
    name: string,
    age: number
  } = {
    name: 'furu',
    age: 27
  }
  console.log(`he is ${getObject2.name}, ${getObject2.age} years old`);

  getObject2 = {
    name: 'ash',
    age: 32
  }
  console.log(`he is ${getObject2.name}, ${getObject2.age} years old`);

  // オプショナルとリードオンリー
  const getObject3: {
    firstName: string,
    readonly lastName: string,
    gender?: string
  } = {
    firstName: 'osaka',
    lastName: 'tarou',
  }
  // 変数?: は値が未定義でも大丈夫
  // 変数?: 又は変数:で記述した場合は値を追記できる
  getObject3.gender = "male"
  console.log(`${getObject3.firstName} ${getObject3.lastName} is ${getObject3.gender}`);
  
  // readonlyのついた変数は上書きできません
  // getObject3.lastName = 'someone'
}

// 型定義を先にする
export const objectSample2 = () => {
const capitals: {
  // [変数: 変数の型名]: 変数の値の型名
  [cuntryName: string]: string
  } = {
    Japan: 'tokyo',
    Korea: 'seoul'
  }
  capitals.China = 'korea',

  console.log(capitals);

// 変数名に数字を入れることはできません
// capitals.000 = 'number',
// 値に数字を入れることはできません
// capitals.Number = 000,

}