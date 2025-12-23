## Java / Lambda Expressions
**Q:** What is a Lambda Expression?
**A:**
- Introduced in Java 8, it is a short block of code that takes in parameters and returns a value.
- It is an anonymous function (a function without a name) that allows you to treat functionality as a method argument or treat code as data.

## Java / Lambda Expressions
**Q:** What is the syntax of a Lambda Expression?
**A:**
- `(parameters) -> { body }`
- If there is only one parameter, parentheses can be omitted: `p -> { body }`
- If the body is a single expression, curly braces and the `return` keyword can be omitted: `(a, b) -> a + b`

## Java / Lambda Expressions
**Q:** What is a Functional Interface?
**A:**
- An interface that contains exactly one abstract method.
- Lambda expressions can only be used where a functional interface is expected.
- Use the `@FunctionalInterface` annotation to ensure the interface stays functional (it will trigger a compiler error if a second abstract method is added).

## Java / Lambda Expressions
**Q:** What are the 4 main built-in Functional Interfaces in Java?
**A:**
1. Predicate<T>: Takes one argument and returns a `boolean` (e.g., `filter` conditions).
2. Function<T, R>: Takes one argument and returns a result of type R (e.g., transforming data).
3. Consumer<T>: Takes one argument and returns nothing (`void`) (e.g., printing or logging).
4. Supplier<T>: Takes no arguments and returns a value (e.g., factory methods).

## Java / Lambda Expressions
**Q:** What is a Method Reference?
**A:**
- A shorthand notation of a lambda expression to call an existing method.
- Syntax: `Class::methodName`
- Example: `System.out::println` is equivalent to `x -> System.out.println(x)`.

## Java / Lambda Expressions
**Q:** Can Lambdas access variables outside their scope?
**A:**
- Yes, but the variables must be final or effectively final (meaning their value is never changed after initialization).
- This is because lambdas are closures and need to ensure the variable state is predictable.

## Java / Lambda Expressions
**Q:** What are the benefits of using Lambdas?
**A:**
- Conciseness: Reduces boilerplate code (no need for anonymous inner classes).
- Readability: Makes the intent of the code clearer, especially when working with the Streams API.
- Parallelism: Makes it easier to write code that can be executed in parallel.

## Java / Lambda Expressions
**Q:** What is the difference between a Lambda and an Anonymous Inner Class?
**A:**
- Scope: In an anonymous class, `this` refers to the class itself; in a lambda, `this` refers to the enclosing class.
- Compilation: Anonymous classes create a separate `.class` file; lambdas are handled via `invokedynamic`, which is more efficient.
- Complexity: Anonymous classes can have state (fields) and multiple methods; lambdas are strictly for single-method interfaces.