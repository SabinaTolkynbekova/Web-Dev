x = int(input())
counter = 0

for i in range(1, x + 1):
  if x % i == 0:
    counter += 1

print(counter)