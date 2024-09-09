import time

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

# Sample list to be sorted
lista = [39, 12, 18, 85, 72, 10, 2, 18]
print("Unsorted list is:")
print(lista)


# Medir o tempo de execução com time.perf_counter()
# time.perf_counter() medirá o tempo total real decorrido,
# incluindo o tempo que o processo passou esperando por I/O ou outras operações.
start_time = time.perf_counter()
bubble_sort(lista)
end_time = time.perf_counter()
elapsed_time_perf_counter = end_time - start_time
print(f"Tempo decorrido com perf_counter: {elapsed_time_perf_counter:.6f} segundos")

# Medir o tempo de execução com time.process_time()
# time.process_time() medirá apenas o tempo de CPU efetivo utilizado, ignorando o tempo de espera.
start_time = time.process_time()
bubble_sort(lista)
end_time = time.process_time()
elapsed_time_process_time = end_time - start_time
print(f"Tempo de CPU com process_time: {elapsed_time_process_time:.6f} segundos")


bubble_sort(lista)

print("Sorted list is:")
print(lista)
