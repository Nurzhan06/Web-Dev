n = int(input())
arr = []
isIt= False

for i in range(n):
    arr.append(int(input()))

for i in range(n-1):
    if arr[i] > 0 and arr[i+1] > 0:
        isIt = True
        break
    elif arr[i] < 0 and arr[i+1] < 0:
        isIt = True
        break

if isIt:
    print("YES")
else:
    print("NO")
