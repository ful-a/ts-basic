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
import {alwaysThrowError, 
        logMessage, 
        logMessage2, 
        logMessage3, 
        logMessage4
      } from './function/basic'
logMessage("Hello World!!")
logMessage2("Hello World!!")
logMessage3("Hello World!!")
logMessage4("Hello World!!")
// alwaysThrowError("Error")

import {isUserSignIn, isUserSignIn2, restParameters} from './function/parameters'
isUserSignIn('abc', 'ful')
isUserSignIn('def')
isUserSignIn2('abc')
console.log( restParameters(100, 200, 300, 400, 500) )