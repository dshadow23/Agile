let listItems = [],
    listContent = [];

const listElement = document.querySelector('#header__season');

// Call first API with geral infos
async function search(){
        let response = await fetch('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')
        response = await response.json();
        return response;
}

listItems = search();

// Base to call all itens from API Info

function cast (){
    listItems.then(res => res.Cast)
    .then(res => {
        for (var prop in res) {
            console.log(res[prop].Name)
        }
    });
    
}

function genres (){
    listItems.then(res => res.Genres)
    .then(res => {
        for (var prop in res) {
            console.log(res[prop].Title);
        }
    });
}
function imagem (){
    listItems.then(res => res.Images)
    .then(res => console.log(res.Background))
}
function synopis (){
    listItems.then(res => console.log(res.Synopsis))
}
function title (){
    listItems.then(res => console.log(res.Title))
}
function year (){
    listItems.then(res => console.log(res.Year))
}

// Call API with information about Episodes

async function content(){
    let response = await fetch('https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json')
    response = await response.json();
    return response;
}

listContent = content();

// Function to show and hide infos drom episodes

function initAccordion(accordionElem){
  
    //when panel is clicked, handlePanelClick is called.          
  
    function handlePanelClick(event){
        showPanel(event.currentTarget);

    }
  
  //Hide currentPanel and show new panel.  
    
    function showPanel(episode__info){
      //Hide current one. First time it will be null. 
       var expandedPanel = accordionElem.querySelector(".active");
       if (expandedPanel){
           expandedPanel.classList.remove("active");
       }
  
       //Show new one
       episode__info.classList.add("active");
  
    }
  
    var allPanelElems = accordionElem.querySelectorAll(".episode__info");
    for (var i = 0, len = allPanelElems.length; i < len; i++){
         allPanelElems[i].addEventListener("click", handlePanelClick);
    }
  }
  
  initAccordion(document.getElementById("season_choose"));
  initAccordion(document.getElementById("season_choose2"));



var t1 = document.getElementById("t1");
var season1 = document.getElementById("season_choose");
var t2 = document.getElementById("t2");
var season2 = document.getElementById("season_choose2");

t1.addEventListener("click", changeClass(season1));
t2.addEventListener("click", changeClass(season2));


function teste (){
    console.log("oi");
}


