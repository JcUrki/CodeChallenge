






function match() {
    switch (user) {
        case 'rock':
            if(optionMachine === rock)
            {
                alert("Tie!");
            }
            else if(optionMachine === paper)
            {
                alert("You lost :( ");
            }
            else if(optionMachine === scissors)
            {
                alert("You win!");
            };
          break;
        case 'paper':
            if(optionMachine === rock)
            {
                alert("You win!");
            }
            else if(optionMachine === paper)
            {
                alert("Tie!");
            }
            else if(optionMachine === scissors)
            {
                alert("You lost :( ");
            };
          break;
        case 'scissors':
          if(optionMachine === rock)
            {
                alert("You lost :( ");
            }
            else if(optionMachine === paper)
            {
                alert("You win!");
            }
            else if(optionMachine === scissors)
            {
                alert("Tie!");
            };
          break;
        
        default:
          console.log('You have to choose one button ' + user + '.');
      }
      
    }