## Java / Streams API
**Q:** What is the Java Streams API?
**A:**
- Introduced in Java 8, it is a way to process sequences of elements (like collections) in a functional and declarative style.
- A stream is not a data structure; it does not store data. Instead, it conveys elements from a source (like a List or Set) through a pipeline of operations.

## Java / Streams API
**Q:** What are the three parts of a Stream pipeline?
**A:**
1. Source: Where the data comes from (e.g., `list.stream()`).
2. Intermediate Operations: Transform the stream into another stream (e.g., `filter`, `map`). These are lazy.
3. Terminal Operation: Produces a result or side-effect (e.g., `collect`, `forEach`, `count`). This triggers the processing.

## Java / Streams API
**Q:** What does it mean that Streams are "lazy"?
**A:**
- Intermediate operations are not executed until a terminal operation is invoked.
- This allows the engine to optimize the process (e.g., combining multiple operations into a single pass over the data).

## Java / Streams API
**Q:** What is the difference between `map()` and `flatMap()`?
**A:**
- `map()`: Transforms each element into exactly one other element (1-to-1 mapping).
- `flatMap()`: Transforms each element into a stream of elements and then "flattens" those streams into a single stream (1-to-many mapping). Useful for nested collections.

## Java / Streams API
**Q:** What is the difference between `filter()` and `findFirst()`?
**A:**
- `filter()`: An intermediate operation that keeps only elements matching a predicate.
- `findFirst()`: A terminal operation that returns an `Optional` containing the first element of the stream (or empty if the stream is empty).

## Java / Streams API
**Q:** What is a Parallel Stream?
**A:**
- A stream that divides the provided task into segments and executes them on different threads simultaneously.
- Created using `list.parallelStream()`.
- Caution: Only use it for large datasets and stateless operations, as thread management overhead can otherwise make it slower than sequential streams.

## Java / Streams API
**Q:** What is the purpose of the `Collectors` class?
**A:**
- It is a utility class used at the end of a stream pipeline to accumulate elements into a final result.
- Common methods: `toList()`, `toSet()`, `joining()`, and `groupingBy()`.
