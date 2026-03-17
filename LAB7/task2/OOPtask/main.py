from models import Animal, Dog, Cat

mammal = Animal("mammal", 3, True)
dog = Dog("tuzik", 4, True, "golden retriever")
cat = Cat("Garfield", 8, True, "ginger")

animals_arr = [mammal, dog, cat]

for animal in animals_arr:
    print(animal)

print("---")

for animal in animals_arr:
    print(animal.describe())

print("---")

for animal in animals_arr:
    print(f"{animal.name} says: {animal.make_sound()}")

print("---")

print(dog.fetch())
print(cat.purr())