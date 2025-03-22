n = int(input())
nums_str = input()

nums = list(map(int, nums_str.split()))

for num in nums:
  if num % 2 == 0:
    print(num, end=" ")
        