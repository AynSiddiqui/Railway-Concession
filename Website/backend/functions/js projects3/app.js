const T = require("tesseract.js")

T.recognize("./test3.jpeg", 'eng')
.then(out => {console.log(out.data.text.slice(14,out.data.text.indexOf('Hostelize')))})