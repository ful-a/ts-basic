export default function notExistSample() {
  let name = null
  console.log('#5 this type is', typeof name, 'and value is', name)

  // name = 'ful'
  // name に値があれば(nullでなければ)
  if (name) {
    console.log('I\'m', name)
  } else {
    console.log('I dont have name\, but', typeof name)
  }

  // null と undefined の調べ方は一緒なのでややこしい
  let someone = undefined
  console.log('#6 this type is', typeof someone, 'and value is', someone)
  if (someone) {
    console.log('Are you look', someone, '?')
  } else {
    console.log('it\'s', typeof someone)
  }
} 