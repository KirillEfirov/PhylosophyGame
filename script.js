answer = ""
    
    
    
    function hideOnScroll() {
        if (document.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName('scroll')[0].classList.add('active');
            document.getElementsByClassName('rules')[0].style.visibility ='visible';
        } else {
            document.getElementsByClassName('scroll')[0].classList.remove('active');
            document.getElementsByClassName('rules')[0].style.visibility ='hidden';
            /*document.getElementsByClassName('computer-life-tracker')[0].style.visibility ='visible';
            document.getElementsByClassName('user-life-tracker')[0].style.visibility ='visible';*/

        }
    }



    function beginPlay() {
        resetVisibility();
        visibilityToggle("player-choice"); // display buttons
    }



    function resetVisibility() {
        //document.getElementsByClassName('player-choice')[0].style.visibility = 'hidden';
        document.getElementsByClassName('play-button')[0].style.visibility ='visible';
        //document.getElementsByClassName('spinner-box')[0].style.visibility ='hidden';
    }

    function visibilityToggle(targetDiv) {

        var divVis = document.getElementsByClassName(targetDiv)[0];
    
        if (divVis.style.visibility === "hidden") {
          divVis.style.visibility = "visible";
        } else {
          divVis.style.visibility = "hidden";
        }
    }
//visual cue for computer move (floats the rock sign objects up and down)
    function rockHover(rock,paper,scissors) {
        const root = document.documentElement;

        if (rock == true) {
            root.style.setProperty('--rock-object-float', 160 + "vh");
        }else if (paper == true) {
            root.style.setProperty('--paper-object-float', 160 + "vh");
        }else if (scissors == true) {
            root.style.setProperty('--scissors-object-float', 160 + "vh");
        }else{
            root.style.setProperty('--rock-object-float', 200 + "vh");
            root.style.setProperty('--paper-object-float', 200 + "vh");
            root.style.setProperty('--scissors-object-float', 200 + "vh");
        }

    //  reset rock position after 3 seconds of inactivity
        if (rock || paper || scissors === true) {
            setTimeout(()=>{ rockHover(false,false,false) }, 3000)
        }
    }



    function getSelected(number){
        playerSelection = number;

        if (playerSelection === 1 ){
            playerSign = 'Rock';
        }else if (playerSelection === 2 ){
            playerSign = 'Paper';
        }else if (playerSelection === 3 ) {
            playerSign = 'Scissors';
        }
        console.log("you threw: " ,playerSign);
        computerSelection = getComputerChoice();
        visibilityToggle("player-choice");

        // compare computer and player inputs
        const score = playerSelection - computerSelection;
        console.log(score);
        //calculate the winner and explain decision
        if (score == -4 || score == 1 || score == -2){
            console.log('You win! :' + playerSign + ' beats ' + computerSign);

            document.querySelector(".computer-life-tracker").value -= 5;

        }else if (score == 2 || score == -1){
            console.log('You lose... :' + computerSign + ' beats ' + playerSign);


            setQuestionAndAnswers();


        }else if (score == 0){
            console.log('Draw :' + computerSign + ' ties ' + playerSign);
        }
    }

    function getComputerChoice() {
        //generate computer input
        const computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
                        
        //create a string name out of computer input
        if (computerSelection === 1 ){
            computerSign = 'Rock';
            rockHover(true,false,false);
        }else if (computerSelection === 2 ){
            computerSign = 'Paper';
            rockHover(false,true,false);
        }else if (computerSelection === 3 ) {
            computerSign = 'Scissors';
            rockHover(false,false,true);
        }
        console.log("Computer threw: " ,computerSign);
        return computerSelection;
    }
    

    right_answer = ""
    
    function setQuestionAndAnswers() {
        /*Math.floor(Math.random() * (max - min + 1)) + min;*/
        let num = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        switch (num) {
            //1st parametr:            quiestion
            //2nd, 3rd, 4th parametrs: answers
            //3rd parametr:            right answer
            case 1:
                qa("Представитель объективного идеализма:", "Маркс", "Беркли", "Гегель", "Гегель");
                right_answer = "Гегель"
                break;
            case 2:
                qa("Методологический принцип, признающий разум основой познания:", "сенсуализм", "скептицизм", "рационализм", "рационализм");
                right_answer = "рационализм"
                break;
            case 3:
                qa("Философское учение, согласно которому мир имеет одно начало: или материальное,или духовное:", "монизм", "плюрализм", "материализм", "монизм");
                break;
            case 4:
                qa("Учение о развитии, источником которого признается становление и разрешение противоречий – это:", "материализм,", "диалектика,", "метафизика.", "диалектика,");
                break;
            case 5:
                qa("Гносеология – это учение о:", "бытии;", "ценностях;", "познании;", "познании;");
                break;
            case 6:
                qa("Философское учение о ценностях – это:", "антропология.", "аксиология,", "онтология,", "аксиология,");
                break;
            case 7:
                qa("Начало формирования философского мышления в Индии связано с:", "брахманизмом;", "исламом", "буддизмом.", "брахманизмом;");
                break;
            default:
                break;
        }
    }

    function qa(question, answer_1, answer_2, answer_3) {
        document.querySelector(".question").innerHTML = question;
        document.querySelector(".question").style.visibility = "visible";
        document.querySelector(".answer_1").innerHTML = answer_1;
        document.querySelector(".answer_1").style.visibility = "visible";
        document.querySelector(".answer_2").innerHTML = answer_2;
        document.querySelector(".answer_2").style.visibility = "visible";
        document.querySelector(".answer_3").innerHTML = answer_3;
        document.querySelector(".answer_3").style.visibility = "visible";

        /*document.querySelector(".answer_1").addEventListener("click", (e) => {
            giveAnswer(document.querySelector(".answer_1").textContent, right_answer);
            console.log(document.querySelector(".answer_1").textContent);
        });
        document.querySelector(".answer_2").addEventListener("click", (e) => {
            giveAnswer(document.querySelector(".answer_2").textContent, right_answer);
            console.log(document.querySelector(".answer_2").textContent);
        });
        document.querySelector(".answer_3").addEventListener("click", (e) => {
            giveAnswer(document.querySelector(".answer_3").textContent, right_answer);
            console.log(document.querySelector(".answer_3").textContent);
        });*/
    }

    function hideQA() {
        document.querySelector(".question").style.visibility = "hidden";
        document.querySelector(".answer_1").style.visibility = "hidden";
        document.querySelector(".answer_2").style.visibility = "hidden";
        document.querySelector(".answer_3").style.visibility = "hidden";
    }



    window.onload = function() {
        function strPad() {
          console.log(this.innerHTML);
          answer = this.innerHTML
          if (answer == right_answer) {
            //document.querySelector(".computer-life-tracker").value -= 10;
            console.log("INCLUDES");
            hideQA();
        } else {
            console.log("Includes in else");
            document.querySelector(".user-life-tracker").value -= 3;
            hideQA();

            if (document.querySelector(".user-life-tracker").value <= 0 || document.querySelector(".computer-life-tracker").value <= 0) {
                document.getElementsByClassName('end')[0].style.visibility ='visible';
                document.getElementsByClassName('restart')[0].style.visibility ='visible';

                document.querySelector('.restart').addEventListener("click", () => {
                    document.getElementsByClassName('end')[0].style.visibility ='hidden';
                    document.getElementsByClassName('restart')[0].style.visibility ='hidden';
            
                    document.querySelector(".user-life-tracker").value = 100;
                    document.querySelector(".computer-life-tracker").value = 100;
                });
            }
        }
        }
      
        var bt = document.getElementsByClassName("btn");
        for (var i = 0; i < bt.length; i++) {
          bt[i].onclick = strPad;
        }
      }









    
    /*function receiver(val) {
        return function(){val.innerHTML};
    }*/
       
    function giveAnswer() {
        /*let buttons = document.getElementsByClassName("btn");
    if (buttons.length > 0) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = receiver(buttons[i]);
            console.log("here");
        }
    }*/
    console.log(answer);
        if (answer == right_answer) {
            //document.querySelector(".computer-life-tracker").value -= 10;
            console.log("INCLUDES");
            hideQA();
        } else {
            console.log("Includes in else");
            document.querySelector(".user-life-tracker").value -= 3;
            hideQA();

            if (document.querySelector(".user-life-tracker").value <= 0 || document.querySelector(".computer-life-tracker").value <= 0) {
                document.getElementsByClassName('end')[0].style.visibility ='visible';
                document.getElementsByClassName('restart')[0].style.visibility ='visible';

                document.querySelector('.restart').addEventListener("click", () => {
                    document.getElementsByClassName('end')[0].style.visibility ='hidden';
                    document.getElementsByClassName('restart')[0].style.visibility ='hidden';
            
                    document.querySelector(".user-life-tracker").value = 100;
                    document.querySelector(".computer-life-tracker").value = 100;
                });
            }
        }
    }