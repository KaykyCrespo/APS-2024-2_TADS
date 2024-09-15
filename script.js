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
function setGraphValues(sort, type, value) {
  if (graphValues[sort]) {
      if (type in graphValues[sort]) {
          graphValues[sort][type] = value;
      }
      updateAllGraphs(sort);
  }
}
// GRÁFICO EM COLUNAS
const data = {
  time: [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time], // em segundos
  memory: [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory], // em GB
  iterations: [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations] // Corrigido para "iterations"
};


// Função pra atualizar gráficos
function updateAllGraphs(sort){
    updateBarChart();
    updatePieChart();
    updateRadarChart(sort);
    updateBarChartWAP();
}


// Inicialização do gráfico de BARRAS
// Inicialização do gráfico de BARRAS
const ctxLine = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctxLine, {
  type: 'bar',
  data: {
    labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'], // Rótulos dos algoritmos
    datasets: [{
      label: 'Time',
      data: data.time,
      backgroundColor: '#00CED1', // Cor de fundo das barras
      borderColor: '#FFFFFF', // Cor da borda das barras
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
function updateBarChart() {
  const selectedMetric = document.getElementById('metricSelectBarChart').value;
  let label, yAxisUnit;
    console.log(selectedMetric)

  // Alterar o conjunto de dados e o eixo Y de acordo com a métrica selecionada
  switch (selectedMetric) {
    case 'time':
        label = 'Time';
        yAxisUnit = 's'; 
        barChart.data.datasets[0].data = [graphValues.bubblesort.time, graphValues.insertionsort.time, graphValues.selectionsort.time, graphValues.heapsort.time];
        break;
    case 'memory':
        label = 'Memory';
        yAxisUnit = 'KBs';
        barChart.data.datasets[0].data = [graphValues.bubblesort.memory, graphValues.insertionsort.memory, graphValues.selectionsort.memory, graphValues.heapsort.memory];
        break;
    case 'iterations':
        label = 'Iterations';
        yAxisUnit = ''; 
        barChart.data.datasets[0].data = [graphValues.bubblesort.iterations, graphValues.insertionsort.iterations, graphValues.selectionsort.iterations, graphValues.heapsort.iterations];
        break;
}

barChart.data.datasets[0].label = label;
barChart.options.scales.y.ticks.callback = function(value) {
    return value + yAxisUnit;
};
barChart.update();
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
                '#20B2AA',
                '#7FFFD4',
                '#FFD700',
                '#FFEA00'
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
ctxRadar.canvas.width = 600;
ctxRadar.canvas.height = 600;
var myRadarChart = new Chart(ctxRadar, {
    // Adjust the canvas size


  type: 'radar',
  data: {
    labels: ['Time', 'Memory', 'Number of Interactions'],
    datasets: [{
      label: 'Bubblesort',
      data: [graphValues.bubblesort.time, graphValues.bubblesort.memory, graphValues.bubblesort.iterations], // Inicializado com 0, será atualizado dinamicamente
      backgroundColor: '#FF6347',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }, {
      label: 'Insertionsort',
      data: [graphValues.insertionsort.time, graphValues.insertionsort.memory, graphValues.insertionsort.iterations],
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 2
    }, {
      label: 'Selectionsort',
      data: [graphValues.selectionsort.time, graphValues.selectionsort.memory, graphValues.selectionsort.iterations],
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 2
    }, {
      label: 'Heapsort',
      data: [graphValues.heapsort.time, graphValues.heapsort.memory, graphValues.heapsort.iterations],
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
        grid: {
          color: '#FFFFFF' // Color of the grid lines
        },
        border: {
          color: '#FFFFFF' // Color of the radar chart outline
        },
        suggestedMin: 0,
        suggestedMax: 3
      }
    }
  }
});


// Função para atualizar o gráfico de radar com base nas métricas selecionadas
  function updateRadarChart(sort) {

  // Atualizar os datasets do gráfico de radar
  myRadarChart.data.datasets[0].data = [graphValues.bubblesort.time, graphValues.bubblesort.memory,  graphValues.bubblesort.iterations / 125000]; 
  myRadarChart.data.datasets[1].data = [graphValues.insertionsort.time, graphValues.insertionsort.memory,  graphValues.insertionsort.iterations / 125000]; 
  myRadarChart.data.datasets[2].data = [graphValues.selectionsort.time, graphValues.selectionsort.memory,  graphValues.selectionsort.iterations / 125000];
  myRadarChart.data.datasets[3].data = [graphValues.heapsort.time, graphValues.heapsort.memory,  graphValues.heapsort.iterations / 125000];

  // Atualizar o gráfico
  myRadarChart.update();
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