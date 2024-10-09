
print("pau")

def printameupau():
    print("pau")

def bubble_sort(array):
    iteration_count = 0
    for n in range(len(array) - 1, 0, -1):
        for i in range(n):
            iteration_count += 1
            if array[i] > array[i + 1]:
                swapped = True
                array[i], array[i + 1] = array[i + 1], array[i]
    
    return iteration_count
def insertionSort(array):
    iteration_count = 0
    for i in range(1, len(array)):
        iteration_count += 1
        key = array[i]
        j = i - 1
        while j >= 0 and key < array[j]:
            array[j + 1] = array[j]
            j -= 1
            iteration_count += 1
        array[j + 1] = key    
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
def heapSort(array):
    iteration_count = 0
    def heapify(array, n, i):
        nonlocal iteration_count
        
        largest = i  # Inicializa largest como o índice i (raiz).
        l = 2 * i + 1  # Índice do filho esquerdo.
        r = 2 * i + 2  # Índice do filho direito.

        if l < n and array[i] < array[l]:
            largest = l
        iteration_count += 1

        if r < n and array[largest] < array[r]:
            largest = r
        iteration_count += 1

        if largest != i:
            array[i], array[largest] = array[largest], array[i]  # Swap
            iteration_count += 1
            heapify(array, n, largest)  # Heapifica a subárvore.

    n = len(array)  # Move a definição de n para o início da função.

    for i in range(n // 2 - 1, -1, -1):
        heapify(array, n, i)

    for i in range(n - 1, 0, -1):
        array[i], array[0] = array[0], array[i]  # Troca
        iteration_count += 1
        heapify(array, i, 0)  # Não precisa mais do valor original de n aqui.
        
    return iteration_count