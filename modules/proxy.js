let Test;
export default Test = {
  value: 10
}

let p = new Proxy(Test, _ => console.log(`the Value is : ${this.value}`))

Test()