//import Testify from './testify.js' 
import Report from './modules/report.js'
import './tests/manifest.js'

let window = document.getElementById("main")
let report = Report.create()

window.innerHTML = Report.html(report)
Report.print(report)