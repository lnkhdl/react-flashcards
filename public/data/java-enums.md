## Java / Enums
**Q:** What are enums generally?
**A:**
- A fixed set of constants; a list of related constant values.

## Java / Enums
**Q:** What is a difference between enum and enum constant?
**A:**
- Enum = The entire enum type (like a class):
```java
enum Day { MONDAY, TUESDAY }
```
- Enum constant = A single instance (object) defined inside an enum:
```java
Day.MONDAY, Day.TUESDAY
```

## Java / Enums
**Q:** What enums replace and what is the benefit of it?
**A:**
- Enums replace regular constants, `static final` values.
- They make the code more readable and type-safe.

## Java / Enums
**Q:** Are enums primitive data types?
**A:**
- No, enums are not primitive data types; each enum is a reference type (a special kind of class).
- Every enum implicitly extends `java.lang.Enum<E>`, where E is the enum type itself.
- Because of this, enums cannot extend any other class.
- Each constant inside an enum is implicitly `public static final` (by implicitly we mean there is no need to explicitly write `public static final`, Java does it automatically).

## Java / Enums
**Q:** Are enums singletons?
**A:**
- Each enum constant is a singleton instance of the enum type - only one instance exists for each constant.
- Java ensures that during class loading, exactly one instance of each enum constant is created and reused everywhere in the JVM.
- For example:
```java
Day d1 = Day.MONDAY;
Day d2 = Day.MONDAY;
```
means both d1 and d2 point to the exact same object in memory.

## Java / Enums
**Q:** What are the most common built-in methods for enums?
**A:**
- `values()`: Returns an array containing all the constants of the enum in the order they are declared.
- `valueOf(String name)`: Returns the enum constant of the specified enum type with the specified name (must match exactly).
- `ordinal()`: Returns the position (index) of the constant in the declaration, starting at 0.

## Java / Enums
**Q:** Can enums have fields, constructors or methods?
**A:**
- Yes, enums are classes and can have state and behavior.
- Important: Enum constructors are always private. You cannot create new instances using new.