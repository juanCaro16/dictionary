import { dictionary } from "./dictionary.js";

console.log("holsssss");
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {

    const divMain = document.createElement('div')
    divMain.classList.add('div-principal')
    main.appendChild(divMain)

   
    const divWords = document.createElement('div')
    divWords.id = 'words-container'
    divMain.appendChild(divWords)

    const divArrows = document.createElement('div')
    divArrows.id = 'arrows-container'
    divMain.appendChild(divArrows)

    const exampleWords = document.createElement('div')
    exampleWords.id = 'examples'
    divMain.appendChild(exampleWords)


    //obtener las paginas de todas las categorías
    const allWords = Object.values(dictionary.categories).flat()

     // Variable contador para enumerar las palabras
     let numberAument = 1;

    //recorrer el array y crear y mostrar los elementos para cada palabra
    allWords.forEach(word => {

        const traductionWord = document.createElement('p')
        traductionWord.id = 'traduction-word'
        traductionWord.innerHTML = `<b> ${numberAument}. ${word.english} = ${word.spanish} </b>`
        divWords.appendChild(traductionWord)

        const arrow = document.createElement('p')
        arrow.innerHTML = `———————————————>`
        divArrows.appendChild(arrow)
        
        const examples = document.createElement('p')
        examples.innerHTML = `<b> ${numberAument}. Example: </b>  ${word.example}`
        exampleWords.appendChild(examples)
        numberAument++

    });



})