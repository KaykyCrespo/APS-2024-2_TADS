function toggleMode() {
	const html = document.documentElement // acessando a minha variável através do .documentElement 

	if(html.classList.contains('light')) {
		html.classList.remove('light') //Se na lista de classe do html conter 'light', remover
	}
	else {
		html.classList.add('light') //Caso contrário, adicionar
	}

	//html.classList.toggle("light")

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
    "lang-button-make-test": document.querySelectorAll('#lang-button-make-test')
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
      "lang-iterations": "Iterações"
    }
  };

  function addLanguageToggleEvents() {
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

        
        resetInputs();
        updateAllGraphs();
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
  },
  'portuguese': {
    'empty_input': "O campo não pode estar vazio.",
    'manual_sort_success': "Array manual ordenado com sucesso.",
    'invalid_input': "Entrada inválida no teste de ordenação manual. Por favor, insira inteiros separados por vírgulas.",
    'input_reset_success': "Sucesso! Valores de entrada foram redefinidos.",
    'input_reset_error': "Erro! {error}",
    'fields_not_checked': "Erro! Alguns campos não estão selecionados.",
    'default_alert_message': "Nenhuma língua selecionada, usando configurações padrão.",
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
  alertBox.style.display = "flex";

  // Change the background color based on the category
  if (category === 'success') {
    alertBox.style.backgroundColor = 'green';
  } else {
    alertBox.style.backgroundColor = '#f36464';
  }

  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
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


window.onload = resetInputs;
function resetInputs() {


  document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
    radio.checked = false;
  });
  document.querySelectorAll('input[name="arraySize"]').forEach(radio => {
    radio.checked = false;
  });

  document.getElementById("userArrayInput").value = null
  document.getElementById("arraySortedResponse").value = null
  document.getElementById("ordinationType").value = "repeat"
  document.getElementById("selectedMetric").value = "time"
  document.getElementById("selectedQuantity").value = "250"

  console.log("resetou")
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
        top: 20, // Margem superior
        bottom: 20 // Margem inferior
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF',  // Cor do texto da legenda
          font: {
            size: 16 // Tamanho da fonte da legenda
          }
        },
        position: 'top', // Centraliza a legenda no topo
        align: 'center', // Alinha a legenda ao centro
        padding: 20 // Adiciona espaçamento entre os itens da legenda e o gráfico
      },
      title: {
        display: true,
        text: 'SIZE: 250 | EXECUTION TIME', // Título inicial que será atualizado
        color: '##2a6168 ', // Cor do título
        font: {
          size: 18, // Tamanho do título
          weight: 'bold' // Negrito
        },
      }
    }
  }
});

// Função para atualizar o gráfico de pizza com base na métrica selecionada
function updatePieChart(selectedQuantity) {
  var metric = document.getElementById('selectedMetric').value;
  var data;
  var labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language'); // Obtém a linguagem ativa

  var title; // Variável para o título

  // Define o título de acordo com a métrica selecionada
  switch (metric) {
    case 'time':
      data = [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ];
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | EXECUTION TIME` : `TAMANHO: ${selectedQuantity} | TEMPO DE EXECUÇÃO`; // Texto em inglês
      break;
    case 'memory':
      data = [
        graphValues[`bubblesort${selectedQuantity}memory`],
        graphValues[`insertionsort${selectedQuantity}memory`],
        graphValues[`selectionsort${selectedQuantity}memory`],
        graphValues[`heapsort${selectedQuantity}memory`]
      ];
      title =  selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | MEMORY USE` : `TAMANHO: ${selectedQuantity} | USO DE MEMORIA`; // Texto em inglês
      break;
    case 'iterations':
      data = [
        graphValues[`bubblesort${selectedQuantity}iterations`],
        graphValues[`insertionsort${selectedQuantity}iterations`],
        graphValues[`selectionsort${selectedQuantity}iterations`],
        graphValues[`heapsort${selectedQuantity}iterations`]
      ];
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | ITERATIONS` : `TAMANHO: ${selectedQuantity} | ITERAÇÕES`; // Texto em inglês
      break;
    default:
      data = [0, 0, 0, 0]; // Valores padrão
      title = `SIZE: ${selectedQuantity} | EXECUTION TIME`; // Título padrão
  }

  // Atualiza os dados e o título do gráfico
  myPieChart.data.labels = labels;
  myPieChart.data.datasets[0].data = data;
  myPieChart.options.plugins.title.text = title; // Atualiza o título do gráfico

  myPieChart.update(); // Atualiza o gráfico
}



const ctxLine = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctxLine, {
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
    datasets: [{
      label: '', // Título inicial com a quantidade
      data: [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ],
      backgroundColor: ['#FFA6C9', '#CDA1DB', '#4B9F6E', '#f4a261'],
      borderColor: '#000000', // Cor da borda das barras
      borderWidth: 1.5 // Largura da borda
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 20, // Margem superior
        bottom: 20 // Margem inferior
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + 's'; // Unidade inicial em segundos
          },
          color: '#FFFFFF', // Cor do texto dos ticks do eixo Y
          font: {
            size: 15 // Tamanho da fonte dos ticks do eixo Y
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas de grade (suave)
          lineWidth: 1, // Largura das linhas de grade
          borderDash: [6, 6], // Estilo tracejado para as linhas de grade
          drawBorder: true, // Desenha a borda do eixo Y
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
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas de grade (suave)
          lineWidth: 1, // Largura das linhas de grade
          borderDash: [], // Estilo tracejado para as linhas de grade
          drawBorder: true, // Desenha a borda do eixo Y
        }
      }
    },
    plugins: {
      legend: {
        display: true, // Mantém a legenda visível
        labels: {
          generateLabels: function (chart) {
            const labels = [];
            chart.data.datasets.forEach((dataset, i) => {
              labels.push({
                text: dataset.label, // Exibe apenas o título do conjunto de dados
                fillStyle: 'rgba(0, 0, 0, 0)', // Cor de preenchimento transparente
                strokeStyle: 'rgba(0, 0, 0, 0)', // Define a borda transparente
                lineWidth: 0, // Define a largura da borda como 0
                index: i // Índice do dataset
              });
            });
            return labels;
          },
          color: '#FFFFFF', // Define a cor do texto da legenda como branco
          font: {
            size: 16 // Define o tamanho da fonte da legenda
          },
        },
        title: {
          display: true,
          text: `SIZE: ${selectedQuantity} | EXECUTION TIME`, // Título inicial que será atualizado
          color: '#B2E2E7 ', // Define a cor do título da legenda como branco
          font: {
            size: 18, // Aumentado para um tamanho maior
            weight: 'bold' // Define o título em negrito
          },
        }
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label;
          }
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
    },
    // Definindo a borda do gráfico
    borderColor: '#000000', // Cor da borda do gráfico
    borderWidth: 1.5, // Largura da borda do gráfico
  },
  // Adicionando o plugin para desenhar a linha à direita
  plugins: [{
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
  }]
});

// Função para atualizar o gráfico de BARRAS de acordo com a escolha
function updateBarChart(selectedQuantity) {
  const selectedMetric = document.getElementById('selectedMetric').value;
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language'); // Obtém a linguagem ativa
  let title, yAxisUnit;

  // Define a estrutura do switch baseado na linguagem
    switch (selectedMetric) {
      case 'time':
        title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | EXECUTION TIME` : `TAMANHO: ${selectedQuantity} | TEMPO DE EXECUÇÃO`; // Texto em inglês
        yAxisUnit = 's';
        barChart.data.datasets[0].data = [
          graphValues[`bubblesort${selectedQuantity}time`],
          graphValues[`insertionsort${selectedQuantity}time`],
          graphValues[`selectionsort${selectedQuantity}time`],
          graphValues[`heapsort${selectedQuantity}time`]
        ];
        break;
      case 'memory':
        title =  selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | MEMORY USE` : `TAMANHO: ${selectedQuantity} | USO DE MEMORIA`; // Texto em inglês
        yAxisUnit = 'MB'; // Corrigido para GB
        barChart.data.datasets[0].data = [
          graphValues[`bubblesort${selectedQuantity}memory`],
          graphValues[`insertionsort${selectedQuantity}memory`],
          graphValues[`selectionsort${selectedQuantity}memory`],
          graphValues[`heapsort${selectedQuantity}memory`]
        ];
        break;
      case 'iterations':
        title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | ITERATIONS` : `TAMANHO: ${selectedQuantity} | ITERAÇÕES`; // Texto em inglês
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
  barChart.options.plugins.legend.title.text = title; // Atualiza o título
  // Atualiza o gráfico
  barChart.options.scales.y.ticks.callback = function (value) {
    return value + yAxisUnit; // Atualiza a unidade do eixo Y
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
      data: [
        null,
        null,
        null,
        null
      ],
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
      padding: { top: 20, bottom: 20 }
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
          // Aqui, adicionamos a unidade ao lado do número
          callback: function (value) {
            return value + 's'; // Você pode personalizar aqui para 'GB' se necessário
          },
          backdropColor: 'transparent', // Remove o fundo dos números
          // Aqui, definimos o número mínimo e máximo de ticks
          count: 5, // Número de ticks que você deseja
          max: Math.max(
            null,
            null,
            null,
            null
          ) + 10 // Ajuste para garantir que o gráfico tenha espaço
        },
        pointLabels: {
          font: {
            size: 1
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
        display: true,
        text: 'SIZE: 250 | EXECUTION TIME', // Título inicial que será atualizado
        color: '#B2E2E7', // Cor do título
        font: {
          size: 18, // Tamanho do título
          weight: 'bold' // Negrito
        },
      }
    },

    animation: {
      duration: 1000, // 1 segundo de duração da transição
      easing: 'easeInOutQuad' // Tipo de animação
    }
  }
});

/// Função para atualizar o gráfico Polar Area com base na métrica selecionada
function updatePolarAreaChart(selectedQuantity) {
  var metric = document.getElementById('selectedMetric').value;
  var data;
  var labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
  var title; // Título padrão
  var yAxisUnit = ''; // Inicializa a unidade do eixo Y
  let selectedLanguage = document.querySelector('.langWrap .active').getAttribute('language'); // Obtém a linguagem ativa

  switch (metric) {
    case 'time':
      data = [
        graphValues[`bubblesort${selectedQuantity}time`],
        graphValues[`insertionsort${selectedQuantity}time`],
        graphValues[`selectionsort${selectedQuantity}time`],
        graphValues[`heapsort${selectedQuantity}time`]
      ];
      title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | EXECUTION TIME` : `TAMANHO: ${selectedQuantity} | TEMPO DE EXECUÇÃO`; // Texto em inglês
      yAxisUnit = 's'; // Unidade em segundos
      break;
    case 'memory':
      data = [
        graphValues[`bubblesort${selectedQuantity}memory`],
        graphValues[`insertionsort${selectedQuantity}memory`],
        graphValues[`selectionsort${selectedQuantity}memory`],
        graphValues[`heapsort${selectedQuantity}memory`]
      ];
      title =  selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | MEMORY USE` : `TAMANHO: ${selectedQuantity} | USO DE MEMORIA`; // Texto em inglês
      yAxisUnit = 'MB'; // Unidade em GB
      break;
    case 'iterations':
      data = [
        graphValues[`bubblesort${selectedQuantity}iterations`],
        graphValues[`insertionsort${selectedQuantity}iterations`],
        graphValues[`selectionsort${selectedQuantity}iterations`],
        graphValues[`heapsort${selectedQuantity}iterations`]
      ];
      title = `SIZE: ${selectedQuantity} | ITERATIONS`; // Atualizado para incluir a quantidade
      yAxisUnit = ''; // Unidade em segundos
      break;
    default:
      data = [0, 0, 0, 0]; // Valores padrão
  }

  myPolarAreaChart.data.labels = labels;
  myPolarAreaChart.data.datasets[0].data = data; // Atualiza os dados do gráfico
  myPolarAreaChart.options.plugins.title.text = title; // Atualiza o título do gráfico

  // Atualiza a unidade no eixo Y dependendo da métrica selecionada
  myPolarAreaChart.options.scales.r.ticks.callback = function (value) {
    return value + (metric === 'memory' ? ' MB' : 's'); // Muda para GB ou s baseado na métrica
  };

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
      data: [],
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
        display: true,
        text: 'SIZE: 250 | WAP METRIC', // Título inicial que será atualizado
        color: '#B2E2E7', // Cor do título
        font: {
          size: 18 // Tamanho da fonte do título
        }
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
  // Adicionando o plugin para desenhar a linha à direita
  plugins: [{
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
  }]
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

  var title = selectedLanguage === "english" ? `SIZE: ${selectedQuantity} | WAP METRIC` : `TAMANHO: ${selectedQuantity} | MÉTRICA WAP`; // Texto em inglês;
  barChartWAP.options.plugins.title.text = title;
  barChartWAP.update(); // Atualiza o gráfico para refletir as mudanças
}