n = int(input())
nums_str = input()
counter = 0

nums = list(map(int, nums_str.split()))

for i in range(n - 1):
  if nums[i] < nums[i+1]:
    counter += 1

print(counter)