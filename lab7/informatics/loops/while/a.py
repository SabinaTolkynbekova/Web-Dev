x = int(input())
a = 1

while a != x:
  if (a ** 0.5).is_integer():
    print(a)
  a += 1