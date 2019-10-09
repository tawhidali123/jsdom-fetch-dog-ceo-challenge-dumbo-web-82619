
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl).then(res => res.json()).then(answers => {
    // console.log(answers)
    let section = document.querySelector("#dog-image-container");
    let holders = answers.message
    
    for(let answer of holders) {
        section.innerHTML += `<img src="${answer}" />`
    }
})





const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let section = document.querySelector("#dog-breeds");

fetch(breedUrl).then(res => res.json()).then(answers => {
    console.log(answers)

    let holders = Object.keys(answers.message)
    
    for(let answer of holders) {
        section.innerHTML += `<li>${answer} </li>`
    }

})

section.addEventListener("click", changeColor)

function changeColor(evt){
    if(evt.target.tagName === "LI"){
        evt.target.classList.add("red");
    }
}








