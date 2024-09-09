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


/* GRÁFICO EM COLUNAS*/
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