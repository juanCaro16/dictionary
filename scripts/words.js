import { dictionary } from "./dictionary.js";


const main = document.querySelector('main')

//funcion para mostrar las palabras con su respectiva traduccion y ejemplo
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


    filterCategories();
})

//funcion para filtrar por categorías
function filterCategories() {
    //div principal que contiene el titulo de filtro y cada opcion de input de tipo radio con su label
    const divFilters = document.createElement('div')
    divFilters.classList.add('div-filters')
    main.appendChild(divFilters)
    
    const titleFilter = document.createElement('h4')
    titleFilter.classList.add('title-filter')
    titleFilter.textContent = 'Filtrar por categoría:'
    divFilters.appendChild(titleFilter)


    //input de opcion animales
    const divInputAnimals = document.createElement('div')
    divFilters.appendChild(divInputAnimals)

    const inputAnimal = document.createElement('input')
    inputAnimal.type = 'radio'
    inputAnimal.value = 'animals'
    inputAnimal.name = 'input-categorie'
    inputAnimal.id = 'input-animals'
    divInputAnimals.appendChild(inputAnimal)

    // Opcionalmente, crea una etiqueta para el radio
    const labelInputAnimals = document.createElement('label')
    labelInputAnimals.htmlFor = 'input-categorie' // Asocia el label al input mediante el id
    labelInputAnimals.textContent = 'Animales' // Texto visible para el usuario
    divInputAnimals.appendChild(labelInputAnimals)

    //input de opcion frutas
    const divInputFruits = document.createElement('div')
    divFilters.appendChild(divInputFruits)

    const inputFruits = document.createElement('input')
    inputFruits.type = 'radio'
    inputFruits.value = 'fruits'
    inputFruits.name = 'input-categorie'
    inputFruits.id = 'input-fruits'
    divInputFruits.appendChild(inputFruits)

    const labelInputFruits = document.createElement('label')
    labelInputFruits.htmlFor = 'input-fruits'
    labelInputFruits.textContent = 'Frutas'
    divInputFruits.appendChild(labelInputFruits)


    //input de opcion colores
    const divInputColors = document.createElement('div')
    divFilters.appendChild(divInputColors)

    const inputColors = document.createElement('input')
    inputColors.type = 'radio'
    inputColors.value = 'colors'
    inputColors.name = 'input-categorie'
    inputColors.id = 'input-colors'
    divInputColors.appendChild(inputColors)

    const labelInputColors = document.createElement('label')
    labelInputColors.htmlFor = 'input-fruits'
    labelInputColors.textContent = 'Colores'
    divInputColors.appendChild(labelInputColors)

    // input de opcion: descripciones físicas
    const divInputPhysical = document.createElement('div')
    divFilters.appendChild(divInputPhysical)

    const inputPhysical = document.createElement('input')
    inputPhysical.type = 'radio'
    inputPhysical.value = 'physical_descriptions'
    inputPhysical.name = 'input-categorie'
    inputPhysical.id = 'input-physical'
    divInputPhysical.appendChild(inputPhysical)

    const labelInputPhysical = document.createElement('label')
    labelInputPhysical.htmlFor = 'input-fruits'
    labelInputPhysical.textContent = 'Descripciones físicas'
    divInputPhysical.appendChild(labelInputPhysical)

    // input de opcion: Habilidades
    const divInputSkills = document.createElement('div')
    divFilters.appendChild(divInputSkills)

    const inputSkills = document.createElement('input')
    inputSkills.type = 'radio'
    inputSkills.value = 'skills'
    inputSkills.name = 'input-categorie'
    inputSkills.id = 'input-skills'
    divInputSkills.appendChild(inputSkills)

    const labelInputSkills = document.createElement('label')
    labelInputSkills.htmlFor = 'input-fruits'
    labelInputSkills.textContent = 'Habilidades'
    divInputSkills.appendChild(labelInputSkills)

    //input de opcion: verbos
    const divInputVerbs = document.createElement('div')
    divFilters.appendChild(divInputVerbs)

    const inputVerbs = document.createElement('input')
    inputVerbs.type = 'radio'
    inputVerbs.value = 'verbs'
    inputVerbs.name = 'input-categorie'
    inputVerbs.id = 'input-verbs'
    divInputVerbs.appendChild(inputVerbs)

    const labelInputVerbs = document.createElement('label')
    labelInputVerbs.htmlFor = 'input-fruits'
    labelInputVerbs.textContent = 'Verbos'
    divInputVerbs.appendChild(labelInputVerbs)


    function handleCategoryFilter() {
        const inputs = document.querySelectorAll('input[name="input-categorie"]'); // Selecciona todos los radios
    
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                const selectedCategory = input.value; // Obtiene el valor de la categoría seleccionada
                const filteredWords = dictionary.categories[selectedCategory]; // Filtra las palabras por categoría
                
                // Limpia el contenido actual
                const divWords = document.getElementById('words-container');
                const divArrows = document.getElementById('arrows-container');
                const exampleWords = document.getElementById('examples');
    
                divWords.innerHTML = '';
                divArrows.innerHTML = '';
                exampleWords.innerHTML = '';
    
                // Muestra las palabras filtradas
                if (filteredWords) {
                    let numberAument = 1;
    
                    filteredWords.forEach(word => {
                        const traductionWord = document.createElement('p');
                        traductionWord.id = 'traduction-word';
                        traductionWord.innerHTML = `<b> ${numberAument}. ${word.english} = ${word.spanish} </b>`;
                        divWords.appendChild(traductionWord);
    
                        const arrow = document.createElement('p');
                        arrow.innerHTML = `———————————————>`;
                        divArrows.appendChild(arrow);
    
                        const examples = document.createElement('p');
                        examples.innerHTML = `<b> ${numberAument}. Example: </b>  ${word.example}`;
                        exampleWords.appendChild(examples);
    
                        numberAument++;
                    });
                }
            });
        });
    }
    
    handleCategoryFilter();
    
}



