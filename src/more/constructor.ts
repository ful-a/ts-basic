export class User {
  private id: number;
  name: string;
  //コンストラクタ定義
  // constructor(id: number);
  // constructor(id: number, name: string);
  //コンストラクタの実体を定義
  constructor(id: number, name?: string) {
    this.id = id;
    this.name = name ?? 'noName';
  };
  m() {
    return console.log(this.id, ':', this.name);
  }
};

//インスタンスの生成
// const user1: User = new User(1);
// const user2: User = new User(1, 'Taro');

//インターフェースの定義
interface Management {
  id: number
};
interface Person {
  name: string,
  hello(): void
};

//クラス定義
export class Users implements Management, Person {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
  hello() {
    return console.log(`Hello, ${this.name}.`);
  };
};

// 文字列の数字を数値型に変換して計算するクラス
interface StringToNumber {
  num: number,
  st?: string,
  add(): number
}

export class Calc implements StringToNumber {
  constructor(
    // interfaceで型を指定した場合publicを指定しないといけない
    public num: number,
    // 省略可能なパラメーターは最後に記入する
    public st?: string
  ) {
    // this.num = num
    this.st = st ?? '1'
  }
  add() {
    return this.num + Number(this.st)
  }
}


interface StringToNumber2 {
  add(num: number, st: string): number
  // add(): number エラーcalc2にadd(num: number, st: string)
  // を割り当てることはできません
}

export class Calc2 implements StringToNumber2 {
  add(num: number, st: string) {
    return num + Number(st)
  }
}

interface num1 {
  num1: number
}

interface num2 {
  num2: number
}
type nums = number
type addFn = () => number
// interfaceで定義したものは必須、追加で値やメソッドを入れることもできる
export class Calc3 implements num1 {
  constructor(
    public num1: number,
    public num2: nums,
  ) { }
  add:addFn = () => {
    const ans = this.num1 + this.num2
    return ans
  }
}

