from js import document, window, navigator, showAlertBox, resetInputs, setGraphValues
import sys
import math, random, time


sortType = "";
sortArraySize = [];
userArray = [];

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
    
    current_value_str = element.innerHTML
    current_value = float(current_value_str.replace('s', '').replace(' ', '') or '0')
    
    # Convert the new value to a number
    value = float(value)
    
    # Update the element with the new sum
    new_value = current_value + value
    element.innerHTML = f"{new_value:.3f}s" if name == 'totalTime' else str(int(new_value))



def makeManualTest(event):
    userArray = document.getElementById("userArrayInput").value.strip()
    if not userArray:
        showAlertBox("Input cannot be empty.", "error")
        return

    try:
        stringList = userArray.split(',')
        integerList = [int(x.strip()) for x in stringList if x.strip()]
        responseArray = document.getElementById("arraySortedResponse")
        responseArray.value = sorted(integerList)
        showAlertBox("Manual array sorted with success.", "success")
    except ValueError:
        showAlertBox("Invalid input on manual sort test. Please enter integers separated by commas.", "error")
        resetInputs()

def resetInputValues(event):
    global sortArraySize
    global sortType
    
    sortArraySize = []
    sortType = ""
    resetInputs()
    document.getElementById("unsorted-array").innerHTML = "[]"
    document.getElementById("sorted-array").innerHTML = "[]"
    showAlertBox("Success! Input values have been reset.", "success")


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

        def updateAllStatistics():
            updateStatistics(sort, 1);
            updateStatistics('totalTime', f"{elapsed_time_perf_counter:.6f}");
            updateStatistics('totalIterations', sort_type(sortArraySize));


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
        

        updateAllStatistics();
        
        #Dando update nos gráficos com tempo, iterações e memória.
        updateGraphValues(sort, 'time', f"{elapsed_time_perf_counter:.6f}")
        updateGraphValues(sort, 'iterations', sort_type(sortArraySize))
        updateGraphValues(sort, 'memory', measureMemoryUsage(originalUnsortedArray))
        
    
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