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

            document.querySelector(".computer-life-tracker").value -= 30;

            if (document.querySelector(".user-life-tracker").value <= 0 || document.querySelector(".computer-life-tracker").value <= 0) {
                document.getElementsByClassName('end')[0].style.visibility ='visible';
                //document.getElementsByClassName('restart')[0].style.visibility ='visible';

                //alert("ТЫ ПРЕОДОЛЕЛ МУДРЕЦА, СТРАННИК!")
                document.getElementsByClassName('winner')[0].style.visibility ='visible';
        
                document.querySelector('.restart').addEventListener("click", () => {
                    document.getElementsByClassName('end')[0].style.visibility ='hidden';
                    document.getElementsByClassName('restart')[0].style.visibility ='hidden';
        
                    document.querySelector(".user-life-tracker").value = 100;
                    document.querySelector(".computer-life-tracker").value = 100;
                });
            }

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
        let num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
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
                right_answer = "монизм"
                break;
            case 4:
                qa("Учение о развитии, источником которого признается становление и разрешение противоречий – это:", "материализм,", "диалектика,", "метафизика.", "диалектика,");
                right_answer = "диалектика,"
                break;
            case 5:
                qa("Гносеология – это учение о:", "бытии;", "ценностях;", "познании;", "познании;");
                right_answer = "познании;"
                break;
            case 6:
                qa("Философское учение о ценностях – это:", "антропология.", "аксиология,", "онтология,", "аксиология,");
                right_answer = "аксиология,"
                break;
            case 7:
                qa("Начало формирования философского мышления в Индии связано с:", "брахманизмом;", "исламом", "буддизмом.", "брахманизмом;");
                right_answer = "брахманизмом;"
                break;
            case 8:
                qa("Основные идеи брахманизма изложены в:", "Упанишадах;", "Бхагавадгите", "«Лунь юй»", "Упанишадах;");
                right_answer = "Упанишадах;"
                break;
            case 9:
                qa("Даосизм – это философия:", "Конфуция;", "Лао-цзы;", "Мо-цзы;", "Лао-цзы;");
                right_answer = "Лао-цзы;"
                break;
            case 10:
                qa("Категория «небо» относится к философии:", "брахманистов", "Мо-цзы.", "Конфуция", "Конфуция");
                right_answer = "Конфуция"
                break;
            case 11:
                qa("Категории философии Конфуция:", "недеяние;", "мокша;", "небо.", "небо.");
                right_answer = "небо."
                break;
            case 12:
                qa("Представители Милетской школы в античной философии выдвинули проблему:", "Бога", "первоначала", "человека", "первоначала");
                right_answer = "первоначала"
                break;
            case 13:
                qa("Кто из древнегреческих философов считал главной задачей философствования самопознание, пропагандируя лозунг 'Познай самого себя'?", "Сократ,", "Аристотель,", "Сенека", "Сократ,");
                right_answer = "Сократ,"
                break;
            case 14:
                qa("Огонь первоначалом сущего считал:", "Анаксимен", "Фалес", "Гераклит", "Гераклит");
                right_answer = "Гераклит"
                break;
            case 15:
                qa("Определите, позицию какой из философских школ эпохи эллинизма отражает следующее высказывание: 'Покорного судьба ведет, а непокорного - тащит'.", "эпикуреизм,", "скептицизм,", "стоицизм,", "стоицизм,");
                right_answer = "стоицизм,"
                break;
            case 16:
                qa("Представитель диалектической традиции в философии:", "Гераклит.", "Эпикур.", "Фалес.", "Гераклит.");
                right_answer = "Гераклит."
                break;
            case 17:
                qa("Автор высказывания: 'Человек есть мера всех вещей, существующих, что они существуют, несуществующих же, что они не существуют':", "Протагор,", "Гераклит,", "Фалес,", "Протагор,");
                right_answer = "Протагор,"
                break;
            case 18:
                qa("Представитель атомизма:", "Аристотель", "Демокрит,", "Платон,", "Демокрит,");
                right_answer = "Демокрит,"
                break;
            case 19:
                qa("Автор апорий 'Ахиллес и черепаха', 'Стрела', 'Дихотомия', 'Стадион':", "Зенон", "Сократ,", "Гераклит,", "Зенон");
                right_answer = "Зенон"
                break;
            case 20:
                qa("«Добродетель есть знание. Дурные поступки порождаются незнанием», - считал:", "Сократ", "Протагор", "Сенека", "Сократ");
                right_answer = "Сократ"
                break;
            case 21:
                qa("Согласно софистам, критерием, мерой истинности суждений следует считать:", "человека", "практику", "закон", "человека");
                right_answer = "человека"
                break;
            case 22:
                qa("Первая философия, предметом которой, согласно Аристотелю, являются умопостигаемые сверхчувственные сущности:", "диалектика", "метафизика", "теология", "метафизика");
                right_answer = "метафизика"
                break;
            case 23:
                qa("Античный философ, назвавший свой диалектический метод майевтикой:", "Сократ", "Протагор", "Сенека", "Сократ");
                right_answer = "Сократ"
                break;
            case 24:
                qa("Проект идеального государства, во главе которого должны стоять философы, разработал:", "Платон", "Протагор", "Эпикур", "Платон");
                right_answer = "Платон"
                break;
            case 25:
                qa("В основе теоцентризма – характерной черты средневековой философии – лежитпредставление о главенстве:", "космоса", "Бога", "природы", "Бога");
                right_answer = "Бога"
                break;
            case 26:
                qa("Одной из центральных для средневековой философии проблем была проблема соотношения веры и:", "разума", "чувства", "интуиции", "разума");
                right_answer = "разума"
                break;
            case 27:
                qa("Характерная черта средневековой философии:", "гуманизм", "теоцентризм", "космоцентризм", "теоцентризм");
                right_answer = "теоцентризм"
                break;
            case 28:
                qa("Определяющее влияние на развитие средневековой философии было оказано:", "искусством", "наукой", "религией", "религией");
                right_answer = "религией"
                break;
            case 29:
                qa("Для средневековой философии характерен:", "атеизм", "теизм", "деизм", "теизм");
                right_answer = "теизм"
                break;
            case 30:
                qa("Мыслитель эпохи Возрождения, считавший, что правитель должен сочетать в себе качества льва и лисицы:", "Макиавелли", "Бруно", "Кампанелла", "Макиавелли");
                right_answer = "Макиавелли"
                break;
            case 31:
                qa("Воззрения, направленные против притязаний церкви и духовенства на господство в обществе:", "антиклерикализм", "гуманизм", "сакрализация", "антиклерикализм");
                right_answer = "антиклерикализм"
                break;
            case 32:
                qa("Мыслитель эпохи Возрождения, нарисовавший образ идеального государства и поместивший его на остров Утопия:", "Бруно,", "Петрарка,", "Мор,", "Мор,");
                right_answer = "Мор,"
                break;
            case 33:
                qa("Мыслитель эпохи Возрождения, автор трактата «Государь»:", "Кузанский,", "Макиавелли,", "Бруно.", "Макиавелли,");
                right_answer = "Макиавелли,"
                break;
            case 34:
                qa("Характерная черта натурфилософии эпохи Возрождения:", "атеизм", "пантеизм", "теизм", "пантеизм");
                right_answer = "пантеизм"
                break;
            case 35:
                qa("Кто из древнегреческих философов считал главной задачей философствованиясамопознание, пропагандируя лозунг 'Познай самого себя'?", "Сократ", "Протагор", "Сенека", "Сократ");
                right_answer = "Сократ"
                break;
            case 36:
                qa("Создатель гелиоцентрической системы мира:", "Коперник", "Петрарка", "Кузанский", "Коперник");
                right_answer = "Коперник"
                break;
            case 37:
                qa("Для философской позиции Кузанского характерен:", "пантеизм,", "атеизм,", "деизм,", "пантеизм,");
                right_answer = "пантеизм,"
                break;
            case 38:
                qa("Хронологические рамки эпохи Возрождения:", "XIV – XVI в.в.,", "XI – XIII в.в.,", "XVI – XVIII в.в.", "XIV – XVI в.в.,");
                right_answer = "XIV – XVI в.в.,"
                break;
            case 39:
                qa("Философ XVII в., положивший в основу своего учения суждение: 'Мыслю, следовательно, существую':", "Декарт,", "Бэкон,", "Спиноза,", "Декарт,");
                right_answer = "Декарт,"
                break;
            case 40:
                qa("Философ Нового времени, развивший учение об индукции как основном и универсальном методе познания:", "Лейбниц", "Бэкон,", "Спиноза,", "Бэкон,");
                right_answer = "Бэкон,"
                break;
            case 41:
                qa("Представитель рационализма:", "Спиноза.", "Локк,", "Гоббс,", "Спиноза.");
                right_answer = "Спиноза."
                break;
            case 42:
                qa("Философская позиция, выраженная в суждении: 'Нет ничего в разуме, чего прежде не было бы в чувствах':", "номинализм,", "сенсуализм,", "рационализм,", "сенсуализм,");
                right_answer = "сенсуализм,"
                break;
            case 43:
                qa("Сторонник концепции общественного договора:", "Декарт,", "Спиноза,", "Гоббс,", "Гоббс,");
                right_answer = "Гоббс,"
                break;
            case 44:
                qa("Философ XVII в., рассматривавший естественное состояние общества как «войну всех против всех»:", "Монтескье", "Макиавелли", "Гоббс", "Гоббс");
                right_answer = "Гоббс"
                break;
            case 45:
                qa("Европейский мыслитель XVII в. - основоположник рационализма:", "Декарт,", "Бэкон,", "Лейбниц.", "Декарт,");
                right_answer = "Декарт,"
                break;
            case 46:
                qa("Европейский мыслитель XVII в. - основоположник эмпиризма:", "Лейбниц.", "Бэкон,", "Декарт,", "Бэкон,");
                right_answer = "Бэкон,"
                break;
            case 47:
                qa("Философ XVII в. - представитель дуализма:", "Лейбниц.", "Декарт", "Спиноза", "Декарт");
                right_answer = "Декарт"
                break;
            case 48:
                qa("Автор идеи разделения властей:", "Локк,", "Вольтер,", "Гольбах,", "Локк,");
                right_answer = "Локк,"
                break;
            case 49:
                qa("Вольтер являлся сторонником:", "атеизма", "деизма", "теизма", "деизма");
                right_answer = "деизма"
                break;
            case 50:
                qa("Французские просветители – Дидро, Ламетри, Гольбах – являлись сторонниками:", "материализма", "идеализма", "пантеизма", "материализма");
                right_answer = "материализма"
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
                document.querySelector(".user-life-tracker").value -= 30;
                hideQA();

                if (document.querySelector(".user-life-tracker").value <= 0 || document.querySelector(".computer-life-tracker").value <= 0) {
                    document.getElementsByClassName('end')[0].style.visibility ='visible';
                    //document.getElementsByClassName('restart')[0].style.visibility ='visible';

                    //alert("ПОВЕЗЕТ В СЛЕДУЮЩИЙ РАЗ(")
                    document.getElementsByClassName('looser')[0].style.visibility ='visible';
            
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