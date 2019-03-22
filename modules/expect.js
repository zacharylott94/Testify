export default function expect (value) {
  //bundle our first value so that it can be accessed by toBe
  return {value,toBe}

}

function toBe(value2) {
  //compare the first value with the second
  return this.value === value2
  report.count += 1
}


