type Player = 'first' | 'second'
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'


// 駒の位置
class Position {
  constructor (
    // private/protected/publicのいずれも書かない場合は
    // publicになり、どこからでもアクセスできるので注意
    private suji: Suji, 
    private dan: Dan
    // suji: Suji,
    // dan: Dan,
  ) {}

  // 現在地と移動先の値の差を求める
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段(縦の距離)は正負反転
      }
    }
  }
}

// 将棋の駒の抽象化クラス
  // 駒の特性をひとまとめにしたクラス
abstract class Piece {
  // 変数(position)はクラス(Position)と同じ型定義を利用する
  position: Position

  // constructor (
  //   private readonly player: Player, 
  //   suji: Suji, 
  //   dan: Dan
  // ) {
  //   this.position = new Position(suji, dan)
  // }
  constructor (
    private readonly player: Player, 
    suji: Suji,
    dan: Dan
  ) {
    // this.positionにPositionのインスタンス化した値を代入
    this.position = new Position(suji, dan)
  }
  
  /* 駒の移動に関するメソッド */
  // 駒の移動
  // 関数名(引数: 引数の型)
  moveTo(position: Position) {
    // 現在地 = 移動する方向
    this.position = position
  }

  // 駒が移動できるかどうか
  // 抽象クラス(abstract class)の時のみメソッドにもabstractを適用できる
  abstract canMoveTo(position: Position, player: Player): boolean
}

// Piece（駒）を親として詳細を記入
// 親要素は先に記入しておくこと
class Osho extends Piece {

  canMoveTo(position: Position, player: Player): boolean {
    
    // const distance = positionクラスのdistanceFromメソッド
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }

}

// ゲーム開始時の初期値の設定
class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9'),
    ]
  }

}
new Game()
