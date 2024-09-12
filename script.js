// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript



const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

const graphValues = {
  bubblesort: {
    time: null,
    memory: null,
    cpu: null
  },
  insertionsort: {
    time: null,
    memory: null,
    cpu: null
  },
  selectionsort: {
    time: null,
    memory: null,
    cpu: null
  },
  heapsort: {
    time: null,
    memory: null,
    cpu: null
  }
}

window.onload = resetInputs();


// Função para definir os valores dos graficos
function setGraphValues(name, type, value) {
  console.log(name, type, value);
  if (graphValues[name]) {
      if (type in graphValues[name]) {
          // Verifica se o valor atual já existe e soma o novo valor
          if (graphValues[name][type]) {
              graphValues[name][type] = parseFloat(graphValues[name][type]) + parseFloat(value);
          } else {
              graphValues[name][type] = parseFloat(value);
          }
          updateAllGraphs();
      }
  }
}

// GRÁFICO EM COLUNAS
const data = {
  time: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time], // em segundos
  memory: [8, 15, 5], // em GB
  cpu: [10, 12, 8], // em porcentagem
  iterations: [2, 5, 18] // Corrigido para "iterations"
};

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
}


// função para resetar os inputs
document.getElementById('resetar').addEventListener('click', function() {
    // Seleciona todos os inputs de tipo 'radio' e os desmarca
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
});


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
  updateStackedBarLineChart();
}



// Criação do gráfico inicial com a métrica "time"
const ctxLine = document.getElementById('lineChart').getContext('2d');
let myChart = new Chart(ctxLine, { 
  type: 'bar',
  data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
      datasets: [{
          label: 'Time',
          data: data.time,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
      }]
  },
  options: {
      layout: {
          padding: {
              top: 20 // Margem superior
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  callback: function(value) {
                      return value + 's'; // Unidade inicial em segundos
                  }
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
    case 'cpu':
        label = 'CPU';
        yAxisUnit = '%';
        myChart.data.datasets[0].data = data.cpu;
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
            data = [15, 25, 35, 45];
            break;
        case 'cpu':
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [5, 15, 25, 35];
            break;
        case 'iterations':
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [8, 18, 28, 38];
            break;
        default:
            labels = ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'];
            data = [0, 19, 3, 5];
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
    labels: ['Time', 'Memory', 'CPU', 'Number of Interactions'],
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
      case 'cpu':
          data = [
              graphValues.bubblesort.cpu || 0,
              graphValues.insertionsort.cpu || 0,
              graphValues.selectionsort.cpu || 0,
              graphValues.heapsort.cpu || 0
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




























// Função para atualizar o gráfico com base na seleção
function updateProgressiveLineChart() {
  var selectedMetricProgressiveLineChart = document.getElementById("metricSelectProgressiveLineChart").value;

  let newData = [];
  let newLabel = 'Time';
  let yAxisUnit = 's';

  switch (selectedMetricProgressiveLineChart) {
    case "Bubblesort":
        newData = [
            {x: 0, y: graphValues.bubblesort.time || 0}, {x: 1, y: graphValues.bubblesort.time || 0}, {x: 2, y: graphValues.bubblesort.time || 0}, {x: 3, y: graphValues.bubblesort.time || 0},
            {x: 4, y: graphValues.bubblesort.time || 0}, {x: 5, y: graphValues.bubblesort.time || 0}, {x: 6, y: graphValues.bubblesort.time || 0}, {x: 7, y: graphValues.bubblesort.time || 0}
        ];
        break;
    case "Selectionsort":
        newData = [
            {x: 0, y: graphValues.selectionsort.time || 0}, {x: 1, y: graphValues.selectionsort.time || 0}, {x: 2, y: graphValues.selectionsort.time || 0}, {x: 3, y: graphValues.selectionsort.time || 0},
            {x: 4, y: graphValues.selectionsort.time || 0}, {x: 5, y: graphValues.selectionsort.time || 0}, {x: 6, y: graphValues.selectionsort.time || 0}, {x: 7, y: graphValues.selectionsort.time || 0}
        ];
        break;
    case "Insertionsort":
        newData = [
            {x: 0, y: graphValues.insertionsort.time || 0}, {x: 1, y: graphValues.insertionsort.time || 0}, {x: 2, y: graphValues.insertionsort.time || 0}, {x: 3, y: graphValues.insertionsort.time || 0},
            {x: 4, y: graphValues.insertionsort.time || 0}, {x: 5, y: graphValues.insertionsort.time || 0}, {x: 6, y: graphValues.insertionsort.time || 0}, {x: 7, y: graphValues.insertionsort.time || 0}
        ];
        break;
    case "Heapsort":
        newData = [
            {x: 0, y: graphValues.heapsort.time || 0}, {x: 1, y: graphValues.heapsort.time || 0}, {x: 2, y: graphValues.heapsort.time || 0}, {x: 3, y: graphValues.heapsort.time || 0},
            {x: 4, y: graphValues.heapsort.time || 0}, {x: 5, y: graphValues.heapsort.time || 0}, {x: 6, y: graphValues.heapsort.time || 0}, {x: 7, y: graphValues.heapsort.time || 0}
        ];
        break;
    default:
        newData = [];
  }

  // Atualiza os dados do gráfico
  myProgressiveLineChart.data.datasets[0].data = newData;
  myProgressiveLineChart.data.datasets[0].label = newLabel;
  myProgressiveLineChart.options.scales.y.ticks.callback = function(value) {
    return value + yAxisUnit;
  };

  myProgressiveLineChart.update();
}

// Criação do gráfico inicial
var ctxprogressiveLine = document.getElementById('progressiveLineChart').getContext('2d');
var myProgressiveLineChart = new Chart(ctxprogressiveLine, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Time',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      radius: 0,
      data: [
        {x: 0, y: graphValues.bubblesort.time || 0}, {x: 1, y: graphValues.insertionsort.time || 0}, {x: 2, y: graphValues.selectionsort.time || 0}, {x: 3, y: graphValues.heapsort.time || 0},
        {x: 4, y: graphValues.bubblesort.time || 0}, {x: 5, y: graphValues.insertionsort.time || 0}, {x: 6, y: graphValues.selectionsort.time || 0}, {x: 7, y: graphValues.heapsort.time || 0}
      ]
    }]
  },
  options: {
    animation: {
      x: {
        type: 'number',
        easing: 'linear',
        duration: 10000 / 8,
        from: NaN,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * (10000 / 8);
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: 10000 / 8,
        from: (ctx) => ctx.index === 0 
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * (10000 / 8);
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: true
    },
    scales: {
      x: {
        type: 'linear'
      },
      y: {
        ticks: {
          callback: function(value) {
            return value + 's';
          }
        }
      }
    }
  }
});







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