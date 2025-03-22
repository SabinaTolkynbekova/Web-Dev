n = int(input().strip())

if n % 2 == 1:  # Odd number
  print("Weird")
elif 2 <= n <= 5:  # Even and in range 2-5
  print("Not Weird")
elif 6 <= n <= 20:  # Even and in range 6-20
  print("Weird")
else:  # Even and greater than 20
  print("Not Weird")