// Objeto contendo informações sobre os algoritmos de ordenação
const sortAlgorithms = {
    'Bubblesort Information': {
        title: 'BUBBLESORT',
        explanation: "The bubble sort algorithm organizes a list by comparing pairs of adjacent elements, like children in a line. First, we look at the first two children; if the one on the left is taller than the one on the right, we swap them. We keep doing this until we reach the end of the line. We repeat this process several times until no one needs to switch places anymore. In the end, the line will be organized from shortest to tallest!",
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




        description: 'Assume the following  array: [22, 11, 54, 32]:',
        description2: '',
        titleTopic1: 'First iteration (i = 0):',
        topic1: 'Compare the first with the second, is it greater? Yes.',


        stepByStepRight: '',
        details: '',
        imagePath: 'imgs/bubblesort.jpg',
    },
    'Insertionsort Information': {
        title: 'INSERTIONSORT',
        explanation: "Imagine you have a box of mixed pencils. You take one pencil and place it in your hand, which is already organized. Then, you take another pencil and check where it should go in your hand, placing it in the correct position. You repeat this until all the pencils are organized. In the end, you count how many times you looked at and compared the pencils to arrange them in order!",
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
        titleStepByStep: 'Assume the following array: [22, 11, 54, 32]:',
        subtitleStepByStep: 'First iteration (i = 0):',
        stepByStep: `Compare the first with the second, is it greater? Yes.
                    Swap 22 with 11.
                    The array is now: [11, 22, 54, 32].`,
        details: '',
        imagePath: 'imgs/insertionsort.jpg',
    },
    'Selectionsort Information': {
        title: 'SELECTIONSORT',
        explanation: "To organize the toys, you start by looking at all of them and choosing the smallest one. Then, you put this smallest one in the box. Next, you look at the remaining toys and choose the smallest one among them, placing it in the box as well. You repeat this process until all the toys are organized. In the end, you count how many times you looked to pick the smallest toy.",
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
        titleStepByStep: 'Assume the following array: [22, 11, 54, 32]:',
        subtitleStepByStep: 'First iteration (i = 0):',
        stepByStep: `Compare the first with the second, is it greater? Yes.
                                                                                                        Swap 22 with 11.
                                                                                                        The array is now: [11, 22, 54, 32].`,
        details: '',
        imagePath: 'imgs/selectionsort.jpg',
    },
    'Heapsort Information': {
        title: 'HEAPSORT',
        explanation: "To sort numbers using a heap, we first place all the numbers into a heap, where the largest stone (number) is at the top. Then, we remove this largest stone from the top and reorganize the heap, repeating the process until all the stones are removed. Each time we remove a stone, we count that action as an iteration. In the end, we will have the numbers organized from smallest to largest.",
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
        </div>
    </div>
</div>
    
`,
        titleStepByStep: 'Assume the following array: [22, 11, 54, 32]:',
        details: '',
        imagePath: 'imgs/heapsort.jpg',
    }
};

// Função para mostrar o pop-up
function showPopup(sortType) {
    const algorithm = sortAlgorithms[sortType];

    if (!algorithm) {
        console.error("Sort type not recognized.");
        return;
    }

    // Atualiza o conteúdo do pop-up
    document.getElementById('popup-title').innerHTML = applyColorLogic(algorithm.title);
    document.getElementById('popup-explanation').innerText = algorithm.explanation;
    document.getElementById('popup-code').innerHTML = algorithm.code;
    document.getElementById('popup-code2').innerHTML = algorithm.code2 || '';
    document.getElementById('popup-code3').innerHTML = algorithm.code3 || '';
    document.getElementById('popup-step-by-step').innerText = algorithm.stepByStep || '';

    document.getElementById('popup-title-step-by-step').innerText = algorithm.description;
    document.getElementById('popup-subtitle-step-by-step').innerText = algorithm.description2;


/*
    document.getElementById('title-1').innerText = algorithm.titleTopic1;
    document.getElementById('title-2').innerText = algorithm.titleTopic2;
    document.getElementById('title-3').innerText = algorithm.titleTopic3;
    document.getElementById('title-4').innerText = algorithm.titleTopic4;
    document.getElementById('title-5').innerText = algorithm.titleTopic5;
    document.getElementById('title-6').innerText = algorithm.titleTopic6;
    document.getElementById('title-7').innerText = algorithm.titleTopic7;
    document.getElementById('title-8').innerText = algorithm.titleTopic8;

    document.getElementById('item-1').innerText = algorithm.topic1;
    document.getElementById('item-2').innerText = algorithm.topic2;
    document.getElementById('item-3').innerText = algorithm.topic3;
    document.getElementById('item-4').innerText = algorithm.topic4;
    document.getElementById('item-5').innerText = algorithm.topic5;
    document.getElementById('item-6').innerText = algorithm.topic6;
    document.getElementById('item-7').innerText = algorithm.topic7;
    document.getElementById('item-8').innerText = algorithm.topic8;
    document.getElementById('item-9').innerText = algorithm.topic9;
    document.getElementById('item-10').innerText = algorithm.topic10;
    document.getElementById('item-11').innerText = algorithm.topic11;
    document.getElementById('item-12').innerText = algorithm.topic12;
    document.getElementById('item-13').innerText = algorithm.topic13;
    document.getElementById('item-14').innerText = algorithm.topic14;
    document.getElementById('item-15').innerText = algorithm.topic15;
    document.getElementById('item-16').innerText = algorithm.topic16;
    document.getElementById('item-17').innerText = algorithm.topic17;
    document.getElementById('item-18').innerText = algorithm.topic18;
    document.getElementById('item-19').innerText = algorithm.topic19;
    document.getElementById('item-20').innerText = algorithm.topic20;
    document.getElementById('item-21').innerText = algorithm.topic21;
    document.getElementById('item-22').innerText = algorithm.topic22;
    document.getElementById('item-23').innerText = algorithm.topic23;
    document.getElementById('item-24').innerText = algorithm.topic24;
    */

    document.getElementById('popup-details').innerText = algorithm.details || '';
    document.querySelector('.popup-image').src = algorithm.imagePath;

    // Exibe o pop-up e ativa a aba de explicação
    document.getElementById('popup').style.display = 'flex';
    showSection('popup-explanation'); // Exibe a seção de explicação por padrão ao abrir o popup

    // Fecha o popup ao clicar fora dele
    window.onclick = function (event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            closePopup();
        }
    };

    // Função para mostrar e ocultar seções com base no ID
    function showSection(sectionId) {
        const sections = ['popup-explanation', 'popup-code', 'popup-step-by-step', 'popup-details'];
        sections.forEach(id => {
            document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
        });

        const titleElement = document.getElementById('popup-title');

        // Condicional para mover o título para o topo ou manter no centro
        if (sectionId === 'popup-code' || sectionId === 'popup-step-by-step' || sectionId === 'popup-details') {
            titleElement.style.position = 'absolute';
            titleElement.style.top = '-7vw'; // Posiciona no topo do pop-up
            titleElement.style.left = '15%';
            titleElement.style.transform = 'translateX(-50%)';
        } else {
            titleElement.style.position = 'static'; // Retorna o título para o posicionamento padrão (meio)
            titleElement.style.transform = 'none';
        }

        // Controle de exibição das barras do meio
        const middleDividerStep = document.getElementById('middle-divider-step');
        const middleDividerDetails = document.getElementById('middle-divider-details');

        // O middleDividerStep deve ser exibido na seção "step-by-step" e "details"
        middleDividerStep.style.display = (sectionId === 'popup-step-by-step' || sectionId === 'popup-details') ? 'block' : 'none';

        middleDividerDetails.classList.toggle('hidden', sectionId !== 'popup-details');

        // Exibe o título e o subtítulo do passo a passo apenas na seção "step-by-step"
        const titleStepByStepElement = document.getElementById('popup-title-step-by-step');
        const subtitleStepByStepElement = document.getElementById('popup-subtitle-step-by-step');

        const isStepByStep = sectionId === 'popup-step-by-step';
        titleStepByStepElement.style.display = isStepByStep ? 'block' : 'none';
        subtitleStepByStepElement.style.display = isStepByStep ? 'block' : 'none';


        // Remove a imagem se a seção ativa não for a de explicação
        const imageElement = document.querySelector('.popup-image');
        imageElement.style.display = sectionId === 'popup-explanation' ? 'block' : 'none';

        // Mostra ou oculta o code2 com base na seção ativa
        const code2Element = document.getElementById('popup-code2');
        code2Element.style.display = sectionId === 'popup-code' ? 'block' : 'none';

        // Mostra ou oculta o code3 com base na seção ativa
        const code3Element = document.getElementById('popup-code3');
        code3Element.style.display = (sectionId === 'popup-code' && sortType === 'Heapsort Information') ? 'block' : 'none';


        // Mostra ou oculta o code3 com base na seção ativa
        const stepBystepContainerElement = document.getElementById('step-by-step-container');
        stepBystepContainerElement.style.display = (sectionId === 'popup-code' && sortType === 'Heapsort Information') ? 'block' : 'none';
    }


    // Adiciona um evento para cada link da navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId); // Exibe a seção clicada e oculta as outras

            // Muda a cor do hover para a seção selecionada
            navLinks.forEach(l => l.style.color = '#FFF'); // Reseta a cor para branco
            link.style.color = '#4CA6A8'; // Altera a cor da seção selecionada
        });
    });

    // Resetar a cor da navbar para a seção "Explanation" ao abrir o popup
    navLinks.forEach(link => {
        link.style.color = '#FFF'; // Reseta todas as cores para branco
    });
    navLinks[0].style.color = '#4CA6A8'; // Define a cor da seção "Explanation" como selecionada
}

// Função para aplicar a lógica de cor nas palavras
function applyColorLogic(title) {
    const letterToChange = 'S';
    let changeIndex = title.indexOf(letterToChange); // Primeiro "S"

    if (title === 'SELECTIONSORT' || title === 'INSERTIONSORT') {
        changeIndex = title.indexOf(letterToChange, changeIndex + 1); // Segundo "S"
    }

    // Verifique se a letra foi encontrada e aplique a alteração
    if (changeIndex !== -1) {
        const firstPart = title.substring(0, changeIndex);
        const secondPart = title.substring(changeIndex);
        return `<span style="color: #4CA6A8;">${firstPart}</span>` +
            `<span style="color: #FFF;">${secondPart}</span>`;
    } else {
        return title; // Retorna o título original se nenhuma letra for encontrada
    }
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Oculta o pop-up
}