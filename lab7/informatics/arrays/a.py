n = int(input())
nums_str = input()

nums = list(map(int, nums_str.split()))

for i in range(n):
  if i % 2 == 0:
    print(nums[i], end=" ")