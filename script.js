let numeroPerguntas;
let numeroNiveis;
let quizz = {};

function irTela2()
{
    document.querySelector('.tela1').classList.toggle('esconde');
    document.querySelector('.tela2').classList.toggle('esconde');
    let titulo = document.querySelector('input:nth-child(1)').value
    let imagem = document.querySelector('input:nth-child(2)').value
    numeroPerguntas = document.querySelector('input:nth-child(3)').value
    numeroNiveis = document.querySelector('input:nth-child(4)').value

    imprimePerguntas();

    quizz = {
            title: titulo,
            image: imagem,
            questions: [],
            levels: []
    }
}
function irTela3()
{
    document.querySelector('.tela2').classList.toggle('esconde');
    document.querySelector('.tela3').classList.toggle('esconde');
    
   
    pergunta(numeroPerguntas);
    
    imprimeNiveis();
}
function pergunta(indice)
{
    for(let i = 1 ; i <= numeroPerguntas ; i++){
        let pergunta = document.querySelector('.caixa'+i+' '+'input:nth-child(1)').value;
        let cor = document.querySelector('.caixa'+i+' '+'input:nth-child(2)').value;
        let correta = document.querySelector('.caixa'+i+' '+'input:nth-child(3)').value;
        let imgCorreta = document.querySelector('.caixa'+i+' '+'input:nth-child(4)').value;
        let incorreta1 = document.querySelector('.caixa'+i+' '+'input:nth-child(5)').value;
        let imgIncorreta1 = document.querySelector('.caixa'+i+' '+'input:nth-child(6)').value;
        let incorreta2 = document.querySelector('.caixa'+i+' '+'input:nth-child(7)').value;
        let imgIncorreta2 = document.querySelector('.caixa'+i+' '+'input:nth-child(8)').value;
        let incorreta3 = document.querySelector('.caixa'+i+' '+'input:nth-child(9)').value;
        let imgIncorreta3 = document.querySelector('.caixa'+i+' '+'input:nth-child(10)').value;

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
                },
            ]
    }
}
function nivel(indice)
{
    for(let i = 1 ; i <= numeroNiveis ; i++){

        let titulo = document.querySelector('.box'+i+' '+'input:nth-child(1)').value;
        let acerto = document.querySelector('.box'+i+' '+'input:nth-child(2)').value;
        let imgNivel = document.querySelector('.box'+i+' '+'input:nth-child(3)').value;
        let descricao = document.querySelector('.box'+i+' '+'input:nth-child(4)').value;

        quizz.levels[i-1] = 
        {
            title: titulo,
            image: imgNivel,
            text: descricao,
            minValue: acerto
        }
    }
}
function imprimePerguntas()
{
    const lista = document.querySelector('.tela2');
    
    lista.innerHTML = `crie suas perguntas       
            <div class="pergunta1 p caixa1">
                Pergunta 1
                <input type="text" placeholder="Texto da pergunta"class="teclado"/>
                <input type="text" placeholder="Cor de fundo da pergunta"class="teclado"/>
                Resposta correta
                <input type="text" placeholder="Resposta correta"class="teclado"/>
                <input type="text" placeholder="URL da imagem"class="teclado"/>
                respostas incorretas
                <input type="text" placeholder="Resposta incorreta 1"class="teclado"/>
                <input type="text" placeholder="URL da imagem 1"class="teclado"/>
                <input type="text" placeholder="Resposta incorreta 2"class="teclado"/>
                <input type="text" placeholder="URL da imagem 2"class="teclado"/>
                <input type="text" placeholder="Resposta incorreta 3"class="teclado"/>
                <input type="text" placeholder="URL da imagem 3"class="teclado"/>
            </div>
         `;
    for(let i = 1 ; i < numeroPerguntas ; i++)
    {
        lista.innerHTML += `
          <div onClick="abreDivPergunta(this)" class="caixa${i+1}">
            <div class="p${i+1} px">
                <span>Pergunta</span> <span>${i+1}</span>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="p esconde">
                Pergunta ${i+1}
                <input type="text" placeholder="Texto da pergunta"class="teclado"/>
                <input type="text" placeholder="Cor de fundo da pergunta"class="teclado"/>
                Resposta correta
                <input type="text" placeholder="Resposta correta"class="teclado"/>
                <input type="text" placeholder="URL da imagem"class="teclado"/>
                respostas incorretas
                <input type="text" placeholder="Resposta incorreta 1"class="teclado"/>
                <input type="text" placeholder="URL da imagem 1"class="teclado"/>
                <input type="text" placeholder="Resposta incorreta 2"class="teclado"/>
                <input type="text" placeholder="URL da imagem 2"class="teclado"/>
                <input type="text" placeholder="Resposta incorreta 3"class="teclado"/>
                <input type="text" placeholder="URL da imagem 3"class="teclado"/>
            </div>
        </div>
         `;
    }
    lista.innerHTML += `
        <div onclick="irTela3()">
            Prosseguir para criar níveis
        </div>
    `;
}
function imprimeNiveis()
{
    const lista = document.querySelector('.tela3');
    lista.innerHTML = `Agora, decida os níveis       
            <div class="nivel1 p box1">
                Nível 1
                <input type="text" placeholder="Título do nível"class="teclado"/>
                <input type="text" placeholder="% de acerto mínima"class="teclado"/>
                <input type="text" placeholder="URL da imagem do nível"class="teclado"/>
                <input type="text" placeholder="Descrição do nível" class="teclado"/>
            </div>
         `;
    for(let i = 1 ; i < numeroNiveis ; i++)
    {
        lista.innerHTML += `
          <div onClick="abreDivPergunta(this)" class="box${i+1}">
            <div class="p${i+1} px">
                <span>Pergunta</span> <span>${i+1}</span>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="p esconde">
                Nível ${i+1}
                <input type="text" placeholder="Título do nível"class="teclado"/>
                <input type="text" placeholder="% de acerto mínima"class="teclado"/>
                <input type="text" placeholder="URL da imagem do nível"class="teclado"/>
                <input type="text" placeholder="Descrição do nível"class="teclado"/>  
            </div>
        </div>
         `;
    }
    lista.innerHTML += `
        <div onclick="irTela4()">
            Finalizar Quizz
        </div>
    `;
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
function irTela4()
{
    document.querySelector('.tela3').classList.toggle('esconde');
    document.querySelector('.tela4').classList.toggle('esconde');

    nivel(numeroNiveis);

    const pronto = document.querySelector('.tela4');
    pronto.innerHTML = `
        Seu quizz está pronto!
        <img src="${quizz.image}" alt="">
        <p>${quizz.title}</p>
        <div class="acessar">
        Acessar Quizz
        </div>
        <div class="home">
        Voltar para home

    `;
}
const API_URL = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
let quizzData;
let index = 0;

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
    renderQuizzData()
}
function renderQuizzData(){
    let allQuizzes = document.querySelector(".all-quizzes .template-container")
    for (i = 0; i < quizzData.length; i++){
        allQuizzes.innerHTML += `<div onclick="openingQuizzPage(this)" id ="${quizzData[i].id} "class="all-quizzes-template" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quizzData[i].image}');">
        <p>${quizzData[i].title}</p>
    </div>`
    }
}

gettingQuizzData()

function openingQuizzPage(element){
    let selectedQuizzId = Number(element.getAttribute("id"))
    for (index = 0; index < quizzData.length; index++){
        if (selectedQuizzId === quizzData[index].id){
            hideHomePage()
            renderQuizzPage()
        }
    }
}

function renderQuizzPage(){
    let quizzPage = document.querySelector(".quizz-page")
    quizzPage.innerHTML = `<div style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quizzData[index].image}');"class="banner">
    <p>${quizzData[index].title}</p></div>`
}