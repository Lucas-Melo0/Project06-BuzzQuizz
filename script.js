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