


function resultComp(){
    let result = (Math.floor(Math.random() * 3));
    if (result == 0){
        result = "rock";
        document.getElementById('a').innerHTML='<img class="image" src="./img/rock.png" />'

    }else if(result == 1){
        result = "paper"
        document.getElementById('a').innerHTML='<img class="image" src="./img/paper.png" />'

    }else{
        result = "scissors"
        document.getElementById('a').innerHTML='<img class="image" src="./img/scissors.png" />'
    }
    return result
}
resultComp()
