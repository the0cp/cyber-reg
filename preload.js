// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const { dialog } = require("electron")
const fs = require("fs")



window.onload = () =>{
    let btn = document.getElementById("submit")

    btn.onclick = () => {
        let textUsr = document.getElementById("name").value
        let textSelect = document.getElementById("select").value
        let textPwd = document.getElementById("pwd").value
        fs.appendFile("sheet.txt", textUsr+"\t"+textSelect+"\t"+textPwd+"\n", error=>{
          if (error) return alert("Something went wrong. Error:" + error.message);
          
        })  
        location.reload()
    }
}