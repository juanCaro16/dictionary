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

    const titleFilter = document.createElement('h4')
    titleFilter.innerHTML = '<b> Filtrar por categorías: </b>'
    divFilters.appendChild(titleFilter)


    const divInputAlls = document.createElement('div')
    divFilters.appendChild(divInputAlls)

    const inputAlls = document.createElement('input')
    inputAlls.type = 'radio'
    inputAlls.id = 'alls'
    inputAlls.name = 'category'
    inputAlls.value = 'alls'
    divInputAlls.appendChild(inputAlls)      

    const labelInputAlls = document.createElement('label')
    labelInputAlls.textContent = 'todas'
    divInputAlls.appendChild(labelInputAlls)
   

    renderOptions()
    filterCategories()
}

//funcion para mostrar las palabras con su respectiva traduccion y ejemplo despues de cargarse el dom
document.addEventListener('DOMContentLoaded', showWords)

// funcion para mostrar la traduccion, las flechas y el ejemplo
function showWords() {
    createElements();
 
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
    input.id = categorie
    input.name = 'category'
    input.value = categorie
    divInput.appendChild(input)        
    const labelInput = document.createElement('label')
    labelInput.textContent = categorie
    divInput.appendChild(labelInput)
}

//funcion que crea un input de tipo radio por cada categoría en dictionary (6)
function renderOptions () {
    let categories = Object.keys(dictionary.categories)
    categories.forEach(category => createRadios(category) )
}

//filtrar categorías
function filterCategories() {
    const inputs = document.querySelectorAll('input[name="category"]'); // Selecciona todos los radios

    inputs.forEach(input => {
        input.addEventListener('click', () => {
            const divWords = document.getElementById('words-container');
            const divArrows = document.getElementById('arrows-container');
            const exampleWords = document.getElementById('examples');

            // Limpia los contenedores
            clearContainers(divWords, divArrows, exampleWords);


            // Obtiene la categoría seleccionada
            const selectedCategory = input.id;
            const filteredWords = selectedCategory === 'alls'
            ? allWords
            : dictionary.categories[selectedCategory];

            // Renderiza las palabras filtradas
            renderWords(filteredWords, divWords, divArrows, exampleWords);
        });
    });
}

// Función para limpiar los contenedores
function clearContainers(...containers) {
    containers.forEach(container => {
        container.innerHTML = '';
    });
}

// Función para renderizar palabras filtradas
function renderWords(filteredWords, divWords, divArrows, exampleWords) {
    let count = 1;
    filteredWords.forEach(word => {
        // Traducción
        const traductionWord = document.createElement('p');
        traductionWord.textContent = `${count}. ${word.english} = ${word.spanish}`;
        divWords.appendChild(traductionWord);

        // Flecha
        const arrow = document.createElement('p');
        arrow.textContent = '——————————>';
        divArrows.appendChild(arrow);

        // Ejemplo
        const example = document.createElement('p');
        example.textContent = `Ejemplo: ${word.example}`;
        exampleWords.appendChild(example);

        count++;
    });
}
          






