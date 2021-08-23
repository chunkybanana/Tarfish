let interpreter = require('./tarfish')
let fs = require('fs')
if(process.argv[2] == '--help' || process.argv.length < 3){
    console.log('Usage: node run.js [file] inputs')
} else {
    let code = fs.readFileSync(process.argv[2],'utf8');
    let inputs = process.argv.slice(3);
    let result = interpreter(code,inputs);
    console.log(result)
}