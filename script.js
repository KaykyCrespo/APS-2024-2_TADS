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

// Adicionar um método para redefinir o estado
function resetTestState() {
  // Limpe ou redefina as variáveis globais ou elementos necessários
  sortType = "";
  sortArraySize = [];
  document.getElementById("unsorted-array").innerHTML = "[]";
  document.getElementById("sorted-array").innerHTML = "[]";
}




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
          // Resetar o estado do teste após mudar o idioma
        resetTestState();
      });
  });
      });




// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript

const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

let showSettingsDropdown = false;

const sortingAlgorithms = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort'];
const sizes = [250, 500, 1000, 2500, 7500, 15000];
const selectedQuantity = 250; // Defina a quantidade inicial de números

const graphValues1 = {};

sortingAlgorithms.forEach(algorithm => {
  sizes.forEach(size => {
    graphValues1[`${algorithm}${size}`] = {
      time: null,
      memory: null,
      iterations: null
    };
  });
});


const graphValues = {
  bubblesort: {
    time: null,
    memory: null,
    iterations: null
  },
  insertionsort: {
    time: null,
    memory: null,
    iterations: null
  },
  selectionsort: {
    time: null,
    memory: null,
    iterations: null
  },
  heapsort: {
    time: null,
    memory: null,
    iterations: null
  }
}


function handleShowSettings(){
    const settingsDropdown = document.getElementById("settings-dropdown");
    const settingsButton = document.getElementById("settings-button");
    const settingsButtonImg = document.getElementById("setting-button-img");
    
    
    showSettingsDropdown = !showSettingsDropdown
    
    if (showSettingsDropdown){
      settingsDropdown.style.visibility = "visible"
      settingsDropdown.style.opacity = "1"
      settingsButton.style.borderRadius = "0.5vw 0.5vw 0 0" 
      settingsButtonImg.style.transform = "rotate(90deg)"

    } else {
      settingsDropdown.style.visibility = "hidden"
      settingsDropdown.style.opacity = "0"
      settingsButton.style.borderRadius = "0.5vw" 
      settingsButtonImg.style.transform = "rotate(0deg)"

    }
}

// Função pra atualizar gráficos
function updateAllGraphs(){
  const selectedQuantity = document.getElementById("selectedQuantity").value
  updateBarChart(selectedQuantity);
  updatePieChart(selectedQuantity);
  updateBarChartWAP(selectedQuantity);
  updatePolarAreaChart(selectedQuantity);
}

window.onload = resetInputs;

function showAlertBox(message, category){
  alertMessage.innerHTML = message;
  alertBox.style.display = "flex";

  if (category === 'success') {
      alertBox.style.backgroundColor = 'green';
  } else {
      alertBox.style.backgroundColor = '#f36464';
  }

  setTimeout(() => {
      alertBox.style.display = "none";
  }, 3000);
}

function resetInputs() {
  document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
      radio.checked = false;
  });
  document.querySelectorAll('input[name="arraySize"]').forEach(radio => {
      radio.checked = false;
  });
  document.getElementById("userArrayInput").value = null
  document.getElementById("arraySortedResponse").value = null
}



// Função para definir os valores dos graficos
function setGraphValues(sort, type, value) {
  arraySize = document.querySelector('input[name="arraySize"]:checked').value
  if (graphValues[sort]) {
      if (type in graphValues[sort]) {
          graphValues[sort][type] = value;
          graphValues1[`${sort}${arraySize}${type}`] = value;
      }
      updateAllGraphs();
    }
}
























// Inicialização do gráfico de BARRAS
const data = {
  time: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time], // em segundos
  memory: [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory], // em GB
  iterations: [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations] // Corrigido para "iterations"
};

const ctxLine = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctxLine, {
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
    datasets: [{
      label: ``, // Título inicial com a quantidade
      data: [
        graphValues1[`bubblesort${selectedQuantity}time`],
        graphValues1[`insertionsort${selectedQuantity}time`],
        graphValues1[`selectionsort${selectedQuantity}time`],
        graphValues1[`heapsort${selectedQuantity}time`]
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
          callback: function(value) {
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
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas de grade (suave)
          lineWidth: 1, // Largura das linhas de grade
          borderDash: [5, 5] // Estilo tracejado para as linhas de grade
        }
      }
    },
    plugins: {
      legend: {
        display: true, // Mantém a legenda visível
        labels: {
          generateLabels: function(chart) {
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
          color: '#FFFFFF', // Define a cor do título da legenda como branco
          font: {
            size: 18, // Aumentado para um tamanho maior
            weight: 'bold' // Define o título em negrito
          },
        }
      },
      tooltip: {
        callbacks: {
          title: function(tooltipItems) {
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
  }
});

// Função para atualizar o gráfico de BARRAS de acordo com a escolha
function updateBarChart(selectedQuantity) {
  const selectedMetric = document.getElementById('selectedMetric').value;
  let label, yAxisUnit, barColors;

  // Alterar o conjunto de dados e o eixo Y de acordo com a métrica selecionada
  switch (selectedMetric) {
    case 'time':
      label = `SIZE: ${selectedQuantity} | EXECUTION TIME`; // Atualizado para incluir a quantidade
      yAxisUnit = 's';
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}time`], 
        graphValues1[`insertionsort${selectedQuantity}time`], 
        graphValues1[`selectionsort${selectedQuantity}time`], 
        graphValues1[`heapsort${selectedQuantity}time`]
      ];
      break;
    case 'memory':
      label = `SIZE: ${selectedQuantity} | MEMORY`; // Atualizado para incluir a quantidade
      yAxisUnit = 'GB'; // Corrigido para GB
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}memory`], 
        graphValues1[`insertionsort${selectedQuantity}memory`], 
        graphValues1[`selectionsort${selectedQuantity}memory`], 
        graphValues1[`heapsort${selectedQuantity}memory`]
      ];
      break;
    case 'iterations':
      label = `SIZE: ${selectedQuantity} | ITERATIONS`; // Atualizado para incluir a quantidade
      yAxisUnit = '';
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}iterations`], 
        graphValues1[`insertionsort${selectedQuantity}iterations`], 
        graphValues1[`selectionsort${selectedQuantity}iterations`], 
        graphValues1[`heapsort${selectedQuantity}iterations`]
      ];
      break;
  }

  // Atualiza o título do gráfico
  barChart.options.plugins.legend.title.text = label; // Atualiza o título
  // Atualiza o gráfico
  barChart.options.scales.y.ticks.callback = function(value) {
    return value + yAxisUnit; // Atualiza a unidade do eixo Y
  };

  barChart.update();
}















// Inicialização do gráfico de pizza
// Inicialização do gráfico de pizza
const ctxPie = document.getElementById('pieChart').getContext('2d');
let myPieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
      datasets: [{
          label: '',
          data: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time],
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
        color: '#FFFFFF', // Cor do título
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
  var titleText; // Variável para o título

    switch (metric) {
        case 'time':
            data = [
              graphValues1[`bubblesort${selectedQuantity}time`], 
              graphValues1[`insertionsort${selectedQuantity}time`], 
              graphValues1[`selectionsort${selectedQuantity}time`], 
              graphValues1[`heapsort${selectedQuantity}time`]
            ];
            break;
        case 'memory':
            console.log("Métrica no memory", metric)
            data = [
              graphValues1[`bubblesort${selectedQuantity}memory`], 
              graphValues1[`insertionsort${selectedQuantity}memory`], 
              graphValues1[`selectionsort${selectedQuantity}memory`], 
              graphValues1[`heapsort${selectedQuantity}memory`]
            ];
            break;
        case 'iterations':
            console.log("Métrica no iterations ", metric)
            data = [
              graphValues1[`bubblesort${selectedQuantity}iterations`], 
              graphValues1[`insertionsort${selectedQuantity}iterations`], 
              graphValues1[`selectionsort${selectedQuantity}iterations`], 
              graphValues1[`heapsort${selectedQuantity}iterations`]
            ];
            break;
        default:
            data = [0, 0, 0, 0];
    }
  // Define o título de acordo com a métrica selecionada
  switch (metric) {
      case 'time':
          data = [
            graphValues1[`bubblesort${selectedQuantity}time`], 
            graphValues1[`insertionsort${selectedQuantity}time`], 
            graphValues1[`selectionsort${selectedQuantity}time`], 
            graphValues1[`heapsort${selectedQuantity}time`]
          ];
          titleText = `SIZE: ${selectedQuantity} | EXECUTION TIME`; // Título para tempo
          break;
      case 'memory':
          data = [
            graphValues1[`bubblesort${selectedQuantity}memory`], 
            graphValues1[`insertionsort${selectedQuantity}memory`], 
            graphValues1[`selectionsort${selectedQuantity}memory`], 
            graphValues1[`heapsort${selectedQuantity}memory`]
          ];
          titleText = `SIZE: ${selectedQuantity} | MEMORY`; // Título para memória
          break;
      case 'iterations':
          data = [
            graphValues1[`bubblesort${selectedQuantity}iterations`], 
            graphValues1[`insertionsort${selectedQuantity}iterations`], 
            graphValues1[`selectionsort${selectedQuantity}iterations`], 
            graphValues1[`heapsort${selectedQuantity}iterations`]
          ];
          titleText = `SIZE: ${selectedQuantity} | ITERATIONS`; // Título para iterações
          break;
      default:
          data = [0, 0, 0, 0]; // Valores padrão
          titleText = `SIZE: ${selectedQuantity} | EXECUTION TIME`; // Título padrão
  }

  // Atualiza os dados e o título do gráfico
  myPieChart.data.labels = labels;
  myPieChart.data.datasets[0].data = data;
  myPieChart.options.plugins.title.text = titleText; // Atualiza o título do gráfico

  myPieChart.update(); // Atualiza o gráfico
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
          callback: function(value) {
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
        color: '#FFFFFF', // Cor do título
        font: {
          size: 18 // Tamanho da fonte do título
        }
      },
      legend: {
        display: true, // Mantém a legenda visível
        labels: {
          generateLabels: function(chart) {
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
          title: function(tooltipItems) {
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
  }
});

// Função para calcular o WAP para cada algoritmo
function wap() {
    const algorithms = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort'];
    
    return algorithms.map(tipo => {
        let interaionsWAP = graphValues[tipo].iterations;
        let timeWAP = graphValues[tipo].time;
        let memoryWAP = graphValues[tipo].memory;

        // Calcula o WAP com base na fórmula
        return ((interaionsWAP / 10000000) * 2) + (timeWAP * 14) + (memoryWAP * 4) / 20;
    });
}

// Função para atualizar o gráfico de BARRAS com a métrica WAP
function updateBarChartWAP(selectedQuantity) { // Adicione selectedQuantity como parâmetro
    const data = wap(); // Calcula os valores para WAP

    barChartWAP.data.datasets[0].data = data; // Atualiza os dados do gráfico com os resultados WAP

    // Atualiza o título do gráfico com a quantidade selecionada
    barChartWAP.options.plugins.title.text = `SIZE: ${selectedQuantity} | WAP METRIC`; // Atualiza o título dinamicamente
    
    // Mantém o formato dos ticks do eixo Y
    barChartWAP.options.scales.y.ticks.callback = function(value) {
        return value + ' WAP'; // Mantém a unidade WAP
    };
    
    barChartWAP.update(); // Atualiza o gráfico para refletir as mudanças
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
        graphValues.bubblesort.time,
        graphValues.insertionsort.time,
        graphValues.selectionsort.time,
        graphValues.heapsort.time
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
          callback: function(value) {
            return value + 's'; // Você pode personalizar aqui para 'GB' se necessário
          },
          backdropColor: 'transparent', // Remove o fundo dos números
          // Aqui, definimos o número mínimo e máximo de ticks
          count: 5, // Número de ticks que você deseja
          max: Math.max(
            graphValues.bubblesort.time,
            graphValues.insertionsort.time,
            graphValues.selectionsort.time,
            graphValues.heapsort.time
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
          generateLabels: function(chart) {
            const originalColors = ['#FFA6C9', '#CDA1DB', '#4B9F6E', '#f4a261'];
            return chart.data.labels.map(function(label, index) {
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
        color: '#FFFFFF', // Cor do título
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
  var titleText = 'EXECUTION TIME'; // Título padrão
  var yAxisUnit = ''; // Inicializa a unidade do eixo Y

  switch (metric) {
      case 'time':
          data = [
            graphValues1[`bubblesort${selectedQuantity}time`], 
            graphValues1[`insertionsort${selectedQuantity}time`], 
            graphValues1[`selectionsort${selectedQuantity}time`], 
            graphValues1[`heapsort${selectedQuantity}time`]
          ];
          titleText = `SIZE: ${selectedQuantity} | EXECUTION TIME`; // Atualizado para incluir a quantidade
          yAxisUnit = 's'; // Unidade em segundos
          break;
      case 'memory':
          data = [
            graphValues1[`bubblesort${selectedQuantity}memory`], 
            graphValues1[`insertionsort${selectedQuantity}memory`], 
            graphValues1[`selectionsort${selectedQuantity}memory`], 
            graphValues1[`heapsort${selectedQuantity}memory`]
          ];
          titleText = `SIZE: ${selectedQuantity} | MEMORY`; // Atualizado para incluir a quantidade
          yAxisUnit = 'GB'; // Unidade em GB
          break;
      case 'iterations':
          data = [
            graphValues1[`bubblesort${selectedQuantity}iterations`], 
            graphValues1[`insertionsort${selectedQuantity}iterations`], 
            graphValues1[`selectionsort${selectedQuantity}iterations`], 
            graphValues1[`heapsort${selectedQuantity}iterations`]
          ];
          titleText = `SIZE: ${selectedQuantity} | ITERATIONS`; // Atualizado para incluir a quantidade
          yAxisUnit = ''; // Unidade em segundos
          break;
      default:
          data = [0, 0, 0, 0]; // Valores padrão
  }

  myPolarAreaChart.data.labels = labels;
  myPolarAreaChart.data.datasets[0].data = data; // Atualiza os dados do gráfico
  myPolarAreaChart.options.plugins.title.text = titleText; // Atualiza o título do gráfico

  // Atualiza a unidade no eixo Y dependendo da métrica selecionada
  myPolarAreaChart.options.scales.r.ticks.callback = function(value) {
    return value + (metric === 'memory' ? ' GB' : 's'); // Muda para GB ou s baseado na métrica
  };

  myPolarAreaChart.update(); // Atualiza o gráfico
}


















/**
// Plugin para exibir valores ao lado de cada barra
const valueDisplayPlugin = {
  afterDatasetsDraw: function(chart) {
      const ctx = chart.ctx;
      chart.data.datasets.forEach(function(dataset, i) {
          const meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function(element, index) {
                  const dataValue = dataset.data[index];
                  const position = element.tooltipPosition();
                  ctx.font = '12px Arial';
                  ctx.fillStyle = 'black';
                  ctx.fillText(dataValue, position.x, position.y - 10); // Exibe o valor acima da barra
              });
          }
      });
  }
};
 */