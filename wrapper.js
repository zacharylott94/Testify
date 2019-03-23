import manifest from './tests/manifest.js'
let window = document.getElementById("main")

console.log(manifest)
for (let each of manifest) {
  each.HTML(window)
}



