export default function primitiveSample() {
  const name = "ful"
  // name = 123 ERROR: Type 'number' is not assignable to type 'string'.
  console.log('#1 this type is', typeof name, 'and value is', name)

  const num = 123
  console.log('#2 this type is', typeof num, 'and value is', num)

  const isSign = true
  console.log('#3 this type is', typeof isSign, 'and value is', isSign)

  const comparison: boolean = num <= 10
  console.log('#4 this type is', typeof comparison, 'and value is', comparison)
}