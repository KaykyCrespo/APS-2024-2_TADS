// Objeto contendo informações sobre os algoritmos de ordenação
const sortAlgorithms = {
    'Bubblesort Information': {
        title: 'BUBBLESORT',
        explanation: "The bubble sort algorithm organizes a list by comparing pairs of adjacent elements, like children in a line. First, we look at the first two children; if the one on the left is taller than the one on the right, we swap them. We keep doing this until we reach the end of the line. We repeat this process several times until no one needs to switch places anymore. In the end, the line will be organized from shortest to tallest!",
        code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">bubble_sort</span>(array):<br>
               &nbsp;&nbsp;n = <span class="code-coler-orange">len</span>(array)<br>
               &nbsp;&nbsp;iterations = 0 <span class="code-coler-gray"># Interaction counter</span><br>
               <br>
               &nbsp;&nbsp;<span class="code-coler-gray"># Iterate through all of the array</span><br>
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
        titleStepByStepElement: 'Assume the following array: [22, 11, 54, 32]:',
        subtitleStepByStepElement: 'First iteration (i = 0):',
        stepByStep: `Compare the first with the second, is it greater? Yes.
            Swap 22 with 11.
                     The array is now: [11, 22, 54, 32].`,
        details: '',
        imagePath: 'imgs/bubblesort.jpg',
    },
    'Insertionsort Information': {
        title: 'INSERTIONSORT',
        explanation: "Imagine you have a box of mixed pencils. You take one pencil and place it in your hand, which is already organized. Then, you take another pencil and check where it should go in your hand, placing it in the correct position. You repeat this until all the pencils are organized. In the end, you count how many times you looked at and compared the pencils to arrange them in order!",
        code: `<span class="code-coler-blue">def</span> <span class="code-coler-red">insertion_sort</span>(array):<br>
        iterations = 0 <span class="code-coler-gray"># Counter for iterations</span><br>
        <br>
        <span class="code-coler-blue">for</span> i <span class="code-coler-blue">in</span> <span class="code-coler-orange">range</span>(<span class="code-coler-red">1</span>, <span class="code-coler-orange">len</span>(array)):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;key = array[i] <span class="code-coler-gray"># The element to be inserted</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;j = i - <span class="code-coler-red">1</span> <span class="code-coler-gray"># The index of the previous element</span><br>
        <br>
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
        array = [<span class="code-coler-red">22</span>, <span class="code-coler-red">11</span>, <span class="code-coler-red">54</span>, <span class="code-coler-red">32</span>] <br>
        total_iterations = selection_sort(array) <br>
        <span class="code-coler-orange">print</span>(<span class="code-coler-green">"Sorted array: "</span>, array) <br>
        <span class="code-coler-orange">print</span>(<span class="code-coler-green">"Total interactions: "</span>, total_iterations)
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
        code: `def heapify(array, n, i, interactions):
                                                                                                        largest = i  # Assume root is the largest element
                                                                                                        left = 2 * i + 1  # Index of left child
                                                                                                        right = 2 * i + 2  # Index of right child
                                                                                                        if left < n and array[left] > array[largest]:
                                                                                                        largest = left
                                                                                                        if right < n and array[right] > array[largest]:
                                                                                                        largest = right
                                                                                                        if largest != i:
                                                                                                        array[i], array[largest] = array[largest], array[i]
                                                                                                        interactions[0] += 1  # Increment interaction
                                                                                                        heapify(array, n, largest, interactions)`,
        code2: `def heap_sort(array):
                                                                                                        n = len(array)
                                                                                                        interactions = [0];

                                                                                                        # Build the max heap
                                                                                                        for i in range(n // 2 - 1, -1, -1):
                                                                                                        heapify(array, n, i, interacoes)


                                                                                                        # Extract one element at a time from the heap
                                                                                                        for i in range(n - 1, 0, -1):
                                                                                                        array[i], array[0] = array[0], array[i]  # Move the root to the end
                                                                                                        interactions[0] += 1
                                                                                                        heapify(array, i, 0, interactions)  # Call heapify
                                                                                                        return interactions`,
        titleStepByStep: 'Assume the following array: [22, 11, 54, 32]:',
        subtitleStepByStep: 'First iteration (i = 0):',
        stepByStep: `Compare the first with the second, is it greater? Yes.
                                                                                                        Swap 22 with 11.
                                                                                                        The array is now: [11, 22, 54, 32].`,
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
    document.getElementById('popup-code').innerHTML = algorithm.code; // Alterado para innerHTML
    document.getElementById('popup-code2').innerHTML = algorithm.code2 || ''; // Alterado para innerHTML
    document.getElementById('popup-step-by-step').innerText = algorithm.stepByStep || '';
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
        const middleDividerHeapsort = document.getElementById('middle-divider-heapsort');

        middleDividerStep.classList.toggle('hidden', sectionId !== 'popup-step-by-step');
        middleDividerDetails.classList.toggle('hidden', sectionId !== 'popup-details');
        middleDividerHeapsort.classList.toggle('hidden', sectionId !== 'heapsort');
        middleDividerHeapsort.style.display = sectionId === 'popup-explanation' && sortType === 'Heapsort Information' ? 'block' : 'none'; // Exibe a barra do Heapsort

        // Exibe o título e o subtítulo do passo a passo apenas na seção "step-by-step"
        const titleStepByStepElement = document.getElementById('popup-title-step-by-step');
        const subtitleStepByStepElement = document.getElementById('popup-subtitle-step-by-step');

        titleStepByStepElement.style.display = sectionId === 'popup-step-by-step' ? 'block' : 'none';
        subtitleStepByStepElement.style.display = sectionId === 'popup-step-by-step' ? 'block' : 'none';

        // Remove a imagem se a seção ativa não for a de explicação
        const imageElement = document.querySelector('.popup-image');
        imageElement.style.display = sectionId === 'popup-explanation' ? 'block' : 'none';

        // Mostra ou oculta o code2 com base na seção ativa
        const code2Element = document.getElementById('popup-code2');
        code2Element.style.display = sectionId === 'popup-code' ? 'block' : 'none';
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