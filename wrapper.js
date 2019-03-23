import describe from './testify.js'
let window = document.getElementById("main")

let suite = describe("test")
             .it("should fail")
let result = true
suite.expect(result).toBe(false)
             .expect(1).toBe(2)
             .it("should pass")
             .expect(true).toBe(true)
             .expect(1).toBe(1)
             .it("should also fail")
             .expect('9').toBe(9)



suite.HTML(window)
