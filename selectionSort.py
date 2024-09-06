import time

# Comentário que indica que o código implementa o algoritmo de ordenação Selection Sort 
# e que sua complexidade de tempo é O(n²). O Selection Sort ordena o array encontrando 
# o índice do menor elemento e trocando-o com o elemento atual.

# Selection sort in Python
# time complexity O(n*n)
# sorting by finding min_index

# array: a lista a ser ordenada.
# size: o tamanho da lista (ou o número de elementos).

def selectionSort(array, size):
    # O loop externo percorre cada índice da lista, começando do início até o final (size - 1). 
    # ind é o índice atual onde o menor elemento da parte não ordenada será colocado.
    for ind in range(size):

        # Inicializa min_index como o índice atual (ind). 
        # min_index irá armazenar o índice do menor elemento encontrado na parte não ordenada da lista.
        min_index = ind

        # O loop interno percorre os elementos restantes da lista a partir de ind + 1 até o final. 
        # j é o índice atual no loop interno.
        for j in range(ind + 1, size):
            
            # Se o elemento no índice j é menor que o elemento no índice min_index, 
            # atualiza min_index para j. Isso garante que min_index sempre apontará 
            # para o menor elemento encontrado na parte não ordenada.
            if array[j] < array[min_index]:
                min_index = j
        
            # Após encontrar o menor elemento na parte não ordenada da lista, 
            # troca o elemento no índice ind com o elemento no índice min_index. 
            # Isso coloca o menor elemento na posição correta.
        (array[ind], array[min_index]) = (array[min_index], array[ind])

# A utility function to print array of size n
def printArray(array):
    for element in array:
        print(element, end=" ")
    print()

# Driver method
if __name__ == "__main__":
    arr = [-2, 45, 0, 11, -9, 88, -97, -202, 747]
    size = len(arr)

    # Medir o tempo de execução com time.perf_counter()
    start_time = time.perf_counter()
    selectionSort(arr, size)
    end_time = time.perf_counter()
    elapsed_time_perf_counter = end_time - start_time
    print(f"Tempo decorrido com perf_counter: {elapsed_time_perf_counter:.6f} segundos")

    # Redefinir a lista para a próxima medição
    arr = [-2, 45, 0, 11, -9, 88, -97, -202, 747]

    # Medir o tempo de execução com time.process_time()
    start_time = time.process_time()
    selectionSort(arr, size)
    end_time = time.process_time()
    elapsed_time_process_time = end_time - start_time
    print(f"Tempo de CPU com process_time: {elapsed_time_process_time:.6f} segundos")

    # Imprimir a lista ordenada para verificar se o algoritmo funcionou
    print('The array after sorting in Ascending Order by selection sort is:')
    printArray(arr)