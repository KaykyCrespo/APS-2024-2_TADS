const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const title = document.querySelector('#lang-principal-title');
const description = document.querySelector('#lang-description');

// Function to set the language
function setLanguage(attr) {
    title.textContent = data[attr]['title'];
    description.textContent = data[attr]['description'];
    // Add similar lines to update other elements with translation data if necessary
}

// Initialize default language based on the active class
document.addEventListener("DOMContentLoaded", () => {
    const activeLang = langEl.querySelector('.active').getAttribute('language');
    setLanguage(activeLang);
});

// Handle language change on click
link.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from the currently selected language
        langEl.querySelector('.active').classList.remove('active');
        // Add 'active' class to the clicked language
        el.classList.add('active');

        // Get the language attribute of the clicked link
        const attr = el.getAttribute('language');
        // Update the content based on the selected language
        setLanguage(attr);
    });
});

// Translation data
var data = {
    "english": {
        "lang-title": "Array Buddy",
        "lang-title-principal": "Array Buddy",
        "lang-sub-title": "By Caio Pacheco, Kayky Crespo & Elias",
        "lang-explanation": " Using Array Buddy, analyze, visualize, and compare the performance of different Sorting algorithmsis easy. In addition to monitoring the execution time, memory used and iterations performed.",
        "lang-title-statistics": "General statistics",
        "lang-total-iterations": "Total iterations :",
        "lang-total-sec": "Total time (sec):",
        "lang-try-yourself": "Try it for yourself",
        "lang-try-yourself-description": "Here you test sorting a array that you came up with!",
        "lang-example": "Try putting a number sequence below (ex : 1, 145, 56, 2235, 5922, 3)",
        "lang-example-result": "Here's the result:",
        "resetar": "reset",
        "lang-button-make-test": "Make test",
        "lang-selection-sort": "Select array sort type",
        "lang-how-many-numbers": "How many numbers?",
        "lang-random-numbers-info": "All numbers are going to be randomly generated",
        "lang-array-build": "Array build",
        "lang-array-build-info": "This will affect on how the random array are made",
        "lang-array-unique": "Never repeat numbers",
        "lang-array-repeat": "Repeat numbers",
        "lang-performance-results-title": "Performance results",
        "lang-performance-results-description": "This section will demonstrate statistics and information about the sorting algorithms used.",
        "lang-selected-sort": "Sort type used:",
        "lang-unsorted-array-title": "Unsorted array:",
        "lang-sort-array": "Sorted array:",
        "lang-results-size": "Results from (size)",
        "lang-metric-label": "Metric",
        "lang-execution-time": "Execution time",
        "lang-memory-use": "Memory use",
        "lang-iterations": "Iterations",
    },
    "portuguese": {
      "lang-title": "Array Buddy",
      "lang-title-principal": "Array Buddy",
      "lang-sub-title": "Criado por Caio Pacheco, Kayky Crespo & Elias",
      "lang-explanation": "Usar o Array Buddy para analisar, visualizar e comparar o desempenho de diferentes algoritmos de ordenação é fácil. Além de monitorar o tempo de execução, a memória utilizada e as iterações realizadas.",
      "lang-title-statistics": "Estatísticas Gerais",
      "lang-total-iterations": "Total de interações:",
      "lang-total-sec": "Tempo total (seg):",
      "lang-try-yourself": "Experimente você mesmo",
      "lang-try-yourself-description": "Aqui você testa a ordenação de um array que você criou!",
      "lang-example": "Tente colocar uma sequência de números abaixo (ex: 1, 145, 56, 2235, 5922, 3)",
      "lang-example-result": "Aqui está o resultado:",
      "resetar": "resetar",
      "lang-button-make-test": "Fazer teste",
      "lang-selection-sort": "Selecione o tipo de ordenação do array",
      "lang-how-many-numbers": "Qual quantidade de números?",
      "lang-random-numbers-info": "Todos os números serão gerados aleatoriamente",
      "lang-array-build": "Construção do array",
      "lang-array-build-info": "Isso afetará como o array aleatório é feito",
      "lang-array-unique": "Nunca repetir números",
      "lang-array-repeat": "Repetir números",
      "lang-performance-results-title": "Resultados de desempenho",
      "lang-performance-results-description": "Esta seção demonstrará estatísticas e informações sobre os algoritmos de ordenação utilizados.",
      "lang-selected-sort": "Tipo de ordenação utilizado:",
      "lang-unsorted-array-title": "Array não ordenado:",
      "lang-sort-array": "Array ordenado:",
      "lang-results-size": "Resultados de (tamanho)",
      "lang-metric-label": "Métrica",
      "lang-execution-time": "Tempo de execução",
      "lang-memory-use": "Uso de memória",
      "lang-iterations": "Interações"
    }
};
