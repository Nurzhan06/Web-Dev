def xor(x, y):
    return int(bool(x) != bool(y))

x = int(input())
y = int(input())

print(xor(x, y))