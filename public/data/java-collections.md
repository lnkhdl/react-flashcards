## Java / Collections
**Q:** What is the Java Collections Framework (JCF)?
**A:**
- A unified architecture for representing and manipulating collections (groups of objects).
- It consists of Interfaces (List, Set, Map), Implementations (ArrayList, HashSet), and Algorithms (sorting, searching).

## Java / Collections
**Q:** What is the difference between `Collection` and `Collections`?
**A:**
- `Collection`: The root interface in the hierarchy (e.g., List, Set).
- `Collections`: A utility class containing static methods to operate on collections (e.g., `Collections.sort()`, `Collections.reverse()`).

## Java / Collections
**Q:** Compare `List`, `Set`, and `Map`.
**A:**
- `List`: An ordered collection that allows duplicate elements.
- `Set`: A collection that cannot contain duplicate elements. Usually unordered.
- `Map`: An object that maps keys to values. Keys must be unique; each key can map to at most one value.

## Java / Collections
**Q:** What is the difference between `ArrayList` and `LinkedList`?
**A:**
- `ArrayList`: Based on a dynamic array. Faster for random access (`get(i)`) but slower for adding/removing elements in the middle.
- `LinkedList`: Based on a doubly-linked list. Faster for adding/removing elements but slower for random access as it must traverse the list.

## Java / Collections
**Q:** How does a `HashSet` ensure uniqueness?
**A:**
- It uses a `HashMap` internally to store elements (as keys).
- It relies on the `hashCode()` and `equals()` methods.
- When an object is added, its `hashCode` determines its "bucket". If another object has the same hash, `equals()` checks if they are truly identical.

## Java / Collections
**Q:** What is the difference between `HashMap` and `TreeMap`?
**A:**
- `HashMap`: Unordered. Allows one null key. Provides constant-time performance `O(1)` for basic operations.
- `TreeMap`: Sorted according to the natural ordering of its keys (or a custom Comparator). Does not allow null keys. Performance is `O(log n)`.

## Java / Collections
**Q:** Why is it important to override both `hashCode()` and `equals()`?
**A:**
- This is the "HashCode Contract".
- If two objects are equal according to `equals()`, they must have the same `hashCode`.
- Failure to do this will cause objects to be lost or duplicated when used in `HashMap` or `HashSet`.

## Java / Collections
**Q:** What is a `Fail-Fast` vs `Fail-Safe` iterator?
**A:**
- Fail-Fast: Throws `ConcurrentModificationException` if the collection is modified while iterating (e.g., `ArrayList`).
- Fail-Safe: Operates on a clone or a concurrent structure, allowing modifications during iteration without throwing exceptions (e.g., `CopyOnWriteArrayList`).

## Java / Collections
**Q:** When should you use an `EnumSet` or `EnumMap`?
**A:**
- Use them when your keys or elements are instances of an Enum.
- They are highly optimized and much faster/more memory-efficient than `HashSet` or `HashMap` because they use bit vectors and internal arrays.

## Java / Collections
**Q:** What are Generics in the context of Collections?
**A:**
- They allow you to specify the type of objects a collection can hold (e.g., `List<String>`).
- Benefit: Provides compile-time type safety and eliminates the need for manual casting when retrieving objects.