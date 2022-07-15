const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    // [[14 30], 20]
    
    let hour = input[0].split(' ')[0]
    let minute = input[0].split(' ')[1]
    let cookTime = input[1]

    solution(+hour, +minute, +cookTime)
    
    function solution(doneHour, doneMin, cookTime) {
        doneMin += cookTime

  if (doneMin / 60 >= 1) {
    doneHour += Math.floor(doneMin / 60);
    doneMin %= 60;
  }
  doneHour %= 24;
        
  console.log(doneHour, doneMin)
  }
  process.exit();
});