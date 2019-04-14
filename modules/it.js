function it(description) {
  if (this.last.length === 1) {
    this.queue.pop()
  }
  let functionality = [description]
  this.queue.push(functionality)
  this.last = functionality
  return this
}

export default it