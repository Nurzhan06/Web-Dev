n = int(input())
arr = []
cnt = 0

for i in range(n):
    arr.append(int(input()))

for i in range(n-1):
        if arr[i] < arr[i+1]:
            cnt += 1

print(cnt)