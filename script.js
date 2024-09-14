// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript



const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

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
function setGraphValues(name, type, value) {
  if (graphValues[name]) {
      if (type in graphValues[name]) {
          graphValues[name][type] = value;
      }
      updateAllGraphs();
  }
}
// GRÁFICO EM COLUNAS
const data = {
  time: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time], // em segundos
  memory: [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory], // em GB
  iterations: [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations] // Corrigido para "iterations"
};


// Função pra atualizar gráficos
function updateAllGraphs(){
  myChart.data.datasets[0].data = [
    graphValues.bubblesort.time || 0,
    graphValues.insertionsort.time || 0,
    graphValues.selectionsort.time || 0,
    graphValues.heapsort.time || 0
  ];

  myPieChart.data.datasets[0].data = [
    graphValues.bubblesort.time || 0,
    graphValues.insertionsort.time || 0,
    graphValues.selectionsort.time || 0,
    graphValues.heapsort.time || 0
  ];

  myChart.update();
  updatePieChart();
}


// Inicialização do gráfico de linha
const ctxLine = document.getElementById('lineChart').getContext('2d');
let myChart = new Chart(ctxLine, {
  type: 'bar',
  data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
      datasets: [{
          label: 'Time',
          data: data.time,
          backgroundColor: '#f4a261', // Cor de fundo das barras
          borderColor: 'ffffff', // Cor da borda das barras
          borderWidth: 1
      }]
  },
  options: {
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
                  label: function(tooltipItem) {
                      return tooltipItem.label + ': ' + tooltipItem.raw + 's';
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


// Função para atualizar o gráfico de acordo com a seleção do usuário
function updateChart() {
  const selectedMetric = document.getElementById('metricSelectLineChart').value;
  let label, yAxisUnit;

  // Alterar o conjunto de dados e o eixo Y de acordo com a métrica selecionada
  switch (selectedMetric) {
    case 'time':
        label = 'Time';
        yAxisUnit = 's'; 
        myChart.data.datasets[0].data = data.time;
        break;
    case 'memory':
        label = 'Memory';
        yAxisUnit = 'GB';
        myChart.data.datasets[0].data = data.memory;
        break;
    case 'iterations':
        label = 'Iterations';
        yAxisUnit = ''; 
        myChart.data.datasets[0].data = data.iterations;
        break;
}

myChart.data.datasets[0].label = label;
myChart.options.scales.y.ticks.callback = function(value) {
    return value + yAxisUnit;
};
myChart.update();
}




















// Inicialização do gráfico de pizza
var ctxPie = document.getElementById('pieChart').getContext('2d');
var canvas = document.getElementById('pieChart');

var myPieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
        datasets: [{
            label: 'Votes',
            data: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Amount Interations',
                font: {
                    size: 20
                }
            }
        }
    }
});

// Função para atualizar o gráfico de pizza com base na métrica selecionada
function updatePieChart() {
    var metric = document.getElementById('metricSelectPieChart').value;
    var data;
    var labels;

    switch (metric) {
        case 'time':
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time];
            break;
        case 'memory':
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory];
            break;
        case 'iterations':
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations];
            break;
        default:
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [0, 0, 0, 0];
    }

    myPieChart.data.labels = labels;
    myPieChart.data.datasets[0].data = data;
    myPieChart.update();
} 





















//GRAFICO RADAR
var ctxRadar = document.getElementById('radarChart').getContext('2d');
var myRadarChart = new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: ['Time', 'Memory', 'Number of Interactions'],
    datasets: [{
      label: 'Bubblesort',
      data: [0, 0, 0, 0], // Inicializado com 0, será atualizado dinamicamente
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }, {
      label: 'Insertionsort',
      data: [0, 0, 0, 0],
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 2
    }, {
      label: 'Selectionsort',
      data: [0, 0, 0, 0],
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 2
    }, {
      label: 'Heapsort',
      data: [0, 0, 0, 0],
      backgroundColor: 'purple',
      borderColor: 'purple',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comparação Geral'
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});


// Função para atualizar o gráfico de radar com base nas métricas selecionadas
  function updateRadarChart() {
    var metric = document.getElementById('metricRadarChart').value;
    var data;

    switch (metric) {
      case 'time':
          data = [
              graphValues.bubblesort.time || 0,
              graphValues.insertionsort.time || 0,
              graphValues.selectionsort.time || 0,
              graphValues.heapsort.time || 0
          ];
          break;
      case 'memory':
          data = [
              graphValues.bubblesort.memory || 0,
              graphValues.insertionsort.memory || 0,
              graphValues.selectionsort.memory || 0,
              graphValues.heapsort.memory || 0
          ];
          break;
      case 'iterations':
          data = [
              graphValues.bubblesort.iterations || 0,
              graphValues.insertionsort.iterations || 0,
              graphValues.selectionsort.iterations || 0,
              graphValues.heapsort.iterations || 0
          ];
          break;
      default:
          data = [0, 0, 0, 0];
  }

  // Atualizar os datasets do gráfico de radar
  myRadarChart.data.datasets[0].data = [graphValues.bubblesort.time]; 
  myRadarChart.data.datasets[1].data = [graphValues.insertionsort.time]; 
  myRadarChart.data.datasets[2].data = [graphValues.selectionsort.time];
  myRadarChart.data.datasets[3].data = [graphValues.heapsort.time];

  // Atualizar o gráfico
  myRadarChart.update();
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