n = int(input())
nums_str = input()
counter = 0

nums = list(map(int, nums_str.split()))

for num in nums:
  if num > 0:
    counter += 1

print(counter)