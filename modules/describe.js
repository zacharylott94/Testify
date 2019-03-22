//import expect from './expect.js'

export default function describe (description) {
  let object = {
    description,
    queue: [],
    last: [],
    failed: false,
    log: function() {
      if (this.last.length === 1) {
        this.queue.pop()
      }
      if (this.failed){
        console.log(this.description)
        for (let each of this.queue) {
          for (let each2 of each) {
            console.log(each2)
      
          }
        }
      }
    },
    HTML: function(element) {
      if (this.last.length === 1) {
        this.queue.pop()
      }
      if (this.failed){
        element.innerHTML += `<h2 class=description>${this.description}</h2>`
        for (let each of this.queue) {
          element.innerHTML+= `<h3>${each.shift()}</h3>`
          for (let each2 of each) {
            element.innerHTML += `<div class=failure>${each2}</div>`
      
          }
        }
      }
    },
    it: function(description) {
      if (this.last.length === 1) {
        this.queue.pop()
      }
      let functionality = [description]
      this.queue.push(functionality)
      this.last = functionality
      return this
    },
    expect: function(val1){
      function toBe(val2) {
        if (val1 !== val2){
          this.self.last.push(`Expected ${typeof val2}:${val2} to be ${typeof val1}:${val1}`)
          this.self.failed = true
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

