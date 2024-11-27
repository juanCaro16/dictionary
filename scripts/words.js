import { dictionary } from "./dictionary.js";

const main = document.querySelector('main')

const allWords = Object.values(dictionary.categories).flat()

//funcion para crear los elementos que contienen las palabras
function createElements() {
    //div principal del main
    const divMain = document.createElement('div')
    divMain.classList.add('div-main')
    main.appendChild(divMain)   
    //div que contiene la traduccion
    const divWords = document.createElement('div')
    divWords.id = 'words-container'
    divMain.appendChild(divWords)
    //div que contiene las flechas
    const divArrows = document.createElement('div')
    divArrows.id = 'arrows-container'
    divMain.appendChild(divArrows)
    //div que contiene los ejemplos
    const exampleWords = document.createElement('div')
    exampleWords.id = 'examples'
    divMain.appendChild(exampleWords)

    const divFilters = document.createElement('div')
    divFilters.id = 'div-filters'
    main.appendChild(divFilters)

    renderOptions()
}

//funcion para mostrar las palabras con su respectiva traduccion y ejemplo
document.addEventListener('DOMContentLoaded', showWords)

// funcion para mostrar la traduccion, las flechas y el ejemplo
function showWords() {
    createElements();

    //arreglo general de todos los arreglos
    
    let numberAument = 1;
    allWords.forEach(word => {

        const divWords = document.getElementById('words-container')
        const divArrows = document.getElementById('arrows-container')
        const exampleWords = document.getElementById('examples')

        const traductionword = document.createElement('p')
        traductionword.textContent = `${numberAument}. ${word.english} = ${word.spanish}`
        divWords.appendChild(traductionword)
        numberAument++
        
        const arrow = document.createElement('p')
        arrow.textContent = '——————————>'
        divArrows.appendChild(arrow)

        const example = document.createElement('p')
        example.textContent = `Ejemplo: ${word.example}`
        exampleWords.appendChild(example)
    })
  
}

//funcion para crear los inputs de tipo radio para mostrar las categorías
function createRadios(categorie) {
    const divFilters = document.getElementById('div-filters')

    const divInput = document.createElement('div')
    divFilters.appendChild(divInput)


    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'category'
    input.value = categorie
    divInput.appendChild(input)        
    const labelInput = document.createElement('label')
    labelInput.textContent = categorie
    divInput.appendChild(labelInput)
}

function renderOptions () {
    let categories = Object.keys(dictionary.categories)
    categories.forEach(category => createRadios(category) )
}







