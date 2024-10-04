from js import document, window, navigator, showAlertBox, resetInputs, setGraphValues, sessionStorage
import sys
import math, random, time


sortType = "";
ordinationType  = "repeat";
Array = [];
ArraySize = 0;
userArray = [];


def printaAporratoda(name):
    print("----------------------------------")
    print("Aonde isso foi chamado", name)
    
    print("Sort type : ", sortType)
    print("Array size :", ArraySize)
    print("Ordination type :", ordinationType)
    print("Array :", Array)
    print("----------------------------------")


#Método para definir o tipo de sort escolhido
def setSortType(event):
    global sortType
    sortType = document.querySelector('input[name="sortOption"]:checked').value;
    #print("Sort type selected : ", sortType)
    

# Método para escolher tamanho dos array
def setArraySortSize(event):
    global ArraySize        
    quantity = int(document.querySelector('input[name="arraySize"]:checked').value)
    ArraySize = quantity
    
     

# Método para escolher o tipo de ordenação: com repetição ou sem repetição de números
def setOrdinationType(event):
    global ordinationType
    global Array
    ordinationType = document.getElementById("ordinationType").value

    # Valida se é para repetir ou não os números
    if ordinationType == "unique":
        # Gerar números únicos sem repetição
        Array = random.sample(range(0, 15000), ArraySize)
    elif ordinationType == "repeat":
        # Gerar números com repetição
        Array = [random.randint(0, 15000) for _ in range(ArraySize)]
        

def updateStatistics(name, value):
    elementIds = {
        'bubblesort': "bubblesort-count",
        'insertionsort': "insertionsort-count",
        'selectionsort': "selectionsort-count",
        'heapsort': "heapsort-count",
        'totalTime': "totaltime-count",
        'totalIterations': "iterations-count"
    }
    
    element = document.getElementById(elementIds.get(name))
    

    if element:
        current_value = float(element.innerHTML.replace('s', '').replace(' ', '') or '0')
        new_value = current_value + float(value)
        element.innerHTML = f"{new_value:.3f}s" if name == 'totalTime' else str(int(new_value))

def makeManualTest(event):
    user_array = document.getElementById("userArrayInput").value.strip()
    
    if not user_array:
        showAlertBox("empty_input", "error")
        return

    try:
        string_list = user_array.split(',')
        integer_list = [int(x.strip()) for x in string_list if x.strip()]
        
        # Aqui você deve adicionar a lógica para exibir o array ordenado
        response_array = document.getElementById("arraySortedResponse")
        response_array.value = sorted(integer_list)
        
        showAlertBox("manual_sort_success", "success")
    except ValueError:
        showAlertBox("invalid_input", "error")

def calculate_color(value, min_value, max_value):
    # Definindo as cores de início e fim (R, G, B)
    start_color = (70, 100, 140)  # Azul
    end_color = (140, 50, 70)    # Vermelho

    # Calculando a proporção do valor entre o mínimo e o máximo
    ratio = (value - min_value) / (max_value - min_value) if max_value != min_value else 0

    # Interpolando as cores (R, G, B)
    r = int(start_color[0] + ratio * (end_color[0] - start_color[0]))
    g = int(start_color[1] + ratio * (end_color[1] - start_color[1]))
    b = int(start_color[2] + ratio * (end_color[2] - start_color[2]))

    # Retorna a cor no formato RGB
    return f'rgb({r},{g},{b})'
def render_colored_array(array):
    min_value = min(array)
    max_value = max(array)
    
    # Lista para armazenar os elementos coloridos com vírgula
    colored_elements = []

    # Gerando um <span> para cada número com uma cor interpolada
    for num in array:
        color = calculate_color(num, min_value, max_value)
        colored_elements.append(f'<span style="color:{color}">{num}</span>')
    
    # Junta os elementos da lista com uma vírgula e espaço
    colored_html = ', '.join(colored_elements)
    
    # Retorna a string contendo os spans com cores e vírgulas
    return colored_html

def makeTest(event):

    global Array
    global sortType
    
    unsortedArray = document.getElementById("unsorted-array");
    sortedArray = document.getElementById("sorted-array");
    sortTypeSelected = document.getElementById("selected-sort-type");
    generalStatistics = document.getElementById("general-statistics-container");

    def performanceTest(sort):

        def measureMemoryUsage(array):
            return sys.getsizeof(array) / 1024

        def updateGraphValues(name, type, value):
            supported_sorts = ['bubblesort', 'insertionsort', 'selectionsort', 'heapsort']
            if name in supported_sorts:
                setGraphValues(name, type, value)

        def updateAllStatistics():
            updateStatistics(sort, 1);
            updateStatistics('totalTime', f"{elapsed_time_perf_counter:.6f}");
            updateStatistics('totalIterations', sort_type(Array));

        sort_functions = {
        "bubblesort": bubble_sort,
        "insertionsort": insertionSort,
        "selectionsort": selectionSort,
        "heapsort": heapSort
        }

        sort_type = sort_functions.get(sort)

        start_time = time.perf_counter()
        sort_type(Array)
        end_time = time.perf_counter()
        elapsed_time_perf_counter = end_time - start_time

        updateAllStatistics();
        
        #Dando update nos gráficos com tempo, iterações e memória.
        updateGraphValues(sort, 'time', f"{elapsed_time_perf_counter:.6f}")
        updateGraphValues(sort, 'iterations', sort_type(Array))
        updateGraphValues(sort, 'memory', measureMemoryUsage(UnsortedArray))
    
    if sortType and ArraySize:
        setOrdinationType(event)
        UnsortedArray = Array.copy();
        performanceTest(sortType)
        
        sortTypeSelected.innerHTML = sortType.title();
        unsortedArray.innerHTML = render_colored_array(UnsortedArray)
        sortedArray.innerHTML = render_colored_array(Array)
        window.location.hash = "#perfomance-results-container"
        
        if generalStatistics.style.display != "flex":
            generalStatistics.style.display = "flex"
        
        resetInputs();
        showAlertBox("manual_sort_success", "success")
        
        
        
    else:
        showAlertBox("fields_not_checked", "error")


def bubble_sort(lista):
    iteration_count = 0
    for n in range(len(lista) - 1, 0, -1):
        for i in range(n):
            iteration_count += 1
            if lista[i] > lista[i + 1]:
                swapped = True
                lista[i], lista[i + 1] = lista[i + 1], lista[i]
    
    return iteration_count
def insertionSort(lista):
    iteration_count = 0
    for i in range(1, len(lista)):
        iteration_count += 1
        key = lista[i]
        j = i - 1
        while j >= 0 and key < lista[j]:
            lista[j + 1] = lista[j]
            j -= 1
            iteration_count += 1
        lista[j + 1] = key    
        iteration_count += 1
    return iteration_count     
def selectionSort(array):
    iteration_count = 0
    for ind in range(len(array)):
        min_index = ind
        for j in range(ind + 1, len(array)):
            iteration_count += 1
            if array[j] < array[min_index]:
                min_index = j
        (array[ind], array[min_index]) = (array[min_index], array[ind])   
    return iteration_count
def heapSort(arr):
    iteration_count = 0
    def heapify(arr, n, i):
        nonlocal iteration_count
        
        largest = i  # Inicializa largest como o índice i (raiz).
        l = 2 * i + 1  # Índice do filho esquerdo.
        r = 2 * i + 2  # Índice do filho direito.

        if l < n and arr[i] < arr[l]:
            largest = l
        iteration_count += 1

        if r < n and arr[largest] < arr[r]:
            largest = r
        iteration_count += 1

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]  # Swap
            iteration_count += 1
            heapify(arr, n, largest)  # Heapifica a subárvore.

    n = len(arr)  # Move a definição de n para o início da função.

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Troca
        iteration_count += 1
        heapify(arr, i, 0)  # Não precisa mais do valor original de n aqui.
        
    return iteration_count