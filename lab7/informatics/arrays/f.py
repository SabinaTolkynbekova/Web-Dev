n = int(input())
nums_str = input()
counter = 0

nums = list(map(int, nums_str.split()))

for i in range(1, n - 1):
  if n < 3:
    print(0)
  if nums[i-1] <= nums[i] and nums[i+1] <= nums[i]:
    counter += 1

print(counter)