import {describe, Report, expect} from './testify.js' 

let window = document.getElementById("main")
let report = Report.create()

window.innerHTML = Report.html(report)
Report.print(report)
console.log(expect(1).toBe(2))
describe("this is a description")