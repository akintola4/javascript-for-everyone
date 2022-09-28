import fs from "fs"
var output = fs.readFileSync('pop.txt', 'utf8')
.trim()
.split('\n')

console.log(output)