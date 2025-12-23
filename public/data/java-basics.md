## Java / Basics
**Q:** What is the difference between JDK, JRE, and JVM?
**A:**
- JVM (Java Virtual Machine): The engine that runs the bytecode. It provides a platform-independent execution environment.
- JRE (Java Runtime Environment): Includes the JVM + libraries needed to run Java applications.
- JDK (Java Development Kit): Includes the JRE + tools (like `javac`) needed to develop and compile Java applications.

## Java / Basics
**Q:** What does "Write Once, Run Anywhere" (WORA) mean?
**A:**
- It refers to Java's platform independence. Java code is compiled into bytecode (`.class` files), not machine code.
- Any device with a compatible JVM can run this bytecode, regardless of the underlying operating system (Windows, Mac, Linux).

## Java / Basics
**Q:** What are the 8 primitive data types in Java?
**A:**
- Whole numbers: `byte`, `short`, `int`, `long`
- Decimals: `float`, `double`
- Character: `char`
- True/False: `boolean`
- *Note:* Primitives are stored on the Stack and are not objects.

## Java / Basics
**Q:** What is Autoboxing and Unboxing?
**A:**
- Autoboxing: The automatic conversion the Java compiler makes between primitive types and their corresponding object wrapper classes (e.g., `int` to `Integer`).
- Unboxing: The reverse process (e.g., `Integer` to `int`).

## Java / Basics
**Q:** What is the difference between `static` and instance variables?
**A:**
- Static variables: Belong to the class. Only one copy exists, shared by all instances.
- Instance variables: Belong to the object. Each instance (new object) has its own copy of the variable.

## Java / Basics
**Q:** What are the default values of variables in Java?
**A:**
- Instance/Static variables:
    - Numbers: `0` or `0.0`
    - Booleans: `false`
    - Objects (including Strings): `null`
- Local variables: They do not have a default value. You must initialize them before use, or the code won't compile.

## Java / Basics
**Q:** What is the difference between `break` and `continue`?
**A:**
- `break`: Completely exits the current loop.
- `continue`: Skips the rest of the current iteration and jumps to the next one.

## Java / Basics
**Q:** Why is the `main` method `public static void main(String[] args)`?
**A:**
- public: So the JVM can access it from outside the class.
- static: So the JVM can call it without creating an instance of the class.
- void: It doesn't return any value.
- String[] args: Accepts command-line arguments as an array of Strings.

## Java / Basics
**Q:** What is the difference between the Stack and the Heap memory?
**A:**
- Stack: Used for static memory allocation and execution of a thread. It stores primitive variables and references to objects. It is fast and follows Last-In-First-Out (LIFO).
- Heap: Used for dynamic memory allocation. All objects (created with `new`) live here. Garbage Collection happens here.

## Java / Basics
**Q:** What is Garbage Collection (GC)?
**A:**
- The process by which Java automatically manages memory.
- The GC identifies which objects in the Heap are no longer reachable (have no references pointing to them) and deletes them to free up memory.