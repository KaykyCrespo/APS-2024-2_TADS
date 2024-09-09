#!/usr/bin/python  # Especifica o caminho do interpretador Python.
# -*- coding: utf-8 -*-  # Define a codificação de caracteres como UTF-8.

import time  # Importa a biblioteca time para medir o tempo de execução.

# Função para organizar a subárvore com raiz no índice i. n é o tamanho do heap.
def heapify(arr, n, i):
    largest = i  # Inicializa largest como o índice i (raiz).
    l = 2 * i + 1  # Índice do filho esquerdo.
    r = 2 * i + 2  # Índice do filho direito.

    # Se o filho esquerdo é maior que a raiz.
    if l < n and arr[i] < arr[l]:
        largest = l

    # Se o filho direito é maior que o maior valor encontrado até agora.
    if r < n and arr[largest] < arr[r]:
        largest = r

    # Se o maior valor não é a raiz, faz a troca e continua a heapificação.
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # Swap
        heapify(arr, n, largest)  # Heapifica a subárvore.

# Função principal para ordenar o array usando Heap Sort.
def heapSort(arr):
    n = len(arr)

    # Constroi o max heap.
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extrai os elementos um a um.
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Troca
        heapify(arr, i, 0)

# Lista de elementos a serem ordenados.
arr = [12, 11, 13, 5, 6, 7]

# Medindo o tempo de CPU para a execução do Heap Sort.
start_time = time.process_time()  # Inicia a medição do tempo.
heapSort(arr)  # Executa o algoritmo de Heap Sort.
end_time = time.process_time()  # Finaliza a medição do tempo.

# Imprime o array ordenado.
print('Sorted array is:')
for i in range(len(arr)):
    print(arr[i])

# Calcula e imprime o tempo total de execução.
execution_time = end_time - start_time
print(f"Tempo de execução (tempo de CPU): {execution_time} segundos")
