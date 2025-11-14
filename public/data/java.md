## Java / Strings
**Q:** Placeholder - What is 2 + 2?  
**A:**  
- 4
- It's the sum of two and two.
  ```js
  console.log(2 + 2); // 4

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
- By implicitly we mean there is no need to explicitly write `public static final`, Java does it automatically.

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