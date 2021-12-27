export default function anySample() {
  let any: any = "sample"
  console.log('#7 I write any type. but this type show', typeof any, 'and value is', any)
  any = 123
  console.log('#7 I\'m changing value. became this type is', typeof any, 'and value is', any)

}