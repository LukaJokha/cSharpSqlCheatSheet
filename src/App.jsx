import { useState } from "react";
import "./App.css";

const csharpTopics = [
  {
    id: "fundamentals",
    title: { en: "Language Fundamentals", ka: "ენის საფუძვლები" },
    sections: [
      {
        title: { en: "Hello World & Basic Syntax", ka: "Hello World და ძირითადი სინტაქსი" },
        code: {
          en: `// Program.cs - Simple Console App
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
const string MY_CONST = "value"; // UPPER_CASE for constants`,
          ka: `// Program.cs - მარტივი consolე აპლიკაცია
Console.WriteLine("გამარჯობა, მსოფლიო!");

// Using ბრძანებები
using System;

// კომენტარები
// ერთ რიგიანი კომენტარი
/* მრავალ-რიგიანი
   კომენტარი */

// დასამყარის კონვენციები
string myVariable;      // camelCase ლოკალური ცვლადებისთვის
string MyClass;         // PascalCase კლასებისა და მეთოდებისთვის
const string MY_CONST = "value"; // UPPER_CASE მუდმივებისთვის`
        }
      },
      {
        title: { en: "Data Types - Value Types", ka: "მონაცემთა ტიპები - მნიშვნელობის ტიპები" },
        code: {
          en: `// Integer types (signed)
sbyte smallInt = -128;       // 8-bit (-128 to 127)
short shortInt = -32768;     // 16-bit
int integer = -2147483648;   // 32-bit (default)
long bigInt = -9223372036854775808L; // 64-bit

// Floating point types
float floatNum = 3.14f;      // 32-bit, less precise
double doubleNum = 3.14159;  // 64-bit, more precise
decimal money = 19.99m;      // 128-bit, financial

// Boolean and Char
bool isActive = true;
char singleChar = 'A';

// DateTime
DateTime now = DateTime.Now;
TimeSpan duration = TimeSpan.FromHours(2);`,
          ka: `// მთელი რიცხვების ტიპები (ხელმოწერილი)
sbyte smallInt = -128;       // 8-bit (-128 დან 127-მდე)
short shortInt = -32768;     // 16-bit
int integer = -2147483648;   // 32-bit (სტანდარტი)
long bigInt = -9223372036854775808L; // 64-bit

// მცურავი წერტილის ტიპები
float floatNum = 3.14f;      // 32-bit, ნაკლებად ზუსტი
double doubleNum = 3.14159;  // 64-bit, უფრო ზუსტი
decimal money = 19.99m;      // 128-bit, ფინანსური

// ლოგიკური და სიმბოლო
bool isActive = true;
char singleChar = 'A';

// თარიღი
DateTime now = DateTime.Now;
TimeSpan duration = TimeSpan.FromHours(2);`
        }
      },
      {
        title: { en: "String Type & Interpolation", ka: "სტრიქონის ტიპი და ინტერპოლაცია" },
        code: {
          en: `string name = "Alice";
int age = 30;

// String interpolation (modern C#)
string message = $"Hello, {name}! You are {age} years old.";

// String concatenation (old style)
string old = "Hello, " + name + "!";

// String methods
string text = "Hello World";
text.Length;              // 11
text.ToUpper();           // "HELLO WORLD"
text.ToLower();           // "hello world"
text.Contains("World");   // true
text.StartsWith("Hello"); // true
text.Substring(0, 5);     // "Hello"
text.Split(' ');          // ["Hello", "World"]
text.Trim();              // removes whitespace`,
          ka: `string name = "Alice";
int age = 30;

// სტრიქონის ინტერპოლაცია (თანამედროვე C#)
string message = $"გამარჯობა, {name}! თქვენ ხართ {age} წლის.";

// სტრიქონის კოტენაცია (ძველი სტილი)
string old = "გამარჯობა, " + name + "!";

// სტრიქონის მეთოდები
string text = "გამარჯობა მსოფლიო";
text.Length;              // 18
text.ToUpper();           // "გამარჯობა მსოფლიო"
text.ToLower();           // "გამარჯობა მსოფლიო"
text.Contains("მსოფლიო");   // true
text.StartsWith("გამარჯობა"); // true
text.Substring(0, 5);     // "გამა"
text.Split(' ');          // ["გამარჯობა", "მსოფლიო"]
text.Trim();              // თეთრი სივრცის წაშლა`
        }
      }
    ]
  },
  {
    id: "control-flow",
    title: { en: "Control Flow", ka: "კონტროლის ნაკადი" },
    sections: [
      {
        title: { en: "if, else if, else", ka: "if, else if, else" },
        code: {
          en: `int age = 25;

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
string status = age >= 18 ? "Adult" : "Minor";`,
          ka: `int age = 25;

if (age < 13) {
  Console.WriteLine("ბავშვი");
} else if (age < 18) {
  Console.WriteLine("მოზარდი");
} else if (age < 65) {
  Console.WriteLine("მოზრდილი");
} else {
  Console.WriteLine("უფროსი");
}

// სამეული ოპერატორი
string status = age >= 18 ? "მოზრდილი" : "უმცროსი";`
        }
      },
      {
        title: { en: "Loops - for, while, do-while", ka: "ციკლები - for, while, do-while" },
        code: {
          en: `// for loop
for (int i = 0; i < 10; i++) {
  Console.WriteLine(i); // 0 to 9
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
  Console.WriteLine(n); // prints 1 to 5
}`,
          ka: `// for ციკლი
for (int i = 0; i < 10; i++) {
  Console.WriteLine(i); // 0 დან 9-მდე
}

// while ციკლი
int count = 0;
while (count < 5) {
  Console.WriteLine(count);
  count++;
}

// do-while (სულ მცირე ერთხელ შესრულდება)
int num = 0;
do {
  Console.WriteLine(num);
  num++;
} while (num < 5);

// foreach ციკლი
int[] numbers = { 1, 2, 3, 4, 5 };
foreach (int n in numbers) {
  Console.WriteLine(n); // ბეჭდავს 1-დან 5-მდე
}`
        }
      },
      {
        title: { en: "switch & switch expressions", ka: "switch და switch გამონათქვამები" },
        code: {
          en: `int day = 1;

// Traditional switch
switch (day) {
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  default:
    Console.WriteLine("Other");
    break;
}

// Switch expression (C# 8+)
string dayName = day switch {
  1 => "Monday",
  2 => "Tuesday",
  3 => "Wednesday",
  _ => "Unknown"
};`,
          ka: `int day = 1;

// ტრადიციული switch
switch (day) {
  case 1:
    Console.WriteLine("ორშაბათი");
    break;
  case 2:
    Console.WriteLine("სამშაბათი");
    break;
  default:
    Console.WriteLine("სხვა");
    break;
}

// Switch გამონათქვამი (C# 8+)
string dayName = day switch {
  1 => "ორშაბათი",
  2 => "სამშაბათი",
  3 => "ოთხშაბათი",
  _ => "უცნობი"
};`
        }
      }
    ]
  },
  {
    id: "oop",
    title: { en: "Object-Oriented Programming", ka: "ობიექტზე ორიენტირებული პროგრამირება" },
    sections: [
      {
        title: { en: "Classes & Objects", ka: "კლასები და ობიექტები" },
        code: {
          en: `// Define a class
public class Person {
  // Fields
  private string _name;
  private int _age;

  // Property
  public string Name { get; set; }

  // Constructor
  public Person(string name, int age) {
    _name = name;
    _age = age;
  }

  // Method
  public void Greet() {
    Console.WriteLine($"Hello, I'm {_name}!");
  }
}

// Create and use
var person = new Person("Alice", 30);
person.Greet();`,
          ka: `// კლასის განსაზღვრება
public class Person {
  // ველები
  private string _name;
  private int _age;

  // თვისება
  public string Name { get; set; }

  // კონსტრუქტორი
  public Person(string name, int age) {
    _name = name;
    _age = age;
  }

  // მეთოდი
  public void Greet() {
    Console.WriteLine($"გამარჯობა, მე ვარი {_name}!");
  }
}

// კლასის გამოყენება
var person = new Person("Alice", 30);
person.Greet();`
        }
      },
      {
        title: { en: "Inheritance", ka: "მემკვიდრეობა" },
        code: {
          en: `// Base class
public class Animal {
  public string Name { get; set; }

  public Animal(string name) {
    Name = name;
  }

  public virtual void Speak() {
    Console.WriteLine($"{Name} makes a sound");
  }
}

// Derived class
public class Dog : Animal {
  public Dog(string name) : base(name) { }

  public override void Speak() {
    Console.WriteLine($"{Name} barks: Woof!");
  }
}

// Usage
var dog = new Dog("Rex");
dog.Speak();  // Rex barks: Woof!`,
          ka: `// ბაზის კლასი
public class Animal {
  public string Name { get; set; }

  public Animal(string name) {
    Name = name;
  }

  public virtual void Speak() {
    Console.WriteLine($"{Name} ხმას ის");
  }
}

// მემკვიდრე კლასი
public class Dog : Animal {
  public Dog(string name) : base(name) { }

  public override void Speak() {
    Console.WriteLine($"{Name} ყეყის: აუ!");
  }
}

// გამოყენება
var dog = new Dog("Rex");
dog.Speak();  // Rex ყეყის: აუ!`
        }
      },
      {
        title: { en: "Abstract Classes & Interfaces", ka: "აბსტრაქტული კლასები და ინტერფეისები" },
        code: {
          en: `// Abstract class
public abstract class Shape {
  public abstract double Area();
  
  public void Display() {
    Console.WriteLine($"Area: {Area()}");
  }
}

// Interface
public interface IDrawable {
  void Draw();
}

// Implement
public class Circle : Shape, IDrawable {
  public double Radius { get; set; }

  public override double Area() {
    return Math.PI * Radius * Radius;
  }

  public void Draw() {
    Console.WriteLine("Drawing circle");
  }
}`,
          ka: `// აბსტრაქტული კლასი
public abstract class Shape {
  public abstract double Area();
  
  public void Display() {
    Console.WriteLine($"ფართობი: {Area()}");
  }
}

// ინტერფეისი
public interface IDrawable {
  void Draw();
}

// განსახორციელიკი
public class Circle : Shape, IDrawable {
  public double Radius { get; set; }

  public override double Area() {
    return Math.PI * Radius * Radius;
  }

  public void Draw() {
    Console.WriteLine("ხატვა წრე");
  }
}`
        }
      }
    ]
  },
  {
    id: "collections",
    title: { en: "Collections & Generics", ka: "კოლექციები და ზოგადი" },
    sections: [
      {
        title: { en: "Arrays", ka: "მასივები" },
        code: {
          en: `// Array declaration
int[] numbers = new int[5];  // size 5, default 0
int[] values = { 1, 2, 3, 4, 5 };

// Access elements
numbers[0] = 10;
int first = values[0];  // 1

// Array properties
numbers.Length;         // 5
Array.Sort(numbers);
Array.Reverse(numbers);

// Multi-dimensional arrays
int[,] matrix = new int[3, 3];
matrix[0, 0] = 1;`,
          ka: `// მასივის განცხადება
int[] numbers = new int[5];  // ზომა 5, ნაგულისხმი 0
int[] values = { 1, 2, 3, 4, 5 };

// ელემენტებზე წვდომა
numbers[0] = 10;
int first = values[0];  // 1

// მასივის თვისებები
numbers.Length;         // 5
Array.Sort(numbers);
Array.Reverse(numbers);

// მრავალმიმართული მასივები
int[,] matrix = new int[3, 3];
matrix[0, 0] = 1;`
        }
      },
      {
        title: { en: "List<T>", ka: "List<T>" },
        code: {
          en: `using System.Collections.Generic;

// List declaration
var list = new List<int> { 1, 2, 3 };
List<string> names = new();

// Add elements
list.Add(4);
list.AddRange(new[] { 5, 6 });

// Remove
list.Remove(3);
list.RemoveAt(0);

// Access
int first = list[0];
list.Count;

// Iterate
foreach (var item in list) {
  Console.WriteLine(item);
}`,
          ka: `using System.Collections.Generic;

// სიის განცხადება
var list = new List<int> { 1, 2, 3 };
List<string> names = new();

// ელემენტების დამატება
list.Add(4);
list.AddRange(new[] { 5, 6 });

// წაშლა
list.Remove(3);
list.RemoveAt(0);

// წვდომა
int first = list[0];
list.Count;

// იტერაცია
foreach (var item in list) {
  Console.WriteLine(item);
}`
        }
      },
      {
        title: { en: "Dictionary<K,V>", ka: "Dictionary<K,V>" },
        code: {
          en: `using System.Collections.Generic;

// Dictionary creation
var dict = new Dictionary<string, int>();
var ages = new Dictionary<string, int> {
  { "Alice", 30 },
  { "Bob", 25 }
};

// Add and access
dict["Charlie"] = 35;
int age = dict["Alice"];  // 30

// Check key
if (dict.ContainsKey("Alice")) {
  Console.WriteLine("Found");
}

// Remove
dict.Remove("Bob");

// Iterate
foreach (var kvp in dict) {
  Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}`,
          ka: `using System.Collections.Generic;

// Dictionary გამოქформირება
var dict = new Dictionary<string, int>();
var ages = new Dictionary<string, int> {
  { "Alice", 30 },
  { "Bob", 25 }
};

// დამატება და წვდომა
dict["Charlie"] = 35;
int age = dict["Alice"];  // 30

// წაბრკი
if (dict.ContainsKey("Alice")) {
  Console.WriteLine("ნაპოვნი");
}

// წაშლა
dict.Remove("Bob");

// იტერაცია
foreach (var kvp in dict) {
  Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}`
        }
      }
    ]
  },
  {
    id: "linq",
    title: { en: "LINQ (Language Integrated Query)", ka: "LINQ (ენაში ჩაშენებული კითხვა)" },
    sections: [
      {
        title: { en: "LINQ Basics - Where, Select", ka: "LINQ საფუძვლები - Where, Select" },
        code: {
          en: `using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Where - filtering
var evens = numbers.Where(n => n % 2 == 0);

// Select - transformation
var squared = numbers.Select(n => n * n);

// Chain operations
var result = numbers
  .Where(n => n > 3)
  .Select(n => n * 2)
  .Where(n => n < 15);

// FirstOrDefault
int first = numbers.First();  // 1
int first5 = numbers.First(n => n == 5);  // 5`,
          ka: `using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Where - ფილტრაციה
var evens = numbers.Where(n => n % 2 == 0);

// Select - ტრანსფორმაცია
var squared = numbers.Select(n => n * n);

// ოპერაციების ჯაჭვი
var result = numbers
  .Where(n => n > 3)
  .Select(n => n * 2)
  .Where(n => n < 15);

// FirstOrDefault
int first = numbers.First();  // 1
int first5 = numbers.First(n => n == 5);  // 5`
        }
      },
      {
        title: { en: "Ordering & Aggregation", ka: "დალაგება და დაჯამება" },
        code: {
          en: `// OrderBy, OrderByDescending
var sorted = numbers.OrderBy(n => n);      // ascending
var desc = numbers.OrderByDescending(n => n); // descending

// Skip, Take
var page = numbers.Skip(2).Take(3);  // 3, 4, 5

// Count, Sum, Average
int count = numbers.Count();           // 10
int sum = numbers.Sum();               // 55
double avg = numbers.Average();        // 5.5

// Min, Max
int min = numbers.Min();               // 1
int max = numbers.Max();               // 10

// All, Any
bool all = numbers.All(n => n > 0);    // true
bool any = numbers.Any(n => n > 5);    // true`,
          ka: `// OrderBy, OrderByDescending
var sorted = numbers.OrderBy(n => n);      // აღმავალი
var desc = numbers.OrderByDescending(n => n); // დაღმავალი

// Skip, Take
var page = numbers.Skip(2).Take(3);  // 3, 4, 5

// Count, Sum, Average
int count = numbers.Count();           // 10
int sum = numbers.Sum();               // 55
double avg = numbers.Average();        // 5.5

// Min, Max
int min = numbers.Min();               // 1
int max = numbers.Max();               // 10

// All, Any
bool all = numbers.All(n => n > 0);    // true
bool any = numbers.Any(n => n > 5);    // true`
        }
      }
    ]
  },
  {
    id: "async",
    title: { en: "Asynchronous Programming", ka: "ასინქრონული პროგრამირება" },
    sections: [
      {
        title: { en: "async & await Basics", ka: "async & await საფუძვლები" },
        code: {
          en: `using System.Threading.Tasks;

// Async method
async Task<string> FetchNameAsync() {
  // Simulate network delay
  await Task.Delay(1000);
  return "Alice";
}

// Call async method
public async Task Main(string[] args) {
  // Await waits for completion
  string name = await FetchNameAsync();
  Console.WriteLine($"Hello, {name}!");
}

// Multiple async
async Task<(string, int)> GetDataAsync() {
  var name = await FetchNameAsync();
  var age = await Task.FromResult(30);
  return (name, age);
}`,
          ka: `using System.Threading.Tasks;

// ასინქრონული მეთოდი
async Task<string> FetchNameAsync() {
  // ქსელის დაფაქტურების სიმულაცია
  await Task.Delay(1000);
  return "Alice";
}

// ასინქრონული მეთოდის გამოძახება
public async Task Main(string[] args) {
  // Await ელოდება დასრულებას
  string name = await FetchNameAsync();
  Console.WriteLine($"გამარჯობა, {name}!");
}

// მრავალი ასინქრონი
async Task<(string, int)> GetDataAsync() {
  var name = await FetchNameAsync();
  var age = await Task.FromResult(30);
  return (name, age);
}`
        }
      }
    ]
  },
  {
    id: "files",
    title: { en: "File I/O & Serialization", ka: "ფაილის I/O და სერიალიზაცია" },
    sections: [
      {
        title: { en: "File Operations Basics", ka: "ფაილის ოპერაციების საფუძვლები" },
        code: {
          en: `using System.IO;

// Write text
File.WriteAllText("data.txt", "Hello, World!");

// Append text
File.AppendAllText("data.txt", "\\nNew line");

// Read all text
string content = File.ReadAllText("data.txt");

// Read all lines
string[] lines = File.ReadAllLines("data.txt");

// Check if exists
if (File.Exists("data.txt")) {
  Console.WriteLine("File exists");
}

// Delete file
File.Delete("data.txt");

// Copy file
File.Copy("source.txt", "dest.txt");`,
          ka: `using System.IO;

// ტექსტის დაწერა
File.WriteAllText("data.txt", "გამარჯობა, მსოფლიო!");

// ტექსტის დამატება
File.AppendAllText("data.txt", "\\nახალი მწკრივი");

// ყველა ტექსტის წაკითხვა
string content = File.ReadAllText("data.txt");

// ყველა მწკრივის წაკითხვა
string[] lines = File.ReadAllLines("data.txt");

// არსებობის შემოწმება
if (File.Exists("data.txt")) {
  Console.WriteLine("ფაილი არსებობს");
}

// ფაილის წაშლა
File.Delete("data.txt");

// ფაილის კოპირება
File.Copy("source.txt", "dest.txt");`
        }
      }
    ]
  },
  {
    id: "exceptions",
    title: { en: "Exception Handling", ka: "გამონაკლისის დამუშავება" },
    sections: [
      {
        title: { en: "try-catch-finally", ka: "try-catch-finally" },
        code: {
          en: `try {
  int result = 10 / int.Parse("0");
  Console.WriteLine(result);
}
catch (DivideByZeroException) {
  Console.WriteLine("Cannot divide by zero");
}
catch (FormatException) {
  Console.WriteLine("Invalid format");
}
catch (Exception ex) {
  Console.WriteLine($"Error: {ex.Message}");
}
finally {
  Console.WriteLine("Cleanup code");
}`,
          ka: `try {
  int result = 10 / int.Parse("0");
  Console.WriteLine(result);
}
catch (DivideByZeroException) {
  Console.WriteLine("არ შეიძლება გაყოფა ნულზე");
}
catch (FormatException) {
  Console.WriteLine("არასწორი ფორმატი");
}
catch (Exception ex) {
  Console.WriteLine($"შეცდომა: {ex.Message}");
}
finally {
  Console.WriteLine("დასუფთავებაkod");
}`
        }
      }
    ]
  }
];

const sqlTopics = [
  {
    id: "basics",
    title: { en: "SQL Basics", ka: "SQL საფუძვლები" },
    sections: [
      {
        title: { en: "SELECT & WHERE", ka: "SELECT და WHERE" },
        code: {
          en: `-- Simple SELECT
SELECT * FROM employees;

-- SELECT specific columns
SELECT id, name, salary FROM employees;

-- SELECT with alias
SELECT id AS employee_id, name AS employee_name FROM employees;

-- WHERE clause - filtering
SELECT * FROM employees WHERE salary > 50000;

-- Multiple conditions with AND
SELECT * FROM employees 
WHERE salary > 50000 AND department = 'Sales';

-- BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;

-- IN operator
SELECT * FROM employees WHERE department IN ('Sales', 'IT', 'HR');`,
          ka: `-- მარტივი SELECT
SELECT * FROM employees;

-- კონკრეტული სვეტების SELECT
SELECT id, name, salary FROM employees;

-- SELECT ფსევდონიმით
SELECT id AS employee_id, name AS employee_name FROM employees;

-- WHERE პირობა - ფილტრაციה
SELECT * FROM employees WHERE salary > 50000;

-- მრავალი პირობა AND-ით
SELECT * FROM employees 
WHERE salary > 50000 AND department = 'Sales';

-- BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;

-- IN ოპერატორი
SELECT * FROM employees WHERE department IN ('Sales', 'IT', 'HR');`
        }
      },
      {
        title: { en: "INSERT, UPDATE, DELETE", ka: "INSERT, UPDATE, DELETE" },
        code: {
          en: `-- INSERT single row
INSERT INTO employees (id, name, department, salary)
VALUES (101, 'John Doe', 'Sales', 55000);

-- INSERT multiple rows
INSERT INTO employees (id, name, department, salary) VALUES
(102, 'Jane Smith', 'IT', 65000),
(103, 'Bob Johnson', 'HR', 50000);

-- UPDATE
UPDATE employees SET salary = 60000 WHERE id = 101;

-- UPDATE multiple columns
UPDATE employees 
SET salary = 75000, department = 'IT'
WHERE id = 102;

-- DELETE
DELETE FROM employees WHERE id = 101;

-- Be careful! Always use WHERE
-- DELETE FROM employees;  -- DANGEROUS`,
          ka: `-- ერთი მწკრივის INSERT
INSERT INTO employees (id, name, department, salary)
VALUES (101, 'John Doe', 'Sales', 55000);

-- მრავალი მწკრივის INSERT
INSERT INTO employees (id, name, department, salary) VALUES
(102, 'Jane Smith', 'IT', 65000),
(103, 'Bob Johnson', 'HR', 50000);

-- UPDATE
UPDATE employees SET salary = 60000 WHERE id = 101;

-- მრავალი სვეტის UPDATE
UPDATE employees 
SET salary = 75000, department = 'IT'
WHERE id = 102;

-- DELETE
DELETE FROM employees WHERE id = 101;

-- ცდა! ყოველთვის გამოიყენება WHERE
-- DELETE FROM employees;  -- საშიში`
        }
      },
      {
        title: { en: "ORDER BY & LIMIT", ka: "ORDER BY და LIMIT" },
        code: {
          en: `-- ORDER BY ascending (default)
SELECT * FROM employees ORDER BY name;

-- ORDER BY descending
SELECT * FROM employees ORDER BY salary DESC;

-- ORDER BY multiple columns
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;

-- LIMIT / TOP
SELECT TOP 5 * FROM employees ORDER BY salary DESC;

-- LIMIT with OFFSET (skip N, then take M)
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 10 OFFSET 5;

-- Get top 3 highest paid employees
SELECT TOP 3 * FROM employees ORDER BY salary DESC;`,
          ka: `-- ORDER BY აღმავალი (ნაგულისხმი)
SELECT * FROM employees ORDER BY name;

-- ORDER BY დაღმავალი
SELECT * FROM employees ORDER BY salary DESC;

-- მრავალი სვეტის ORDER BY
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;

-- LIMIT / TOP
SELECT TOP 5 * FROM employees ORDER BY salary DESC;

-- LIMIT OFFSET (გამოტოვა N, შემდეგ M-ის აღება)
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 10 OFFSET 5;

-- 3 ყველაზე მაღალი ხელფასი
SELECT TOP 3 * FROM employees ORDER BY salary DESC;`
        }
      }
    ]
  },
  {
    id: "joins",
    title: { en: "Joins", ka: "ტიპი JOIN-ები" },
    sections: [
      {
        title: { en: "INNER JOIN & LEFT JOIN", ka: "INNER JOIN და LEFT JOIN" },
        code: {
          en: `-- INNER JOIN (only matching rows)
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (all rows from left table)
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- RIGHT JOIN (all rows from right table)
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;

-- FULL OUTER JOIN
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.id;`,
          ka: `-- INNER JOIN (მხოლოდ მეთი მწკრივი)
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (ყველა მწკრივი მარცხენა ცხრილიდან)
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;

-- RIGHT JOIN (ყველა მწკრივი მარჯვენა ცხრილიდან)
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;

-- FULL OUTER JOIN
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.id;`
        }
      },
      {
        title: { en: "Complex Joins", ka: "რთული JOIN-ები" },
        code: {
          en: `-- Join multiple tables
SELECT e.name, d.department_name, p.project_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
INNER JOIN projects p ON e.project_id = p.id;

-- Self join
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

-- Join with WHERE
SELECT e.name, d.name, e.salary
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 50000;`,
          ka: `-- მრავალი ცხრილის JOIN
SELECT e.name, d.department_name, p.project_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
INNER JOIN projects p ON e.project_id = p.id;

-- საკუთარი JOIN
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

-- JOIN WHERE-ით
SELECT e.name, d.name, e.salary
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 50000;`
        }
      }
    ]
  },
  {
    id: "aggregates",
    title: { en: "Aggregations & GROUP BY", ka: "დაჯამება და GROUP BY" },
    sections: [
      {
        title: { en: "COUNT, SUM, AVG, MIN, MAX", ka: "COUNT, SUM, AVG, MIN, MAX" },
        code: {
          en: `-- COUNT rows
SELECT COUNT(*) FROM employees;

-- COUNT distinct
SELECT COUNT(DISTINCT department) FROM employees;

-- SUM
SELECT SUM(salary) FROM employees;

-- AVG
SELECT AVG(salary) FROM employees;

-- MIN and MAX
SELECT MIN(salary) as lowest, MAX(salary) as highest FROM employees;

-- All aggregates
SELECT 
  COUNT(*) as total,
  SUM(salary) as total_salary,
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary
FROM employees;`,
          ka: `-- მწკრივების დათვლა
SELECT COUNT(*) FROM employees;

-- გამორჩენილი დათვლა
SELECT COUNT(DISTINCT department) FROM employees;

-- ჯამი
SELECT SUM(salary) FROM employees;

-- საშუალო
SELECT AVG(salary) FROM employees;

-- მინიმუმი და მაქსიმუმი
SELECT MIN(salary) as lowest, MAX(salary) as highest FROM employees;

-- ყველა დაჯამება
SELECT 
  COUNT(*) as total,
  SUM(salary) as total_salary,
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary
FROM employees;`
        }
      },
      {
        title: { en: "GROUP BY & HAVING", ka: "GROUP BY და HAVING" },
        code: {
          en: `-- GROUP BY single column
SELECT department, COUNT(*) as count
FROM employees
GROUP BY department;

-- GROUP BY multiple columns
SELECT department, job_title, COUNT(*) as count
FROM employees
GROUP BY department, job_title;

-- HAVING (filter groups)
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- GROUP BY with ORDER BY
SELECT 
  department, 
  COUNT(*) as count,
  AVG(salary) as avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;`,
          ka: `-- ერთი სვეტის GROUP BY
SELECT department, COUNT(*) as count
FROM employees
GROUP BY department;

-- მრავალი სვეტის GROUP BY
SELECT department, job_title, COUNT(*) as count
FROM employees
GROUP BY department, job_title;

-- HAVING (ჯგუფების ფილტრაცია)
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- GROUP BY ORDER BY-ით
SELECT 
  department, 
  COUNT(*) as count,
  AVG(salary) as avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;`
        }
      }
    ]
  },
  {
    id: "subqueries",
    title: { en: "Subqueries & Advanced", ka: "ქვე-კითხვები და გაფართოებული" },
    sections: [
      {
        title: { en: "Subqueries in WHERE", ka: "ქვე-კითხვები WHERE-ში" },
        code: {
          en: `-- Subquery in WHERE
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT * FROM employees
WHERE department_id IN 
  (SELECT id FROM departments WHERE location = 'NYC');

-- Subquery with EXISTS
SELECT * FROM employees e
WHERE EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);

-- NOT EXISTS
SELECT * FROM employees e
WHERE NOT EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);`,
          ka: `-- ქვე-კითხვა WHERE-ში
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- ქვე-კითხვა IN-ით
SELECT * FROM employees
WHERE department_id IN 
  (SELECT id FROM departments WHERE location = 'NYC');

-- ქვე-კითხვა EXISTS-ით
SELECT * FROM employees e
WHERE EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);

-- NOT EXISTS
SELECT * FROM employees e
WHERE NOT EXISTS (
  SELECT 1 FROM projects p
  WHERE p.employee_id = e.id
);`
        }
      }
    ]
  },
  {
    id: "indexes",
    title: { en: "Indexes & Performance", ka: "ინდექსი და ეფექტიანობა" },
    sections: [
      {
        title: { en: "CREATE & DROP Indexes", ka: "CREATE და DROP ინდექსი" },
        code: {
          en: `-- Create simple index
CREATE INDEX idx_employee_name ON employees(name);

-- Create index on multiple columns
CREATE INDEX idx_dept_salary ON employees(department_id, salary);

-- Create UNIQUE index
CREATE UNIQUE INDEX idx_email ON employees(email);

-- DROP index
DROP INDEX idx_employee_name;

-- View indexes (SQL Server)
SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID('employees');`,
          ka: `-- ინდექსის შექმნა
CREATE INDEX idx_employee_name ON employees(name);

-- მრავალი სვეტის ინდექსი
CREATE INDEX idx_dept_salary ON employees(department_id, salary);

-- უნიკალური ინდექსი
CREATE UNIQUE INDEX idx_email ON employees(email);

-- ინდექსის წაშლა
DROP INDEX idx_employee_name;

-- ინდექსების ხილვა (SQL Server)
SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID('employees');`
        }
      }
    ]
  },
  {
    id: "transactions",
    title: { en: "Transactions & Constraints", ka: "ტრანзაქციები და შეზღუდვები" },
    sections: [
      {
        title: { en: "Transactions & ACID", ka: "ტრანზაქციები და ACID" },
        code: {
          en: `-- Basic transaction
BEGIN TRANSACTION;

UPDATE employees SET salary = 60000 WHERE id = 101;
UPDATE employees SET salary = salary - 5000 WHERE id = 102;

COMMIT;  -- save changes

-- Rollback
BEGIN TRANSACTION;

INSERT INTO employees VALUES (...);
UPDATE employees SET salary = 50000;

ROLLBACK;  -- undo all changes

-- Savepoint
BEGIN TRANSACTION;
INSERT INTO employees VALUES (...);
SAVE TRANSACTION after_insert;
UPDATE employees SET salary = 50000;
ROLLBACK TRANSACTION after_insert;
COMMIT;`,
          ka: `-- ძირითადი ტრანზაქცია
BEGIN TRANSACTION;

UPDATE employees SET salary = 60000 WHERE id = 101;
UPDATE employees SET salary = salary - 5000 WHERE id = 102;

COMMIT;  -- ცვლილების შენახვა

-- დაბრუნება
BEGIN TRANSACTION;

INSERT INTO employees VALUES (...);
UPDATE employees SET salary = 50000;

ROLLBACK;  -- ყველა უკან დაბრუნება

-- შესანიშნები წერტილი
BEGIN TRANSACTION;
INSERT INTO employees VALUES (...);
SAVE TRANSACTION after_insert;
UPDATE employees SET salary = 50000;
ROLLBACK TRANSACTION after_insert;
COMMIT;`
        }
      }
    ]
  }
];

const translations = {
  en: {
    appTitle: "Zero → Hero",
    appSubtitle: "Cheatsheets",
    search: "🔍 Search...",
    noResults: "No results for",
    sections: "sections",
    completeGuide: "Complete Guide",
    topics: "Topics"
  },
  ka: {
    appTitle: "ნული → ჰერო",
    appSubtitle: "საცნობარო",
    search: "🔍 ძებნა...",
    noResults: "შედეგი ნაპოვნი",
    sections: "განყოფილება",
    completeGuide: "სრული გზამკვლელი",
    topics: "თემები"
  }
};

const CodeBlock = ({ code, uiLang }) => {
  const [copied, setCopied] = useState(false);
  const codeText = typeof code === 'object' ? code[uiLang] : code;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };
  return (
    <div className="code-block">
      <button onClick={copy} className={`copy-btn ${copied ? "copied" : ""}`}>
        {copied ? '✓ ' + (uiLang === 'ka' ? 'დაკოპირდა' : 'Copied') : (uiLang === 'ka' ? 'კოპირება' : 'Copy')}
      </button>
      <pre className="code-pre">{codeText}</pre>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState("csharp");
  const [activeTopic, setActiveTopic] = useState("fundamentals");
  const [search, setSearch] = useState("");
  const [uiLang, setUiLang] = useState("en");
  const [topicsOpen, setTopicsOpen] = useState(false);

  const allTopics = lang === "csharp" ? csharpTopics : sqlTopics;
  const currentTopic = allTopics.find(t => t.id === activeTopic);
  
  const getTitle = (titleObj) => titleObj[uiLang] || titleObj.en;
  
  const allSections = allTopics.flatMap(t => 
    t.sections.map(s => ({...s, topicId: t.id, topicTitle: t.title}))
  );
  
  const filtered = search.trim() 
    ? allSections.filter(s => {
        const titleMatch = getTitle(s.title).toLowerCase().includes(search.toLowerCase());
        const codeText = typeof s.code === 'object' ? s.code[uiLang] : s.code;
        const codeMatch = codeText.toLowerCase().includes(search.toLowerCase());
        return titleMatch || codeMatch;
      })
    : null;

  const langData = lang === "csharp" 
    ? { title: "C#", icon: "🧱", color: "#3b82f6" }
    : { title: "SQL", icon: "🗄️", color: "#16a34a" };

  const t = translations[uiLang];

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="title">{t.appTitle}</div>
          <div className="subtitle">{t.appSubtitle}</div>
        </div>

        <div className="lang-tabs">
          {[
            { id: "csharp", title: "C#", icon: "🧱", color: "#3b82f6" },
            { id: "sql", title: "SQL", icon: "🗄️", color: "#16a34a" }
          ].map(l => (
            <button
              key={l.id}
              className={`lang-tab ${l.id === lang ? 'active' : ''}`}
              onClick={() => { setLang(l.id); setSearch(""); setActiveTopic(allTopics[0].id); setTopicsOpen(false); }}
              style={{ ['--topic-color']: l.color }}
            >
              <span className="tab-icon">{l.icon}</span>
              <span className="tab-title">{l.title}</span>
            </button>
          ))}
          <button 
            className={`lang-tab ui-lang-btn ${uiLang === 'ka' ? 'active' : ''}`}
            onClick={() => setUiLang(uiLang === 'en' ? 'ka' : 'en')}
          >
            <span className="tab-icon">{uiLang === 'en' ? '🇬🇧' : '🇬🇪'}</span>
            <span className="tab-title">{uiLang === 'en' ? 'ENG' : 'KA'}</span>
          </button>
        </div>

        <button className={`topics-toggle ${topicsOpen ? 'open' : ''}`} onClick={() => setTopicsOpen(!topicsOpen)}>
          {topicsOpen ? '▼ ' : '▶ '} {t.topics}
        </button>

        {topicsOpen && (
          <div className="topics">
            {allTopics.map(topic => (
              <button
                key={topic.id}
                className={`topic-btn ${activeTopic === topic.id ? 'active' : ''}`}
                onClick={() => { setActiveTopic(topic.id); setTopicsOpen(false); }}
              >
                {getTitle(topic.title)}
              </button>
            ))}
          </div>
        )}

        <div className="topics-desktop">
          {allTopics.map(topic => (
            <button
              key={topic.id}
              className={`topic-btn ${activeTopic === topic.id ? 'active' : ''}`}
              onClick={() => setActiveTopic(topic.id)}
            >
              {getTitle(topic.title)}
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
                  {langData.title} {t.completeGuide}
                </div>
                <div className="current-count">{currentTopic?.sections.length || allSections.length} {t.sections}</div>
              </div>
            </div>
          </div>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t.search}
            className="search-input"
          />
        </div>

        <div className="main-content">
          {filtered ? (
            filtered.length === 0 ? (
              <div className="empty-state">{t.noResults} "{search}"</div>
            ) : (
              filtered.map((s, i) => (
                <div key={i} className="card">
                  <div className="card-topic">{getTitle(s.topicTitle)}</div>
                  <div className="card-title">{getTitle(s.title)}</div>
                  <CodeBlock code={s.code} uiLang={uiLang} />
                </div>
              ))
            )
          ) : (
            <div className="sections-grid">
              {currentTopic?.sections.map((s, i) => (
                <div key={i} className="card">
                  <div className="card-title-small">{getTitle(s.title)}</div>
                  <CodeBlock code={s.code} uiLang={uiLang} />
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
