import {dictionary} from './dictionary.js';

const main = document.querySelector('main')
const btnTranslate = document.getElementById('btn-translate')
btnTranslate.addEventListener('click', translateWords)



function translateWords() {

    /*en esta parte estamos creando la variable que identificará al select del html, de esta manera
    podremos manipularlo*/
    const selectOption = document.getElementById('translation-direction')
    const translateDirection = selectOption.value

    //variable que identifica el elemento con el id correspondiente
    const inputWord = document.getElementById('input-word').value.trim().toLowerCase()


    // Verificar si ya existe el contenedor de traducción
    let divTranslate = document.querySelector('.divTranslate')
    if (!divTranslate) {
        //Creamos el nuevo div en el html desde js, el cual se encargará de mostrar la palabra traducida
        divTranslate = document.createElement('div')
        divTranslate.classList = 'divTranslate'
        
        const titleDiv = document.createElement('h4')
        titleDiv.textContent = 'Traducción: '

        const translatedWord = document.createElement('p')
        translatedWord.id = 'translated-word'
        
        // le damos un orden a los elementos creados, en este caso el div contiene al h4 y al p, asimismo, el div 
        // se encuentra dentro del main 
        main.appendChild(divTranslate)
        divTranslate.appendChild(titleDiv)
        divTranslate.appendChild(translatedWord)

        // Insertar el nuevo div antes del botón
        main.insertBefore(divTranslate, btnTranslate)
    }
    

    const translatedWord = document.getElementById('translated-word')
    
    // Obtener todas las palabras de todas las categorías, el flat hará que todo esté en un solo array
    const allWords = Object.values(dictionary.categories).flat();


    // Validar si el input está vacío antes de buscar en el diccionario
    if (!inputWord) {
        translatedWord.textContent = 'Por favor ingresa una palabra para traducir.'
        translatedWord.style.color = 'red'
        return; // Salir de la función si el input está vacío
    }

    // Si el input no está vacío, restablecer el estilo por si hubo un error previo
    translatedWord.style.color = ''

    const foundWord = allWords.find(word =>
        translateDirection === 'en-es'
        ? word.english.toLowerCase() === inputWord
        : word.spanish.toLowerCase() === inputWord
    );

    

    if (foundWord) {
        translatedWord.textContent = translateDirection === 'en-es'
        ? inputWord + " = " + foundWord.spanish + "-----> ejemplo: "+foundWord.example
        : inputWord + " = " + foundWord.english + "-----> example: "+foundWord.example
    } else {
        translatedWord.textContent = `La palabra "${inputWord}" no se encontró en el diccionario.`;
        translatedWord.style.color = 'orange'
    }

    


} 


