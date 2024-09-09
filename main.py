from js import document, window, alert, showAlertBox, resetInputs
import math, random, time

sortType = "";
sortArraySize = [];



#Método para definir o tipo de sort escolhido
def setSortType(event):
    global sortType
    sortType = document.querySelector('input[name="sortOption"]:checked').value;
    print("Sort type selected : ", sortType)


# Método para escolher numeros aleátorios e colocar no Array
def setArraySortSize(event):
    global sortArraySize
    sortArraySize = []
    quantity = int(document.querySelector('input[name="arraySize"]:checked').value);
    for i in range(quantity):
        sortArraySize.append(random.randint(0, 500))
    print("Random arrays numbers with size", int(document.querySelector('input[name="arraySize"]:checked').value),":", sortArraySize)
    
    

def makeTest(event):
    global sortArraySize
    global sortType
    print(sortType)
    print(sortArraySize)
    
    def performanceTest(sort):
        
        sort_functions = {
        "bubblesort": bubble_sort,
        "insertionsort": insertionSort,
        "selectionsort": selectionSort
        }
        
        sort_type = sort_functions.get(sort)
        
        start_time = time.perf_counter()
        sort_type(sortArraySize)
        end_time = time.perf_counter()
        elapsed_time_perf_counter = end_time - start_time
        print(f"Tempo decorrido com perf_counter: {elapsed_time_perf_counter:.6f} segundos")

        # Medir o tempo de execução com time.process_time()
        # time.process_time() medirá apenas o tempo de CPU efetivo utilizado, ignorando o tempo de espera.
        start_time = time.process_time()
        sort_type(sortArraySize)
        end_time = time.process_time()
        elapsed_time_process_time = end_time - start_time
        print(f"Tempo de CPU com process_time: {elapsed_time_process_time:.6f} segundos")
        sort_type(sortArraySize)
        
        print(sortArraySize)
    
    if sortType and sortArraySize:
        performanceTest(sortType)
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
    # Este é o loop externo que controla o número de passes que o algoritmo de ordenação precisa fazer. 
    # Ele começa em len(lista) - 1 e vai até 1, decrementando n a cada iteração. 
    # O valor inicial é o comprimento da lista menos 1 porque na última iteração do loop, 
    # só um elemento resta para ser verificado.
    for n in range(len(lista) - 1, 0, -1):
        # Este é o loop interno que percorre a lista comparando elementos adjacentes. 
        # Ele vai de 0 até n - 1. Cada iteração compara o elemento i com o elemento i + 1.
        for i in range(n):
            # Aqui, o código compara lista[i] e lista[i + 1]. Se lista[i] é maior que lista[i + 1], 
            # significa que os elementos estão fora de ordem e precisam ser trocados.
            if lista[i] > lista[i + 1]:
                    swapped = True
                    # A troca é realizada através da linha lista[i], lista[i + 1] = lista[i + 1], lista[i]. 
                    # Esta linha troca os valores de lista[i] e lista[i + 1].
                    lista[i], lista[i + 1] = lista[i + 1], lista[i]
                    
def insertionSort(lista):
    # O loop externo começa a partir do índice 1 até o final da lista (len(lista) - 1). 
    # O elemento no índice 0 é considerado como parte da lista ordenada inicial, 
    # então começamos a partir do índice 1.
    for i in range(1, len(lista)):
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
        # Depois que todos os elementos maiores foram movidos, o key é inserido na posição correta.
        lista[j + 1] = key         
        
def selectionSort(array):
    # O loop externo percorre cada índice da lista, começando do início até o final (size - 1). 
    # ind é o índice atual onde o menor elemento da parte não ordenada será colocado.
    for ind in range(len(array)):

        # Inicializa min_index como o índice atual (ind). 
        # min_index irá armazenar o índice do menor elemento encontrado na parte não ordenada da lista.
        min_index = ind

        # O loop interno percorre os elementos restantes da lista a partir de ind + 1 até o final. 
        # j é o índice atual no loop interno.
        for j in range(ind + 1, len(array)):
            
            # Se o elemento no índice j é menor que o elemento no índice min_index, 
            # atualiza min_index para j. Isso garante que min_index sempre apontará 
            # para o menor elemento encontrado na parte não ordenada.
            if array[j] < array[min_index]:
                min_index = j
        
            # Após encontrar o menor elemento na parte não ordenada da lista, 
            # troca o elemento no índice ind com o elemento no índice min_index. 
            # Isso coloca o menor elemento na posição correta.
        (array[ind], array[min_index]) = (array[min_index], array[ind])             
