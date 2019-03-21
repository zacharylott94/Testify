function create () {
  return {
    failed: 0,
    count: 0,
    problems: []
  }
}

function print (report) {
  console.log(`Number of tests ran: ${report.count}
Number of tests failed: ${report.failed}
Failing tests:\n`)
  
}


function html (report) {
  let string = `Number of tests ran: ${report.count}<br>Number of tests failed: ${report.failed}<br>Failing tests:<br>`
  return string
}


const Report = {
  create,
  print,
  html
}

export default Report