import describe from './modules/describe.js'
let window = document.getElementById("main")

let report = describe("test")
             .it("should fail")
             .expect(true).toBe(false)
             .expect(1).toBe(2)
             .it("should pass")
             .expect(true).toBe(true)
if (report.failed){
  for (let each of report.queue) {
    console.log(each)
  }
}
