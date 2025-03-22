
n, m = map(int, input().split())  
arr = list(map(int, input().split())) 
A = set(map(int, input().split()))  
B = set(map(int, input().split()))  

happiness = sum((i in A) - (i in B) for i in arr)

print(happiness)