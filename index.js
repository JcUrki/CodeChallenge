function resultComp(){
    let result = (Math.floor(Math.random() * 3));
    if (result == 0){
        result = "rock"
    }else if(result == 1){
        result = "paper"
    }else{
        result = "scissors"
    }
    return result
}
console.log(resultComp())


function match() {
    switch (user) {
        case 'rock':
            if(resultComp() === rock)
            {
                alert("Tie!");
            }
            else if(resultComp() === paper)
            {
                alert("You lost :( ");
            }
            else if(resultComp() === scissors)
            {
                alert("You win!");
            };
          break;
        case 'paper':
            if(resultComp() === rock)
            {
                alert("You win!");
            }
            else if(resultComp() === paper)
            {
                alert("Tie!");
            }
            else if(resultComp() === scissors)
            {
                alert("You lost :( ");
            };
          break;
        case 'scissors':
          if(resultComp() === rock)
            {
                alert("You lost :( ");
            }
            else if(resultComp() === paper)
            {
                alert("You win!");
            }
            else if(resultComp() === scissors)
            {
                alert("Tie!");
            };
          break;
        
        default:
          console.log('You have to choose one button ' + user + '.');
      }
      
    }

