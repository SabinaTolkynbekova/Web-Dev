def power(a, n):
  result = 1

  while n:
    result *= a
    n -= 1

  return result