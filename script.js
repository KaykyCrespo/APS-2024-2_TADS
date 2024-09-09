// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript


window.onload = function() {
    document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('input[name="arraySize"]').forEach(radio => {
        radio.checked = false;
    });
};

// função para resetar os inputs

document.getElementById('resetar').addEventListener('click', function() {
    // Seleciona todos os inputs de tipo 'radio' e os desmarca
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
});