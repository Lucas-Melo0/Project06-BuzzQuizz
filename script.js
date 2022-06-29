const API_URL = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
let quizzData;
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
        allQuizzes.innerHTML += `<div id ="${quizzData[i].id} "class="all-quizzes-template" style="background-image: url('${quizzData[i].image}');">
        <p>${quizzData[i].title}</p>
    </div>`
    }
}

gettingQuizzData()