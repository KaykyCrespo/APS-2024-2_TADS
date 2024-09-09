// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript



const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");

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

window.onload = resetInputs();

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

/*
// GRÁFICO EM COLUNAS
const ctx = document.getElementById('myChart').getContext('2d');

    // Plugin para exibir os valores ao lado de cada barra
    const valueDisplayPlugin = {
        afterDatasetsDraw: function(chart) {
            const ctx = chart.ctx;

            chart.data.datasets.forEach(function(dataset, i) {
                const meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function(element, index) {
                        // Pegando o valor da barra
                        const dataValue = dataset.data[index];

                        // Posição da barra
                        const position = element.tooltipPosition();

                        // Configurações do texto
                        ctx.font = '12px Arial';
                        ctx.fillStyle = 'black';
                    });
                }
            });
        }
    };


    // Gráfico em colunas
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bubblesort', 'Insertionsort', 'Quicksort'], // Rótulos
            datasets: [
                {
                    label: 'Time',
                    data: [12, 19, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Memory',
                    data: [8, 15, 5],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'CPU',
                    data: [10, 12, 8],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
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
                            return value + 's'; // Adiciona um "s" ao lado de cada número
                        }
                    }
                }
            }
        },
        plugins: [valueDisplayPlugin] // Incluindo o plugin personalizado
    });



// GRÁFICO DE PIZZA
  var ctx = document.getElementById('myPieChart').getContext('2d');
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Bobblesort', 'Insertion', 'Insertionsort', 'heapsort'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Processamento de Memória', // Aqui está o título
            font: {
              size: 20
            }
          }
        }
      }
    });


//GRAFICO RADAR
  var ctx = document.getElementById('myRadarChart').getContext('2d');
  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Time', 'Memory', 'CPU', 'Number of Interactions'],
      datasets: [{
        label: 'Bubblesort',
        data: [20, 10, 15, 30, 25, 35],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }, {
        label: 'Insertionsort',
        data: [25, 20, 10, 35, 30, 15],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2
      },{
        label: 'Selectionsort',
        data: [40, 20, 10, 35, 30, 15],
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2
      },{
        label: 'Heapsort',
        data: [15, 70, 10, 35, 30, 15],
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
          suggestedMax: 40
        }
      }
    }
  });


// GRÁFICO StackedBarLineChart
  var ctx = document.getElementById('myStackedBarLineChart').getContext('2d');
  var myStackedBarLineChart = new Chart(ctx, {
    type: 'bar', // Inicia como gráfico de barras
    data: {
      labels: ['Bubblesort', 'Insertionsort', 'Selectionsort', 'Heapsort'],
      datasets: [
        {
          label: 'Memory',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          stack: 'Stack 0'
        },
        {
          label: 'Number of Interactions',
          data: [20, 30, 10, 50, 60, 40],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          stack: 'Stack 0'
        },
        {
          label: 'CPU',
          data: [5, 15, 25, 35, 45, 55],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          stack: 'Stack 0'
        },
        {
          label: 'Time',
          data: [35, 65, 95, 125, 155, 155], // Dados da linha
          type: 'line', // Define este dataset como um gráfico de linha
          fill: false,
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true, // Empilhar barras no eixo X
        },
        y: {
          stacked: true, // Empilhar barras no eixo Y
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Stacked Bar and Line Chart'
        }
      }
    }
  });
  */

  
  var ctx = document.getElementById('myProgressiveLineChart').getContext('2d');
  var myProgressiveLineChart = new Chart(ctx, {
    type: 'line', // Gráfico de linha
    data: {
      datasets: [{
        label: 'Bubblesort',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        radius: 0,
        data: [
          {x: 0, y: 10}, {x: 1, y: 20}, {x: 2, y: 30}, {x: 3, y: 40},
          {x: 4, y: 50}, {x: 5, y: 60}, {x: 6, y: 70}, {x: 7, y: 80}
        ]
      }, {
        label: 'Insertionsort',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        radius: 0,
        data: [
          {x: 0, y: 15}, {x: 1, y: 25}, {x: 2, y: 35}, {x: 3, y: 45},
          {x: 4, y: 55}, {x: 5, y: 65}, {x: 6, y: 75}, {x: 7, y: 85}
        ]
      }, {
        label: 'Selectionsort',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        radius: 0,
        data: [
          {x: 0, y: 15}, {x: 1, y: 25}, {x: 2, y: 35}, {x: 3, y: 45},
          {x: 4, y: 55}, {x: 5, y: 65}, {x: 6, y: 75}, {x: 7, y: 85}
        ]
      }, {
        label: 'Heapsort',
        borderColor: 'red',
        borderWidth: 1,
        radius: 0,
        data: [
          {x: 0, y: 10}, {x: 1, y: 25}, {x: 2, y: 35}, {x: 3, y: 45},
          {x: 4, y: 75}, {x: 5, y: 25}, {x: 6, y: 85}, {x: 7, y: 85}
        ]
      }]
    },
    options: {
      animation: {
        x: {
          type: 'number',
          easing: 'linear',
          duration: 10000 / 8, // Duração total para o eixo X
          from: NaN, // O ponto é inicialmente ignorado
          delay(ctx) {
            if (ctx.type !== 'data' || ctx.xStarted) {
              return 0;
            }
            ctx.xStarted = true;
            return ctx.index * (10000 / 8); // Definir o atraso entre os pontos
          }
        },
        y: {
          type: 'number',
          easing: 'linear',
          duration: 10000 / 8, // Duração total para o eixo Y
          from: (ctx) => ctx.index === 0 
            ? ctx.chart.scales.y.getPixelForValue(100)
            : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y,
          delay(ctx) {
            if (ctx.type !== 'data' || ctx.yStarted) {
              return 0;
            }
            ctx.yStarted = true;
            return ctx.index * (10000 / 8); // Definir o atraso entre os pontos
          }
        }
      },
      interaction: {
        intersect: false // Evitar interseção nas interações
      },
      plugins: {
        legend: true // Mostrar a legenda
      },
      scales: {
        x: {
          type: 'linear' // Eixo X será linear
        }
      }
    }
  });