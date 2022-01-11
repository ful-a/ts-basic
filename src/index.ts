// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

/* typeScript */
// #3 基本の型定義とアノテーション
// import {primitiveSample, notExistSample, anySample, unknownSample} from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// #4 関数での型定義
// import {alwaysThrowError, 
//         logMessage, 
//         logMessage2, 
//         logMessage3, 
//         logMessage4
//       } from './function/basic'
// logMessage("Hello World!!")
// logMessage2("Hello World!!")
// logMessage3("Hello World!!")
// logMessage4("Hello World!!")
// // alwaysThrowError("Error")

// import {isUserSignIn, isUserSignIn2, isUserSignIn3, restParameters} from './function/parameters'
// isUserSignIn('abc', 'ful')
// isUserSignIn('def')
// isUserSignIn2('abc')
// console.log( restParameters(100, 200, 300, 400, 500) )

// isUserSignIn3('abc')

// #5 オブジェクト型の利用
// import {objectSample, objectSample2} from './object/object'
// objectSample()
// objectSample2()

// import { aliasSample } from './object/alias'
// aliasSample()

// #6 配列の型指定
// import {arraySample} from './array/array'
// arraySample()

// import { tupleSample, tupleSample2 } from './array/tuple'
// tupleSample()
// tupleSample2()

// #7 ジェネリック型の指定
// import { basicTypeNumber, basicTypeString, genericsTypeNumber, genericsTypeString } from './generics/basic'
// const users: string[] = ['ful', 'ash', 'jack']
// basicTypeString('tom')

// const numbers: number[] = [100, 200, 300]
// basicTypeNumber(400)

// genericsTypeString('tom', users)
// genericsTypeNumber(400, numbers)

// import genericsAdvance from './generics/advanced'
// genericsAdvance()

// #7 +1 abstract
import {abstractSample} from './more/abstract'
const takashi = new abstractSample("Takashi", 24, "male")
takashi.hello();

// import {Piece} from './class/shogi'
// const sammple = new Piece(1, '1')
// console.log(sammple.call());

// sammple.call()

import { Calc, Calc2, Calc3, User, Users } from './more/constructor'
const user = new User(1)
user.m()
console.log(user.name);

const users = new Users(1, 'Taro')
users.hello()

const calc = new Calc(1)
console.log(calc.add());

const calc2 = new Calc2
console.log(calc2.add(1, '3'));

const calc3 = new Calc3(1, 5)
console.log(calc3.add());






