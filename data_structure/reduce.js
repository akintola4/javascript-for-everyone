let fs = require('fs')
var output = fs.readFileSync('pop.txt', 'utf8')
.trim()
.split("\n")
.map(line => line.split('\t'))


// .reduce((users, line)=> {
// //     users[line[0]] =  []
// //     users[line[0]].push({
// //         age: line[1],
// //         sex: line[2],
// //         martial: line[3],
// //     })
// //     return users
// // }, {} )

console.log("output", output)