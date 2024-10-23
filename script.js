function toggleMode() {
  const html = document.documentElement; // acessando a minha variável através do .documentElement 

  if (html.classList.contains('dark')) {
    showAlertBox("selected_default_theme", "success");
    html.classList.remove('dark'); // Se na lista de classe do html conter 'dark', remover
  } else {
    showAlertBox("selected_dark_theme", "success");
    html.classList.add('dark'); // Caso contrário, adicionar
  }

  // Atualizar o gráfico após mudar o modo
  myPieChart.update(); // Atualiza o gráfico
  barChart.update(); // Atualiza o gráfico
  myPolarAreaChart.update(); // Atualiza o gráfico
  barChartWAP.update(); // Atualiza o gráfico
}





document.addEventListener('DOMContentLoaded', () => {
  const langEl = document.querySelector('.langWrap');
  const links = document.querySelectorAll('a[language]');
  addLanguageToggleEvents();


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
    "resetar": document.querySelectorAll('#resetar'),
    "lang-button-make-test": document.querySelectorAll('#lang-button-make-test'),
    "lang-sub-title-footer": document.querySelectorAll('#lang-sub-title-footer'),
    "lang-terms": document.querySelectorAll('#lang-terms'),
    "lang-politics": document.querySelectorAll('#lang-politics'),
    "lang-copyright": document.querySelectorAll('#lang-copyright')
  };

  // Tradução de dados
  const languageData = {
    "english": {
      "lang-title": "Array Buddy",
      "lang-title-principal": "Array Buddy",
      "lang-sub-title": "By Caio Pacheco, Kayky Crespo, Helen Silva & Elias Souza",
      "lang-explanation": "Using Array Buddy, analyze, visualize, and compare the performance of different Sorting algorithms is easy. In addition to monitoring the execution time, memory used, and iterations performed.",
      "lang-title-statistics": "General statistics",
      "lang-total-iterations": "Total iterations:",
      "lang-total-sec": "Total time (sec):",
      "lang-try-yourself": "Try it for yourself",
      "lang-try-yourself-description": "Here you test sorting an array that you came up with!",
      "lang-example": "Try putting a number sequence below (ex: 1, 145, 56, 2235, 5922, 3)",
      "lang-example-result": "Here's the result:",
      "resetar": "reset",
      "lang-button-make-test": "Make test",
      "lang-selection-sort": "Select array sort type",
      "lang-how-many-numbers": "How many numbers?",
      "lang-random-numbers-info": "All numbers are going to be randomly generated",
      "lang-array-build": "Array build",
      "lang-array-build-info": "This will affect how the random array is made",
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
      "lang-sub-title-footer": "App for testing array sorts",
      "lang-terms": "Terms of use",
      "lang-politics": "Privacy politics",
      "lang-copyright": "Copyright © ArrayBuddy. All Rights Reserved"
    },
    "portuguese": {
      "lang-title": "Array Buddy",
      "lang-title-principal": "Array Buddy",
      "lang-sub-title": "Criado por Caio Pacheco, Kayky Crespo, Helen Silva e Elias Souza ",
      "lang-explanation": "Usar o Array Buddy para analisar, visualizar e comparar o desempenho de diferentes algoritmos de ordenação é fácil. Além de monitorar o tempo de execução, a memória utilizada e as iterações realizadas.",
      "lang-title-statistics": "Estatísticas Gerais",
      "lang-total-iterations": "Total de interações:",
      "lang-total-sec": "Tempo total (seg):",
      "lang-try-yourself": "Experimente você mesmo",
      "lang-try-yourself-description": "Aqui você pode testar uma ordenação de array manualmente!",
      "lang-example": "Tente colocar uma sequência de números (ex: 1, 145, 56, 2235, 5922, 3)",
      "lang-example-result": "Aqui está o resultado:",
      "resetar": "resetar",
      "lang-button-make-test": "Fazer teste",
      "lang-selection-sort": "Selecione o tipo de ordenação do array",
      "lang-how-many-numbers": "Quantos números?",
      "lang-random-numbers-info": "Todos os números serão gerados aleatoriamente",
      "lang-array-build": "Construção do array",
      "lang-array-build-info": "Isso afetará como o array aleatório é gerado",
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
      "lang-iterations": "Iterações",
      "lang-sub-title-footer": "Aplicativo para testar ordenação de arrays",
      "lang-terms": "Termo de uso",
      "lang-politics": "Política de Privacidade",
      "lang-copyright": "Copyright © ArrayBuddy. Todos direitos Reservados"
    }
  };

  function addLanguageToggleEvents() {
    isInicialized = true

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const activeElement = langEl.querySelector('.active');
        if (activeElement) {
          activeElement.classList.remove('active');
        }
        link.classList.add('active');

        const selectedLanguage = link.getAttribute('language');
        if (!languageData[selectedLanguage]) {
          console.error(`Translation for language "${selectedLanguage}" not found.`);
          return;
        }

        Object.keys(langElements).forEach(key => {
          const element = langElements[key];
          const translation = languageData[selectedLanguage][key];

          if (element) {
            if (element instanceof NodeList) {
              element.forEach(el => {
                el.textContent = translation || '';
              });
            } else {
              element.textContent = translation || '';
            }
          } else {
            console.warn(`Element with key "${key}" not found in DOM.`);
          }
        });

        
        resetInputsMakeTest();
        updateAllGraphs();

        if (!isInicialized){
          showAlertBox("selected_language", "success") 
        }

        isInicialized = false
      });
    });
    }

  // Set default language to English
  const defaultLanguage = 'english';
  const defaultLink = document.querySelector(`a[language='${defaultLanguage}']`);
  if (defaultLink) {
    defaultLink.click();
  }

});




const alertBox = document.getElementById('alert-box');
const alertMessage = document.getElementById('alert-message');
let showSettingsDropdown = false;

var alert_messages = {
  'english': {
    'empty_input': "Input cannot be empty.",
    'manual_sort_success': "Manual array sorted with success.",
    'invalid_input': "Invalid input on manual sort test. Please enter integers separated by commas.",
    'input_reset_success': "Success! Input values have been reset.",
    'input_reset_error': "Error! {error}",
    'fields_not_checked': "Error! Some fields aren't checked.",
    'default_alert_message': "No language selected, using default settings.",
    'selected_language' : "Language updated to english.",
    "selected_dark_theme" : "Dark mode enabled.",
    "selected_default_theme" : "Default mode enabled."

  },
  'portuguese': {
    'empty_input': "O campo não pode estar vazio.",
    'manual_sort_success': "Array manual ordenado com sucesso.",
    'invalid_input': "Entrada inválida no teste de ordenação manual. Por favor, insira inteiros separados por vírgulas.",
    'input_reset_success': "Sucesso! Valores de entrada foram redefinidos.",
    'input_reset_error': "Erro! {error}",
    'fields_not_checked': "Erro! Alguns campos não estão selecionados.",
    'default_alert_message': "Nenhuma língua selecionada, usando configurações padrão.",
    'selected_language' : "Linguagem atualizada para português.",
    "selected_dark_theme" : "Tema escuro ativado.",
    "selected_default_theme" : "Tema padrão selecionado."
  }
};

function showAlertBox(messageKey, category) {
  // Get the current language
  const currentLanguageElement = document.querySelector('.active');
  if (!currentLanguageElement) {
    console.error("No language is currently selected.");
    return; // Exit if no language is active
  }

  const currentLanguage = currentLanguageElement.getAttribute('language');

  // Get the corresponding message for the current language
  const message = alert_messages[currentLanguage][messageKey] || alert_messages['english'][messageKey];

  // Set the alert message in the alert box
  alertMessage.innerHTML = message;
  alertBox.style.visibility = "visible";
  alertBox.style.opacity = "1";

  // Change the background color based on the category
  if (category === 'success') {
    alertBox.style.backgroundColor = 'green';
  } else {
    alertBox.style.backgroundColor = '#f36464';
  }

  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertBox.style.visibility = "hidden";
    alertBox.style.opacity = "0";
  }, 3000);
}














const sortingAlgorithms = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort'];
const sizes = [250, 500, 1000, 2500, 7500, 15000];
const graphValues = {};

sortingAlgorithms.forEach(algorithm => {
  sizes.forEach(size => {
    graphValues[`${algorithm}${size}`] = {
      time: null,
      memory: null,
      iterations: null
    };
  });
});



// Função para abrir ou fechar o dropdown
function toggleDropdown(event) {
  const settingsDropdown = document.getElementById("settings-dropdown");
  const settingsButton = document.getElementById("settings-button");
  const settingsButtonImg = document.getElementById("setting-button-img");

  // Verifica se o clique foi no botão de configurações
  if (event.target === settingsButton || settingsButton.contains(event.target)) {
    // Alterna a visibilidade do dropdown
    const isDropdownVisible = settingsDropdown.style.visibility === "visible";
    
    if (isDropdownVisible) {
      closeDropdown(settingsDropdown, settingsButton, settingsButtonImg);
    } else {
      openDropdown(settingsDropdown, settingsButton, settingsButtonImg);
    }
  } else {
    // Fecha o dropdown se o clique for fora do botão ou dropdown
    if (!settingsDropdown.contains(event.target)) {
      closeDropdown(settingsDropdown, settingsButton, settingsButtonImg);
    }
  }
}
// Função para abrir o dropdown
function openDropdown(settingsDropdown, settingsButton, settingsButtonImg) {
  settingsDropdown.style.visibility = "visible";
  settingsDropdown.style.opacity = "1";
  settingsButton.style.borderRadius = "0.5vw 0.5vw 0 0";
  settingsButtonImg.style.transform = "rotate(90deg)";
}
// Função para fechar o dropdown
function closeDropdown(settingsDropdown, settingsButton, settingsButtonImg) {
  settingsDropdown.style.visibility = "hidden";
  settingsDropdown.style.opacity = "0";
  settingsButton.style.borderRadius = "0.5vw";
  settingsButtonImg.style.transform = "rotate(0deg)";
}
// Adiciona o event listener para controlar a visibilidade do dropdown
document.addEventListener('click', toggleDropdown);
// Fecha o dropdown ao clicar nas bandeiras
const flags = document.querySelectorAll("#settings-dropdown a");
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const settingsDropdown = document.getElementById("settings-dropdown");
    const settingsButton = document.getElementById("settings-button");
    const settingsButtonImg = document.getElementById("setting-button-img");
    closeDropdown(settingsDropdown, settingsButton, settingsButtonImg);
  });
});


window.onload = resetInputsMakeTest && resetInputsTryYourself;
function resetInputsMakeTest() {
  document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
    radio.checked = false;
  });
  document.querySelectorAll('input[name="arraySize"]').forEach(radio => {
    radio.checked = false;
  });

  document.getElementById("ordinationType").value = "repeat"
  document.getElementById("selectedMetric").value = "time"
  document.getElementById("selectedQuantity").value = "250"

  console.log("resetou")
}

function resetInputsTryYourself() {
  document.getElementById("userArrayInput").value = null
  document.getElementById("arraySortedResponse").value = null

}




let arraySize = null;
function setArraySize(size){
  arraySize = size
}

function setGraphValues(sort, type, value) {
  graphValues[`${sort}${arraySize}${type}`] = value;
  updateAllGraphs("makeTest");
}

// Função pra atualizar gráficos
function updateAllGraphs(beingCalledBy) {
  let selectedQuantity = null;

  if (beingCalledBy === "makeTest"){
    // Irá pegar o valor do tamanho do array selecionado e usar como métrica
    document.getElementById("selectedQuantity").value = arraySize
    selectedQuantity = document.getElementById("selectedQuantity").value
  } else {
    // Caso não, ira utilizar a seleção do usuario
    selectedQuantity = document.getElementById("selectedQuantity").value
  }


  updateBarChart(selectedQuantity);
  updatePieChart(selectedQuantity);
  updatePolarAreaChart(selectedQuantity);
  updateBarChartWAP(selectedQuantity);
  console.log("atualizou")
}




// Inicialização do gráfico de pizza
const ctxPie = document.getElementById('pieChart').getContext('2d');
let myPieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
    datasets: [{
      label: '',
      data: [null, null, null, null],
      backgroundColor: [
        '#FFA6C9',
        '#CDA1DB',
        '#4B9F6E',
        '#f4a261'
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1.5
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 60,
        bottom: 60
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF',
          font: {
            size: 16
          }
        },
        position: 'top',
        align: 'center',
        padding: 20
      },
      title: {
        display: false, // Desativar o título padrão
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            let value = context.raw; // Obtém o valor do dataset
            let metric = document.getElementById('selectedMetric').value; // Captura a métrica atual

            // Formata o valor com separador de milhar
            let formattedValue = value.toLocaleString('pt-BR'); // Formatação em português

            // Adiciona "s" se a métrica for tempo
            if (metric === 'time') {
              return `${label}: ${formattedValue}s`; // Exibe o valor com "s"
            } else if (metric === 'memory') {
              return `${label}: ${formattedValue}MB`; // Exibe o valor com "MB" para memória
            } else {
              return `${label}: ${formattedValue}`; // Exibe somente o valor para iterações
            }
          }
        }
      }
    }
  },
  plugins: [{
    id: 'borderedTitlePlugin',
    beforeDraw: (chart) => {
      const title = chart.options.plugins.dynamicTitle; // Acessa o título dinâmico
      if (title && title.text) {
        const ctx = chart.ctx;
        const fontSize = 18;
        const fontWeight = 'bold';
        const fontFamily = Chart.defaults.font.family;

        ctx.save();
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Medir o comprimento do texto
        const textWidth = ctx.measureText(title.text).width;
        const x = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;

        // Ajuste do valor de 'y' para mover o título mais para cima
        const y = chart.chartArea.top / 4; // Valor ajustado para ficar mais acima

        const padding = 10;
        const borderWidth = textWidth + padding * 2;
        const borderHeight = fontSize + padding;
        const borderRadius = 6;

        // Obter a cor da variável CSS para o fundo do título
        const quinternaryDark = getComputedStyle(document.documentElement).getPropertyValue('--quinternary-dark').trim();
        const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();

        // Verifica se está em modo escuro e ajusta a cor de fundo
        const backgroundColor = document.documentElement.classList.contains('dark')
        ? quinternaryDark // Cor de fundo para o modo escuro
        : borderColor; // Cor de fundo para o modo claro

        // Desenhar o retângulo de fundo com bordas arredondadas
        ctx.fillStyle = backgroundColor;
        ctx.beginPath();
        ctx.moveTo(x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
        ctx.lineTo(x + borderWidth / 2 - borderRadius, y - borderHeight / 2);
        ctx.quadraticCurveTo(x + borderWidth / 2, y - borderHeight / 2, x + borderWidth / 2, y - borderHeight / 2 + borderRadius);
        ctx.lineTo(x + borderWidth / 2, y + borderHeight / 2 - borderRadius);
        ctx.quadraticCurveTo(x + borderWidth / 2, y + borderHeight / 2, x + borderWidth / 2 - borderRadius, y + borderHeight / 2);
        ctx.lineTo(x - borderWidth / 2 + borderRadius, y + borderHeight / 2);
        ctx.quadraticCurveTo(x - borderWidth / 2, y + borderHeight / 2, x - borderWidth / 2, y + borderHeight / 2 - borderRadius);
        ctx.lineTo(x - borderWidth / 2, y - borderHeight / 2 + borderRadius);
        ctx.quadraticCurveTo(x - borderWidth / 2, y - borderHeight / 2, x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
        ctx.closePath();
        ctx.fill();

        // Desenhar o texto por cima
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(title.text, x, y);
        ctx.restore();
      }
    }
  }]
});

// Função para atualizar o gráfico de pizza com base na métrica selecionada
function updatePieChart(selectedQuantity) {
  var metric = document.getElementById('selectedMetric').value;
  var data;
  var labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language');

  // Define o título de acordo com a métrica selecionada
  var titlePrefix = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | ` : `TAMANHO: ${selectedQuantity} | `;

  switch (metric) {
    case 'time':
      data = [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ];
      title = titlePrefix + (selectedLanguage === "english" ? "EXECUTION TIME" : "TEMPO DE EXECUÇÃO");
      break;
    case 'memory':
      data = [
        graphValues[`bubblesort${selectedQuantity}memory`],
        graphValues[`insertionsort${selectedQuantity}memory`],
        graphValues[`selectionsort${selectedQuantity}memory`],
        graphValues[`heapsort${selectedQuantity}memory`]
      ];
      title = titlePrefix + (selectedLanguage === "english" ? "MEMORY USE" : "USO DE MEMORIA");
      break;
    case 'iterations':
      data = [
        graphValues[`bubblesort${selectedQuantity}iterations`],
        graphValues[`insertionsort${selectedQuantity}iterations`],
        graphValues[`selectionsort${selectedQuantity}iterations`],
        graphValues[`heapsort${selectedQuantity}iterations`]
      ];
      title = titlePrefix + (selectedLanguage === "english" ? "ITERATIONS" : "ITERAÇÕES");
      break;
    default:
      data = [0, 0, 0, 0]; // Valores padrão
      title = ''; // Título padrão vazio
  }

  // Atualiza os dados e o título dinâmico do gráfico
  myPieChart.data.labels = labels;
  myPieChart.data.datasets[0].data = data;
  myPieChart.options.plugins.dynamicTitle = { text: title }; // Define o título dinâmico com borda

  myPieChart.update(); // Atualiza o gráfico
}















// Inicialização do gráfico de barra
const ctxLine = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctxLine, {
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
    datasets: [{
      label: '',
      data: [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ],
      backgroundColor: ['#FFA6C9', '#CDA1DB', '#4B9F6E', '#f4a261'],
      borderColor: '#000000',
      borderWidth: 1.5
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 20,
        bottom: 20
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Usar separador de milhares
          callback: function (value) {
            // Formatar o valor com separadores de milhares e adicionar "s"
            return new Intl.NumberFormat('de-DE').format(value) + 's';
          },
          color: '#FFFFFF',
          font: {
            size: 15
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)',
          lineWidth: 1,
          borderDash: [6, 6],
          drawBorder: true,
        }
      },
      x: {
        ticks: {
          color: '#FFFFFF',
          font: {
            size: 17
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)',
          lineWidth: 1,
          borderDash: [],
          drawBorder: true,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: function (chart) {
            const labels = [];
            chart.data.datasets.forEach((dataset, i) => {
              labels.push({
                text: dataset.label,
                fillStyle: 'rgba(0, 0, 0, 0)',
                strokeStyle: 'rgba(0, 0, 0, 0)',
                lineWidth: 0,
                index: i
              });
            });
            return labels;
          },
          color: '#FFFFFF',
          font: {
            size: 16
          },
        },
        title: {
          display: false,
        }
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label;
          }
        },
        backgroundColor: '#000000',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 14
        }
      }
    },
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  plugins: [{
    id: 'borderedTitlePluginBar',
    beforeDraw: (chart) => {
      const titleText = chart.options.plugins.dynamicTitle.title; // Acessa o título dinâmico
      const ctx = chart.ctx;
      const fontSize = 18;
      const fontWeight = 'bold';
      const fontFamily = Chart.defaults.font.family;

      ctx.save();
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textWidth = ctx.measureText(titleText).width;
      const x = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
      const y = chart.chartArea.top / 2;

      const padding = 10;
      const borderWidth = textWidth + padding * 2;
      const borderHeight = fontSize + padding;
      const borderRadius = 6;

      // Obter a cor da variável CSS para o fundo do título
      const quinternaryDark = getComputedStyle(document.documentElement).getPropertyValue('--quinternary-dark').trim();
      const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();

      // Verifica se está em modo escuro e ajusta a cor de fundo
      const backgroundColor = document.documentElement.classList.contains('dark')
      ? quinternaryDark // Cor de fundo para o modo escuro
      : borderColor; // Cor de fundo para o modo claro

      // Desenhar o retângulo de fundo com bordas arredondadas
      ctx.fillStyle = backgroundColor;

      ctx.beginPath();
      ctx.moveTo(x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
      ctx.lineTo(x + borderWidth / 2 - borderRadius, y - borderHeight / 2);
      ctx.quadraticCurveTo(x + borderWidth / 2, y - borderHeight / 2, x + borderWidth / 2, y - borderHeight / 2 + borderRadius);
      ctx.lineTo(x + borderWidth / 2, y + borderHeight / 2 - borderRadius);
      ctx.quadraticCurveTo(x + borderWidth / 2, y + borderHeight / 2, x + borderWidth / 2 - borderRadius, y + borderHeight / 2);
      ctx.lineTo(x - borderWidth / 2 + borderRadius, y + borderHeight / 2);
      ctx.quadraticCurveTo(x - borderWidth / 2, y + borderHeight / 2, x - borderWidth / 2, y + borderHeight / 2 - borderRadius);
      ctx.lineTo(x - borderWidth / 2, y - borderHeight / 2 + borderRadius);
      ctx.quadraticCurveTo(x - borderWidth / 2, y - borderHeight / 2, x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(titleText, x, y);
      ctx.restore();
    }
  }]
});


// Função para atualizar o gráfico de BARRAS de acordo com a escolha
function updateBarChart(selectedQuantity) {
  const selectedMetric = document.getElementById('selectedMetric').value;
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language');
  let title, yAxisUnit;

  switch (selectedMetric) {
    case 'time':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | EXECUTION TIME` : `TAMANHO: ${selectedQuantity} | TEMPO DE EXECUÇÃO`;
      yAxisUnit = 's';
      barChart.data.datasets[0].data = [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ];
      break;
    case 'memory':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | MEMORY USE` : `TAMANHO: ${selectedQuantity} | USO DE MEMORIA`;
      yAxisUnit = 'MB';
      barChart.data.datasets[0].data = [
        graphValues[`bubblesort${selectedQuantity}memory`],
        graphValues[`insertionsort${selectedQuantity}memory`],
        graphValues[`selectionsort${selectedQuantity}memory`],
        graphValues[`heapsort${selectedQuantity}memory`]
      ];
      break;
    case 'iterations':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | ITERATIONS` : `TAMANHO: ${selectedQuantity} | ITERAÇÕES`;
      yAxisUnit = '';
      barChart.data.datasets[0].data = [
        graphValues[`bubblesort${selectedQuantity}iterations`],
        graphValues[`insertionsort${selectedQuantity}iterations`],
        graphValues[`selectionsort${selectedQuantity}iterations`],
        graphValues[`heapsort${selectedQuantity}iterations`]
      ];
      break;
  }

  // Atualiza o título do gráfico
  barChart.options.plugins.dynamicTitle = { title }; // Atualiza a estrutura do título dinâmico
  
  // Ajusta a formatação dos números no eixo Y com base na métrica selecionada
  barChart.options.scales.y.ticks.callback = function (value) {
    switch (selectedMetric) {
      case 'time':
        // Formata com separador de milhares e 's' para segundos
        return new Intl.NumberFormat('de-DE').format(value) + 's';
      case 'memory':
        // Formata com separador de milhares e 'MB' para memória
        return new Intl.NumberFormat('de-DE').format(value) + 'MB';
      case 'iterations':
        // Apenas formata o número com separador de milhares (sem unidade)
        return new Intl.NumberFormat('de-DE').format(value);
    }
  };

  barChart.update();
}

















// Inicialização do gráfico Polar Area
const ctxPolarAreaChart = document.getElementById('polarAreaChart').getContext('2d');
let myPolarAreaChart = new Chart(ctxPolarAreaChart, {
  type: 'polarArea',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
    datasets: [{
      label: 'Metrics',
      data: [null, null, null, null],
      backgroundColor: [
        'rgba(255, 166, 201, 0.5)', // Transparência de 50%
        'rgba(205, 161, 219, 0.5)',
        'rgba(75, 159, 110, 0.5)',
        'rgba(244, 162, 97, 0.5)'
      ],
      borderWidth: 0 // Remove o contorno das áreas do gráfico
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: { top: 90, bottom: 20 } // Aumenta o espaçamento para o título
    },
    scales: {
      r: {
        grid: {
          color: '#FFFFFF'
        },
        ticks: {
          color: '#FFFFFF',
          font: {
            size: 15
          },
          callback: function (value) {
            return new Intl.NumberFormat('de-DE').format(value);
          },
          backdropColor: 'transparent', // Remove o fundo dos números
          count: 5 // Número de ticks desejado
        },
        pointLabels: {
          font: {
            size: 15
          },
          color: '#FFFFFF' // Cor dos rótulos das áreas
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16 // Define o tamanho da fonte para 16
          },
          color: '#FFFFFF', // Cor do texto da legenda (branca)
          generateLabels: function (chart) {
            const originalColors = ['#FFA6C9', '#CDA1DB', '#4B9F6E', '#f4a261'];
            return chart.data.labels.map(function (label, index) {
              return {
                text: label,
                fillStyle: originalColors[index], // Cor original sem transparência para a legenda
                strokeStyle: 'rgba(0, 0, 0, 1)', // Define a borda preta para os itens da legenda
                lineWidth: 1.5, // Espessura da borda da legenda
                fontColor: '#FFFFFF', // Cor do texto da legenda como branco
                size: 16 // Tamanho da fonte
              };
            });
          }
        },
        position: 'top',
        align: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      title: {
        display: false // Desativamos o título padrão do Chart.js para evitar duplicação
      }
    },
    animation: {
      duration: 1000, // 1 segundo de duração da transição
      easing: 'easeInOutQuad' // Tipo de animação
    }
  },
  plugins: [{
    id: 'borderedTitlePluginPolar',
    beforeDraw: (chart) => {
      const titleText = chart.options.plugins.dynamicTitle.title; // Acessa o título dinâmico
      if (!titleText) return; // Certifique-se de que o título está presente
  
      const ctx = chart.ctx;
      const fontSize = 18;
      const fontWeight = 'bold';
      const fontFamily = Chart.defaults.font.family;
  
      ctx.save();
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textWidth = ctx.measureText(titleText).width;
      const x = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
      const y = chart.chartArea.top / 2;
  
      const padding = 10;
      const borderWidth = textWidth + padding * 2;
      const borderHeight = fontSize + padding;
      const borderRadius = 6;
  
      // Obter a cor da variável CSS para o fundo do título
      const quinternaryDark = getComputedStyle(document.documentElement).getPropertyValue('--quinternary-dark').trim();
      const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();

      // Verifica se está em modo escuro e ajusta a cor de fundo
      const backgroundColor = document.documentElement.classList.contains('dark')
      ? quinternaryDark // Cor de fundo para o modo escuro
      : borderColor; // Cor de fundo para o modo claro

      // Desenhar o retângulo de fundo com bordas arredondadas
      ctx.fillStyle = backgroundColor;
      
      ctx.beginPath();
      ctx.moveTo(x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
      ctx.lineTo(x + borderWidth / 2 - borderRadius, y - borderHeight / 2);
      ctx.quadraticCurveTo(x + borderWidth / 2, y - borderHeight / 2, x + borderWidth / 2, y - borderHeight / 2 + borderRadius);
      ctx.lineTo(x + borderWidth / 2, y + borderHeight / 2 - borderRadius);
      ctx.quadraticCurveTo(x + borderWidth / 2, y + borderHeight / 2, x + borderWidth / 2 - borderRadius, y + borderHeight / 2);
      ctx.lineTo(x - borderWidth / 2 + borderRadius, y + borderHeight / 2);
      ctx.quadraticCurveTo(x - borderWidth / 2, y + borderHeight / 2, x - borderWidth / 2, y + borderHeight / 2 - borderRadius);
      ctx.lineTo(x - borderWidth / 2, y - borderHeight / 2 + borderRadius);
      ctx.quadraticCurveTo(x - borderWidth / 2, y - borderHeight / 2, x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
      ctx.closePath();
      ctx.fill();
  
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(titleText, x, y);
      ctx.restore();
    }
  }]
});

// Função para atualizar o gráfico Polar Area com base na métrica selecionada
function updatePolarAreaChart(selectedQuantity) {
  const selectedMetric = document.getElementById('selectedMetric').value;
  const selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language');
  let title, data;

  switch (selectedMetric) {
    case 'time':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | EXECUTION TIME` : `TAMANHO: ${selectedQuantity} | TEMPO DE EXECUÇÃO`;
      data = [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ];
      break;
    case 'memory':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | MEMORY USE` : `TAMANHO: ${selectedQuantity} | USO DE MEMÓRIA`;
      data = [
        graphValues[`bubblesort${selectedQuantity}memory`],
        graphValues[`insertionsort${selectedQuantity}memory`],
        graphValues[`selectionsort${selectedQuantity}memory`],
        graphValues[`heapsort${selectedQuantity}memory`]
      ];
      break;
    case 'iterations':
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | ITERATIONS` : `TAMANHO: ${selectedQuantity} | ITERAÇÕES`;
      data = [
        graphValues[`bubblesort${selectedQuantity}iterations`],
        graphValues[`insertionsort${selectedQuantity}iterations`],
        graphValues[`selectionsort${selectedQuantity}iterations`],
        graphValues[`heapsort${selectedQuantity}iterations`]
      ];
      break;
  }

  // Atualiza os dados do gráfico
  myPolarAreaChart.data.datasets[0].data = data;
  myPolarAreaChart.options.plugins.dynamicTitle = { title }; // Atualiza o título

  // Adiciona a formatação de ticks no gráfico Polar Area
  myPolarAreaChart.options.scales.r.ticks.callback = function (value) {
    switch (selectedMetric) {
      case 'time':
        // Formata com separador de milhares e 's' para segundos
        return new Intl.NumberFormat('de-DE').format(value) + 's';
      case 'memory':
        // Formata com separador de milhares e 'MB' para memória
        return new Intl.NumberFormat('de-DE').format(value) + 'MB';
      case 'iterations':
        // Apenas formata o número com separador de milhares (sem unidade)
        return new Intl.NumberFormat('de-DE').format(value);
      default:
        return value; // Retorna o valor original se não houver correspondência
    }
  };

  myPolarAreaChart.data.datasets[0].data = data; // Atualiza os dados
  myPolarAreaChart.options.plugins.dynamicTitle = { title }; // Atualiza o título
  myPolarAreaChart.update(); // Atualiza o gráfico
}



















// Inicialização do gráfico de WAP
const ctxWAP = document.getElementById('barChartWAP').getContext('2d');
let barChartWAP = new Chart(ctxWAP, {
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
    datasets: [{
      label: '',
      data: [], // Inicialmente vazio
      backgroundColor: [
        '#FFA6C9', // Cor para Bubblesort
        '#CDA1DB', // Cor para Insertionsort
        '#4B9F6E', // Cor para Selectionsort
        '#f4a261'  // Cor para Heapsort
      ],
      borderColor: '#000000', // Cor da borda das barras
      borderWidth: 1.5
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 20, // Margem superior
        bottom: 20
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + ' WAP'; // Exibe o valor com ' WAP'
          },
          color: '#FFFFFF', // Cor do texto dos ticks do eixo Y
          font: {
            size: 15 // Tamanho da fonte dos ticks do eixo Y
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas de grade (mais suave)
          lineWidth: 1, // Largura das linhas de grade
          borderDash: [5, 5] // Estilo tracejado para as linhas de grade
        }
      },
      x: {
        ticks: {
          color: '#FFFFFF', // Cor do texto dos ticks do eixo X
          font: {
            size: 17 // Tamanho da fonte dos ticks do eixo X
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas de grade (mais suave)
          lineWidth: 1, // Largura das linhas de grade
          borderDash: [5, 5] // Estilo tracejado para as linhas de grade
        }
      }
    },
    plugins: {
      title: {
        display: false, // Desativa o título padrão do Chart.js
      },
      legend: {
        display: true, // Mantém a legenda visível
        labels: {
          generateLabels: function (chart) {
            return chart.data.datasets.map((dataset, i) => {
              return {
                text: dataset.label, // Exibe o título do conjunto de dados
                fillStyle: 'rgba(0, 0, 0, 0)', // Cor de preenchimento transparente
                strokeStyle: 'rgba(0, 0, 0, 0)', // Define a borda transparente
                lineWidth: 0, // Define a largura da borda como 0
                index: i // Índice do dataset
              };
            });
          },
          color: '#FFFFFF', // Define a cor do texto da legenda como branco
          font: {
            size: 16 // Define o tamanho da fonte da legenda
          },
          padding: 20 // Adiciona espaçamento entre os itens da legenda e o gráfico
        }
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label;
          },
        },
        backgroundColor: '#000000', // Cor de fundo do tooltip
        titleColor: '#FFFFFF', // Cor do texto do título do tooltip
        bodyColor: '#FFFFFF', // Cor do texto do corpo do tooltip
        titleFont: {
          size: 14 // Tamanho da fonte do título do tooltip
        },
        bodyFont: {
          size: 14 // Tamanho da fonte do corpo do tooltip
        }
      }
    }
  },
  plugins: [
    {
      id: 'lineRightPlugin',
      afterDraw: function(chart) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;

        // Define a cor e largura da linha
        ctx.save();
        ctx.strokeStyle = '#FFFFFF'; // Cor da linha
        ctx.lineWidth = 1.2;

        // Desenha a linha vertical à direita
        ctx.beginPath();
        ctx.moveTo(chartArea.right, chartArea.top);
        ctx.lineTo(chartArea.right, chartArea.bottom);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'borderedTitlePlugin',
      beforeDraw: (chart) => {
        const titleText = chart.options.plugins.title.text; // Acessa o título dinâmico
        const ctx = chart.ctx;
        const fontSize = 18;
        const fontWeight = 'bold';
        const fontFamily = Chart.defaults.font.family;

        ctx.save();
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textWidth = ctx.measureText(titleText).width;
        const x = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
        const y = chart.chartArea.top / 2;

        const padding = 10;
        const borderWidth = textWidth + padding * 2;
        const borderHeight = fontSize + padding;
        const borderRadius = 6;

        // Obter a cor da variável CSS para o fundo do título
        const quinternaryDark = getComputedStyle(document.documentElement).getPropertyValue('--quinternary-dark').trim();
        const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();

        // Verifica se está em modo escuro e ajusta a cor de fundo
        const backgroundColor = document.documentElement.classList.contains('dark')
        ? quinternaryDark // Cor de fundo para o modo escuro
        : borderColor; // Cor de fundo para o modo claro

        // Desenhar o retângulo de fundo com bordas arredondadas
        ctx.fillStyle = backgroundColor;

        ctx.beginPath();
        ctx.moveTo(x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
        ctx.lineTo(x + borderWidth / 2 - borderRadius, y - borderHeight / 2);
        ctx.quadraticCurveTo(x + borderWidth / 2, y - borderHeight / 2, x + borderWidth / 2, y - borderHeight / 2 + borderRadius);
        ctx.lineTo(x + borderWidth / 2, y + borderHeight / 2 - borderRadius);
        ctx.quadraticCurveTo(x + borderWidth / 2, y + borderHeight / 2, x + borderWidth / 2 - borderRadius, y + borderHeight / 2);
        ctx.lineTo(x - borderWidth / 2 + borderRadius, y + borderHeight / 2);
        ctx.quadraticCurveTo(x - borderWidth / 2, y + borderHeight / 2, x - borderWidth / 2, y + borderHeight / 2 - borderRadius);
        ctx.lineTo(x - borderWidth / 2, y - borderHeight / 2 + borderRadius);
        ctx.quadraticCurveTo(x - borderWidth / 2, y - borderHeight / 2, x - borderWidth / 2 + borderRadius, y - borderHeight / 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(titleText, x, y);
        ctx.restore();
      }
    }
  ]
});




// Função para calcular o WAP para cada algoritmo
function wap(selectedQuantity) {
  const algorithms = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort'];

// Definir divisores dinâmicos baseados no tamanho do array
let iterationDivisor, interationsWeight, timeWeight, memoryWeight;

switch (selectedQuantity) {
  case '250':
    iterationDivisor = 10000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  case '500':
    iterationDivisor = 10000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  case '1000':
    iterationDivisor = 10000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  case '2500':
    iterationDivisor = 100000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  case '7500':
    iterationDivisor = 1000000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  case '15000':
    iterationDivisor = 10000000;
    interationsWeight = 2;
    timeWeight = 14;
    memoryWeight = 14;
    break;
  default:
    iterationDivisor = 1; // Default caso não tenha valor selecionado
    interationsWeight = 1;
    timeWeight = 1;
    memoryWeight = 1;
}


  return algorithms.map(tipo => {
    
    let interaionsWAP = graphValues[`${tipo}${selectedQuantity}${"iterations"}`];
    let timeWAP = graphValues[`${tipo}${selectedQuantity}${"time"}`];
    let memoryWAP = graphValues[`${tipo}${selectedQuantity}${"memory"}`];
    // Calcula o WAP com base na fórmula
    return ((interaionsWAP / iterationDivisor) * interationsWeight ) + (timeWAP * timeWeight) + (memoryWAP * memoryWeight) / 30;
  });
}

// Função para atualizar o gráfico de BARRAS com a métrica WAP
function updateBarChartWAP(selectedQuantity) { // Adicione selectedQuantity como parâmetro
  const data = wap(selectedQuantity); // Calcula os valores para WAP
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language'); // Obtém a linguagem ativa

  barChartWAP.data.datasets[0].data = data; // Atualiza os dados do gráfico com os resultados WAP

  // Mantém o formato dos ticks do eixo Y
  barChartWAP.options.scales.y.ticks.callback = function (value) {
    return value + ' WAP'; // Mantém a unidade WAP
  };

  // Atualiza o título apenas se ele for diferente do título atual
  var title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | WAP METRIC` : `TAMANHO: ${selectedQuantity} | MÉTRICA WAP`;
  
  // Limpa o texto do título antes de definir um novo
  if (barChartWAP.options.plugins.title.text !== title) {
    barChartWAP.options.plugins.title.text = title; // Atualiza o título
  }

  // Adiciona uma condição para evitar duplicação
  if (barChartWAP.options.plugins.title.text !== '') {
    barChartWAP.options.plugins.title.text = title; // Atualiza o título
  }

  barChartWAP.update(); // Atualiza o gráfico para refletir as mudanças
}
