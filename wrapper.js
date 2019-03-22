import describe from './modules/describe.js'
let window = document.getElementById("main")

let suite = describe("test")
             .it("should fail")
             .expect(true).toBe(false)
             .expect(1).toBe(2)
             .it("should pass")
             .expect(true).toBe(true)
             .expect(1).toBe(1)
             .it("should also fail")
             .expect('9').toBe(9)


suite.log()
suite.HTML(window)
