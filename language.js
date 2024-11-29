document.addEventListener('DOMContentLoaded', () => {
    const langEl = document.querySelector('.langWrap');
    const links = document.querySelectorAll('.langWrap a');
    
    // Selecionar todos os elementos que precisam ser atualizados com a tradução
    const langElements = {
        "lang-title": document.querySelector('#lang-title'),
        "lang-title-principal": document.querySelector('#lang-title-principal'),
        "lang-sub-title": document.querySelector('#lang-sub-title'),
        "lang-explanation": document.querySelector('#lang-explanation'),
        "lang-title-statistics": document.querySelector('#lang-title-statistics'),
        "lang-total-iterations": document.querySelector('#lang-total-iterations'),
        "lang-total-sec": document.querySelector('#lang-total-sec'),
        "lang-try-yourself": document.querySelector('#lang-try-yourself'),
        "lang-try-yourself-description": document.querySelector('#lang-try-yourself-description'),
        "lang-example": document.querySelector('#lang-example'),
        "lang-example-result": document.querySelector('#lang-example-result'),
        "lang-selection-sort": document.querySelector('#lang-selection-sort'),
        "lang-how-many-numbers": document.querySelector('#lang-how-many-numbers'),
        "lang-random-numbers-info": document.querySelector('#lang-random-numbers-info'),
        "lang-array-build": document.querySelector('#lang-array-build'),
        "lang-array-build-info": document.querySelector('#lang-array-build-info'),
        "lang-array-unique": document.querySelector('#lang-array-unique'),
        "lang-array-repeat": document.querySelector('#lang-array-repeat'),
        "lang-performance-results-title": document.querySelector('#lang-performance-results-title'),
        "lang-performance-results-description": document.querySelector('#lang-performance-results-description'),
        "lang-selected-sort": document.querySelector('#lang-selected-sort'),
        "lang-unsorted-array-title": document.querySelector('#lang-unsorted-array-title'),
        "lang-sort-array": document.querySelector('#lang-sort-array'),
        "lang-results-size": document.querySelector('#lang-results-size'),
        "lang-metric-label": document.querySelector('#lang-metric-label'),
        "lang-execution-time": document.querySelector('#lang-execution-time'),
        "lang-memory-use": document.querySelector('#lang-memory-use'),
        "lang-iterations": document.querySelector('#lang-iterations'),
        
        // Usando querySelectorAll para classes
        "resetar": document.querySelectorAll('#resetar'),
        "lang-button-make-test": document.querySelectorAll('#lang-button-make-test')
    };
    
    // Tradução de dados
    var data = {
        "english": {
            "lang-title": "Array Buddy",
            "lang-title-principal": "Array Buddy",
            "lang-sub-title": "By Caio Pacheco, Kayky Crespo & Elias",
            "lang-explanation": "Using Array Buddy, analyze, visualize, and compare the performance of different Sorting algorithms is easy. In addition to monitoring the execution time, memory used and iterations performed.",
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
          "lang-how-many-numbers": "Quantos números?",
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
          "lang-iterations": "Iterações"
        }
    };
    
    // Adicionar evento de clique a cada link de idioma
    links.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
  
            // Remove classe 'active' do link atual e adiciona ao novo
            const activeElement = langEl.querySelector('.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }
            el.classList.add('active');
  
            // Obtém o idioma selecionado
            const attr = el.getAttribute('language');
  
            // Verifica se o idioma selecionado existe nos dados
            if (!data[attr]) {
                console.error(`Tradução para o idioma "${attr}" não encontrada.`);
                return;
            }
  
            // Atualiza todos os textos de acordo com o idioma selecionado
            Object.keys(langElements).forEach(key => {
                const element = langElements[key];
                const translation = data[attr][key];
  
                if (element) {
                    if (element instanceof NodeList) {
                        element.forEach(el => {
                            el.textContent = translation;
                        });
                    } else {
                        element.textContent = translation;
                    }
                } else {
                    console.warn(`Elemento com a chave "${key}" não encontrado no DOM.`);
                }
            });
        });
    });
  
    // Define o idioma padrão (inglês) ao carregar a página
    window.addEventListener('DOMContentLoaded', () => {
        const defaultLang = 'english';
        const defaultElements = langElements;
        Object.keys(defaultElements).forEach(key => {
            const element = defaultElements[key];
            const translation = data[defaultLang][key];
            if (element) {
                if (element instanceof NodeList) {
                    element.forEach(el => {
                        el.textContent = translation;
                    });
                } else {
                    element.textContent = translation;
                }
            }
        });
    })});
  
  