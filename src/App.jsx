import { useState } from "react";
import "./App.css";

const csharpTopics = [
  {
    id: "fundamentals",
    title: "Language Fundamentals",
    sections: [
      {
        title: "Hello World & Basic Syntax",
        code: `// Program.cs - Simple Console App
Console.WriteLine("Hello, World!");

// Using statements
using System;

// Comments
// Single line comment
/* Multi-line
   comment */

// Naming conventions
string myVariable;      // camelCase for local variables
string MyClass;         // PascalCase for classes/methods
const string MY_CONST = "value"; // UPPER_CASE for constants`
      },
      {
        title: "Data Types - Value Types",
        code: `// Integer types (signed)
sbyte smallInt = -128;       // 8-bit (-128 to 127)
short shortInt = -32768;     // 16-bit
int integer = -2147483648;   // 32-bit (default for whole numbers)
long bigInt = -9223372036854775808L; // 64-bit

// Integer types (unsigned)
byte unsignedByte = 255;     // 8-bit (0 to 255)
ushort unsignedShort = 65535; // 16-bit
uint unsignedInt = 4294967295u; // 32-bit
ulong unsignedLong = 18446744073709551615ul; // 64-bit

// Floating point types
float floatNum = 3.14f;      // 32-bit, less precise
double doubleNum = 3.14159;  // 64-bit, more precise
decimal money = 19.99m;      // 128-bit, for financial calculations

// Boolean
bool isActive = true;
bool isInactive = false;

// Char
char singleChar = 'A';
char specialChar = '\\n';    // escape sequences

// DateTime and TimeSpan
DateTime now = DateTime.Now;
TimeSpan duration = TimeSpan.FromHours(2);`
      },
      {
        title: "String Type & Interpolation",
        code: `string name = "Alice";
int age = 30;

// String interpolation (modern C#)
string message = $"Hello, {name}! You are {age} years old.";

// String concatenation (old style)
string old = "Hello, " + name + "!";

// Verbatim strings (ignore escape sequences)
string path = @"C:\\Users\\Alice\\Documents";
string multiline = @"Line 1
Line 2
Line 3";

// Raw strings (C# 11+)
string raw = """
This is a "raw" string literal.
Escapes like \\ are treated literally.
""";

// String methods
string text = "Hello World";
text.Length;              // 11
text.ToUpper();           // "HELLO WORLD"
text.ToLower();           // "hello world"
text.Contains("World");   // true
text.StartsWith("Hello"); // true
text.EndsWith("World");   // true
text.Replace("World", "C#"); // "Hello C#"
text.Substring(0, 5);     // "Hello"
text.Split(' ');          // string[] { "Hello", "World" }
text.Trim();              // removes leading/trailing whitespace`
      },
      {
        title: "Variables & Constants",
        code: `// Implicit typing with 'var'
var count = 42;           // inferred as int
var name = "Alice";       // inferred as string
var items = new int[] { 1, 2, 3 }; // inferred as int[]

// Explicit typing
int number = 10;
string text = "Hello";

// Constants (compile-time)
const double PI = 3.14159;
const string APP_NAME = "MyApp";
// const PI = 3.14;  // ERROR: must have initializer

// Read-only variables (runtime constant)
readonly string dbConnection = GetConnection();
readonly int maxRetries;

public MyClass(int retries) {
  maxRetries = retries; // can set once in constructor
}

// Nullable types
int? nullableInt = null;
string? nullableString = null;
if (nullableInt.HasValue) {
  int value = nullableInt.Value;
}

// Null-coalescing operator
int result = nullableInt ?? 0; // 0 if nullableInt is null
nullableInt ??= 5; // assign only if currently null`
      },
      {
        title: "Type Conversion",
        code: `// Implicit conversion (automatic, safe)
int intValue = 10;
double doubleValue = intValue; // OK, int fits in double

// Explicit conversion (cast)
double pi = 3.14;
int rounded = (int)pi;  // 3 (truncates decimal)

// Parse methods (string → type)
int parsed = int.Parse("42");  // throws if invalid
double.Parse("3.14");
bool.Parse("true");

// TryParse (safe parsing)
if (int.TryParse("42", out int result)) {
  Console.WriteLine(result); // 42
}
int badResult;
if (!int.TryParse("notanumber", out badResult)) {
  Console.WriteLine("Conversion failed");
}

// Convert class
int converted = Convert.ToInt32("100"); // 100
string stringified = Convert.ToString(42); // "42"

// ToString()
int num = 42;
string text = num.ToString();      // "42"
double val = 3.14159;
string formatted = val.ToString("F2"); // "3.14" (2 decimals)`
      }
    ]
  },
  {
    id: "control-flow",
    title: "Control Flow",
    sections: [
      {
        title: "if, else if, else",
        code: `int age = 25;

if (age < 13) {
  Console.WriteLine("Child");
} else if (age < 18) {
  Console.WriteLine("Teen");
} else if (age < 65) {
  Console.WriteLine("Adult");
} else {
  Console.WriteLine("Senior");
}

// Ternary operator
string status = age >= 18 ? "Adult" : "Minor";

// Null coalescing in conditionals
string name = user?.Name ?? "Guest";`
      },
      {
        title: "switch & switch expressions",
        code: `// Traditional switch statement
int day = 1;
switch (day) {
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  default:
    Console.WriteLine("Other day");
    break;
}

// Switch expression (C# 8+) - more concise
string dayName = day switch {
  1 => "Monday",
  2 => "Tuesday",
  3 => "Wednesday",
  4 => "Thursday",
  5 => "Friday",
  6 => "Saturday",
  7 => "Sunday",
  _ => "Unknown"
};

// Pattern matching with switch
object obj = "hello";
string result = obj switch {
  int i => $"Integer: {i}",
  string s => $"String: {s}",
  null => "Null",
  _ => "Other"
};`
      },
      {
        title: "Loops - for, while, do-while",
        code: `// for loop
for (int i = 0; i < 10; i++) {
  Console.WriteLine(i); // 0 to 9
}

// for with custom step
for (int i = 0; i <= 100; i += 10) {
  Console.WriteLine(i);
}

// for with multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
  Console.WriteLine($"{i}, {j}");
}

// while loop
int count = 0;
while (count < 5) {
  Console.WriteLine(count);
  count++;
}

// do-while (executes at least once)
int num = 0;
do {
  Console.WriteLine(num);
  num++;
} while (num < 5);

// foreach loop
int[] numbers = { 1, 2, 3, 4, 5 };
foreach (int n in numbers) {
  Console.WriteLine(n);
}

// foreach with index (C# 7.1+)
foreach (var (index, value) in numbers.Select((v, i) => (i, v))) {
  Console.WriteLine($"{index}: {value}");
}`
      },
      {
        title: "break, continue, goto",
        code: `// break - exit loop immediately
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;  // exits loop
  }
  Console.WriteLine(i); // 0 to 4
}

// continue - skip to next iteration
for (int i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;  // skip even numbers
  }
  Console.WriteLine(i); // 1, 3, 5, 7, 9
}

// break in nested loops (label)
for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    if (i == 1 && j == 1) {
      goto ExitLoops;  // exit both loops
    }
  }
}
ExitLoops:
Console.WriteLine("Exited loops");

// goto (generally avoided in modern C#)
int x = 10;
if (x > 5) goto End;
Console.WriteLine("Skipped");
End:
Console.WriteLine("Done");`
      }
    ]
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    sections: [
      {
        title: "Classes & Objects",
        code: `// Define a class
public class Person {
  // Fields (private by default in some contexts)
  private string _name;
  private int _age;

  // Properties (getter/setter)
  public string Name {
    get { return _name; }
    set { _name = value; }
  }

  // Auto properties (shorthand)
  public int Age { get; set; }

  // Read-only property
  public string Id { get; } = Guid.NewGuid().ToString();

  // Constructor
  public Person(string name, int age) {
    _name = name;
    _age = age;
  }

  // Method
  public void Greet() {
    Console.WriteLine($"Hello, I'm {_name}!");
  }

  // Override ToString
  public override string ToString() {
    return $"Person({_name}, {_age})";
  }
}

// Create and use
var person = new Person("Alice", 30);
person.Greet();
Console.WriteLine(person.Name);  // Alice
person.Age = 31;`
      },
      {
        title: "Inheritance",
        code: `// Base class
public class Animal {
  public string Name { get; set; }
  public int Age { get; set; }

  public Animal(string name, int age) {
    Name = name;
    Age = age;
  }

  public virtual void Speak() {
    Console.WriteLine($"{Name} makes a sound");
  }

  public virtual void Eat(string food) {
    Console.WriteLine($"{Name} eats {food}");
  }
}

// Derived class
public class Dog : Animal {
  public string Breed { get; set; }

  public Dog(string name, int age, string breed) 
    : base(name, age) {  // call base constructor
    Breed = breed;
  }

  public override void Speak() {
    Console.WriteLine($"{Name} barks: Woof!");
  }

  // Not overriding Eat - it inherits from Animal
}

public class Cat : Animal {
  public override void Speak() {
    Console.WriteLine($"{Name} meows: Meow!");
  }
}

// Usage
var dog = new Dog("Rex", 5, "Labrador");
dog.Speak();   // Rex barks: Woof!
dog.Eat("bone"); // Rex eats bone

var cat = new Cat("Whiskers", 3);
cat.Speak();   // Whiskers meows: Meow!`
      },
      {
        title: "Abstract Classes & Interfaces",
        code: `// Abstract class (cannot instantiate)
public abstract class Shape {
  public string Color { get; set; }

  public abstract double Area();  // must be implemented by derived class

  public void Display() {
    Console.WriteLine($"Color: {Color}, Area: {Area()}");
  }
}

public class Circle : Shape {
  public double Radius { get; set; }

  public Circle(double radius, string color) {
    Radius = radius;
    Color = color;
  }

  public override double Area() {
    return Math.PI * Radius * Radius;
  }
}

// Interface (contract)
public interface IDrawable {
  void Draw();
  string GetDescription();
}

public interface IColorable {
  void SetColor(string color);
}

// Implement multiple interfaces
public class Rectangle : Shape, IDrawable, IColorable {
  public double Width { get; set; }
  public double Height { get; set; }

  public override double Area() {
    return Width * Height;
  }

  public void Draw() {
    Console.WriteLine("Drawing rectangle");
  }

  public string GetDescription() {
    return $"Rectangle {Width}x{Height}";
  }

  public void SetColor(string color) {
    Color = color;
  }
}`
      },
      {
        title: "Constructors & Destructors",
        code: `public class FileManager {
  private StreamWriter _writer;

  // Primary constructor (C# 12+)
  public FileManager(string filePath) {
    _writer = new StreamWriter(filePath);
  }

  // Constructor overloading
  public FileManager() {
    _writer = new StreamWriter("default.txt");
  }

  // Constructor chaining
  public FileManager(string filePath, bool append)
    : this(filePath) {  // calls first constructor
    if (append) {
      // additional logic
    }
  }

  // Static constructor (runs once, before any instance)
  static FileManager() {
    Console.WriteLine("static constructor called");
  }

  // Destructor (called when object is garbage collected)
  ~FileManager() {
    _writer?.Dispose();
    Console.WriteLine("FileManager cleaned up");
  }
}

// Usage
var fm = new FileManager("data.txt");
fm = null; // triggers garbage collection and destructor eventually`
      }
    ]
  },
  {
    id: "collections",
    title: "Collections & Generics",
    sections: [
      {
        title: "Arrays",
        code: `// Array declaration and initialization
int[] numbers = new int[5];  // size 5, default values 0
int[] values = { 1, 2, 3, 4, 5 };

// Access elements
numbers[0] = 10;
int first = values[0];  // 1

// Array properties and methods
numbers.Length;         // 5
Array.Sort(numbers);
Array.Reverse(numbers);
Array.IndexOf(numbers, 3); // index of element

// Multi-dimensional arrays
int[,] matrix = new int[3, 3];
matrix[0, 0] = 1;

// Jagged arrays (array of arrays)
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[5];

// Array slicing (C# 8+)
int[] slice = values[1..4];  // elements 1, 2, 3
int[] first3 = values[..3];
int[] all = values[..];`
      },
      {
        title: "List<T>",
        code: `using System.Collections.Generic;

// List declaration
var list = new List<int> { 1, 2, 3 };
List<string> names = new();

// Add elements
list.Add(4);
list.Add(5);
list.AddRange(new[] { 6, 7, 8 });
list.Insert(0, 0);  // insert at index 0

// Remove elements
list.Remove(3);      // remove value 3
list.RemoveAt(0);    // remove at index 0
list.Clear();

// Access
int first = list[0];
list.Count;  // number of elements

// Search
list.Contains(2);
int index = list.IndexOf(2);

// Sorting
list.Sort();
list.Reverse();

// Convert to array
int[] array = list.ToArray();

// Iterate
foreach (var item in list) {
  Console.WriteLine(item);
}`
      },
      {
        title: "Dictionary<K,V>",
        code: `using System.Collections.Generic;

// Dictionary creation
var dict = new Dictionary<string, int>();
var ages = new Dictionary<string, int> {
  { "Alice", 30 },
  { "Bob", 25 },
  { "Charlie", 35 }
};

// Add key-value pairs
dict["Alice"] = 30;
dict.Add("Bob", 25);

// Access
int age = dict["Alice"];  // 30
int aliceAge = ages["Alice"];

// Check if key exists
if (dict.ContainsKey("Alice")) {
  Console.WriteLine("Alice found");
}

// Safe access with TryGetValue
if (dict.TryGetValue("Alice", out int result)) {
  Console.WriteLine(result);
}

// Remove
dict.Remove("Alice");

// Get all keys and values
var keys = dict.Keys;
var values = dict.Values;

// Iterate
foreach (var kvp in dict) {
  Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

foreach (var key in dict.Keys) {
  Console.WriteLine($"{key} = {dict[key]}");
}`
      },
      {
        title: "HashSet, Queue, Stack",
        code: `using System.Collections.Generic;

// HashSet - unique values only
var set = new HashSet<int> { 1, 2, 3 };
set.Add(3);      // ignored, already exists
set.Add(4);      // added
set.Contains(2); // true
set.Remove(1);

// Queue - FIFO (First In First Out)
var queue = new Queue<string>();
queue.Enqueue("first");
queue.Enqueue("second");
queue.Enqueue("third");
string item = queue.Dequeue();  // "first"
string peek = queue.Peek();     // "second" (doesn't remove)

// Stack - LIFO (Last In First Out)
var stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
stack.Push(3);
int top = stack.Pop();   // 3
int peek = stack.Peek(); // 2 (doesn't remove)

// Set operations
var set1 = new HashSet<int> { 1, 2, 3 };
var set2 = new HashSet<int> { 2, 3, 4 };
set1.UnionWith(set2);       // { 1, 2, 3, 4 }
set1.IntersectWith(set2);   // { 2, 3 }
set1.ExceptWith(set2);      // { 1 }`
      }
    ]
  },
  {
    id: "linq",
    title: "LINQ (Language Integrated Query)",
    sections: [
      {
        title: "LINQ Basics - Where, Select",
        code: `using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Where - filtering
var evens = numbers.Where(n => n % 2 == 0);     // 2, 4, 6, 8, 10
var greaterThan5 = numbers.Where(n => n > 5);   // 6, 7, 8, 9, 10

// Select - transformation
var squared = numbers.Select(n => n * n);       // 1, 4, 9, 16, 25...
var strings = numbers.Select(n => n.ToString()); // "1", "2", "3"...

// Chain operations
var result = numbers
  .Where(n => n > 3)
  .Select(n => n * 2)
  .Where(n => n < 15);  // filter, transform, filter

// Query syntax (SQL-like)
var query = from n in numbers
            where n > 5
            select n * 2;

// Equivalent method syntax
var methodQuery = numbers
  .Where(n => n > 5)
  .Select(n => n * 2);`
      },
      {
        title: "Ordering & Limiting",
        code: `var numbers = new[] { 5, 2, 9, 1, 7, 3 };

// OrderBy - ascending
var sorted = numbers.OrderBy(n => n);        // 1, 2, 3, 5, 7, 9
var descending = numbers.OrderByDescending(n => n); // 9, 7, 5, 3, 2, 1

// ThenBy - secondary sort
var people = new[] {
  new { Name = "Alice", Age = 30 },
  new { Name = "Bob", Age = 25 },
  new { Name = "Charlie", Age = 30 }
};

var sorted = people
  .OrderBy(p => p.Age)
  .ThenBy(p => p.Name);  // sort by age, then name

// Take & Skip
var first3 = numbers.Take(3);       // 5, 2, 9
var last2 = numbers.TakeLast(2);    // 3, 7
var skipped = numbers.Skip(2);      // 9, 1, 7, 3
var page = numbers.Skip(2).Take(3); // 9, 1, 7

// First, Last, Single
int first = numbers.First();        // 5
int last = numbers.Last();          // 3
int single = numbers.Single();      // throws if more than one`
      },
      {
        title: "Aggregations & GroupBy",
        code: `var numbers = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Count
int total = numbers.Count();        // 10
int evens = numbers.Count(n => n % 2 == 0); // 5

// Sum, Average, Min, Max
int sum = numbers.Sum();            // 55
double avg = numbers.Average();     // 5.5
int min = numbers.Min();            // 1
int max = numbers.Max();            // 10

// Any, All, Contains
bool hasEven = numbers.Any(n => n % 2 == 0); // true
bool allPositive = numbers.All(n => n > 0);  // true

// GroupBy
var grouped = numbers.GroupBy(n => n % 2);
foreach (var group in grouped) {
  Console.WriteLine($"Key: {group.Key}");  // 0 (even) or 1 (odd)
  foreach (var item in group) {
    Console.WriteLine(item);
  }
}

// GroupBy with complex key
var people = new[] {
  new { Name = "Alice", Age = 30 },
  new { Name = "Bob", Age = 25 },
  new { Name = "Charlie", Age = 30 }
};

var byAge = people.GroupBy(p => p.Age)
  .Select(g => new { Age = g.Key, Count = g.Count() });
// { Age: 30, Count: 2 }, { Age: 25, Count: 1 }`
      },
      {
        title: "Joins & Complex Queries",
        code: `var users = new[] {
  new { Id = 1, Name = "Alice" },
  new { Id = 2, Name = "Bob" }
};

var orders = new[] {
  new { Id = 1, UserId = 1, Amount = 100 },
  new { Id = 2, UserId = 1, Amount = 200 },
  new { Id = 3, UserId = 2, Amount = 150 }
};

// Inner Join
var joined = users.Join(
  orders,
  u => u.Id,
  o => o.UserId,
  (u, o) => new { u.Name, o.Amount }
);

// Left Join (with DefaultIfEmpty)
var leftJoined = users.GroupJoin(
  orders,
  u => u.Id,
  o => o.UserId,
  (u, os) => new { u.Name, Orders = os }
);

// Distinct
var uniqueNames = users.Select(u => u.Name).Distinct();

// SelectMany - flatten nested collections
var allOrders = users.SelectMany(
  u => orders.Where(o => o.UserId == u.Id),
  (u, o) => new { u.Name, o.Amount }
);

// Complex query
var result = users
  .Where(u => u.Id > 0)
  .Join(orders, u => u.Id, o => o.UserId, 
    (u, o) => new { u.Name, o.Amount })
  .Where(x => x.Amount > 100)
  .ToList();`
      }
    ]
  },
  {
    id: "async",
    title: "Asynchronous Programming",
    sections: [
      {
        title: "async & await Basics",
        code: `using System.Threading.Tasks;

// Async method returning Task (no value)
async Task FetchDataAsync() {
  await Task.Delay(1000);
  Console.WriteLine("Data fetched");
}

// Async method returning Task<T>
async Task<string> FetchNameAsync() {
  await Task.Delay(1000);
  return "Alice";
}

// Call async method
public async Task Main(string[] args) {
  // Await waits for completion
  await FetchDataAsync();
  
  string name = await FetchNameAsync();
  Console.WriteLine(name);
  
  // Fire and forget (not recommended)
  var task = FetchDataAsync();  // starts but doesn't wait
}

// Without async - traditional approach
async Task<int> GetNumberAsync() {
  return await Task.Delay(100).ContinueWith(_ => 42);
}

// Multiple async operations
async Task<(string, int)> GetUserDataAsync() {
  var nameTask = FetchNameAsync();
  var ageTask = Task.FromResult(30);
  
  await Task.WhenAll(nameTask, ageTask);
  return (await nameTask, await ageTask);
}`
      },
      {
        title: "Task Combinators & Cancellation",
        code: `using System.Threading;
using System.Threading.Tasks;

// Task.WhenAll - wait for all tasks
async Task ExecuteAllAsync() {
  var task1 = FetchAsync("url1");
  var task2 = FetchAsync("url2");
  var task3 = FetchAsync("url3");
  
  var results = await Task.WhenAll(task1, task2, task3);
}

// Task.WhenAny - wait for first to complete
async Task<string> RaceAsync() {
  var task1 = FetchAsync("url1");
  var task2 = FetchAsync("url2");
  
  var winner = await Task.WhenAny(task1, task2);
  return await winner;
}

// Cancellation token
async Task FetchWithCancellationAsync(CancellationToken ct) {
  try {
    await Task.Delay(5000, ct);
    Console.WriteLine("Completed");
  } catch (OperationCanceledException) {
    Console.WriteLine("Cancelled");
  }
}

public async Task Main() {
  var cts = new CancellationTokenSource();
  cts.CancelAfter(1000);  // cancel after 1 second
  
  await FetchWithCancellationAsync(cts.Token);
  
  // TimeoutAsync helper
  await FetchWithTimeout(3000);
}

async Task FetchWithTimeout(int millisecondsTimeout) {
  var ct = new CancellationTokenSource(millisecondsTimeout).Token;
  try {
    await LongRunningAsync(ct);
  } catch (OperationCanceledException) {
    Console.WriteLine("Timeout");
  }
}`
      }
    ]
  },
  {
    id: "files",
    title: "File I/O & Serialization",
    sections: [
      {
        title: "File Operations Basics",
        code: `using System.IO;

// Write text to file
File.WriteAllText("data.txt", "Hello, World!");

// Append text
File.AppendAllText("data.txt", "\\nNew line");

// Read all text
string content = File.ReadAllText("data.txt");

// Read all lines
string[] lines = File.ReadAllLines("data.txt");

// Write multiple lines
string[] textLines = { "Line 1", "Line 2", "Line 3" };
File.WriteAllLines("data.txt", textLines);

// Check if file exists
if (File.Exists("data.txt")) {
  Console.WriteLine("File exists");
}

// Delete file
File.Delete("data.txt");

// Copy file
File.Copy("source.txt", "dest.txt");

// Get file info
var fi = new FileInfo("data.txt");
long size = fi.Length;
DateTime created = fi.CreationTime;
bool exists = fi.Exists;`
      },
      {
        title: "StreamReader & StreamWriter",
        code: `using System.IO;

// Write with StreamWriter
using (StreamWriter sw = new StreamWriter("output.txt")) {
  sw.WriteLine("Line 1");
  sw.WriteLine("Line 2");
  sw.WriteLine("Line 3");
}

// Read with StreamReader
using (StreamReader sr = new StreamReader("output.txt")) {
  string line;
  while ((line = sr.ReadLine()) != null) {
    Console.WriteLine(line);
  }
}

// Using declaration (C# 8+) - auto dispose
using StreamWriter writer = new StreamWriter("file.txt");
writer.WriteLine("Content");
// writer automatically disposed here

// Read entire file efficiently
using (StreamReader reader = new StreamReader("large.txt")) {
  string line;
  while ((line = reader.ReadLine()) != null) {
    ProcessLine(line);
  }
}

// Directory operations
Directory.CreateDirectory("folder/subfolder");
string[] files = Directory.GetFiles("folder");
string[] dirs = Directory.GetDirectories("folder");
Directory.Delete("folder", true); // true = recursive`
      }
    ]
  },
  {
    id: "exceptions",
    title: "Exception Handling",
    sections: [
      {
        title: "try-catch-finally",
        code: `try {
  // Code that might throw exception
  int result = 10 / int.Parse("0");  // throws DivideByZeroException
  Console.WriteLine(result);
}
catch (DivideByZeroException) {
  Console.WriteLine("Cannot divide by zero");
}
catch (FormatException) {
  Console.WriteLine("Invalid format");
}
catch (Exception ex) {
  // Catch all other exceptions
  Console.WriteLine($"Error: {ex.Message}");
}
finally {
  Console.WriteLine("Cleanup code here");
}

// Multiple catches - order matters (specific first)
try {
  // code
}
catch (ArgumentNullException) {
  Console.WriteLine("Argument is null");
}
catch (ArgumentException) {
  Console.WriteLine("Invalid argument");
}
catch (Exception) {
  Console.WriteLine("General error");
}

// Rethrowing exception
try {
  // code
}
catch (Exception ex) {
  Console.WriteLine("Error occurred");
  throw;  // rethrows the same exception
}

// Throw new exception
if (age < 0) {
  throw new ArgumentException("Age cannot be negative");
}`
      },
      {
        title: "Custom Exceptions",
        code: `// Create custom exception
public class InvalidAgeException : Exception {
  public InvalidAgeException() { }
  
  public InvalidAgeException(string message) 
    : base(message) { }
  
  public InvalidAgeException(string message, Exception innerException)
    : base(message, innerException) { }
}

// Use custom exception
public class Person {
  private int _age;
  
  public int Age {
    get => _age;
    set {
      if (value < 0 || value > 150) {
        throw new InvalidAgeException($"Age must be between 0 and 150. Got: {value}");
      }
      _age = value;
    }
  }
}

// Handle custom exception
try {
  var person = new Person();
  person.Age = 200;
}
catch (InvalidAgeException ex) {
  Console.WriteLine($"Invalid age: {ex.Message}");
}
catch (Exception ex) {
  Console.WriteLine($"Other error: {ex}");
}`
      }
    ]
  }
];

const sqlTopics = [
  {
    id: "basics",
    title: "SQL Basics",
    sections: [
      {
        title: "SELECT & WHERE",
        code: `-- Simple SELECT
SELECT * FROM employees;

-- SELECT specific columns
SELECT id, name, salary FROM employees;

-- SELECT with alias
SELECT id AS employee_id, name AS employee_name FROM employees;

-- WHERE clause - filtering
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE department = 'Sales';

-- Multiple conditions with AND
SELECT * FROM employees 
WHERE salary > 50000 AND department = 'Sales';

-- Multiple conditions with OR
SELECT * FROM employees 
WHERE department = 'Sales' OR department = 'Marketing';

-- Combining AND/OR
SELECT * FROM employees
WHERE (department = 'Sales' OR department = 'IT') 
AND salary > 40000;

-- NOT operator
SELECT * FROM employees WHERE NOT department = 'HR';

-- BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;

-- IN operator
SELECT * FROM employees WHERE department IN ('Sales', 'IT', 'HR');

-- LIKE - pattern matching
SELECT * FROM employees WHERE name LIKE 'J%';  -- starts with J
SELECT * FROM employees WHERE name LIKE '%n';  -- ends with n
SELECT * FROM employees WHERE name LIKE '%oh%'; -- contains 'oh'`
      },
      {
        title: "INSERT, UPDATE, DELETE",
        code: `-- INSERT single row
INSERT INTO employees (id, name, department, salary)
VALUES (101, 'John Doe', 'Sales', 55000);

-- INSERT multiple rows
INSERT INTO employees (id, name, department, salary) VALUES
(102, 'Jane Smith', 'IT', 65000),
(103, 'Bob Johnson', 'HR', 50000),
(104, 'Alice Brown', 'Sales', 52000);

-- INSERT with default VALUES
INSERT INTO employees DEFAULT VALUES;

-- UPDATE single row
UPDATE employees SET salary = 60000 WHERE id = 101;

-- UPDATE multiple columns
UPDATE employees 
SET salary = 75000, department = 'IT'
WHERE id = 102;

-- UPDATE with condition
UPDATE employees SET salary = salary * 1.1 WHERE department = 'Sales';

-- DELETE rows
DELETE FROM employees WHERE id = 101;

-- DELETE with condition
DELETE FROM employees WHERE department = 'HR';

-- Delete all rows (keep table structure)
DELETE FROM employees;

-- Be careful! Always use WHERE unless you mean to delete all
-- DELETE FROM employees;  -- DANGEROUS: deletes all rows`
      },
      {
        title: "ORDER BY & LIMIT",
        code: `-- ORDER BY ascending (default)
SELECT * FROM employees ORDER BY name;

-- ORDER BY descending
SELECT * FROM employees ORDER BY salary DESC;

-- ORDER BY multiple columns
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;

-- ORDER BY with aliases
SELECT name, salary FROM employees 
ORDER BY salary DESC;

-- LIMIT / TOP (depends on database)
-- MySQL, PostgreSQL, SQLite:
SELECT * FROM employees ORDER BY salary DESC LIMIT 5;

-- SQL Server:
SELECT TOP 5 * FROM employees ORDER BY salary DESC;

-- LIMIT with OFFSET (skip first N, then take M)
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 10 OFFSET 5;  -- skip 5, take 10

-- Get top 3 highest paid employees
SELECT TOP 3 * FROM employees ORDER BY salary DESC;

-- Get employees 11-20 by name
SELECT * FROM employees 
ORDER BY name 
LIMIT 10 OFFSET 10;`
      }
    ]
  },
  {
    id: "joins",
    title: "Joins",
    sections: [
      {
        title: "INNER JOIN & LEFT JOIN",
        code: `-- INNER JOIN (only matching rows)
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (all rows from left table, matching from right)
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
-- Employees with no department show NULL for department_name

-- RIGHT JOIN (all rows from right table, matching from left)
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
-- Departments with no employees show NULL for employee names

-- FULL OUTER JOIN (all rows from both tables)
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.id;

-- CROSS JOIN (Cartesian product)
SELECT e.name, p.project_name
FROM employees e
CROSS JOIN projects p;

-- Join multiple tables
SELECT e.name, d.department_name, p.project_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
INNER JOIN projects p ON e.project_id = p.id;

-- Self join (join table to itself)
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;`
      },
      {
        title: "Complex Joins & Aliases",
        code: `-- Join with multiple conditions
SELECT e.name, d.name
FROM employees e
JOIN departments d 
  ON e.dept_id = d.id AND e.active = 1;

-- Join with WHERE filter
SELECT e.name, d.name, e.salary
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 50000;

-- Join ordering results
SELECT e.name, count(p.id) as project_count
FROM employees e
LEFT JOIN projects p ON e.id = p.employee_id
GROUP BY e.id, e.name
ORDER BY project_count DESC;

-- Nested joins
SELECT e.name, d.name, o.office_location
FROM employees e
JOIN departments d ON e.dept_id = d.id
JOIN offices o ON d.office_id = o.id;

-- Multiple joins on same tables
SELECT 
  a.city as city1,
  b.city as city2,
  a.distance
FROM cities a
JOIN cities b ON a.id < b.id
WHERE a.distance > 100;`
      }
    ]
  },
  {
    id: "aggregates",
    title: "Aggregations & GROUP BY",
    sections: [
      {
        title: "COUNT, SUM, AVG, MIN, MAX",
        code: `-- COUNT rows
SELECT COUNT(*) FROM employees;

-- COUNT non-NULL values
SELECT COUNT(phone_number) FROM employees;

-- COUNT distinct values
SELECT COUNT(DISTINCT department) FROM employees;

-- SUM (total)
SELECT SUM(salary) FROM employees;

-- SUM with condition
SELECT SUM(salary) FROM employees WHERE department = 'Sales';

-- AVG (average)
SELECT AVG(salary) FROM employees;

-- MIN and MAX
SELECT MIN(salary) as lowest, MAX(salary) as highest FROM employees;

-- All aggregates together
SELECT 
  COUNT(*) as total_employees,
  SUM(salary) as total_salary,
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary
FROM employees;

-- Aggregate with NULL values
SELECT COUNT(commission) FROM employees;
-- NULL values are ignored in most aggregates

-- COUNT(*) vs COUNT(column)
SELECT COUNT(*) as total FROM employees;         -- includes NULLs
SELECT COUNT(salary) as non_null FROM employees; -- excludes NULLs`
      },
      {
        title: "GROUP BY & HAVING",
        code: `-- GROUP BY single column
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department;

-- GROUP BY aggregate functions
SELECT 
  department,
  COUNT(*) as count,
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary
FROM employees
GROUP BY department;

-- GROUP BY multiple columns
SELECT department, job_title, COUNT(*) as count
FROM employees
GROUP BY department, job_title;

-- HAVING clause (filter after GROUP BY)
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- WHERE vs HAVING
-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER grouping

SELECT department, COUNT(*) as emp_count, AVG(salary) as avg_salary
FROM employees
WHERE salary > 40000  -- filter individual rows first
GROUP BY department
HAVING COUNT(*) > 5;  -- filter groups

-- GROUP BY ORDER BY
SELECT 
  department, 
  COUNT(*) as emp_count,
  AVG(salary) as avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- DISTINCT vs GROUP BY
SELECT DISTINCT department FROM employees;
-- Same as: SELECT department FROM employees GROUP BY department;`
      }
    ]
  },
  {
    id: "subqueries",
    title: "Subqueries & Advanced",
    sections: [
      {
        title: "Subqueries in WHERE & SELECT",
        code: `-- Subquery in WHERE (scalar subquery)
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT * FROM employees
WHERE department_id IN 
  (SELECT id FROM departments WHERE location = 'New York');

-- Subquery with EXISTS
SELECT * FROM employees e
WHERE EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);

-- Subquery with NOT EXISTS
SELECT * FROM employees e
WHERE NOT EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);

-- Subquery in SELECT clause (correlated subquery)
SELECT 
  e.name,
  e.salary,
  (SELECT AVG(salary) FROM employees) as company_avg,
  e.salary - (SELECT AVG(salary) FROM employees) as diff
FROM employees e;

-- Subquery in SELECT with GROUP BY
SELECT 
  department,
  (SELECT COUNT(*) FROM employees e2 WHERE e2.department = employees.department) as dept_count
FROM employees
GROUP BY department;

-- Subquery with aggregate
SELECT name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);`
      },
      {
        title: "UNION, CTE, Window Functions",
        code: `-- UNION (combine results, remove duplicates)
SELECT name FROM employees
UNION
SELECT name FROM contractors;

-- UNION ALL (keep duplicates)
SELECT name FROM employees
UNION ALL
SELECT name FROM contractors;

-- CTE (Common Table Expression) - WITH clause
WITH department_stats AS (
  SELECT 
    department,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary
  FROM employees
  GROUP BY department
)
SELECT * FROM department_stats
WHERE avg_salary > 50000;

-- Multiple CTEs
WITH high_earners AS (
  SELECT * FROM employees WHERE salary > 70000
),
department_summary AS (
  SELECT department, COUNT(*) as count
  FROM high_earners
  GROUP BY department
)
SELECT * FROM department_summary;

-- Window Functions (ROW_NUMBER, RANK, LAG, LEAD)
SELECT 
  name,
  salary,
  department,
  ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
  LAG(salary) OVER (ORDER BY salary DESC) as prev_salary,
  LEAD(salary) OVER (ORDER BY salary DESC) as next_salary
FROM employees;

-- PARTITION BY with Window Functions
SELECT 
  name,
  department,
  salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;`
      }
    ]
  },
  {
    id: "indexes",
    title: "Indexes & Performance",
    sections: [
      {
        title: "CREATE & DROP Indexes",
        code: `-- Create simple index on single column
CREATE INDEX idx_employee_name ON employees(name);

-- Create index on multiple columns
CREATE INDEX idx_dept_salary ON employees(department_id, salary);

-- Create UNIQUE index
CREATE UNIQUE INDEX idx_email ON employees(email);

-- Create index with ORDER
CREATE INDEX idx_salary_desc ON employees(salary DESC);

-- DROP index
DROP INDEX idx_employee_name;

-- Check existing indexes (varies by database)
-- SQL Server
SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID('employees');

-- MySQL
SHOW INDEXES FROM employees;

-- PostgreSQL
SELECT * FROM pg_indexes WHERE tablename = 'employees';

-- Index naming conventions
idx_table_column;           -- single column
idx_table_col1_col2;        -- multiple columns
uk_table_column;            -- unique index
pk_table;                   -- primary key

-- When to create indexes:
-- 1. Frequently searched columns (WHERE clause)
-- 2. Columns used in JOIN conditions
-- 3. Columns in ORDER BY
-- 4. Columns with poor selectivity (many distinct values)

-- Don't over-index:
-- - Slows down INSERT/UPDATE/DELETE
-- - Uses disk space
-- - Indexes need maintenance`
      },
      {
        title: "Query Optimization",
        code: `-- GOOD: Use specific columns
SELECT id, name, email FROM employees;
-- BAD: Use SELECT *
SELECT * FROM employees;

-- GOOD: Use index-friendly WHERE
SELECT * FROM employees WHERE department_id = 5;
-- AVOID: Function calls in WHERE
SELECT * FROM employees WHERE UPPER(name) = 'JOHN';

-- GOOD: Filter early with WHERE
SELECT * FROM employees
WHERE department_id = 5 AND salary > 50000;
-- BAD: Filter after expensive operations
SELECT * FROM employees
WHERE salary = (large_calculation);

-- GOOD: Use JOIN instead of subquery
SELECT e.*, d.name
FROM employees e
JOIN departments d ON e.dept_id = d.id;

-- Execution plan (check with EXPLAIN)
EXPLAIN SELECT * FROM employees WHERE salary > 50000;

-- Use EXPLAIN ANALYZE for actual stats (PostgreSQL, MySQL)
EXPLAIN ANALYZE
SELECT * FROM employees
WHERE department_id IN (SELECT id FROM departments);

-- Avoid LIKE with leading wildcard
SELECT * FROM employees WHERE name LIKE 'John%';  -- GOOD, uses index
SELECT * FROM employees WHERE name LIKE '%John';  -- BAD, full table scan

-- Batch operations for better performance
INSERT INTO logs VALUES (...), (...), (...);  -- better than separate INSERTs`
      }
    ]
  },
  {
    id: "transactions",
    title: "Transactions & Constraints",
    sections: [
      {
        title: "Transactions & ACID",
        code: `-- Basic transaction
BEGIN TRANSACTION;

UPDATE employees SET salary = 60000 WHERE id = 101;
UPDATE employees SET salary = salary - 5000 WHERE id = 102;

COMMIT;  -- save changes

-- Rollback example
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

ROLLBACK;  -- undo all changes (transaction fails partway)

-- Savepoint (rollback to point, not entire transaction)
BEGIN TRANSACTION;

INSERT INTO employees VALUES (...);
SAVE TRANSACTION after_insert;

UPDATE employees SET salary = 50000;

ROLLBACK TRANSACTION after_insert;  -- undo UPDATE, keep INSERT

COMMIT;

-- Try-Catch with transaction (SQL Server/T-SQL)
BEGIN TRY
  BEGIN TRANSACTION;
  -- risky operations
  COMMIT;
END TRY
BEGIN CATCH
  ROLLBACK;
  PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;

-- Transaction isolation levels
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`
      },
      {
        title: "Constraints & Keys",
        code: `-- PRIMARY KEY (unique identifier)
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- FOREIGN KEY (referential integrity)
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(id)
);

-- UNIQUE constraint
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);

-- CHECK constraint (data validation)
CREATE TABLE employees (
  id INT PRIMARY KEY,
  salary INT CHECK (salary > 0),
  age INT CHECK (age >= 18 AND age <= 65)
);

-- NOT NULL constraint
CREATE TABLE employees (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

-- DEFAULT value
CREATE TABLE logs (
  id INT PRIMARY KEY,
  created_at DATETIME DEFAULT GETDATE(),
  level VARCHAR(10) DEFAULT 'INFO'
);

-- Alter table to add constraint
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (dept_id) REFERENCES departments(id);

-- Drop constraint
ALTER TABLE employees
DROP CONSTRAINT fk_department;`
      }
    ]
  }
];


const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };
  return (
    <div className="code-block">
      <button onClick={copy} className={`copy-btn ${copied ? "copied" : ""}`}>
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <pre className="code-pre">{code}</pre>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState("csharp");
  const [activeTopic, setActiveTopic] = useState("fundamentals");
  const [search, setSearch] = useState("");

  const allTopics = lang === "csharp" ? csharpTopics : sqlTopics;
  const currentTopic = allTopics.find(t => t.id === activeTopic);
  
  const allSections = allTopics.flatMap(t => 
    t.sections.map(s => ({...s, topicId: t.id, topicTitle: t.title}))
  );
  
  const filtered = search.trim() 
    ? allSections.filter(s => (s.title + s.code).toLowerCase().includes(search.toLowerCase()))
    : null;

  const langData = lang === "csharp" 
    ? { title: "C#", icon: "🧱", color: "#3b82f6" }
    : { title: "SQL", icon: "🗄️", color: "#16a34a" };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="title">Zero → Hero</div>
          <div className="subtitle">Cheatsheets</div>
        </div>

        <div className="lang-tabs">
          {[
            { id: "csharp", title: "C#", icon: "🧱", color: "#3b82f6" },
            { id: "sql", title: "SQL", icon: "🗄️", color: "#16a34a" }
          ].map(l => (
            <button
              key={l.id}
              className={`lang-tab ${l.id === lang ? 'active' : ''}`}
              onClick={() => { setLang(l.id); setSearch(""); setActiveTopic(allTopics[0].id); }}
              style={{ ['--topic-color']: l.color }}
            >
              <span className="tab-icon">{l.icon}</span>
              <span className="tab-title">{l.title}</span>
            </button>
          ))}
        </div>

        <div className="topics">
          {allTopics.map(t => (
            <button
              key={t.id}
              className={`topic-btn ${activeTopic === t.id ? 'active' : ''}`}
              onClick={() => setActiveTopic(t.id)}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div className="main">
        <div className="main-header">
          <div className="main-title">
            <div className="current-info">
              <div className="current-icon">{langData.icon}</div>
              <div>
                <div className="current-title" style={{ color: langData.color }}>
                  {langData.title} Complete Guide
                </div>
                <div className="current-count">{currentTopic?.sections.length || allSections.length} sections</div>
              </div>
            </div>
          </div>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search..."
            className="search-input"
          />
        </div>

        <div className="main-content">
          {filtered ? (
            filtered.length === 0 ? (
              <div className="empty-state">No results for "{search}"</div>
            ) : (
              filtered.map((s, i) => (
                <div key={i} className="card">
                  <div className="card-topic">{s.topicTitle}</div>
                  <div className="card-title">{s.title}</div>
                  <CodeBlock code={s.code} />
                </div>
              ))
            )
          ) : (
            <div className="sections-grid">
              {currentTopic?.sections.map((s, i) => (
                <div key={i} className="card">
                  <div className="card-title-small">{s.title}</div>
                  <CodeBlock code={s.code} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="footer-nav">
          {[
            { id: "csharp", title: "C#", icon: "🧱", color: "#3b82f6" },
            { id: "sql", title: "SQL", icon: "🗄️", color: "#16a34a" }
          ].map(l => (
            <button
              key={l.id}
              onClick={() => { setLang(l.id); setSearch(""); }}
              className={`footer-btn ${l.id === lang ? 'active' : ''}`}
              style={{ ['--topic-color']: l.color }}
            >
              {l.icon} {l.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
