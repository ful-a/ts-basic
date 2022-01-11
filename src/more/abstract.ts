abstract class Person {
  constructor(
    // private readonly name: string, 
    // private... 同じクラス内のみ使用可能

    // proected... 同じクラス内又は継承した要素
    protected readonly name: string, 
    public             age: number
  ) {}

  abstract hello(): void;
}

                          // Japaneseクラスは親クラス(Person)を継承(extend)します
export const abstractSample = class Japanese extends Person {
// 送った値 "Takashi", 24, "male"

  //継承先 extends 継承元
  constructor(
    name: string, 
    age:  number, 
    private gender: "male" | "female"
  ) {
    //superメソッドで継承元のプロパティを継承先でも使える状態にします。
    super(name, age); 

    //継承元のプロパティを受け継いだあとにJapanese独自のプロパティを設定。
    this.gender = gender; 
  }
  // hello() {} がない場合は
  //エラー(非抽象クラス 'Japanese' はクラス 'Person' からの継承抽象メンバー 'hello' を実装しません。)と表示される
  hello() {
    console.log("konnichiwa " + this.name); //←継承元のメソッドを上書きすることができます。
  }
}


