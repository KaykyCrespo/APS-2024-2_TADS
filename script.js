// Qualquer motivo que seja puramente estético usar JavaScript caso não Pyscript


window.onload = function() {
    document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('input[name="arraySize"]').forEach(radio => {
        radio.checked = false;
    });
};