## Java / OOP
**Q:** What are the Four Pillars of OOP?
**A:**
1. Encapsulation: Bundling data (fields) and methods that operate on the data into a single unit (class) and restricting access.
2. Inheritance: Allowing one class (subclass) to acquire the properties and behaviors of another (superclass).
3. Polymorphism: The ability of an object to take on many forms (e.g., a subclass object being treated as a superclass type).
4. Abstraction: Hiding complex implementation details and showing only the necessary features of an object.

## Java / OOP
**Q:** How is Encapsulation achieved in Java?
**A:**
- By declaring class variables as `private`.
- Providing `public` getter and setter methods to access and update the values.
- This protects the data from unauthorized access and allows validation logic inside setters.

## Java / OOP
**Q:** What is the difference between Method Overloading and Method Overriding?
**A:**
- Overloading (Compile-time Polymorphism): Multiple methods in the same class with the same name but different parameters (type, number, or both).
- Overriding (Runtime Polymorphism): A method in a subclass that has the same name, parameters, and return type as a method in its superclass. Uses the `@Override` annotation.

## Java / OOP
**Q:** What is the difference between an Interface and an Abstract Class?
**A:**
- Inheritance: A class can implement multiple interfaces but can only extend one abstract class.
- State: Abstract classes can have instance variables (fields); Interfaces generally cannot (only `static final` constants).
- Constructors: Abstract classes can have constructors; Interfaces cannot.
- Methods: Since Java 8, interfaces can have `default` and `static` methods, making them more similar to abstract classes, but their primary purpose remains defining a "contract".

## Java / OOP
**Q:** What is the "super" keyword used for?
**A:**
- To call the constructor of the immediate parent class: `super();`.
- To access methods or fields of the parent class that have been overridden or hidden: `super.myMethod();`.

## Java / OOP
**Q:** What is "Composition" and why is it often preferred over Inheritance?
**A:**
- Composition is a "has-a" relationship (a class contains an instance of another class).
- Inheritance is an "is-a" relationship.
- Rule of thumb: "Favor composition over inheritance" because it is more flexible, leads to less fragile code, and avoids the "deep inheritance tree" problem.

## Java / OOP
**Q:** What is the difference between "this()" and "super()"?
**A:**
- `this()`: Calls another constructor within the same class (constructor chaining).
- `super()`: Calls the constructor of the parent class.
- Note: Either call must be the very first statement in a constructor.

## Java / OOP
**Q:** What are Access Modifiers in Java?
**A:**
- `private`: Accessible only within the same class.
- `default` (no modifier): Accessible only within the same package.
- `protected`: Accessible within the same package and by subclasses (even in different packages).
- `public`: Accessible from any other class.

## Java / OOP
**Q:** What does the `final` keyword do when applied to classes, methods, and variables?
**A:**
- Variable: Makes it a constant; its value cannot be changed once assigned.
- Method: Prevents the method from being overridden by subclasses.
- Class: Prevents the class from being extended (e.g., `String` is a final class).

## Java / OOP
**Q:** What is the `Object` class in Java?
**A:**
- The root of the class hierarchy. Every class in Java implicitly extends `java.lang.Object`.
- It provides fundamental methods like `toString()`, `equals(Object obj)`, `hashCode()`, and `getClass()`.