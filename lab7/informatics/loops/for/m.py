n = int(input())
counter = 0

for i in range(n):
  number = str(input())
  for j in number:
    if j == "0":
      counter += 1

print(counter)