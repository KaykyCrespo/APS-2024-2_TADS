import time
import tracemalloc
from memory_profiler import profile
import psutil

# Function to display system memory usage
def display_memory_info():
    mem = psutil.virtual_memory()
    print(f"Total de memória: {mem.total / (1024 ** 3):.2f} GB")
    print(f"Memória usada: {mem.used / (1024 ** 3):.2f} GB")
    print(f"Memória livre: {mem.free / (1024 ** 3):.2f} GB")

# Bubble sort function with memory profiling decorator
@profile
def bubble_sort(lista):
    for n in range(len(lista) - 1, 0, -1):
        for i in range(n):
            if lista[i] > lista[i + 1]:
                lista[i], lista[i + 1] = lista[i + 1], lista[i]

# List for sorting
lista = [264, 357, 202, 130, 259, 350, 190, 158, 489, 396, 292, 418, 146, 226, 445, 23, 163, 392, 331, 359, 224, 249, 107, 222, 251, 374, 222, 186, 7, 422, 0, 448, 161, 188, 244, 110, 211, 134, 381, 323, 423, 81, 14, 181, 454, 48, 481, 20, 81, 11, 224, 139, 216, 87, 132, 322, 129, 393, 285, 405, 398, 389, 20, 245, 255, 158, 202, 459, 467, 257, 280, 169, 39, 49, 237, 8, 357, 144, 371, 339, 26, 42, 99, 427, 4, 327, 243, 158, 85, 367, 134, 87, 312, 36, 160, 387, 414, 297, 389, 432, 227, 386, 358, 8, 443, 386, 266, 186, 459, 356, 343, 428, 489, 491, 204, 251, 40, 163, 212, 109, 75, 492, 430, 249, 7, 234, 84, 65, 224, 108, 229, 468, 264, 491, 128, 392, 215, 115, 270, 481, 398, 400, 11, 466, 159, 444, 69, 92, 472, 444, 162, 245, 213, 42, 31, 397, 263, 410, 34, 200, 450, 233, 429, 108, 441, 355, 160, 53, 194, 241, 215, 433, 67, 185, 19, 467, 16, 25, 471, 167, 269, 42, 47, 162, 370, 54, 316, 412, 155, 365, 29, 442, 13, 105, 372, 33, 74, 39, 251, 22, 10, 267, 265, 119, 46, 224, 342, 1, 396, 241, 31, 168, 161, 203, 339, 331, 270, 393, 173, 103, 242, 192, 137, 70, 290, 197, 20, 347, 491, 151, 51, 484, 143, 270, 339, 324, 109, 450, 355, 473, 78, 276, 158, 415, 372, 325, 182, 232, 438, 158, 479, 280, 419, 451, 396, 78, 152, 396, 105, 13, 242, 89, 487, 471, 102, 232, 390, 481, 458, 52, 66, 482, 195, 476, 214, 94, 302, 143, 116, 488, 178, 98, 150, 289, 66, 235, 345, 282, 176, 323, 258, 147, 270, 373, 34, 415, 86, 394, 9, 140, 211, 326, 65, 214, 94, 146, 1, 338, 493, 32, 120, 447, 495, 29, 6, 247, 117, 392, 478, 211, 317, 190, 191, 318, 126, 369, 414, 180, 355, 236, 232, 291, 449, 213, 174, 346, 148, 268, 83, 271, 70, 47, 187, 78, 458, 376, 293, 218, 7, 348, 26, 313, 331, 399, 282, 275, 405, 286, 58, 185, 92, 261, 297, 478, 442, 93, 262, 254, 391, 201, 80, 144, 51, 420, 435, 131, 42, 338, 153, 335, 373, 225, 117, 368, 408, 293, 92, 209, 339, 11, 222, 147, 18, 366, 276, 373, 216, 304, 204, 79, 297]

# Memory profiling using tracemalloc
def profile_memory():
    tracemalloc.start()
    bubble_sort(lista)
    snapshot = tracemalloc.take_snapshot()
    top_stats = snapshot.statistics('lineno')
    print("\nTop memory usage:")
    for stat in top_stats[:10]:
        print(stat)
    tracemalloc.stop()

# Time profiling using time.perf_counter()
def time_performance():
    start_time = time.perf_counter()
    bubble_sort(lista)
    end_time = time.perf_counter()
    print(f"Elapsed time with perf_counter: {end_time - start_time:.6f} seconds")

# CPU time profiling using time.process_time()
def time_process():
    start_time = time.process_time()
    bubble_sort(lista)
    end_time = time.process_time()
    print(f"CPU time with process_time: {end_time - start_time:.6f} seconds")

# Display memory info
display_memory_info()

# Run memory profiling
profile_memory()

# Run time profiling
time_performance()
time_process()
