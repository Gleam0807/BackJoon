let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {

    // charCodeAt() : 문자의 아스키코드 반환
    console.log(line.charCodeAt());

    rl.close();
}).on('close', function () {
    process.exit();
})