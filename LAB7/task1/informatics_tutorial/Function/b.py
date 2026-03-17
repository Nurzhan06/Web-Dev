def power(a, n):
    return a ** n

a = float(input())
n = int(input())

result = power(a, n)
print(int(result) if result == int(result) else result)