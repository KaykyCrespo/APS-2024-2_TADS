// Função para obter a linguagem ativa (modifique conforme necessário)
function getActiveLanguage() {
  // Retorne "english" como a linguagem padrão
  return "english"; // Defina o idioma padrão como "english"
}

// Função para atualizar a explicação com base na linguagem ativa
function updateExplanation() {
  const currentLanguage = getActiveLanguage();
  const explanationElement = document.querySelector('#popup-explanation'); // Supondo que você tenha um elemento com este ID
  const explanation = sortAlgorithms["Bubblesort Information"].explanation[currentLanguage];

  if (explanation) {
    explanationElement.textContent = explanation;
  } else {
    console.warn(`Translation not found for ${currentLanguage}`);
  }
}

// Chame updateExplanation() quando a linguagem for alterada
document.addEventListener('DOMContentLoaded', () => {
  // Adicione evento para alternar idiomas
  const langEl = document.querySelector('.langWrap');
  const links = langEl.querySelectorAll('a[language]');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evita a navegação padrão

      // Remover a classe active de todos os links
      links.forEach(l => l.classList.remove('active'));

      // Adicionar a classe active ao link clicado
      link.classList.add('active');

      // Atualizar a explicação com base na nova linguagem
      updateExplanation();
    });
  });

  // Atualiza a explicação ao carregar a página
  updateExplanation(); // Isso garante que a explicação inicial seja exibida em inglês
});

















// Objeto contendo informações sobre os algoritmos de ordenação
const sortAlgorithms = {
  "Bubblesort Information": {
    title: "BUBBLESORT",
    explanation: {
      english:"The bubble sort algorithm organizes a list by comparing pairs of adjacent elements, like children in a line. First, we look at the first two children; if the one on the left is taller than the one on the right, we swap them. We keep doing this until we reach the end of the line. We repeat this process several times until no one needs to switch places anymore. In the end, the line will be organized from shortest to tallest!",
      portuguese:"O algoritmo de ordenação por bolha organiza uma lista comparando pares de elementos adjacentes, como crianças em uma fila. Primeiro, olhamos as duas primeiras crianças; se a da esquerda for maior que a da direita, trocamos elas. Continuamos fazendo isso até o final da fila. Repetimos esse processo várias vezes até que ninguém precise mais trocar de lugar. Assim, no final, a fila ficará organizada do menor para o maior!",
    },
    code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">bubble_sort</span>(array):<br>
               &nbsp;&nbsp;n = <span class="code-coler-orange">len</span>(array)<br>
               iterations = 0 <span class="code-coler-gray"># Interaction counter</span><br>
               <br>
               <span class="code-coler-gray"># Iterate through all of the array</span><br>
               &nbsp;&nbsp;<span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(n):<br>
               <br>
               &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-gray"># The last i elements are already in the correct position</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">for</span> j <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(<span class="code-coler-red">0</span>, n - i - <span class="code-coler-red">1</span>):<br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterations += <span class="code-coler-red">1</span> <span class="code-coler-gray"># Increment the interaction counter</span><br>
               <br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-gray"># Swap if the found element is greater than the next</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> array[j] > array[j + <span class="code-coler-red">1</span>]:<br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[j], array[j + <span class="code-coler-red">1</span>] = array[j + <span class="code-coler-red">1</span>], array[j]<br>
               <br>
               &nbsp;&nbsp;<span class="code-coler-blue">return</span> iterations`,
    code2: `
        <span class="code-coler-gray"># Example of usage</span><br>
        &nbsp;array = [<span class="code-coler-red">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]<br>
        &nbsp;total_iterations = bubble_sort(array)<br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Sorted array: "</span>, array)<br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Total iterations: "</span>, total_iterations)<br><br>

        <div style="text-align: center; margin: 0 auto;">
        array = [<span class="code-coler-orange">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-orange">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-red">32</span>, <span class="code-coler-red">54</span>]<br><br>
        </div>`,

    subtitle:
      'Assume the following  array: <span class="code-coler-topics">[22, 11, 54, 32]</span>:',

    stepByStepLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-1"><span class="code-coler-topics">First</span> iteration (i = 0):</h3>
                                                <ul>
                                                    <li id="item-1">Compare the first with the second, is it greater? Yes.</li>
                                                    <li id="item-2">Swap 22 with 11.</li>
                                                    <li id="item-3">The array is now: [11, 22, 54, 32].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-2"><span class="code-coler-topics">Second</span> iteration (i = 1):</h3>
                                                <ul>
                                                    <li id="item-4">Compare the second with the third, is it greater? No.</li>
                                                    <li id="item-5">No swap needed.</li>
                                                    <li id="item-6">The array remains: [11, 22, 54, 32].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-3"><span class="code-coler-topics">Third</span> iteration (i = 2):</h3>
                                                <ul>
                                                    <li id="item-7">Compare the third with the fourth, is it greater? Yes.
                                                    <li id="item-8">Swap 32 with 54.</li>
                                                    <li id="item-9">The array is now: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-4"><span class="code-coler-topics">Fouth</span> iteration (i = 3):</h3>
                                                <ul>
                                                    <li id="item-10">Compare the first with the second, is it greater? No.
                                                    <li id="item-11">No swap needed.</li>
                                                    <li id="item-12">The array is now: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                        `,

    stepByStepRight: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-5"><span class="code-coler-topics">Fifth</span> iteration (i = 4):</h3>
                                                <ul>
                                                    <li id="item-13">Compare the second with the third, is it greater? No.</li>
                                                    <li id="item-14">No swap needed.</li>
                                                    <li id="item-15">The array remains: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-6"><span class="code-coler-topics">Sixth</span> iteration (i = 5):</h3>
                                                <ul>
                                                    <li id="item-16">Compare the third with the fourth, is it greater? No.</li>
                                                    <li id="item-17">No swap needed.</li>
                                                    <li id="item-18">The array is now: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-7"><span class="code-coler-topics">Seventh</span> iteration (i = 6):</h3>
                                                <ul>
                                                    <li id="item-19">Compare the first with the second, is it greater? No.</li>
                                                    <li id="item-20">No swap needed.</li>
                                                    <li id="item-21">The array is now: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-8"><span class="code-coler-topics">Eighth</span> iteration (i = 7):</h3>
                                                <ul>
                                                    <li id="item-22">Compare the second with the third, is it greater? No.</li>
                                                    <li id="item-23">No swap needed.</li>
                                                    <li id="item-24">The array is now: [11, 22, 32, 54].</h3></li>
                                                </ul>
                                            </div>`,

    detailsLeft: `<div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-1"><span class="code-coler-topics">1. INITIALIZATION:</span></h3>
        <ul>
            <li id="item-1">Start with an array or list of elements that you want to sort.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-2"><span class="code-coler-topics">2. INITIAL COMPARISON:</span></h3>
        <ul>
            <li id="item-2">Begin with the first number in the list. Compare this number with the next number.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-3"><span class="code-coler-topics">3. SWAP IF NECESSARY:</span></h3>
        <ul>
            <li id="item-3">If the first number is greater than the second, swap them. If not, leave them as they are.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-4"><span class="code-coler-topics">4. MOVE TO THE NEXT PAIR:</span></h3>
        <ul>
            <li id="item-4">Move to the next number and repeat step 2, comparing it with the next one.</li>
        </ul>
    </div>`,

    detailsRight: `<div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-5"><span class="code-coler-topics">5. REPEAT UNTIL THE END OF THE LIST:</span></h3>
        <ul>
            <li id="item-5">Continue doing this until you reach the end of the list. After one complete pass, the largest number will be in the last position.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-6"><span class="code-coler-topics">6. RESTART FOR INITIAL UNORDERED LIST:</span></h3>
        <ul>
            <li id="item-6">Start again from the beginning of the list. Repeat steps 2 to 5, but ignore the last number, as it is already sorted.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-7"><span class="code-coler-topics">7. REPETITION:</span></h3>
        <ul>
            <li id="item-8">Keep repeating this process, each time ignoring the last sorted number, until no more swaps are made. This means the list is sorted.</li>
        </ul>
    </div>
    <div class="step-item" style="margin-bottom: 20px;">
        <h3 id="title-8"><span class="code-coler-topics">8. CONCLUDE:</span></h3>
        <ul>
            <li id="item-8">When you pass through the list without making any swaps, the algorithm terminates, and the list is completely sorted.</li>
        </ul>
        </div>`,

    imagePath: "imgs/bubblesort.jpg",
  },
  "Insertionsort Information": {
    title: "INSERTIONSORT",
    explanation: {
      english:"Imagine you have a box of mixed pencils. You take one pencil and place it in your hand, which is already organized. Then, you take another pencil and check where it should go in your hand, placing it in the correct position. You repeat this until all the pencils are organized. In the end, you count how many times you looked at and compared the pencils to arrange them in order!",
      portuguese:"Imagine que você tem uma caixa de lápis misturados. Você pega um lápis e coloca na sua mão, que já está organizada. Depois, pega outro lápis e verifica onde ele deve ir na sua mão, colocando-o na posição certa. Você repete isso até que todos os lápis estejam organizados. No final, conta quantas vezes olhou e comparou os lápis para deixá-los em ordem!",
    },
    code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">insertion_sort</span>(array):<br>
        iterations = 0 <span class="code-coler-gray"># Counter for iterations</span><br>
        <br>
        <span class="code-coler-gray"># Traverse the array starting from the second element</span
        <span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(<span class="code-coler-red">1</span>, <span class="code-coler-orange">len</span>(array)):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;key = array[i] <span class="code-coler-gray"># The element to be inserted</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;j = i - <span class="code-coler-red">1</span> <span class="code-coler-gray"># The index of the previous element</span><br>
        <br>
        <span class="code-coler-gray"># Move elements of the array that are greater than the key one position ahead</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">while</span> j >= <span class="code-coler-red">0</span> <span class="code-coler-blue">and</span> array[j] > key:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[j + <span class="code-coler-red">1</span>] = array[j]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j -= <span class="code-coler-red">1</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterations += <span class="code-coler-red">1</span> <span class="code-coler-gray"># Increment the iteration counter</span><br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;array[j + 1] = key <span class="code-coler-gray"># Insert the key in the correct position</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;iterations += <span class="code-coler-red">1</span> <span class="code-coler-gray"># Count the iteration of the key movement</span><br>
        <br>
        <span class="code-coler-blue">return</span> iterations`,
    code2: `
        <span class="code-coler-gray"># Example of usage</span><br>
        &nbsp;array = [<span class="code-coler-red">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]<br>
        &nbsp;total_iterations = insertion_sort(array)<br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Sorted array: "</span>, array)<br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Total iterations: "</span>, total_iterations)<br><br>

        <div style="text-align: center; margin: 0 auto;">
        array = [<span class="code-coler-orange">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-orange">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-red">32</span>, <span class="code-coler-red">54</span>]<br><br>
        </div>`,

    subtitle:
      'Assume the following  array: <span class="code-coler-topics">[22, 11, 54, 32]</span>:',

    stepByStepLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-1"><span class="code-coler-topics">First</span> iteration (i = 0):</h3>
                                                <ul>
                                                    <li id="item-1">Compare 11 with 22.</li>
                                                    <li id="item-2">11 is smaller, so move 22 one position ahead and insert 11 at the beginning.</li>
                                                    <li id="item-3">The array is now: [11, 22, 54, 32].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-2"><span class="code-coler-topics">Second</span> iteration (i = 1):</h3>
                                                <ul>
                                                    <li id="item-4">Move to the last element (32).</li>
                                                    <li id="item-5">Compare 32 with 54.</li>
                                                    <li id="item-6">32 is smaller, so move 54 one position ahead.</li>
                                                    <li id="item-7">Compare 32 with 22.</li>
                                                    <li id="item-8">32 is greater, so insert it right after 22.</li>
                                                    <li id="item-9">The array remains: [11, 22, 32, 52].</li>
                                                </ul>
                                            </div>
                                        `,

    stepByStepRight: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-5"><span class="code-coler-topics">Third</span> iteration (i = 2):</h3>
                                                <ul>
                                                    <li id="item-10">Move to the next element (54).</li>
                                                    <li id="item-11">Compare 54 with 22.</li>
                                                    <li id="item-12">54 is greater, so keep it where it is.</li>
                                                    <li id="item-13">The array remains: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            `,

    detailsLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">1. INITIALIZATION:</span></h3>
                                            <ul>
                                                <li id="item-1">Start with an array or list of elements that you want to sort.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-2"><span class="code-coler-topics">2. INITIAL SELECTION:</span></h3>
                                            <ul>
                                                <li id="item-2">Begin with the second number in the list, assuming that the first number is already in the "sorted sublist."</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">3. COMPARISON AND INSERTION:</span></h3>
                                            <ul>
                                                <li id="item-3">Compare the selected number with the numbers in the "sorted sublist.</li>
                                                <li id="item-4">If the current number is smaller than the previous ones, move each larger number one position ahead to make space.</li>
                                            </ul>
                                        </div>
                                        `,

    detailsRight: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">4. POSITIONING THE NUMBER:</span></h3>
                                            <ul>
                                                <li id="item-1">Place the current number in its correct position within the sublist to keep it sorted.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-2"><span class="code-coler-topics">5. MOVE TO THE NEXT NUMBER:</span></h3>
                                            <ul>
                                                <li id="item-2">Proceed to the next number in the original list and repeat steps 3 and 4.</li>
                                                <li id="item-3">Continue this process for each number, expanding the "sorted sublist" until all numbers have been processed.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">6. COMPLETION:</span></h3>
                                            <ul>
                                                <li id="item-4">When all the numbers have been inserted, the list will be sorted.</li>
                                            </ul>
                                        </div>
                                        `,
    imagePath: "imgs/insertionsort.jpg",
  },
  "Selectionsort Information": {
    title: "SELECTIONSORT",
    explanation:
      "To organize the toys, you start by looking at all of them and choosing the smallest one. Then, you put this smallest one in the box. Next, you look at the remaining toys and choose the smallest one among them, placing it in the box as well. You repeat this process until all the toys are organized. In the end, you count how many times you looked to pick the smallest toy.",
    code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">selection_sort</span>(array): <br>
        iterations = 0  <span class="code-coler-gray"># Interaction counter</span> <br>
        <br>
        <span class="code-coler-gray"># Traverse all elements of the array</span> <br>
        <span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(<span class="code-coler-orange">len</span>(array) - <span class="code-coler-red">1</span>): <br>
        <br>
        <span class="code-coler-gray"># Initially assume that the smallest element is at the current position 'i'</span> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;min_index = i <br>
        <br>
        <span class="code-coler-gray"># Find the index of the smallest element in the unsorted part</span> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">for</span> j <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(i + <span class="code-coler-red">1</span>, <span class="code-coler-orange">len</span>(array)): <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterations += <span class="code-coler-red">1</span> <span class="code-coler-gray"># Count the comparison</span> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> array[j] < array[min_index]: <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_index = j <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-gray"># Swap the current element with the smallest element found, if necessary</span> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> min_index != i: <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[i], array[min_index] = array[min_index], array[i]  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterations += <span class="code-coler-red">1</span> <span class="code-coler-gray"># Count the swap</span> <br>
        <span class="code-coler-blue">return</span> array`,
    code2: `<div class="text-center">
        <span class="code-coler-gray"># Example of usage</span> <br>
        &nbsp;array = [<span class="code-coler-red">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>] <br>
        &nbsp;total_iterations = selection_sort(array) <br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Sorted array: "</span>, array) <br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Total interactions: "</span>, total_iterations)
    </div>
    
    <div style="text-align: center; margin: 0 auto;">
        array = [<span class="code-coler-orange">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-orange">54</span>, <span class="code-coler-red">32</span>]<br><br>
        <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%);"><br><br>
        array = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-red">32</span>, <span class="code-coler-red">54</span>]<br><br>
        </div>`,

    subtitle:
      'Assume the following  array: <span class="code-coler-topics">[22, 11, 54, 32]</span>:',

    stepByStepLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-1"><span class="code-coler-topics">First</span> iteration (i = 0):</h3>
                                                <ul>
                                                    <li id="item-1">The smallest element in [22, 11, 54, 32] is 11.</li>
                                                    <li id="item-2">Swap 11 with 22.</li>
                                                    <li id="item-3">The array is now: [11, 22, 54, 32].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-2"><span class="code-coler-topics">Second</span> iteration (i = 1):</h3>
                                                <ul>
                                                    <li id="item-4">Second iteration (i = 1):</li>
                                                    <li id="item-5">The smallest element in [22, 54, 32] is 22.</li>
                                                    <li id="item-6">No swap is needed.</li>
                                                    <li id="item-7">The array remains: [11, 22, 54, 32].</li>
                                                </ul>
                                            </div>
                                        `,

    stepByStepRight: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-5"><span class="code-coler-topics">Third</span> iteration (i = 2):</h3>
                                                <ul>
                                                    <li id="item-8">The smallest element in [22, 54, 32] is 32.</li>
                                                    <li id="item-9">Swap 32 with 54.</li>
                                                    <li id="item-10">The array remains: [11, 22, 32, 54].</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-11"><span class="code-coler-topics">Fourth</span> iteration (i = 3):</h3>
                                                <ul>
                                                    <li id="item-12">Only one element (54) remains, so no swap is needed.</li>
                                                </ul>
                                            </div>
                                            `,

    detailsLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">1. INITIALIZATION:</span></h3>
                                            <ul>
                                                <li id="item-1">Start with an array or list of elements that you want to sort.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-2"><span class="code-coler-topics">2. ITERATING THROUGH THE ARRAY:</span></h3>
                                            <ul>
                                                <li id="item-2">For each position i in the array (from the first to the second-to-last element).</li>
                                                <li id="item-3">Set i as the index of the smallest element found.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">3. FINDING THE SMALLEST ELEMENT:</span></h3>
                                            <ul>
                                                <li id="item-4">Traverse the remaining part of the array (from index i + 1 to the end) to find the smallest element.</li>
                                                <li id="item-5">If a smaller element is found, update i to the index of that element.</li>
                                            </ul>
                                        </div>
                                        `,

    detailsRight: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">4. SWAP:</span></h3>
                                            <ul>
                                                <li id="item-1">After finding the smallest element in the unsorted part of the array.</li>
                                                <li id="item-2">Swap this smallest element with the element at the current position i.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">5. REPEAT:</span></h3>
                                            <ul>
                                                <li id="item-4">Repeat steps 2 to 4 until the entire array is sorted.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">6. COMPLETION: </span></h3>
                                            <ul>
                                                <li id="item-5">When all the numbers have been inserted, the list will be sorted.</li>
                                            </ul>
                                        </div>
                                        `,

    imagePath: "imgs/selectionsort.jpg",
  },
  "Heapsort Information": {
    title: "HEAPSORT",
    explanation:
      "To sort numbers using a heap, we first place all the numbers into a heap, where the largest stone (number) is at the top. Then, we remove this largest stone from the top and reorganize the heap, repeating the process until all the stones are removed. Each time we remove a stone, we count that action as an iteration. In the end, we will have the numbers organized from smallest to largest.",
    code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">heapify</span>(array, n, i, interactions):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;largest = i  <span class="code-coler-gray"># Assume root is the largest element</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;left = <span class="code-coler-red">2</span> * i + <span class="code-coler-red">1</span>  <span class="code-coler-gray"># Index of left child</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;right = <span class="code-coler-red">2</span> * i + <span class="code-coler-red">2</span>  <span class="code-coler-gray"># Index of right child</span><br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> left < span(n) <span class="code-coler-blue">and</span> array[left] > array[largest]:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;largest = left<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> right < span(n) <span class="code-coler-blue">and</span> array[right] > array[largest]:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;largest = right<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">if</span> largest != i:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[i], array[largest] = array[largest], array[i]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interactions[0] += <span class="code-coler-red">1</span>  <span class="code-coler-gray"># Increment interaction</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;heapify(array, n, largest, interactions)<br>`,
    code2: `<span class="code-coler-blue">def</span> <span class="code-coler-red">heap_sort</span>(array):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;n = <span class="code-coler-orange">len</span>(array)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;interactions = [<span class="code-coler-red">0</span>]<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-gray"># Build the max heap</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(n // <span class="code-coler-red">2</span> - <span class="code-coler-red">1</span>, -<span class="code-coler-red">1</span>, -<span class="code-coler-red">1</span>):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heapify(array, n, i, interactions)<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-gray"># Extract one element at a time from the heap</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(n - <span class="code-coler-red">1</span>, <span class="code-coler-red">0</span>, -<span class="code-coler-red">1</span>):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[i], array[0] = array[0], array[i]  <span class="code-coler-gray"># Move the root to the end</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interactions[0] += <span class="code-coler-red">1</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heapify(array, i, 0, interactions)  <span class="code-coler-gray"># Call heapify</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-coler-blue">return</span> interactions`,
    code3: `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0 auto;">
        <div class="text-center">
        <span class="code-coler-gray"># Example of usage</span> <br>
        &nbsp;array = [<span class="code-coler-red">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>] <br>
        &nbsp;total_iterations = heao_sort(array) <br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Sorted array: "</span>, array) <br>
        &nbsp;<span class="code-coler-orange">print</span>(<span class="code-coler-green">"Total interactions: "</span>, total_iterations)
    </div>
    
    
     <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
        <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
            <div>
                <span class="code-coler-orange">array</span> = [<span class="code-coler-orange">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>]
            </div>
            <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%); margin: 0 5px;">
        </div>
        <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
            <div>
                <span class="code-coler-orange">array</span> = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-orange">54</span>, <span class="code-coler-red">32</span>]
            </div>
            <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; filter: invert(100%); margin: 0 5px;">
        </div>
        <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
            <div>
                <span class="code-coler-orange">array</span> = [<span class="code-coler-red">11</span>, <span class="code-coler-red">22</span>, <span class="code-coler-red">32</span>, <span class="code-coler-red">54</span>]
            </div>
            <!-- Adicionando uma imagem invisível para alinhar -->
            <img src="imgs/arrow.png" alt="arrow" style="width: 1.5vw; height: auto; visibility: hidden; margin: 0 5px;">
        </div>
    </div>
</div>
    
`,
    subtitle:
      'Assume the following  array: <span class="code-coler-topics">[22, 11, 54, 32]</span>:',

    stepByStepLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-1"><span class="code-coler-topics">First:</span></h3>
                                                <ul>
                                                    <li id="item-1">Build the Max-Heap: Start by building the Max-Heap. In Heap Sort, we use a tree structure where each "parent" element is greater than its "children."</li>
                                                </ul>
                                            </div>
                                            <div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-2"><span class="code-coler-topics">Second:</span></h3>
                                                <ul>
                                                    <li id="item-2">Building the Max-Heap (starting from the middle and moving to the beginning):</li>
                                                    <li id="item-3">First, check the element 11 (position 1, considering 0-based indexing).</li>
                                                    <li id="item-4">Compare it with its child, 32.       Since 32 > 11, swap them:       List: [22, 32, 54, 11].</li>
                                                    <li id="item-5">Next, move to the element 22 (position 0).       Compare 22 with its children (32 and 54).       Since 54 is the largest, swap 22 with 54:       List: [54, 32, 22, 11]</li>
                                                    <li id="item-6">Max-Heap built: [54, 32, 22, 11].</li>
                                                </ul>
                                            </div>
                                        `,

    stepByStepRight: `<div class="step-item" style="margin-bottom: 20px;">
                                                <h3 id="title-3"><span class="code-coler-topics">Third:</span></h3>
                                                <ul>
                                                    <li id="item-8">Sorting by Repeatedly Extracting the Largest Element.</li>
                                                    <h3 id="title-4"><span class="code-coler-topics">1. First Extraction:</span></h3>
                                                    <li id="item-9">Swap the largest element (54) with the last element (11): List: [11, 32, 22, 54]</li>
                                                    <li id="item-10">Ignore the last element (54) as it is already in its final position.</li>
                                                    <li id="item-11">Restructure the heap so that 11 moves to its correct position. Swap 11 with 32: List: [32, 11, 22, 54].</li>

                                                    <h3 id="title-5"><span class="code-coler-topics">2. Second Extraction:</span></h3>
                                                    <li id="item-12">Swap the largest remaining element (32) with the last unsorted element (22):List: [22, 11, 32, 54]</li>
                                                    <li id="item-13">Ignore the last two elements (32 and 54) since they are already sorted. 22 becomes the new root, and since it is already in the correct position, the heap is balanced.</li>
                                                </ul>
                                                
                                            </div>
                                            `,

    detailsLeft: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">1. INITIALIZATION:</span></h3>
                                            <ul>
                                                <li id="item-1">Start with an array or list of elements that you want to sort.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-2"><span class="code-coler-topics">2. BUILD A MAX-HEAP:</span></h3>
                                            <ul>
                                                <li id="item-2">Construct a binary tree called a "heap" from the list, where the highest value is at the top (root).</li>
                                                <li id="item-3">To do this, adjust the tree starting from the middle elements and moving towards the beginning, ensuring that each parent is greater than its children.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">3. EXTRACT THE LARGEST ELEMENT:</span></h3>
                                            <ul>
                                                <li id="item-4">After building the Max-Heap, the largest number will be at the root of the tree.</li>
                                                <li id="item-5">Swap the root value with the last value in the list (end of the heap).</li>
                                                <li id="item-6">Remove this last value from the heap (it is now in its correct sorted position in the list).</li>
                                            </ul>
                                        </div>
                                        `,

    detailsRight: `<div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-1"><span class="code-coler-topics">4. ADJUST THE HEAP:</span></h3>
                                            <ul>
                                                <li id="item-1">With the original root removed, the new value at the root must maintain the Max-Heap property.</li>
                                                <li id="item-2">Restructure the tree so the largest value returns to the top.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">5. REPEAT:</span></h3>
                                            <ul>
                                                <li id="item-4">Repeat steps 3 and 4 until the entire list is sorted, and the tree is empty.</li>
                                            </ul>
                                        </div>
                                        <div class="step-item" style="margin-bottom: 20px;">
                                            <h3 id="title-3"><span class="code-coler-topics">6. COMPLETION: </span></h3>
                                            <ul>
                                                <li id="item-5">When all the numbers have been inserted, the list will be sorted.</li>
                                            </ul>
                                        </div>
                                        `,

    imagePath: "imgs/heapsort.jpg",
  },
};

// Função para mostrar o pop-up
function showPopup(sortType) {
  const algorithm = sortAlgorithms[sortType];

  if (!algorithm) {
    console.error("Sort type not recognized.");
    return;
  }

  // Atualiza o conteúdo do pop-up
  document.getElementById("popup-title").innerHTML = applyColorLogic(
    algorithm.title
  );
  document.getElementById("popup-explanation").innerHTML =
    algorithm.explanation;
  document.getElementById("popup-code").innerHTML = algorithm.code;
  document.getElementById("popup-code2").innerHTML = algorithm.code2 || "";
  document.getElementById("popup-code3").innerHTML = algorithm.code3 || "";
  document.getElementById("popup-step-by-step").innerHTML =
    algorithm.stepByStep || "";

  document.getElementById("popup-title-step-by-step").innerHTML =
    algorithm.subtitle;
  document.getElementById("popup-left-column-step-by-step").innerHTML =
    algorithm.stepByStepLeft;
  document.getElementById("popup-right-column-step-by-step").innerHTML =
    algorithm.stepByStepRight;

  document.getElementById("popup-left-column-details").innerHTML =
    algorithm.detailsLeft;
  document.getElementById("popup-right-column-details").innerHTML =
    algorithm.detailsRight;

  document.getElementById("popup-details").innerHTML = algorithm.details || "";
  document.querySelector(".popup-image").src = algorithm.imagePath;

  // Exibe o pop-up e ativa a aba de explicação
  document.getElementById("popup").style.display = "flex";
  showSection("popup-explanation"); // Exibe a seção de explicação por padrão ao abrir o popup

  // Fecha o popup ao clicar fora dele
  window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
      closePopup();
    }
  };

  // Função para mostrar e ocultar seções com base no ID
  function showSection(sectionId) {
    const sections = [
      "popup-explanation",
      "popup-code",
      "popup-step-by-step",
      "popup-details",
    ];
    sections.forEach((id) => {
      document.getElementById(id).style.display =
        id === sectionId ? "block" : "none";
    });

    const titleElement = document.getElementById("popup-title");

    // Condicional para mover o título para o topo ou manter no centro
    if (
      sectionId === "popup-code" ||
      sectionId === "popup-step-by-step" ||
      sectionId === "popup-details"
    ) {
      titleElement.style.position = "absolute";
      titleElement.style.top = "-7vw"; // Posiciona no topo do pop-up
      titleElement.style.left = "15%";
      titleElement.style.transform = "translateX(-50%)";
    } else {
      titleElement.style.position = "static"; // Retorna o título para o posicionamento padrão (meio)
      titleElement.style.transform = "none";
    }

    // Exibe o título e o subtítulo do passo a passo apenas na seção "step-by-step"
    const titleStepByStepElement = document.getElementById(
      "popup-title-step-by-step"
    );
    const isStepByStep = sectionId === "popup-step-by-step";
    titleStepByStepElement.style.display = isStepByStep ? "block" : "none";

    // Remove a imagem se a seção ativa não for a de explicação
    const imageElement = document.querySelector(".popup-image");
    imageElement.style.display =
      sectionId === "popup-explanation" ? "block" : "none";

    // Mostra ou oculta o code2 com base na seção ativa
    const code2Element = document.getElementById("popup-code2");
    code2Element.style.display = sectionId === "popup-code" ? "block" : "none";

    // Mostra ou oculta o code3 com base na seção ativa e no tipo de ordenação
    const code3Element = document.getElementById("popup-code3");
    code3Element.style.display =
      sectionId === "popup-code" && sortType === "Heapsort Information"
        ? "block"
        : "none";

    // Mostra o stepBystepContainerElement apenas na seção "popup-step-by-step"
    const stepBystepContainerElement = document.getElementById(
      "step-by-step-container"
    );
    stepBystepContainerElement.style.display =
      sectionId === "popup-step-by-step" ? "flex" : "none";

    const stepByStepLeft = document.getElementById(
      "popup-left-column-step-by-step"
    );
    stepByStepLeft.style.display =
      sectionId === "popup-step-by-step" ? "block" : "none";

    const stepByStepRight = document.getElementById(
      "popup-right-column-step-by-step"
    );
    stepByStepRight.style.display =
      sectionId === "popup-step-by-step" ? "block" : "none";

    // Mostra o detailsContainerElementElement apenas na seção "popup-step-by-step"
    const detailsContainerElement =
      document.getElementById("details-container");
    detailsContainerElement.style.display =
      sectionId === "popup-details" ? "flex" : "none";

    const detailsLeft = document.getElementById("popup-left-column-details");
    detailsLeft.style.display =
      sectionId === "popup-details" ? "block" : "none";

    const detailsRight = document.getElementById("popup-right-column-details");
    detailsRight.style.display =
      sectionId === "popup-details" ? "block" : "none";
  }

  // Adiciona um evento para cada link da navbar
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId); // Exibe a seção clicada e oculta as outras

      // Muda a cor do hover para a seção selecionada
      navLinks.forEach((l) => (l.style.color = "#FFF")); // Reseta a cor para branco
      link.style.color = "#4CA6A8"; // Altera a cor da seção selecionada
    });
  });

  // Resetar a cor da navbar para a seção "Explanation" ao abrir o popup
  navLinks.forEach((link) => {
    link.style.color = "#FFF"; // Reseta todas as cores para branco
  });
  navLinks[0].style.color = "#4CA6A8"; // Define a cor da seção "Explanation" como selecionada
}

// Função para aplicar a lógica de cor nas palavras
function applyColorLogic(title) {
  const letterToChange = "S";
  let changeIndex = title.indexOf(letterToChange); // Primeiro "S"

  if (title === "SELECTIONSORT" || title === "INSERTIONSORT") {
    changeIndex = title.indexOf(letterToChange, changeIndex + 1); // Segundo "S"
  }

  // Verifique se a letra foi encontrada e aplique a alteração
  if (changeIndex !== -1) {
    const firstPart = title.substring(0, changeIndex);
    const secondPart = title.substring(changeIndex);
    return (
      `<span style="color: #4CA6A8;">${firstPart}</span>` +
      `<span style="color: #FFF;">${secondPart}</span>`
    );
  } else {
    return title; // Retorna o título original se nenhuma letra for encontrada
  }
}

// Função para fechar o popup
function closePopup() {
  document.getElementById("popup").style.display = "none"; // Oculta o pop-up
}