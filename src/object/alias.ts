export const aliasSample = () => {
  // 再利用可能な型オブジェクトの定義
  type profile = {
    gender: string,
    locatuon: string,
    age: number
  }
  const user: profile = {
    gender: 'male',
    locatuon: 'osaka',
    age: 28
  }
  console.log(user);

  const user2: profile = {
    gender: 'female',
    locatuon: 'kobe',
    age: 21
  }
  console.log(user2);
  

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型 KnightとWizardどちらかの型を持つ
  type Adventurer = Knight | Wizard 
  // 交差型 KnightとWizardが持つ型を全て持っている
  type Paladin = Knight & Wizard 

  // Knightの型を持つadventurer2
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  }
  console.log('騎士:', adventurer1)

  // Wizardの型を持つadventurer2
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール',
  }
  console.log('魔法使い:', adventurer2)

  // KnightとWizard両方の型を持つpaladin
  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤボール',
  }

  console.log('パラディン（騎士と魔法使いの両方の能力を持つ）:', paladin)

}