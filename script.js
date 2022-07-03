let numeroPerguntas;
let numeroNiveis;
let quizz = {};
let quizzCriado = {};
let ids = [];
let verificador = 0;
let string = [];
let serializado;
let criado;

function irTela1()
{
    document.querySelector('.page-content').classList.toggle('esconde');
    document.querySelector('.criarQuizz').classList.toggle('esconde');

    imprimeTela1();

}
function irTela2()
{

    let titulo = document.querySelector('input:nth-child(1)').value
    let imagem = document.querySelector('input:nth-child(3)').value
    numeroPerguntas = document.querySelector('input:nth-child(5)').value
    numeroNiveis = document.querySelector('input:nth-child(7)').value

    if(titulo.length < 20 || titulo.length > 65)
        {
            document.querySelector('input:nth-child(1)').classList.add('holderFundo');
            document.querySelector('.inputs div:nth-child(2)').classList.remove('esconde');        
        }
        else if(verificaURL(imagem) === false)
        {
            document.querySelector('input:nth-child(3)').classList.add('holderFundo');
            document.querySelector('.inputs div:nth-child(4)').classList.remove('esconde');
        }
        else if(numeroPerguntas < 3)
        {
            document.querySelector('input:nth-child(5)').classList.add('holderFundo');
            document.querySelector('.inputs div:nth-child(6)').classList.remove('esconde');
        }
        else if(numeroNiveis < 2)
        {
            document.querySelector('input:nth-child(7)').classList.add('holderFundo');
            document.querySelector('.inputs div:nth-child(8)').classList.remove('esconde');
        }
        else 
        {
            document.querySelector('.tela1').classList.toggle('esconde');
            document.querySelector('.tela2').classList.toggle('esconde');

            imprimePerguntas();

            quizz = {
                    title: titulo,
                    image: imagem,
                    questions: [],
                    levels: []
                }
        }
    
}
function irTela3()
{ 
    pergunta(numeroPerguntas);
    if(numeroPerguntas%2 === 0)
    {
        document.querySelector('.tela2').classList.toggle('esconde');
        document.querySelector('.tela3').classList.toggle('esconde');
    }
    imprimeNiveis();
}
function irTela4()
{
    nivel(numeroNiveis);
    if(numeroNiveis%2 === 0 && verificador === numeroNiveis)
    {
        document.querySelector('.tela3').classList.toggle('esconde');
        document.querySelector('.tela4').classList.toggle('esconde');
    }
    postQuizz();

    const pronto = document.querySelector('.tela4');
    pronto.innerHTML = `
        <p>Seu quizz está pronto!</p>
        <img src="${quizz.image}" alt="">
        <h1>${quizz.title}</h1>
        <div class="botaoNext">
        Acessar Quizz
        </div>
        <div class="home">
        Voltar para home
        </div>
    `;
}
function imprimeTela1()
{
    const lista2 = document.querySelector('.tela1');
    lista2.innerHTML = `
        <p>Comece pelo começo</p>
        <div class="inputs">
            <input type="text" placeholder="Título do quizz"/>
            <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
            <input type="text" placeholder="Url da imagem do seu quizz"/>
            <div class="erro esconde"><p>URL da imagem incorreta!</p></div>
            <input type="text" placeholder="Quantidade de perguntas do quizz"/>
            <div class="erro esconde"><p>Número mínimo de Perguntas: 3!</p></div>
            <input type="text" placeholder="Quantidade de níveis do quizz"/>
            <div class="erro esconde"><p>Número mínimo de Níveis: 2!</p></div>
        </div>
        <div onclick="irTela2()" class="botaoNext">
            Prosseguir para criar perguntas
        </div>
    `;

}
function imprimePerguntas()
{
    const lista = document.querySelector('.tela2');
    
    lista.innerHTML = `<p>Crie suas perguntas</p>       
            <div class="pergunta 1 inputs caixa1">
                <h1>Pergunta 1</h1>
                <input type="text" placeholder="Texto da pergunta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <h1>Resposta correta</h1>
                <input type="text" placeholder="Resposta correta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <h1>Respostas incorretas</h1>
                <input type="text" placeholder="Resposta incorreta 1"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 1"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Resposta incorreta 2"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 2"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Resposta incorreta 3"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 3"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
            </div>
         `;
    for(let i = 1 ; i < numeroPerguntas ; i++)
    {
        lista.innerHTML += `
          <div onClick="abreDivPergunta(this)" class="caixa${i+1}">
            <div class="px">
                <h1>Pergunta ${i+1}</h1>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputs esconde">
                <h1>Pergunta ${i+1}</h1>
                
                <input type="text" placeholder="Texto da pergunta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <h1>Resposta correta</h1>
                <input type="text" placeholder="Resposta correta"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <h1>Respostas incorretas</h1>
                <input type="text" placeholder="Resposta incorreta 1"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 1"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Resposta incorreta 2"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 2"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="Resposta incorreta 3"/>
                <div class="erro esconde"><p>Seu título deve ter entre 20 e 65 caracteres!</p></div>
                <input type="text" placeholder="URL da imagem 3"/>
            
            </div>
        </div>
         `;
    }
    lista.innerHTML += `
        <div onclick="irTela3()" class="botaoNext">
            Prosseguir para criar níveis
        </div>
    `;
}
function imprimeNiveis()
{
    
    const lista = document.querySelector('.tela3');
    lista.innerHTML = `<p>Agora, decida os níveis</p>       
            <div class="inputs p box1">
                <h1>Nível 1</h1>
                <input type="text" placeholder="Título do nível"/>
                <input type="text" placeholder="% de acerto mínima"/>
                <input type="text" placeholder="URL da imagem do nível"/>
                <input type="text" placeholder="Descrição do nível" />
            </div>
         `;
    for(let i = 1 ; i < numeroNiveis ; i++)
    {
        lista.innerHTML += `
          <div onClick="abreDivPergunta(this)" class="box${i+1}">
            <div class="p${i+1} px">
                <h1>Pergunta ${i+1}</h1>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputs esconde">
                <h1>Nível ${i+1}</h1>
                <input type="text" placeholder="Título do nível"/>
                <input type="text" placeholder="% de acerto mínima"/>
                <input type="text" placeholder="URL da imagem do nível"/>
                <input type="text" placeholder="Descrição do nível"/>  
            </div>
        </div>
         `;
    }
    lista.innerHTML += `
        <div onclick="irTela4()" class="botaoNext">
            Finalizar Quizz
        </div>
    `;
}
function pergunta(indice)
{
    for(let i = 1 ; i <= numeroPerguntas ; i++){
        let pergunta = document.querySelector('.caixa'+i+' '+'input:nth-child(2)').value;
        let cor = document.querySelector('.caixa'+i+' '+'input:nth-child(3)').value;
        let correta = document.querySelector('.caixa'+i+' '+'input:nth-child(5)').value;
        let imgCorreta = document.querySelector('.caixa'+i+' '+'input:nth-child(6)').value;
        let incorreta1 = document.querySelector('.caixa'+i+' '+'input:nth-child(8)').value;
        let imgIncorreta1 = document.querySelector('.caixa'+i+' '+'input:nth-child(9)').value;
        let incorreta2 = document.querySelector('.caixa'+i+' '+'input:nth-child(10)').value;
        let imgIncorreta2 = document.querySelector('.caixa'+i+' '+'input:nth-child(11)').value;
        let incorreta3 = document.querySelector('.caixa'+i+' '+'input:nth-child(12)').value;
        let imgIncorreta3 = document.querySelector('.caixa'+i+' '+'input:nth-child(13)').value;

        if(pergunta.length < 20)
        {
            alert("Sua pergunta deve ter mais de 20 caracteres!");        
        }
        else if(verificaURL(imgCorreta) === false || 
                verificaURL(imgIncorreta1) === false ||
                verificaURL(imgIncorreta2) === false ||
                verificaURL(imgIncorreta3) === false)
        {
            alert("URL da imagem incorreta");
        }
        else if(   correta === '' || 
                incorreta1 === '' ||
                incorreta2 === '' ||
                incorreta3 === '')
        {
            alert("Preencha os campos de pergunta");
        }
        else if(verificaCor(cor)=== false)
        {
            alert(
                `Sua cor começar em "#", seguida de 6 caracteres hexadecimais, ou seja:\n\
                números ou letras de A a F`);
        }
        else{
            document.querySelector('.tela2').classList.toggle('esconde');
            document.querySelector('.tela3').classList.toggle('esconde');

            quizz.questions[i-1] = 
            {
                title: pergunta,
                color: cor,
                answers: []
            }
            quizz.questions[i-1].answers = [ 
                    {
                        text: correta,
                        image: imgCorreta,
                        isCorrectAnswer: true
                    },
                    {
                        text: incorreta1,
                        image: imgIncorreta1,
                        isCorrectAnswer: false
                    },
                    {
                        text: incorreta2,
                        image: imgIncorreta2,
                        isCorrectAnswer: false
                    },
                    {
                        text: incorreta3,
                        image: imgIncorreta3,
                        isCorrectAnswer: false
                    },]
        }
    }
}
function abreDivPergunta(elemento)
{
    elemento.classList.toggle('teste');
    const menu = document.querySelector('.teste .px');
    const perguntas = document.querySelector('.teste .esconde');
    menu.classList.toggle('esconde');
    perguntas.classList.toggle('esconde');
    elemento.classList.toggle('teste');
}
function nivel(indice)
{
    let aux = 0;
    for(let i = 1 ; i <= numeroNiveis ; i++){

        let titulo = document.querySelector('.box'+i+' '+'input:nth-child(2)').value;
        let acerto = document.querySelector('.box'+i+' '+'input:nth-child(3)').value;
        let imgNivel = document.querySelector('.box'+i+' '+'input:nth-child(4)').value;
        let descricao = document.querySelector('.box'+i+' '+'input:nth-child(5)').value;

        
        if(titulo.length < 10)
        {
            alert("Seu título deve ter mais de 10 caracteres!");        
        }
        else if(descricao.length < 30)
        {
            alert("Sua descrição deve ter mais de 30 caracteres!");        
        }
        else if(acerto < 0 || acerto > 100 || acerto === ''|| acerto === NaN)
        {
            alert("Sua % deve ser um valor entre 0 e 100");   
        }
        else if(acerto != 0)
        {
            {
                //verificador++;
                //document.querySelector('.tela3').classList.toggle('esconde');
                //document.querySelector('.tela4').classList.toggle('esconde');
                quizz.levels[i-1] = 
                {
                    title: titulo,
                    image: imgNivel,
                    text: descricao,
                    minValue: acerto
                }
            }

            aux++;
            console.log(aux);
            if(aux == numeroNiveis)
            {
               alert("Pelo menos um de seus níveis deve ter 0%");
               aux = 0;
            }
        }  
        else if(verificaURL(imgNivel) === false)
        {
            alert("URL da imagem incorreta");
        }
        else
        {
            verificador++;
            document.querySelector('.tela3').classList.toggle('esconde');
            document.querySelector('.tela4').classList.toggle('esconde');
            quizz.levels[i-1] = 
            {
                title: titulo,
                image: imgNivel,
                text: descricao,
                minValue: acerto
            }}}}
function verificaCor(string)
{
    if(string.length !== 7)
    {
        return false;
    }
    else if(string[0] === '#')
    {
        for(let i = 1 ; i < 7 ; i++)
        {
            if(string[i].keycode < 48 || string[i].keycode > 70)
            {
                return false;
            }
        }
        return true; 
    }
else return false;
}
function verificaURL(string)
{
    try
    {
        let a = new URL(string);
        return true;
    }
    catch(aaa)
    {  
        return false;
    }
}
function postQuizz()
{
    const promisse1 = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', quizz);
    promisse1.catch(deuErro);
    promisse1.then(recebeMeuQuizz);
}
function deuErro()
{
    console.log('deu alguma coisa errada ai mano');
}
function recebeMeuQuizz(resposta)
{
    quizzCriado = resposta.data;
    ids = [];
    criado = window.localStorage.getItem('meuQuizz');
    if(criado === null)
    {
        ids[0] = quizzCriado.id;
        criado = JSON.stringify(ids);
        window.localStorage.setItem('meuQuizz', criado);
        console.log(criado);
    }
    else
    {   
        criado = JSON.parse(criado);
        criado[criado.length] = quizzCriado.id;
        serializado = JSON.stringify(criado); 
        window.localStorage.setItem('meuQuizz', serializado); 
        console.log(serializado);
    }   
}


const API_URL = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes";
let quizzData;
let index = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
let accuracyRate = 0;
let levelIndex = 0;



function openQuizzCreatorPage (){
    hideHomePage();
    // Function Render Quizz Creator Page

}
function hideHomePage (){
    let homePage = document.querySelector(".home-page")
    homePage.classList.add("hidden")
}
function gettingQuizzData(){
    let requestData = axios.get(API_URL)
    requestData.catch(errorGettingData)
    requestData.then(storageQuizzData)

}
function errorGettingData(response){
    console.log(response)
}
function storageQuizzData(response){
    quizzData = response.data
    renderAllQuizzesData()
}
function renderAllQuizzesData(){
    let allQuizzes = document.querySelector(".all-quizzes .template-container")
    for (i = 0; i < quizzData.length; i++){
        allQuizzes.innerHTML += `<div onclick="openingQuizzPage(this)" id ="${quizzData[i].id} "class="all-quizzes-template" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quizzData[i].image}');">
        <p>${quizzData[i].title}</p>
        <div class="delete">
        <ion-icon name="create-outline"></ion-icon>
        <ion-icon name="trash-outline"></ion-icon>
    </div>
    </div>`
    }
}
gettingQuizzData()

function openingQuizzPage(element){
    let selectedQuizzId = Number(element.getAttribute("id"))
    for (index = 0; index < quizzData.length; index++){
        if (selectedQuizzId === quizzData[index].id){
            globalIndex = index;
            hideHomePage()
            renderQuizzPageBanner()
            renderQuizzPageQuestions()
        }
    }
}

function renderQuizzPageBanner(){
    let quizzPage = document.querySelector(".quizz-page")
    console.log(quizzData[index],quizzData,index)
    quizzPage.innerHTML += `<div style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quizzData[index].image}');"class="banner">
    <p>${quizzData[index].title}</p></div>`
}
function renderQuizzPageQuestions(){ 
    
    let questionsData = quizzData[index].questions
    let quizzPage = document.querySelector(".quizz-page")
        questionsData.map((question)=>{
            quizzPage.innerHTML += `<div class="question-container">
        <p style ="background-color:${question.color} ; "class="question-title">${question.title}</p>
        <div class="question-template">
        <div onclick="changeAnswerTextColor(this)" class="options ${question.answers[0].isCorrectAnswer}">
                        <img src ="${question.answers[0].image}">
                        <p class="answer-text">${question.answers[0].text}</p>
                    </div>
                    <div onclick="changeAnswerTextColor(this)" class="options ${question.answers[1].isCorrectAnswer}">
                        <img src ="${question.answers[1].image}">
                        <p class="answer-text">${question.answers[1].text}</p>
                    </div>
                    <div onclick="changeAnswerTextColor(this)" class="options ${question.answers[2].isCorrectAnswer}">
                        <img src ="${question.answers[2].image}">
                        <p class="answer-text ">${question.answers[2].text}</p>
                    </div>
                    <div onclick="changeAnswerTextColor(this)" class="options ${question.answers[3].isCorrectAnswer}">
                        <img src ="${question.answers[3].image}">
                        <p class="answer-text">${question.answers[3].text}</p>
                    </div>` 
        })
        quizzPage.innerHTML+=`<div></div>` 
        
    
}
function renderQuizzLevel(){
    let quizzPage = document.querySelector(".quizz-page")
    quizzPage.innerHTML += `<div class="level-container ">
    <p class="level-title">${accuracyRate}%:${quizzData[globalIndex].levels[levelIndex].title}</p>
    <div class="level-template">
        <img src ="${quizzData[globalIndex].levels[levelIndex].image}">
        <p>${quizzData[globalIndex].levels[levelIndex].text}</p>
    </div>
    </div>
    <div class="quizz-page-end">
                <button class="restart-quizz">Reiniciar quizz</button>
                <button onclick="backToHome()" class="home">Voltar para home</button>
            </div>`

}
function changeAnswerTextColor(element){
    let elementClassList = element.classList.value
    let parentElement = element.parentElement;
    let wrongAnswers = parentElement.querySelectorAll(".options.false p")
    if (elementClassList === "options true"){
        element.querySelector("p").classList.add("green")
        wrongAnswers.forEach(falseOptions => {falseOptions.classList.add("red")
    });
    }
    else if (elementClassList === "options false"){
        parentElement.querySelector(".options.true p").classList.add("green")
        wrongAnswers.forEach(falseOptions => {falseOptions.classList.add("red")
    });
    }
    addOpacityOnNotSelected(element)
}
function addOpacityOnNotSelected (element){
    
    let clickedQuestion = element.parentElement
    let opacityStatus = clickedQuestion.querySelectorAll(".options img.opacity")
    if (opacityStatus.length === 0){
        let answersImgs = clickedQuestion.querySelectorAll(".options img")
        answersImgs.forEach(img => {img.classList.add("opacity")})
        element.querySelector("img").classList.remove("opacity");
        setTimeout(function (){scrollQuestionIntoView(element)},2000);
        if(element.classList[1] === "true"){
            correctAnswer ++;
        }
        else if(element.classList[1] === "false"){
            incorrectAnswer++;
        }
       
    }
    levelCalculator()
    checkForLastQuestion()
    
    
    
    function checkForLastQuestion(){
        let lastQuestion = clickedQuestion.parentElement.parentElement.lastElementChild.previousElementSibling.lastElementChild
        if(lastQuestion === clickedQuestion){
            console.log("penultimo elemento")
            renderQuizzLevel()
            setTimeout(function (){scrollLevelIntoView()},2000)
        }    
    }

}
function scrollQuestionIntoView(element){
    let questionContainer = element.parentElement.parentElement
    questionContainer.nextSibling.scrollIntoView()
}
function scrollLevelIntoView(){
    let quizzPage = document.querySelector(".quizz-page")
    quizzPage.scrollIntoView(false)
}
function levelCalculator(){
    accuracyRate = Math.round(correctAnswer/(incorrectAnswer+correctAnswer)*100);
    console.log(accuracyRate)
    console.log(quizzData[globalIndex].levels)
    let levelPorcentages = quizzData[globalIndex].levels.map(levels => levels.minValue)
    let highestLevelIndex = levelPorcentages.indexOf(Math.max(...levelPorcentages))
    let lowestLevelIndex = levelPorcentages.indexOf(Math.min(...levelPorcentages))
    if (accuracyRate >= levelPorcentages[highestLevelIndex]){
        levelIndex = highestLevelIndex;
    }
    else {
        levelIndex = lowestLevelIndex;
    }
    console.log(levelIndex)
}
function backToHome (){
    window.location.reload()
}
    
   


function removeLoaderAndShowPage(){
    let pageContent = document.querySelector(".page-content");
    pageContent.classList.remove("hidden");
    let loader = document.querySelector(".loader");
    loader.classList.add("hidden")
}
showLoaderAndHidePage()
///aaaaaaaaaaaa
    

