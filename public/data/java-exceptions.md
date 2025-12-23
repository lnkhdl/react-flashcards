## Java / Exceptions
**Q:** What is an Exception in Java?
**A:**
- An event that occurs during the execution of a program that disrupts the normal flow of instructions.
- It is an object that wraps an error event that happened within a method.

## Java / Exceptions
**Q:** Describe the Exception hierarchy in Java.
**A:**
- `Throwable` is the root class of all errors and exceptions.
- `Error`: Serious problems that a reasonable application should not try to catch (e.g., `OutOfMemoryError`).
- `Exception`: Conditions that a reasonable application might want to catch.
    - `RuntimeException` (Unchecked)
    - Other Exceptions (Checked)

## Java / Exceptions
**Q:** What is the difference between Checked and Unchecked Exceptions?
**A:**
- Checked Exceptions: Checked at compile-time. The programmer *must* handle them (using `try-catch`) or declare them (using `throws`). Example: `IOException`, `SQLException`.
- Unchecked Exceptions: (Subclasses of `RuntimeException`) Not checked at compile-time. Usually represent programming errors. Example: `NullPointerException`, `ArrayIndexOutOfBoundsException`.

## Java / Exceptions
**Q:** What is the purpose of the `finally` block?
**A:**
- A block that is **always executed** after a `try-catch` block, regardless of whether an exception was thrown or caught.
- It is typically used for cleanup code, such as closing file streams or database connections.

## Java / Exceptions
**Q:** What is the difference between `throw` and `throws`?
**A:**
- `throw`: Used to explicitly throw an exception from a method or block of code.
- `throws`: Used in a method signature to declare that this method might throw one or more exceptions, passing the responsibility to the caller.