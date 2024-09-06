import time

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


# O loop for percorre todos os elementos da lista e imprime cada um seguido por um espaço 
# (usando end=" " para evitar a quebra de linha). 
# Após imprimir todos os elementos, print() é chamado para adicionar uma quebra de linha final.
def printArray(lista):
    for i in range(len(lista)):
        # Define uma função printArray que imprime todos os elementos de uma lista lista.
        print(lista[i], end=" ")
    print()

# Verifica se o script está sendo executado diretamente (não importado como um módulo). 
# Se for o caso, o bloco de código abaixo será executado.

 # Medir o tempo de execução com time.perf_counter()
    start_time = time.perf_counter()
    insertionSort(lista)
    end_time = time.perf_counter()
    elapsed_time_perf_counter = end_time - start_time
    print(f"Tempo decorrido com perf_counter: {elapsed_time_perf_counter:.6f} segundos")

# Medir o tempo de execução com time.process_time()
    start_time = time.process_time()
    insertionSort(lista)
    end_time = time.process_time()
    elapsed_time_process_time = end_time - start_time
    print(f"Tempo de CPU com process_time: {elapsed_time_process_time:.6f} segundos")

if __name__ == "__main__":
    lista = [12, 11, 13, 5, 6]
    insertionSort(lista)
    printArray(lista)


