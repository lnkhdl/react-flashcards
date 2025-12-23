## Java / Strings
**Q:** What is a String in Java?
**A:**
- A `String` is an object that represents a sequence of characters.
- It is not a primitive data type.
- Strings are defined in the `java.lang` package, which is imported automatically.

## Java / Strings
**Q:** What does it mean that Strings are immutable?
**A:**
- Once a `String` object is created, its value cannot be changed.
- Any operation that appears to modify a string (like `concat()` or `toUpperCase()`) actually creates and returns a **new** String object.
- This ensures thread-safety and allows for String pooling.

## Java / Strings
**Q:** What is the String Pool?
**A:**
- A special memory area in the Heap where Java stores string literals.
- When you create a string like `String s = "Hello";`, Java checks the pool first. If "Hello" already exists, it reuses the reference instead of creating a new object.
- This saves memory by avoiding duplication of identical strings.

## Java / Strings
**Q:** What is the difference between `==` and `.equals()` for Strings?
**A:**
- `==`: Compares the **memory address** (checks if both variables point to the exact same object).
- `.equals()`: Compares the **actual content** (checks if the characters are the same).
- Always use `.equals()` to compare strings.

## Java / Strings
**Q:** What is the difference between `String`, `StringBuilder`, and `StringBuffer`?
**A:**
- `String`: Immutable; use when the value won't change often.
- `StringBuilder`: Mutable; use for heavy string manipulation (like in loops). It is faster but **not thread-safe**.
- `StringBuffer`: Mutable and **thread-safe** (synchronized); slower than `StringBuilder` but safe for use by multiple threads.

## Java / Strings
**Q:** How do you create a String that bypasses the String Pool?
**A:**
- By using the `new` keyword:
```java
String s1 = new String("Hello");
```
- This forces Java to create a new object in the Heap memory, even if "Hello" already exists in the String Pool.

## Java / Strings
**Q:** What is String interning?
**A:**
- It is a method of storing only one copy of each distinct string value.
- Calling `s1.intern()` returns a reference from the pool if the string exists; if not, it adds the string to the pool and returns that reference.
```java
String s1 = new String("Java").intern();
String s2 = "Java";
System.out.println(s1 == s2); // true
```