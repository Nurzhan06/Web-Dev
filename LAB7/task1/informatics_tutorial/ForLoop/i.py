n = int(input())
res = 0

for x in range(1, n+1):
    if n % x == 0:
        res += 1

print(res)