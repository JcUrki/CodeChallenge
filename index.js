let selectBtn=  document.querySelectorAll("input")

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

function match(user, computer) {
    switch (user) {
        case 'rock':
            if(computer === "rock")
            {
                alert("Tie!");
            }
            else if(computer === "paper")
            {
                alert("You lost :( ");
            }
            else if(computer === "scissors")
            {
                alert("You win!");
            };
          break;
        case 'paper':
            if(computer === "rock")
            {
                alert("You win!");
            }
            else if(computer === "paper")
            {
                alert("Tie!");
            }
            else if(computer === "scissors")
            {
                alert("You lost :( ");
            };
          break;
        case 'scissors':
          if(computer === "rock")
            {
                alert("You lost :( ");
            }
            else if(computer === "paper")
            {
                alert("You win!");
            }
            else if(computer === "scissors")
            {
                alert("Tie!");
            };
          break;
        
        default:
          console.log('You have to choose one button ' + user + '.');
    }
      
}

selectBtn.forEach(hand => hand.onclick = (e) => {
    console.log("EnTRA aqui");
    let handPose = e.currentTarget.value;
    console.log("handPose",handPose)

    let compResult= resultComp();
    console.log("compresult",compResult)
    match(handPose, compResult)
})