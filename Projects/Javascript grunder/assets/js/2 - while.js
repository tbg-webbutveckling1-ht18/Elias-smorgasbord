var answer = prompt("Are we there yet?");

//while(answer != 'yes' && answer != 'yeah' ) {
//    var answer = prompt("Are we there yet?");
//}

while(answer.toLowerLase().indexOf("ye" , 0) === -1) {
    var answer = prompt('Are we there yet?');
}

alert("Yeah, we finally made it!");