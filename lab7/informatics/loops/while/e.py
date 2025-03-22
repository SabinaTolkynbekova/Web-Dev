x = int(input())

while True:
  if x == 0 or x == 1:
    print("YES")
    break
  if x % 2 != 0:
    print("NO")
    break
  x /= 2