class Animal:
    def __init__(self, name, age, have_fur):
        self.name = name
        self.age = age
        self.have_fur = have_fur

    def make_sound(self):
        return "..."

    def describe(self):
        fur_status = "has fur" if self.have_fur else "has no fur"
        return f"{self.name} is {self.age} years old and it {fur_status}"

    def __str__(self):
        return f"Animal({self.name}, age={self.age}, have_fur={self.have_fur})"


class Dog(Animal):
    def __init__(self, name, age, have_fur, breed):
        super().__init__(name, age, have_fur)
        self.breed = breed

    def make_sound(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

    def __str__(self):
        return f"Dog({self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, have_fur, fur_color):
        super().__init__(name, age, have_fur)
        self.fur_color = fur_color

    def make_sound(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        return f"Cat({self.name}, age={self.age}, fur color={self.fur_color})"