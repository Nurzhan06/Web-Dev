n = int(input())

i = 1
while i <= n:
    if i == n:
        print("YES")
        break
    else:
        i = i * 2
else:
    print("NO")