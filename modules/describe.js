//import expect from './expect.js'

export default function describe (description) {
  let object = {
    queue: [description],
    failed: false,
    it: function(description) {
      this.queue.push(description)
      return this
    },
    expect: function(val1){
      function toBe(val2) {
        if (val1 !== val2){
          this.self.queue.push(`Expected ${val2} to be ${val1}`)
          this.self.failed = true
        } else {
          this.self.queue.pop()
        }
        return this.self
      }
      return {self:this, toBe}
    }
  }
  if (object.failed){
    for (each of object.queue) {
      console.log(each)
    }
  }
  return object
}


// describe("description", _ => {
//   it("should", _ => {
//     expect(true).toBe(false)
//   })
// })

