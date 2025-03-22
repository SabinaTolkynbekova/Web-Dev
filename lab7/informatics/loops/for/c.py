a = int(input())
b = int(input())

for i in range(a, b + 1):
  if (i ** 0.5).is_integer():
    print(i, end=" ")