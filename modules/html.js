function HTML(element) {
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
}
export default HTML