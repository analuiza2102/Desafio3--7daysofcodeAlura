//select title-salutation
const titleSalutation = document.querySelectorAll('.title-salutation');  // seleciona todos os elementos com a classe title-salutation
// select title-game-questions 
const titleGameQuestion = document.querySelectorAll('.title-game-questions'); // seleciona todos os elementos com a classe title-game-questions
//buttons 
const buttons = document.querySelectorAll('.button-game'); // seleciona todos os elementos com a classe button-game
//stages
const stage = document.querySelectorAll('form'); // seleciona todos os elementos com a tag form
//othersTec
const othersTec = document.querySelector('#others-tec'); // seleciona o elemento com o id others-tec
let othersTecLeg = '';

//GetNameUser and Execute
const nameUser = prompt('Qual o seu nome?'); //pega o nome do usuario
titleSalutation[0].innerHTML = `Olá, ${nameUser}!`; //muda o texto do titulo
//important execution of the game //execucao do jogo

//next-question
next = () => {   //funcao next
  
    for (let i = 0; i < buttons.length; i++) { //o loop dos botoes
        buttons[i].addEventListener('click', () => { //o evento de click
            const hideForm = () => {stage[i].classList.add('hide');} //funcao para esconder o form
            const showNextForm = () => {stage[i+1].classList.remove('hide');} //funcao para mostrar o proximo form
            const showNextNextForm = () => {stage[i+2].classList.remove('hide');} //funcao para mostrar o proximo form
            //stage1 - inicio
            if (i == 0) { //se o i for igual a 0
                hideForm(); //esconde o form
                showNextForm(); //mostra o proximo form
            }
            //stage2 - front-end ou back-end
            if (i == 1) { //se o i for igual a 1
                if (document.querySelector('#front-end').checked) { //se o radio button front-end estiver selecionado
                    hideForm(); //esconde o form
                    showNextForm(); //mostra o proximo form
                }
                else if (document.querySelector('#back-end').checked) { //se o radio button back-end estiver selecionado
                    hideForm(); //esconde o form
                    showNextNextForm(); //mostra o proximo form
                }
                else { //se nenhum dos dois estiver selecionado
                    alert('Selecione uma opção!'); //alerta
                }
            }
            //stage3-front-end - react ou vue
            if (i == 2) { //se o i for igual a 2
                if (document.querySelector('#react').checked) { //se o radio button react estiver selecionado
                    hideForm(); //esconde o form
                    showNextNextForm(); //mostra o proximo form
                   
                }
                else if (document.querySelector('#vue').checked) {  //se o radio button vue estiver selecionado
                    hideForm(); //esconde o form
                    showNextNextForm(); //mostra o proximo form
                }
                else { //se nenhum dos dois estiver selecionado
                    alert('Selecione uma opção!'); //alerta
                }
            }
            //stage3-back-end
            if (i == 3) { //se o i for igual a 3
                if (document.querySelector('#c').checked) { //se o radio button c estiver selecionado
                    hideForm();
                    showNextForm();
                   
                }
                else if (document.querySelector('#java').checked) { //se o radio button java estiver selecionado
                    hideForm();
                    showNextForm();
                }
                else {
                    alert('Selecione uma opção!'); //alerta
                }
            }
            //stage4
            if (i == 4) { //se o i for igual a 4
                if (document.querySelector('#especializar').checked) { //se o radio button especializar estiver selecionado
                    hideForm();
                    showNextForm();
                    titleGameQuestion[i+1].innerHTML = `Você fez uma ótima escolha ao optar por se especializar na área!`; //muda o texto do titulo
                }
                else if (document.querySelector('#fullstack').checked) { //se o radio button fullstack estiver selecionado
                    hideForm();
                    showNextForm();
                    titleGameQuestion[i+1].innerHTML = `Você fez uma ótima escolha ao optar por se tonar um FullStack!`;    //muda o texto do titulo
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage5
            if (i == 5) { //se o i for igual a 5
                hideForm(); 
                showNextForm();
            }
            //stage6
            if (i == 6) {
                if (document.querySelector('#yes-stg-6').checked) { //se o radio button yes estiver selecionado
                    hideForm();
                    showNextNextForm();
                }
                else if (document.querySelector('#no-stg-6').checked) { //se o radio button no estiver selecionado
                    hideForm();
                    showNextForm();
                    titleSalutation[1].innerHTML = `Está bem ${nameUser}!` //muda o texto do titulo
                    buttons[i+1].style.display = 'none'; //esconde o botao
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage7-no
            if (i == 7) {
                //endGame - hideForm
            }
            //stage7-yes-loop
            if (i == 8) { //se o i for igual a 8
                othersTecLeg += othersTec.value + ', ';
                document.querySelector('.othersTecLeg').innerHTML = othersTecLeg; //mostra o valor do input
                document.querySelector('.title-all-tec').innerHTML = `Lista de tecnologias a serem aprendidas:`; //muda o texto do titulo
                hideForm();
                showNextForm();
            }
            //stage8-loop-or-end
            if (i == 9) {
                if (document.querySelector('#yes-stg-8').checked) { //se o radio button yes estiver selecionado
                    hideForm(); //esconde o form 
                    stage[i-1].classList.remove('hide'); //mostra o form anterior
                    othersTec.value = ''; //limpa o input
                }
                else if (document.querySelector('#no-stg-8').checked) { //se o radio button no estiver selecionado
                    hideForm();

                    stage[7].classList.remove('hide'); //mostra o form anterior
                    titleSalutation[1].innerHTML = `Está bem, ${nameUser}!` //muda o texto do titulo
                    buttons[7].style.display = 'none'; //esconde o botao
                }
                else { //se nenhum dos dois estiver selecionado
                    alert('Selecione uma opção!'); //alerta
                }
            }
        })
    }
   
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//Execute
next(); //executa a funcao next