// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript


const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

const sortingAlgorithms = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort'];
const sizes = [250, 500, 1000, 2500, 7500, 15000];

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

// função para resetar os inputs
document.getElementById('resetar').addEventListener('click', function() {
  // Seleciona todos os inputs de tipo 'radio' e os desmarca
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
      radio.checked = false;
  });
});

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
const ctxLine = document.getElementById('barChart').getContext('2d');
// GRÁFICO EM COLUNAS

const data = {
  time: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time], // em segundos
  memory: [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory], // em GB
  iterations: [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations] // Corrigido para "iterations"
};
let barChart = new Chart(ctxLine, {
  
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
    datasets: [{
      label: 'Time',
      data: data.time,
      backgroundColor: '#7FFFD4', // Cor de fundo das barras
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
            return value + 's'; // Unidade inicial em segundos
          },
          color: '#FFFFFF', // Cor do texto dos ticks do eixo Y
          font: {
            size: 20 // Tamanho da fonte dos ticks do eixo Y
          }
        },
        grid: {
          color: '#FFFFFF' // Cor das linhas de grade do eixo Y
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
          color: '#FFFFFF' // Cor das linhas de grade do eixo X
        }
      }
    },
    plugins: {
      legend: {
        position: 'top', // Centraliza a legenda no topo
        align: 'center', // Alinha a legenda ao centro
        labels: {
          color: '#FFFFFF', // Cor do texto da legenda
          font: {
            size: 16 // Tamanho da fonte da legenda
          },
          padding: 20 // Adiciona espaçamento entre os itens da legenda e o gráfico
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
    }
  }
});


// Função para atualizar o gráfico de BARRAS de acordo com a escolha
// Função para atualizar o gráfico de BARRAS de acordo com a escolha
function updateBarChart(selectedQuantity) {
  const selectedMetric = document.getElementById('selectedMetric').value;
  let label, yAxisUnit, barColors;
  
  // Alterar o conjunto de dados e o eixo Y de acordo com a métrica selecionada
  switch (selectedMetric) {
    case 'time':
      label = 'Time';
      yAxisUnit = 's';
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}time`], 
        graphValues1[`insertionsort${selectedQuantity}time`], 
        graphValues1[`selectionsort${selectedQuantity}time`], 
        graphValues1[`heapsort${selectedQuantity}time`]
      ];
      barColors = ['#FFA6C9','#CDA1DB','#4B9F6E','#f4a261'];
      break;
    case 'memory':
      label = 'Memory';
      yAxisUnit = 'KBs';
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}memory`], 
        graphValues1[`insertionsort${selectedQuantity}memory`], 
        graphValues1[`selectionsort${selectedQuantity}memory`], 
        graphValues1[`heapsort${selectedQuantity}memory`]
      ];
      barColors = ['#FFA6C9','#CDA1DB','#4B9F6E','#f4a261'];
      break;
    case 'iterations':
      label = 'Iterations';
      yAxisUnit = '';
      barChart.data.datasets[0].data = [
        graphValues1[`bubblesort${selectedQuantity}iterations`], 
        graphValues1[`insertionsort${selectedQuantity}iterations`], 
        graphValues1[`selectionsort${selectedQuantity}iterations`], 
        graphValues1[`heapsort${selectedQuantity}iterations`]
      ];
      barColors = ['#FFA6C9','#CDA1DB','#4B9F6E','#f4a261'];
      break;
  }

  // Atualiza a cor dos gráficos
  barChart.data.datasets[0].backgroundColor = barColors;
  barChart.data.datasets[0].label = label;
  
  // Atualiza a unidade do eixo Y
  barChart.options.scales.y.ticks.callback = function(value) {
    return value + yAxisUnit;
  };

  // Atualiza o gráfico
  barChart.update();
}












// Inicialização do gráfico de pizza
const ctxPie = document.getElementById('pieChart').getContext('2d');
let myPieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
      datasets: [{
          label: 'Votes',
          data: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time],
          backgroundColor: [
              '#FFA6C9',
              '#CDA1DB ',
              '#4B9F6E   ',
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
    }
  }
});

// Função para atualizar o gráfico de pizza com base na métrica selecionada
function updatePieChart(selectedQuantity) {
    var metric = document.getElementById('selectedMetric').value;
    var data;
    labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];

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
            data = [
              graphValues1[`bubblesort${selectedQuantity}memory`], 
              graphValues1[`insertionsort${selectedQuantity}memory`], 
              graphValues1[`selectionsort${selectedQuantity}memory`], 
              graphValues1[`heapsort${selectedQuantity}memory`]
            ];
        case 'iterations':
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

    myPieChart.data.labels = labels;
    myPieChart.data.datasets[0].data = data;
    myPieChart.update();
}




















// Inicialização do gráfico de BARRAS
const ctxWAP = document.getElementById('barChartWAP').getContext('2d');
let barChartWAP = new Chart(ctxWAP, {
  type: 'bar',
  data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
      datasets: [{
          label: 'WAP Metric',
          data: [],
          backgroundColor: [
            '#FFA6C9', // Cor para Bubblesort
            '#CDA1DB', // Cor para Insertionsort
            '#4B9F6E', // Cor para Selectionsort
            '#f4a261'  // Cor para Heapsort
        ],
          borderColor: '#000000', // Cor da borda das barras
          borderWidth: 2.5
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
                      return value + 'WAP'; // Unidade inicial em segundos
                  },
                  color: '#FFFFFF', // Cor do texto dos ticks do eixo Y
                  font: {
                      size: 20 // Tamanho da fonte dos ticks do eixo Y
                  }
              },
              grid: {
                  color: '#FFFFFF' // Cor das linhas de grade do eixo Y
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
                  color: '#FFFFFF' // Cor das linhas de grade do eixo X
              }
          }
      },
      plugins: {
          legend: {
              labels: {
                  color: '#FFFFFF', // Cor do texto da legenda
                  font: {
                      size: 16 // Tamanho da fonte da legenda
                  }
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
function updateBarChartWAP() {
    const data = wap(); // Calcula os valores para WAP

    barChartWAP.data.datasets[0].data = data; // Atualiza os dados do gráfico com os resultados WAP
    barChartWAP.data.datasets[0].label = 'WAP Metric'; // Atualiza o rótulo do conjunto de dados
    barChartWAP.options.scales.y.ticks.callback = function(value) {
        return value + ''; // Ajuste de unidade (opcional)
    };
    barChartWAP.update(); // Atualiza o gráfico para refletir as mudanças
}

















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
      ], // Dados iniciais
      backgroundColor: [
        '#FFA6C9',
        '#CDA1DB',
        '#4B9F6E',
        '#f4a261'
      ],
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 1.5
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
          color: '#FFFFFF' // Define a cor da grade como branco
        },
        ticks: {
          color: '#FFFFFF', // Define a cor dos ticks como branco
          font: {
            size: 18 // Aumenta o tamanho da fonte dos ticks
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF', // Cor do texto da legenda
          font: {
            size: 18 // Aumenta o tamanho da fonte da legenda
          }
        },
        position: 'top',
        align: 'center',
        padding: 20,
        // Remove o fundo da legenda
        backgroundColor: 'rgba(0, 0, 0, 0)' // Define o fundo como transparente
      }
    }
  }
});




// Função para atualizar o gráfico Polar Area com base na métrica selecionada
function updatePolarAreaChart(selectedQuantity) {
  var metric = document.getElementById('selectedMetric').value;
  var data;
  var labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];

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
          data = [
            graphValues1[`bubblesort${selectedQuantity}memory`], 
            graphValues1[`insertionsort${selectedQuantity}memory`], 
            graphValues1[`selectionsort${selectedQuantity}memory`], 
            graphValues1[`heapsort${selectedQuantity}memory`]
          ];
          break;
      case 'iterations':
          data = [
            graphValues1[`bubblesort${selectedQuantity}iterations`], 
            graphValues1[`insertionsort${selectedQuantity}iterations`], 
            graphValues1[`selectionsort${selectedQuantity}iterations`], 
            graphValues1[`heapsort${selectedQuantity}iterations`]
          ];
          break;
      default:
          data = [0, 0, 0, 0]; // Valores padrão caso nenhuma métrica seja selecionada
  }

  myPolarAreaChart.data.labels = labels;
  myPolarAreaChart.data.datasets[0].data = data; // Atualiza os dados do gráfico
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