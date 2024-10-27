function showPopup(sortType) {
    let title = '';
    let explanation = '';
    let code = '';
    let code2 = '';
    let stepByStep = '';
    let details = '';
    let imagePath = '';
  
    switch (sortType) {
        case 'Bubblesort Information':
            title = 'BUBBLESORT';
            explanation = "The bubble sort algorithm organizes a list by comparing pairs of adjacent elements, like children in a line. First, we look at the first two children; if the one on the left is taller than the one on the right, we swap them. We keep doing this until we reach the end of the line. We repeat this process several times until no one needs to switch places anymore. In the end, the line will be organized from shortest to tallest!";
            code = `def bubble_sort(array):
                        n = len(array)
                        iterations = 0  # Interaction counter
  
                        # Iterate through all of the array
                        for i in range(n):
  
                            # The last i elements are already in the correct position
                            for j in range(0, n - i - 1):
                                iterations += 1  # Increment the interaction counter
  
                                # Swap if the found element is greater than the next
                                if array[j] > array[j + 1]:
                                    array[j], array[j + 1] = array[j + 1], array[j]
  
                        return iterations`;
            code2 = `# Example of usage
            array = [22, 11, 54, 32]
            total_iterations   = bubble_sort(array)
            print("Sorted array: ", array)
            print( , total_iterations)
  
            array = [22, 11, 54, 32]
            array = [11, 22, 54, 32]
            array = [11, 22, 32, 54]`
  
            stepByStep = '';
            details = '';
            imagePath = 'imgs/bubblesortjpg.jpg'
            break;
        case 'Insertionsort Information':
            title = 'INSERTIONSORT';
            explanation = "Imagine you have a box of mixed pencils. You take one pencil and place it in your hand, which is already organized. Then, you take another pencil and check where it should go in your hand, placing it in the correct position. You repeat this until all the pencils are organized. In the end, you count how many times you looked at and compared the pencils to arrange them in order!";
            code = `def insertion_sort(array):
                      iterations = 0 # Counter for iterations
                  
                  # Traverse the array starting from the second element
                      for i in range(1, len(array)):
                          key = array[ i ]  # The element to be inserted
                              j = i - 1  # The index of the previous element
                  
                  # Move elements of the array that are greater than
                  # the key one position ahead
                      while j >= 0 and array[j] > key:
                          array[ j + 1] = array[j]
                          j -= 1
                          iterations += 1 # Increment the iteration counter
                  
                          array[ j + 1] = key  # Insert the key in the correct position
                          iterations   += 1  # Count the iteration of the key movement
                      
                      return iterations`;
            code2 = ''
            stepByStep = '';
            details = '';
            imagePath = 'imgs/insertionsort.jpg ';
            break;
        case 'Selectionsort Information':
            title = 'SELECTIONSORT';
            explanation = "To organize the toys, you start by looking at all of them and choosing the smallest one. Then, you put this smallest one in the box. Next, you look at the remaining toys and choose the smallest one among them, placing it in the box as well. You repeat this process until all the toys are organized. In the end, you count how many times you looked to pick the smallest toy." ;
            code = `def selection_sort(array):
                      iterations = 0  # Interaction counter
                
                      # Traverse all elements of the array
                      for i in range(len(array) - 1): 
                
                      # Initially assume that the smallest element is at 
                      # the current position 'i' 
                      min_index = i  
                
                      # Find the index of the smallest element in the  
                      # unsorted part
                      for j in range(i + 1, len(array)):
                          iterations += 1  # Count the comparison
                          if array[j] < array[min_index]:  
                              min_index = j  
                
                      # Swap the current element with the smallest element
                      # found, if necessary
                      if min_index != i: 
                          array[i], array[min_index] = array[min_index], array[i]  
                          iterations += 1  # Count the swap
        
                      return array `;
            code2 = ''
            stepByStep = '';
            details = '';
            imagePath = 'imgs/selectionsort.jpg';
            break;
        case 'Heapsort Information':
            title = 'HEAPSORT';
            explanation = "To sort numbers using a heap, we first place all the numbers into a heap, where the largest stone (number) is at the top. Then, we remove this largest stone from the top and reorganize the heap, repeating the process until all the stones are removed. Each time we remove a stone, we count that action as an iteration. In the end, we will have the numbers organized from smallest to largest.";
            code = `def heapify(array, n, i, interactions):
                      largest = i  # Inicialmente, assume que a raiz é o maior elemento
                      left = 2 * i + 1  # Índice do filho à esquerda
                      right = 2 * i + 2  # Índice do filho à direita
                  
                      # Verifica se o filho à esquerda é maior que a raiz
                      if left < n and array[left] > array[largest]:
                          largest = left
  
  
                          # Verifica se o filho à direita é maior que o maior atual
                      if right < n and array[right] > array[largest]:
                          largest = right
                  
                      # Se o maior não for a raiz, realiza a troca e refaz o heap
                      if largest != i:
                          array[i], array[largest] = array[largest], array[i]
                          interactions[0] += 1  # Incrementa a interacao
                          heapify(array, n, largest , interactions)  # Chamada recursiva`;
            code2 = ''
            stepByStep = '';
            details = '';
            imagePath = 'imgs/heapsort.jpg';
            break;
    }
  
    // Atualiza o conteúdo do pop-up
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-explanation').innerText = explanation;
    document.getElementById('popup-code').innerText = code;
    document.getElementById('popup-code2').innerText = code2;
    document.getElementById('popup-step-by-step').innerText = stepByStep;
    document.getElementById('popup-details').innerText = details;
    document.querySelector('.popup-image').src = imagePath;
  
  
        // Exibe o pop-up e ativa a aba correta
      document.getElementById('popup').style.display = 'flex';
      showSection('popup-explanation'); // Exibe apenas a seção de explicação por padrão
  
      // Função para mostrar e ocultar seções com base no ID
      function showSection(sectionId) {
          const sections = ['popup-explanation', 'popup-code', 'popup-step-by-step', 'popup-details'];
          sections.forEach(id => {
              document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
          });
  
          // Remove a imagem se a seção ativa não for a de explicação
          const imageElement = document.querySelector('.popup-image');
          if (sectionId === 'popup-explanation') {
              imageElement.style.display = 'block'; // Mostra a imagem na seção de explicação
          } else {
              imageElement.style.display = 'none'; // Oculta a imagem em outras seções
          }
  
          // Mostra ou oculta o code2 com base na seção ativa
          const code2Element = document.getElementById('popup-code2');
          if (sectionId === 'popup-code') {
              code2Element.style.display = 'block'; // Mostra code2 na seção de código
          } else {
              code2Element.style.display = 'none'; // Oculta code2 em outras seções
          }
      }
  
      // Adiciona um evento para cada link da navbar
      document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', (event) => {
              event.preventDefault();
              const targetId = link.getAttribute('href').substring(1);
              showSection(targetId); // Exibe a seção clicada e oculta as outras
          });
      });
  
      // Alterar a cor a partir do segundo "S" no título para 'Selectionsort' e 'Insertionsort'
      const letterToChange = 'S';
      let changeIndex = title.indexOf(letterToChange); // Primeiro "S"
  
      if (title === 'SELECTIONSORT' || title === 'INSERTIONSORT') {
          changeIndex = title.indexOf(letterToChange, changeIndex + 1); // Segundo "S"
      }
  
      // Verifique se a letra foi encontrada e aplique a alteração
      if (changeIndex !== -1) {
          const firstPart = title.substring(0, changeIndex);
          const secondPart = title.substring(changeIndex);
  
          document.getElementById('popup-title').innerHTML =
              `<span style="color: #4CA6A8;">${firstPart}</span>` +
              `<span style="color: #FFF;">${secondPart}</span>`;
      } else {
          document.getElementById('popup-title').innerText = title;
      }
}
  
// Adiciona um evento para cada link da navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove a classe 'active' de todos os links
        document.querySelectorAll('.nav-link').forEach(nav => {
            nav.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link clicado
        link.classList.add('active');

        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId); // Exibe a seção clicada e oculta as outras
    });
});

function closePopup() {
document.getElementById('popup').style.display = 'none'; // Oculta o pop-up
}