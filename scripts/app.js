import {dictionary} from './dictionary.js';

const main = document.querySelector('main')
const btnTranslate = document.getElementById('btn-translate')
btnTranslate.addEventListener('click', translateWords)


function translateWords() {
    
    /*en esta parte estamos creando la variable que identificará al select del html, de esta manera 
    podremos manipularlo*/
    const selectOption = document.getElementById('translation-direction')
    const choice = selectOption.value

    //variable que identifica el elemento con el id correspondiente
    const inputWord = document.getElementById('input-word').value.trim().toLowerCase()


    // Verificar si ya existe el contenedor de traducción y reutilizarlo
    let divTranslate = document.querySelector('.divTranslate')
    if (!divTranslate) {
        //Creamos el nuevo div en el html desde js, el cual se encargará de mostrar la palabra traducida
        divTranslate = document.createElement('div')
        divTranslate.classList = 'divTranslate'
        
        const titleDiv = document.createElement('h4')
        titleDiv.textContent = 'Traducción: '

        const translatedWord = document.createElement('p')
        translatedWord.id = 'translated-word'
        
        //darle el orden a los elementos
        main.appendChild(divTranslate)
        divTranslate.appendChild(titleDiv)
        divTranslate.appendChild(translatedWord)

        // Insertar el nuevo div antes del botón
        main.insertBefore(divTranslate, btnTranslate);
    }
    

    const translatedWord = document.getElementById('translated-word')
    

    // le damos un orden a los elementos creados, en este caso el div contiene al h4 y al p, asimismo, el div 
    // se encuentra dentro del main 

    


    // Aquí implementarás la lógica para buscar en el dictionary según 'choice' y mostrar el resultado
    if (inputWord) {
        translatedWord.textContent = `${inputWord} = [traducción pendiente]`
    } else {
        translatedWord.textContent = 'Por favor ingresa una palabra para traducir.'
        translatedWord.style.color = 'red'
    }
} 
