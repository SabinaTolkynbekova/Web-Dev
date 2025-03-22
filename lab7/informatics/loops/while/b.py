x = int(input())
incrementer = 2

while x + 1 != incrementer:
  if x % incrementer == 0:
    print(incrementer)
    break
  incrementer += 1