n = int(input())
nums_str = input()

nums = list(map(int, nums_str.split()))

for i in range(n - 1):
  if (nums[i] >= 0 and nums[i+1] >= 0) or (nums[i] <= 0 and nums[i+1] <= 0):
    print("YES")

print("NO")