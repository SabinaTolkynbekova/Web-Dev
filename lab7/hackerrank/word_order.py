n = int(input().strip())

word_counts = {}

for _ in range(n):
    word = input().strip()
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1

print(len(word_counts))

print(" ".join(map(str, word_counts.values())))