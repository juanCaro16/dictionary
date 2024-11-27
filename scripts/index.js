import {dictionary} from './dictionary.js';

const main = document.querySelector('main')
const btnTranslate = document.getElementById('btn-translate')
const divMain = document.getElementById('translate')

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
        titleDiv.classList = "titleTraduction"

        const translatedWord = document.createElement('p')
        translatedWord.id = 'translated-word'
        
        
        // le damos un orden a los elementos creados, en este caso el div contiene al h4 y al p, asimismo, el div 
        // se encuentra dentro del main 
        divMain.appendChild(divTranslate)
        divTranslate.appendChild(titleDiv)
        divTranslate.appendChild(translatedWord)
        
        
    }

    const translatedWord = document.getElementById('translated-word')
    
    // Obtener todas las palabras de todas las categorías, el flat hará que todo esté en un solo array
    const allWords = Object.values(dictionary.categories).flat();


    // Validar si el input está vacío antes de buscar en el diccionario
    if (!inputWord) {
        translatedWord.innerHTML = '<b>Por favor ingresa una palabra para traducir.</b>'
        translatedWord.style.color = 'red'
        return; // Salir de la función si el input está vacío
    }

    // Si el input no está vacío, restablecer el estilo por si hubo un error previo
    translatedWord.style.color = ''

    // creamos una variable que guarde el objeto que cumpla con las condiciones, ya que el metodo find es un
    // metodo para arreglos que respecto a la condicion, devolverá el objeto completo que cumpla con esta condicion
    const foundWord = allWords.find(word =>
        // este bloque de codigo es como un if pero realizado de manera compacta, el operador ternario "?"
        // se ejecuta cuando la condicion es falsa y el operador ":" cuando la condicion es falsa
        translateDirection === 'en-es'
        ? word.english.toLowerCase() === inputWord
        : word.spanish.toLowerCase() === inputWord
    );

    if (foundWord) {
        // este bloque de codigo primero se asegura de que la direccion de traduccion siga siendo la misma
        // luego mostramos la informacion por medio de foundWord que es la variable que guarda el objeto
        translatedWord.innerHTML = translateDirection === 'en-es'
        ? `<b>${inputWord}</b> = <b>${foundWord.spanish} -------------> (Ejemplo: ${foundWord.example})`
        : `<b>${inputWord}</b> = <b>${foundWord.english} -------------> (Ejemplo: ${foundWord.example})`
    } else {
        //este codigo se ejecutará si la variable foundWord está vacia, osea si la palabra que ingresó
        // el usuario no existe en el array dictionary
        translatedWord.innerHTML = `<b>La palabra "${inputWord}" no se encontró en el diccionario.</b>`;
        translatedWord.style.color = 'orange'
    }

} 


