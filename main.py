from js import document, window, navigator, showAlertBox, resetInputs, setGraphValues
import sys
import math, random, time


sortType = "";
sortArraySize = [];



#Método para definir o tipo de sort escolhido
def setSortType(event):
    global sortType
    sortType = document.querySelector('input[name="sortOption"]:checked').value;
    #print("Sort type selected : ", sortType)


# Método para escolher numeros aleátorios e colocar no Array
def setArraySortSize(event):
    global sortArraySize
    sortArraySize = []
    quantity = int(document.querySelector('input[name="arraySize"]:checked').value);
    for i in range(quantity):
        sortArraySize.append(random.randint(0, 500))
    #print("Random arrays numbers with size", int(document.querySelector('input[name="arraySize"]:checked').value),":", sortArraySize)
    
def makeTest(event):
    global sortArraySize
    global sortType
    originalUnsortedArray = sortArraySize.copy();
    
    unsortedArray = document.getElementById("unsorted-array");
    sortedArray = document.getElementById("sorted-array");
    sortTypeSelected = document.getElementById("selected-sort-type");
        
    def performanceTest(sort):
        
        def measureMemoryUsage(array):
            return sys.getsizeof(array) / 1024
        
        def updateGraphValues(name, type, value):
            supported_sorts = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort']
            if name in supported_sorts:
                setGraphValues(name, type, value)
        
        
        sort_functions = {
        "bubblesort": bubble_sort,
        "insertionsort": insertionSort,
        "selectionsort": selectionSort,
        "heapsort": heapSort
        }
        
        sort_type = sort_functions.get(sort)
        
        start_time = time.perf_counter()
        sort_type(sortArraySize)
        end_time = time.perf_counter()
        elapsed_time_perf_counter = end_time - start_time
        print(f"Tempo decorrido com perf_counter: {elapsed_time_perf_counter:.6f} segundos")
        
        # Quantas iterações foram feitas
        iterations = sort_type(sortArraySize);
        print(iterations)
        
        # Quantos KBs estão sendo utilizados
        print(measureMemoryUsage(originalUnsortedArray), "KBs")
        
        #Dando update no tempo
        updateGraphValues(sort, 'time', f"{elapsed_time_perf_counter:.6f}")


    
    if sortType and sortArraySize:
        performanceTest(sortType);
        sortTypeSelected.innerHTML = sortType.title();
        unsortedArray.innerHTML = originalUnsortedArray;
        sortedArray.innerHTML = sortArraySize;
        window.location.hash = "#perfomance-results-container";
        resetInputValues(event);
        showAlertBox("Array sorted with success.", "success");
    else:
        showAlertBox("Error! Some fields isn't checked.", "error");
        


def resetInputValues(event):
    global sortArraySize
    global sortType
    
    try:
        sortArraySize = []
        sortType = "";
        resetInputs();
        showAlertBox("Success! Input values has been reseted.", "success")
    except Exception as e:
        showAlertBox(f"Error! {e}", "error")  
        
def bubble_sort(lista):
    iteration_count = 0
    # Este é o loop externo que controla o número de passes que o algoritmo de ordenação precisa fazer. 
    # Ele começa em len(lista) - 1 e vai até 1, decrementando n a cada iteração. 
    # O valor inicial é o comprimento da lista menos 1 porque na última iteração do loop, 
    # só um elemento resta para ser verificado.
    for n in range(len(lista) - 1, 0, -1):
        # Este é o loop interno que percorre a lista comparando elementos adjacentes. 
        # Ele vai de 0 até n - 1. Cada iteração compara o elemento i com o elemento i + 1.
        for i in range(n):
            iteration_count += 1
            # Aqui, o código compara lista[i] e lista[i + 1]. Se lista[i] é maior que lista[i + 1], 
            # significa que os elementos estão fora de ordem e precisam ser trocados.
            if lista[i] > lista[i + 1]:
                swapped = True
                # A troca é realizada através da linha lista[i], lista[i + 1] = lista[i + 1], lista[i]. 
                # Esta linha troca os valores de lista[i] e lista[i + 1].
                lista[i], lista[i + 1] = lista[i + 1], lista[i]
    
    return iteration_count
                        
def insertionSort(lista):
    iteration_count = 0
    
    # O loop externo começa a partir do índice 1 até o final da lista (len(lista) - 1). 
    # O elemento no índice 0 é considerado como parte da lista ordenada inicial, 
    # então começamos a partir do índice 1.
    for i in range(1, len(lista)):
        iteration_count += 1
        # key é o valor do elemento atual que está sendo inserido na parte ordenada da lista. 
        # j é o índice do último elemento da parte ordenada.
        key = lista[i]
        j = i - 1

        # O loop interno move os elementos da parte ordenada (que são maiores que o key) 
        # uma posição à frente para abrir espaço para o key.
        # O loop continua enquanto j for maior ou igual a 0 e o key for menor que lista[j]
        while j >= 0 and key < lista[j]:
            lista[j + 1] = lista[j]
            j -= 1
            iteration_count += 1
        # Depois que todos os elementos maiores foram movidos, o key é inserido na posição correta.
        lista[j + 1] = key    
        iteration_count += 1
        
    return iteration_count     
        
def selectionSort(array):
    iteration_count = 0
    # O loop externo percorre cada índice da lista, começando do início até o final (size - 1). 
    # ind é o índice atual onde o menor elemento da parte não ordenada será colocado.
    for ind in range(len(array)):
        # Inicializa min_index como o índice atual (ind). 
        # min_index irá armazenar o índice do menor elemento encontrado na parte não ordenada da lista.
        min_index = ind

        # O loop interno percorre os elementos restantes da lista a partir de ind + 1 até o final. 
        # j é o índice atual no loop interno.
        for j in range(ind + 1, len(array)):
            iteration_count += 1
            
            # Se o elemento no índice j é menor que o elemento no índice min_index, 
            # atualiza min_index para j. Isso garante que min_index sempre apontará 
            # para o menor elemento encontrado na parte não ordenada.
            if array[j] < array[min_index]:
                min_index = j
            # Após encontrar o menor elemento na parte não ordenada da lista, 
            # troca o elemento no índice ind com o elemento no índice min_index. 
            # Isso coloca o menor elemento na posição correta.
        (array[ind], array[min_index]) = (array[min_index], array[ind])   
        
    return iteration_count
                  
def heapSort(arr):
    iteration_count = 0
    
    def heapify(arr, n, i):
        nonlocal iteration_count
        
        largest = i  # Inicializa largest como o índice i (raiz).
        l = 2 * i + 1  # Índice do filho esquerdo.
        r = 2 * i + 2  # Índice do filho direito.

        # Se o filho esquerdo é maior que a raiz.
        if l < n and arr[i] < arr[l]:
            largest = l
        iteration_count += 1

        # Se o filho direito é maior que o maior valor encontrado até agora.
        if r < n and arr[largest] < arr[r]:
            largest = r
        iteration_count += 1

        # Se o maior valor não é a raiz, faz a troca e continua a heapificação.
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]  # Swap
            iteration_count += 1
            heapify(arr, n, largest)  # Heapifica a subárvore.

    n = len(arr)  # Move a definição de n para o início da função.

    # Constroi o max heap.
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extrai os elementos um a um.
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Troca
        iteration_count += 1
        heapify(arr, i, 0)  # Não precisa mais do valor original de n aqui.
        
    return iteration_count