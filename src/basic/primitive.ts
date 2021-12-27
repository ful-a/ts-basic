export default function primitiveSample() {
  let name: string = "ful"
  // name = 123 ERROR: Type 'number' is not assignable to type 'string'.
  console.log('#1 this type is', typeof name, 'and value is', name)

  let num: number = 123
  console.log('#2 this type is', typeof num, 'and value is', num)

  let isSign: boolean = true
  console.log('#3 this type is', typeof isSign, 'and value is', isSign)

  let comparison: boolean = num <= 10
  console.log('#4 this type is', typeof comparison, 'and value is', comparison)
}