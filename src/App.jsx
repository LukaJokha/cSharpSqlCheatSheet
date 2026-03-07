import { useState, useEffect } from "react";
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
  },
  {
    id: "db-design",
    title: { en: "DB Design & Normalization", ka: "მონაცემთა ბაზის დაპროექტება და ნორმალიზაცია" },
    sections: [
      {
        title: { en: "Database Design Principles", ka: "მონაცემთა ბაზის დიზაინის პრინციპები" },
        code: {
          en: `-- Good: Normalized design
CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName NVARCHAR(100) NOT NULL,
  Budget DECIMAL(12, 2)
);

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  DepartmentID INT NOT NULL,
  HireDate DATE,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Bad: Denormalized (repetitive data)
CREATE TABLE BadEmployees (
  EmployeeID INT,
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  DepartmentName NVARCHAR(100),  -- Repetitive
  DepartmentBudget DECIMAL(12, 2)  -- Repetitive
);`,
          ka: `-- კარგი: ნორმალიზებული დიზაინი
CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName NVARCHAR(100) NOT NULL,
  Budget DECIMAL(12, 2)
);

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  DepartmentID INT NOT NULL,
  HireDate DATE,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- ცუდი: დე-ნორმალიზებული (განმეორებული მონაცემი)
CREATE TABLE BadEmployees (
  EmployeeID INT,
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  DepartmentName NVARCHAR(100),  -- განმეორებული
  DepartmentBudget DECIMAL(12, 2)  -- განმეორებული
);`
        }
      },
      {
        title: { en: "Normalization Forms (1NF, 2NF, 3NF)", ka: "ნორმალიზაციის ფორმები (1NF, 2NF, 3NF)" },
        code: {
          en: `-- 1NF: Each attribute has atomic values (no repeating groups)
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerName NVARCHAR(100),
  ProductName NVARCHAR(100),  -- Single value
  Quantity INT
);

-- 2NF: Remove partial dependencies (all non-key attrs depend on full key)
CREATE TABLE OrderDetails (
  OrderID INT,
  ProductID INT,
  Quantity INT,
  ProductName NVARCHAR(100),  -- Depends on ProductID, not just OrderID
  PRIMARY KEY (OrderID, ProductID)
);

-- Better 2NF:
CREATE TABLE Products (
  ProductID INT PRIMARY KEY,
  ProductName NVARCHAR(100)
);

CREATE TABLE OrderDetails (
  OrderID INT,
  ProductID INT,
  Quantity INT,
  PRIMARY KEY (OrderID, ProductID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- 3NF: Remove transitive dependencies
CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  EmployeeName NVARCHAR(100),
  DepartmentName NVARCHAR(100),  -- Bad: depends on DeptID
  DepartmentHead NVARCHAR(100)   -- Bad: depends on DeptName
);

-- Better 3NF:
CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName NVARCHAR(100),
  DepartmentHead NVARCHAR(100)
);

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  EmployeeName NVARCHAR(100),
  DepartmentID INT,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);`,
          ka: `-- 1NF: თითოეული ატრიბუტი აქვს ატომური მნიშვნელობები
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerName NVARCHAR(100),
  ProductName NVARCHAR(100),
  Quantity INT
);

-- 2NF: წაშალეთ ნაწილობრივი დამოკიდებულებები
CREATE TABLE Products (
  ProductID INT PRIMARY KEY,
  ProductName NVARCHAR(100)
);

CREATE TABLE OrderDetails (
  OrderID INT,
  ProductID INT,
  Quantity INT,
  PRIMARY KEY (OrderID, ProductID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- 3NF: წაშალეთ გარდამავალი დამოკიდებულებები
CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName NVARCHAR(100),
  DepartmentHead NVARCHAR(100)
);

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  EmployeeName NVARCHAR(100),
  DepartmentID INT,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);`
        }
      }
    ]
  },
  {
    id: "t-sql",
    title: { en: "T-SQL Features", ka: "T-SQL თავისებურებები" },
    sections: [
      {
        title: { en: "T-SQL Variables & Control Flow", ka: "T-SQL ცვლადები და კონტროლი" },
        code: {
          en: `-- Declare variables
DECLARE @name NVARCHAR(100);
DECLARE @age INT;
DECLARE @salary DECIMAL(10, 2) = 50000;

-- SET values
SET @name = 'John';
SET @age = 30;

-- IF ELSE
IF @age >= 21
  PRINT 'Adult'
ELSE
  PRINT 'Minor';

-- WHILE loop
DECLARE @counter INT = 1;
WHILE @counter <= 5
BEGIN
  PRINT 'Count: ' + CAST(@counter AS NVARCHAR(10));
  SET @counter = @counter + 1;
END;

-- CASE
SELECT name,
  CASE 
    WHEN salary > 70000 THEN 'High'
    WHEN salary > 50000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_level
FROM employees;`,
          ka: `-- ცვლადების გამოცხადება
DECLARE @name NVARCHAR(100);
DECLARE @age INT;
DECLARE @salary DECIMAL(10, 2) = 50000;

-- SET სიდიდე
SET @name = 'John';
SET @age = 30;

-- IF ELSE
IF @age >= 21
  PRINT 'ზენი'
ELSE
  PRINT 'small';

-- WHILE цикл
DECLARE @counter INT = 1;
WHILE @counter <= 5
BEGIN
  PRINT 'დაბლოკ: ' + CAST(@counter AS NVARCHAR(10));
  SET @counter = @counter + 1;
END;

-- CASE
SELECT name,
  CASE 
    WHEN salary > 70000 THEN 'მაღალი'
    WHEN salary > 50000 THEN 'საშუალო'
    ELSE 'დაბალი'
  END AS salary_level
FROM employees;`
        }
      },
      {
        title: { en: "Stored Procedures & Functions", ka: "შენახული პროცედურები და ფუნქციები" },
        code: {
          en: `-- Stored Procedure
CREATE PROCEDURE sp_GetEmployeesByDept
  @DeptID INT
AS
BEGIN
  SELECT * FROM employees WHERE department_id = @DeptID;
END;

-- Execute procedure
EXEC sp_GetEmployeesByDept @DeptID = 5;

-- Procedure with OUTPUT parameter
CREATE PROCEDURE sp_GetEmployeeCount
  @DeptID INT,
  @Count INT OUTPUT
AS
BEGIN
  SELECT @Count = COUNT(*) FROM employees WHERE department_id = @DeptID;
END;

-- Use OUTPUT
DECLARE @Result INT;
EXEC sp_GetEmployeeCount @DeptID = 5, @Count = @Result OUTPUT;
PRINT 'Employee Count: ' + CAST(@Result AS NVARCHAR(10));

-- User-Defined Function
CREATE FUNCTION ufn_CalculateBonus(@salary DECIMAL, @percent DECIMAL)
RETURNS DECIMAL
AS
BEGIN
  RETURN @salary * (@percent / 100);
END;

-- Use function
SELECT name, salary, dbo.ufn_CalculateBonus(salary, 10) AS bonus
FROM employees;`,
          ka: `-- შენახული პროცედურა
CREATE PROCEDURE sp_GetEmployeesByDept
  @DeptID INT
AS
BEGIN
  SELECT * FROM employees WHERE department_id = @DeptID;
END;

-- პროცედურის შესრულება
EXEC sp_GetEmployeesByDept @DeptID = 5;

-- პროცედურა OUTPUT პარამეტრით
CREATE PROCEDURE sp_GetEmployeeCount
  @DeptID INT,
  @Count INT OUTPUT
AS
BEGIN
  SELECT @Count = COUNT(*) FROM employees WHERE department_id = @DeptID;
END;

-- OUTPUT გამოყენება
DECLARE @Result INT;
EXEC sp_GetEmployeeCount @DeptID = 5, @Count = @Result OUTPUT;
PRINT 'თანამშრომელთა რაოდენობა: ' + CAST(@Result AS NVARCHAR(10));

-- მომხმარებლის განსაზღვრული ფუნქცია
CREATE FUNCTION ufn_CalculateBonus(@salary DECIMAL, @percent DECIMAL)
RETURNS DECIMAL
AS
BEGIN
  RETURN @salary * (@percent / 100);
END;

-- ფუნქციის გამოყენება
SELECT name, salary, dbo.ufn_CalculateBonus(salary, 10) AS bonus
FROM employees;`
        }
      }
    ]
  },
  {
    id: "indexes",
    title: { en: "Indexes & Performance", ka: "ინდექსები და ზღვრულობა" },
    sections: [
      {
        title: { en: "Creating & Using Indexes", ka: "ინდექსების შექმნა და გამოყენება" },
        code: {
          en: `-- Clustered Index (default on Primary Key)
CREATE CLUSTERED INDEX idx_emp_id 
ON employees(employee_id);

-- Non-clustered Index
CREATE NONCLUSTERED INDEX idx_emp_name 
ON employees(first_name, last_name);

-- Index with Include columns
CREATE NONCLUSTERED INDEX idx_salary_dept
ON employees(department_id)
INCLUDE (salary, hire_date);

-- Unique Index
CREATE UNIQUE NONCLUSTERED INDEX idx_email_unique
ON employees(email);

-- Full-text Index (for text search)
CREATE FULLTEXT INDEX ON documents(content)
KEY INDEX pk_documents;

-- Check existing indexes
SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID('employees');

-- Query execution plan
SET STATISTICS IO ON;
SELECT * FROM employees WHERE salary > 50000;
SET STATISTICS IO OFF;`,
          ka: `-- კლასტერული ინდექსი
CREATE CLUSTERED INDEX idx_emp_id 
ON employees(employee_id);

-- არა-კლასტერული ინდექსი
CREATE NONCLUSTERED INDEX idx_emp_name 
ON employees(first_name, last_name);

-- ინდექსი INCLUDE სვეტებით
CREATE NONCLUSTERED INDEX idx_salary_dept
ON employees(department_id)
INCLUDE (salary, hire_date);

-- უნიკალური ინდექსი
CREATE UNIQUE NONCLUSTERED INDEX idx_email_unique
ON employees(email);

-- სრული ტექსტის ინდექსი
CREATE FULLTEXT INDEX ON documents(content)
KEY INDEX pk_documents;

-- არსებული ინდექსების დანახვა
SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID('employees');

-- შესრულების გეგმა
SET STATISTICS IO ON;
SELECT * FROM employees WHERE salary > 50000;
SET STATISTICS IO OFF;`
        }
      }
    ]
  },
  {
    id: "triggers",
    title: { en: "Triggers", ka: "ტრიგერები" },
    sections: [
      {
        title: { en: "INSERT, UPDATE & DELETE Triggers", ka: "INSERT, UPDATE და DELETE ტრიგერები" },
        code: {
          en: `-- CREATE TRIGGER for INSERT
CREATE TRIGGER tr_log_new_employee
ON employees
AFTER INSERT
AS
BEGIN
  INSERT INTO employee_audit_log (action, employee_id, action_date)
  SELECT 'INSERT', employee_id, GETDATE()
  FROM inserted;
END;

-- UPDATE TRIGGER
CREATE TRIGGER tr_update_salary_history
ON employees
AFTER UPDATE
AS
BEGIN
  IF UPDATE(salary)
    INSERT INTO salary_history (employee_id, old_salary, new_salary, change_date)
    SELECT d.employee_id, d.salary, i.salary, GETDATE()
    FROM deleted d
    INNER JOIN inserted i ON d.employee_id = i.employee_id
    WHERE d.salary <> i.salary;
END;

-- INSTEAD OF TRIGGER (prevents default action)
CREATE TRIGGER tr_prevent_emp_delete
ON employees
INSTEAD OF DELETE
AS
BEGIN
  PRINT 'Cannot delete employees. Archive instead.';
  ROLLBACK TRANSACTION;
END;

-- Disable/Enable Trigger
DISABLE TRIGGER tr_log_new_employee ON employees;
ENABLE TRIGGER tr_log_new_employee ON employees;`,
          ka: `-- INSERT ტრიგერი
CREATE TRIGGER tr_log_new_employee
ON employees
AFTER INSERT
AS
BEGIN
  INSERT INTO employee_audit_log (action, employee_id, action_date)
  SELECT 'INSERT', employee_id, GETDATE()
  FROM inserted;
END;

-- UPDATE ტრიგერი
CREATE TRIGGER tr_update_salary_history
ON employees
AFTER UPDATE
AS
BEGIN
  IF UPDATE(salary)
    INSERT INTO salary_history (employee_id, old_salary, new_salary, change_date)
    SELECT d.employee_id, d.salary, i.salary, GETDATE()
    FROM deleted d
    INNER JOIN inserted i ON d.employee_id = i.employee_id
    WHERE d.salary <> i.salary;
END;

-- INSTEAD OF ტრიგერი
CREATE TRIGGER tr_prevent_emp_delete
ON employees
INSTEAD OF DELETE
AS
BEGIN
  PRINT 'არ შეიძლება თანამშრომელი წაიშალოს.';
  ROLLBACK TRANSACTION;
END;`
        }
      }
    ]
  },
  {
    id: "mongodb",
    title: { en: "NoSQL - MongoDB", ka: "NoSQL - MongoDB" },
    sections: [
      {
        title: { en: "MongoDB Basics", ka: "MongoDB საფუძვლები" },
        code: {
          en: `// MongoDB uses JSON-like documents
db.employees.insertOne({
  _id: ObjectId(),
  name: "John Doe",
  email: "john@example.com",
  department: "IT",
  salary: 60000,
  skills: ["C#", "JavaScript", "SQL"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  createdAt: new Date()
});

// Insert multiple documents
db.employees.insertMany([
  { name: "Alice", department: "HR", salary: 55000 },
  { name: "Bob", department: "IT", salary: 65000 }
]);

// Query documents
db.employees.find({ department: "IT" });
db.employees.find({ salary: { $gt: 50000 } });
db.employees.find({ skills: "C#" });

// Update
db.employees.updateOne(
  { name: "John" },
  { $set: { salary: 70000 } }
);

// Delete
db.employees.deleteOne({ name: "John" });`,
          ka: `// MongoDB იყენებს JSON-ის მსგავს დოკუმენტებს
db.employees.insertOne({
  _id: ObjectId(),
  name: "John Doe",
  email: "john@example.com",
  department: "IT",
  salary: 60000,
  skills: ["C#", "JavaScript", "SQL"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  createdAt: new Date()
});

// მრავალი დოკუმენტის ჩამატება
db.employees.insertMany([
  { name: "Alice", department: "HR", salary: 55000 },
  { name: "Bob", department: "IT", salary: 65000 }
]);

// დოკუმენტების ძებნა
db.employees.find({ department: "IT" });
db.employees.find({ salary: { $gt: 50000 } });
db.employees.find({ skills: "C#" });

// განახლება
db.employees.updateOne(
  { name: "John" },
  { $set: { salary: 70000 } }
);

// წაშლა
db.employees.deleteOne({ name: "John" });`
        }
      }
    ]
  },
  {
    id: "orm-entity",
    title: { en: "ORM - Entity Framework", ka: "ORM - Entity Framework" },
    sections: [
      {
        title: { en: "Entity Framework Core Basics", ka: "Entity Framework Core საფუძვლები" },
        code: {
          en: `// Models
public class Employee
{
  public int EmployeeId { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public decimal Salary { get; set; }
  public int DepartmentId { get; set; }
  
  // Navigation property
  public virtual Department Department { get; set; }
}

public class Department
{
  public int DepartmentId { get; set; }
  public string DepartmentName { get; set; }
  
  public virtual ICollection<Employee> Employees { get; set; }
}

// DbContext
public class CompanyContext : DbContext
{
  public DbSet<Employee> Employees { get; set; }
  public DbSet<Department> Departments { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    options.UseSqlServer("Server=.;Database=Company;Trusted_Connection=true;");
  }
}

// Usage
using (var context = new CompanyContext())
{
  // Create
  var emp = new Employee { FirstName = "John", LastName = "Doe", Salary = 50000 };
  context.Employees.Add(emp);
  context.SaveChanges();
  
  // Read
  var employees = context.Employees.Where(e => e.Salary > 50000).ToList();
  
  // Update
  emp.Salary = 60000;
  context.SaveChanges();
  
  // Delete
  context.Employees.Remove(emp);
  context.SaveChanges();
}`,
          ka: `// მოდელები
public class Employee
{
  public int EmployeeId { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public decimal Salary { get; set; }
  public int DepartmentId { get; set; }
  
  // ნავიგაციის თვისება
  public virtual Department Department { get; set; }
}

public class Department
{
  public int DepartmentId { get; set; }
  public string DepartmentName { get; set; }
  
  public virtual ICollection<Employee> Employees { get; set; }
}

// DbContext
public class CompanyContext : DbContext
{
  public DbSet<Employee> Employees { get; set; }
  public DbSet<Department> Departments { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    options.UseSqlServer("Server=.;Database=Company;Trusted_Connection=true;");
  }
}

// გამოყენება
using (var context = new CompanyContext())
{
  // შექმნა
  var emp = new Employee { FirstName = "John", LastName = "Doe", Salary = 50000 };
  context.Employees.Add(emp);
  context.SaveChanges();
  
  // წაკითხვა
  var employees = context.Employees.Where(e => e.Salary > 50000).ToList();
  
  // განახლება
  emp.Salary = 60000;
  context.SaveChanges();
  
  // წაშლა
  context.Employees.Remove(emp);
  context.SaveChanges();
}`,
        }
      }
    ]
  }
];

const webTopics = [
  {
    id: "web-fundamentals",
    title: { en: "Web Basics", ka: "ვებ საფუძვლები" },
    sections: [
      {
        title: { en: "HTTP & Client-Server", ka: "HTTP და კლიენტ-სერვერი" },
        code: {
          en: `// HTTP Methods
GET    - Retrieve data (safe, idempotent)
POST   - Submit data (creates new resource)
PUT    - Update entire resource
PATCH  - Partial update
DELETE - Remove resource

// HTTP Status Codes
200    - OK (success)
201    - Created
204    - No Content
400    - Bad Request
401    - Unauthorized
403    - Forbidden
404    - Not Found
500    - Internal Server Error

// HTTP Request
GET /api/employees HTTP/1.1
Host: example.com
Authorization: Bearer token123
Content-Type: application/json

// HTTP Response
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 48

{ "id": 1, "name": "John", "salary": 50000 }`,
          ka: `// HTTP მეთოდები
GET    - მონაცემის მიღება
POST   - მონაცემის გაგზავნა
PUT    - სრული განახლება
PATCH  - ნაწილობრივი განახლება
DELETE - რესურსის წაშლა

// HTTP სტატუსის კოდები
200    - კარგი
201    - შექმნილი
400    - ცუდ მოთხოვნა
401    - არა ავტორიზებული
404    - ვერ მოიძებნა
500    - სერვერის შეცდომა

// HTTP მოთხოვნა
GET /api/employees HTTP/1.1
Host: example.com
Authorization: Bearer token123
Content-Type: application/json

// HTTP პასუხი
HTTP/1.1 200 OK
Content-Type: application/json
{ "id": 1, "name": "John", "salary": 50000 }`
        }
      },
      {
        title: { en: "HTML & forms", ka: "HTML და ფორმები" },
        code: {
          en: `<!-- Basic HTML5 Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Form</title>
</head>
<body>
  <h1>Add Employee</h1>
  <form method="POST" action="/employees">
    <input type="text" name="firstName" placeholder="First Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <input type="number" name="salary" placeholder="Salary" required />
    <select name="department">
      <option>IT</option>
      <option>HR</option>
      <option>Sales</option>
    </select>
    <textarea name="notes" rows="4"></textarea>
    <button type="submit">Save</button>
  </form>
</body>
</html>`,
          ka: `<!-- HTML5 სტრუქტურა -->
<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>თანამშრომელი ფორმა</title>
</head>
<body>
  <h1>თანამშრომელი დამატება</h1>
  <form method="POST" action="/employees">
    <input type="text" name="firstName" placeholder="სახელი" required />
    <input type="email" name="email" placeholder="ელფოსტა" required />
    <input type="number" name="salary" placeholder="ხელფასი" required />
    <select name="department">
      <option>IT</option>
      <option>HR</option>
      <option>მარკეტინგი</option>
    </select>
    <textarea name="notes" rows="4"></textarea>
    <button type="submit">შენახვა</button>
  </form>
</body>
</html>`
        }
      }
    ]
  },
  {
    id: "javascript-basics",
    title: { en: "JavaScript Fundamentals", ka: "JavaScript საფუძვლები" },
    sections: [
      {
        title: { en: "Variables, Functions & DOM", ka: "ცვლადები, ფუნქციები და DOM" },
        code: {
          en: `// Variables (var, let, const)
const name = "John";     // Constant
let age = 30;            // Block-scoped variable
var isActive = true;     // Function-scoped (avoid)

// Functions
function greet(name) {
  return "Hello, " + name;
}

// Arrow functions (modern)
const calculateBonus = (salary, percent) => salary * (percent / 100);

// DOM Manipulation
const button = document.querySelector("#submitBtn");
button.addEventListener("click", function() {
  const input = document.getElementById("nameInput");
  console.log("Name:", input.value);
  
  // Create and append elements
  const p = document.createElement("p");
  p.textContent = "Employee added!";
  document.body.appendChild(p);
});

// Fetch API (modern replacement for XMLHttpRequest)
fetch('/api/employees', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Alice", salary: 55000 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`,
          ka: `// ცვლადები
const name = "John";     // მუდმივი
let age = 30;            // ბლოკის ფარი
var isActive = true;     // ფუნქციის ფარი

// ფუნქციები
function greet(name) {
  return "გამარჯობა, " + name;
}

// ისარი ფუნქციები
const calculateBonus = (salary, percent) => salary * (percent / 100);

// DOM მანიპულაცია
const button = document.querySelector("#submitBtn");
button.addEventListener("click", function() {
  const input = document.getElementById("nameInput");
  console.log("სახელი:", input.value);
  
  const p = document.createElement("p");
  p.textContent = "თანამშრომელი დამატებული!";
  document.body.appendChild(p);
});

// Fetch API
fetch('/api/employees', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Alice", salary: 55000 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`
        }
      }
    ]
  },
  {
    id: "aspnet-core",
    title: { en: "ASP.NET Core", ka: "ASP.NET Core" },
    sections: [
      {
        title: { en: "ASP.NET Core API", ka: "ASP.NET Core API" },
        code: {
          en: `// Startup.cs or Startup class
public class Startup
{
  public void ConfigureServices(IServiceCollection services)
  {
    services.AddControllers();
    services.AddDbContext<CompanyContext>();
  }

  public void Configure(IApplicationBuilder app)
  {
    app.UseRouting();
    app.UseEndpoints(endpoints => {
      endpoints.MapControllers();
    });
  }
}

// EmployeesController.cs
[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
  private readonly CompanyContext _context;

  public EmployeesController(CompanyContext context)
  {
    _context = context;
  }

  [HttpGet]
  public ActionResult<IEnumerable<Employee>> GetAll()
  {
    return _context.Employees.ToList();
  }

  [HttpGet("{id}")]
  public ActionResult<Employee> GetById(int id)
  {
    var employee = _context.Employees.Find(id);
    if (employee == null) return NotFound();
    return employee;
  }

  [HttpPost]
  public ActionResult<Employee> Create(Employee emp)
  {
    _context.Employees.Add(emp);
    _context.SaveChanges();
    return CreatedAtAction("GetById", new { id = emp.EmployeeId }, emp);
  }

  [HttpPut("{id}")]
  public IActionResult Update(int id, Employee emp)
  {
    var existing = _context.Employees.Find(id);
    if (existing == null) return NotFound();
    
    existing.FirstName = emp.FirstName;
    existing.Salary = emp.Salary;
    _context.SaveChanges();
    return NoContent();
  }

  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    var emp = _context.Employees.Find(id);
    if (emp == null) return NotFound();
    
    _context.Employees.Remove(emp);
    _context.SaveChanges();
    return NoContent();
  }
}`,
          ka: `// Startup.cs
public class Startup
{
  public void ConfigureServices(IServiceCollection services)
  {
    services.AddControllers();
    services.AddDbContext<CompanyContext>();
  }

  public void Configure(IApplicationBuilder app)
  {
    app.UseRouting();
    app.UseEndpoints(endpoints => {
      endpoints.MapControllers();
    });
  }
}

// EmployeesController.cs
[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
  private readonly CompanyContext _context;

  public EmployeesController(CompanyContext context)
  {
    _context = context;
  }

  [HttpGet]
  public ActionResult<IEnumerable<Employee>> GetAll()
  {
    return _context.Employees.ToList();
  }

  [HttpPost]
  public ActionResult<Employee> Create(Employee emp)
  {
    _context.Employees.Add(emp);
    _context.SaveChanges();
    return CreatedAtAction("GetById", new { id = emp.EmployeeId }, emp);
  }

  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    var emp = _context.Employees.Find(id);
    if (emp == null) return NotFound();
    
    _context.Employees.Remove(emp);
    _context.SaveChanges();
    return NoContent();
  }
}`
        }
      }
    ]
  },
  {
    id: "design-patterns",
    title: { en: "Design Patterns", ka: "დიზაინის პატერნები" },
    sections: [
      {
        title: { en: "MVC, Repository & Dependency Injection", ka: "MVC, Repository და Dependency Injection" },
        code: {
          en: `// Repository Pattern
public interface IEmployeeRepository
{
  IEnumerable<Employee> GetAll();
  Employee GetById(int id);
  void Add(Employee emp);
  void Delete(int id);
}

public class EmployeeRepository : IEmployeeRepository
{
  private readonly CompanyContext _context;
  
  public EmployeeRepository(CompanyContext context)
  {
    _context = context;
  }
  
  public IEnumerable<Employee> GetAll() => _context.Employees.ToList();
  public Employee GetById(int id) => _context.Employees.Find(id);
  
  public void Add(Employee emp)
  {
    _context.Employees.Add(emp);
    _context.SaveChanges();
  }
  
  public void Delete(int id)
  {
    var emp = GetById(id);
    if (emp != null)
    {
      _context.Employees.Remove(emp);
      _context.SaveChanges();
    }
  }
}

// Service Layer
public class EmployeeService
{
  private readonly IEmployeeRepository _repository;
  
  public EmployeeService(IEmployeeRepository repository)
  {
    _repository = repository;
  }
  
  public decimal CalculateAnnualBonus(int empId, decimal bonusPercent)
  {
    var emp = _repository.GetById(empId);
    return emp.Salary * (bonusPercent / 100);
  }
}

// Dependency Injection Setup
services.AddScoped<IEmployeeRepository, EmployeeRepository>();
services.AddScoped<EmployeeService>();`,
          ka: `// Repository პატერნი
public interface IEmployeeRepository
{
  IEnumerable<Employee> GetAll();
  Employee GetById(int id);
  void Add(Employee emp);
  void Delete(int id);
}

public class EmployeeRepository : IEmployeeRepository
{
  private readonly CompanyContext _context;
  
  public EmployeeRepository(CompanyContext context)
  {
    _context = context;
  }
  
  public IEnumerable<Employee> GetAll() => _context.Employees.ToList();
  public Employee GetById(int id) => _context.Employees.Find(id);
  
  public void Add(Employee emp)
  {
    _context.Employees.Add(emp);
    _context.SaveChanges();
  }
  
  public void Delete(int id)
  {
    var emp = GetById(id);
    if (emp != null)
    {
      _context.Employees.Remove(emp);
      _context.SaveChanges();
    }
  }
}

// Service დონე
public class EmployeeService
{
  private readonly IEmployeeRepository _repository;
  
  public EmployeeService(IEmployeeRepository repository)
  {
    _repository = repository;
  }
  
  public decimal CalculateAnnualBonus(int empId, decimal bonusPercent)
  {
    var emp = _repository.GetById(empId);
    return emp.Salary * (bonusPercent / 100);
  }
}

// Dependency Injection
services.AddScoped<IEmployeeRepository, EmployeeRepository>();`
        }
      }
    ]
  }
];

const projectTopics = [
  {
    id: "library-system",
    title: { en: "Library Management System", ka: "ბიბლიოთეკის მართვის სისტემა" },
    sections: [
      {
        title: { en: "Complete Full-Stack Implementation", ka: "სრული Full-Stack განხორციელება" },
        code: {
          en: `// === DATABASE SCHEMA (T-SQL) ===
CREATE TABLE Books (
  BookID INT PRIMARY KEY IDENTITY(1,1),
  Title NVARCHAR(200) NOT NULL,
  Author NVARCHAR(100),
  ISBN NVARCHAR(13) UNIQUE,
  PublishedYear INT,
  Quantity INT,
  CreatedDate DATETIME DEFAULT GETDATE()
);

CREATE TABLE Members (
  MemberID INT PRIMARY KEY IDENTITY(1,1),
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  Email NVARCHAR(100) UNIQUE,
  Phone NVARCHAR(20),
  MembershipDate DATETIME DEFAULT GETDATE()
);

CREATE TABLE Borrowings (
  BorrowingID INT PRIMARY KEY IDENTITY(1,1),
  BookID INT NOT NULL,
  MemberID INT NOT NULL,
  BorrowDate DATETIME DEFAULT GETDATE(),
  ReturnDate DATETIME,
  DueDate DATETIME,
  Status NVARCHAR(20),
  FOREIGN KEY (BookID) REFERENCES Books(BookID),
  FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
);

-- === STORED PROCEDURES ===
CREATE PROCEDURE sp_BorrowBook
  @BookID INT,
  @MemberID INT,
  @BorrowDays INT = 14
AS
BEGIN
  BEGIN TRANSACTION;
  
  IF (SELECT Quantity FROM Books WHERE BookID = @BookID) > 0
  BEGIN
    UPDATE Books SET Quantity = Quantity - 1 WHERE BookID = @BookID;
    
    INSERT INTO Borrowings (BookID, MemberID, DueDate, Status)
    VALUES (@BookID, @MemberID, DATEADD(DAY, @BorrowDays, GETDATE()), 'Borrowed');
    
    COMMIT TRANSACTION;
  END
  ELSE
  BEGIN
    ROLLBACK TRANSACTION;
    RAISERROR('Book not available', 16, 1);
  END;
END;

CREATE PROCEDURE sp_ReturnBook
  @BorrowingID INT
AS
BEGIN
  UPDATE Borrowings SET ReturnDate = GETDATE(), Status = 'Returned'
  WHERE BorrowingID = @BorrowingID;
  
  UPDATE Books SET Quantity = Quantity + 1
  WHERE BookID = (SELECT BookID FROM Borrowings WHERE BorrowingID = @BorrowingID);
END;

-- === C# MODELS & DATABASE CONTEXT ===
public class Book
{
  public int BookID { get; set; }
  public string Title { get; set; }
  public string Author { get; set; }
  public string ISBN { get; set; }
  public int PublishedYear { get; set; }
  public int Quantity { get; set; }
  public virtual ICollection<Borrowing> Borrowings { get; set; }
}

public class Member
{
  public int MemberID { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public string Email { get; set; }
  public string Phone { get; set; }
  public virtual ICollection<Borrowing> Borrowings { get; set; }
}

public class Borrowing
{
  public int BorrowingID { get; set; }
  public int BookID { get; set; }
  public int MemberID { get; set; }
  public DateTime BorrowDate { get; set; }
  public DateTime? ReturnDate { get; set; }
  public DateTime DueDate { get; set; }
  public string Status { get; set; }
  public virtual Book Book { get; set; }
  public virtual Member Member { get; set; }
}

public class LibraryContext : DbContext
{
  public DbSet<Book> Books { get; set; }
  public DbSet<Member> Members { get; set; }
  public DbSet<Borrowing> Borrowings { get; set; }
}

// === ASP.NET CORE CONTROLLER ===
[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
  private readonly LibraryContext _context;
  
  [HttpGet]
  public ActionResult<IEnumerable<Book>> GetBooks()
  {
    return _context.Books.ToList();
  }
  
  [HttpPost("borrow")]
  public IActionResult BorrowBook(int bookId, int memberId)
  {
    var book = _context.Books.Find(bookId);
    if (book?.Quantity <= 0) return BadRequest("Book not available");
    
    book.Quantity--;
    var borrowing = new Borrowing
    {
      BookID = bookId,
      MemberID = memberId,
      DueDate = DateTime.Now.AddDays(14),
      Status = "Borrowed"
    };
    _context.Borrowings.Add(borrowing);
    _context.SaveChanges();
    return Ok(borrowing);
  }
}

// === JAVASCRIPT FRONTEND ===
async function borrowBook(bookId, memberId) {
  const response = await fetch('/api/books/borrow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bookId, memberId })
  });
  
  if (response.ok) {
    alert('Book borrowed successfully!');
    loadBooks();
  }
}

async function loadBooks() {
  const books = await fetch('/api/books').then(r => r.json());
  const html = books.map(b => \\\`
    <div class="book-card">
      <h3>\${b.title}</h3>
      <p>Author: \${b.author}</p>
      <p>Available: \${b.quantity}</p>
      <button onclick="showBorrowForm(\${b.bookID})">Borrow</button>
    </div>
  \\\`).join('');
  document.getElementById('books-container').innerHTML = html;
}`,
          ka: `// === DATABASE SCHEMA (T-SQL) ===
CREATE TABLE Books (
  BookID INT PRIMARY KEY IDENTITY(1,1),
  Title NVARCHAR(200) NOT NULL,
  Author NVARCHAR(100),
  ISBN NVARCHAR(13) UNIQUE,
  PublishedYear INT,
  Quantity INT
);

CREATE TABLE Members (
  MemberID INT PRIMARY KEY IDENTITY(1,1),
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  Email NVARCHAR(100),
  Phone NVARCHAR(20)
);

CREATE TABLE Borrowings (
  BorrowingID INT PRIMARY KEY IDENTITY(1,1),
  BookID INT NOT NULL,
  MemberID INT NOT NULL,
  BorrowDate DATETIME DEFAULT GETDATE(),
  ReturnDate DATETIME,
  DueDate DATETIME,
  Status NVARCHAR(20),
  FOREIGN KEY (BookID) REFERENCES Books(BookID),
  FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
);

-- === STORED PROCEDURES ===
CREATE PROCEDURE sp_BorrowBook
  @BookID INT,
  @MemberID INT
AS
BEGIN
  BEGIN TRANSACTION;
  
  IF (SELECT Quantity FROM Books WHERE BookID = @BookID) > 0
  BEGIN
    UPDATE Books SET Quantity = Quantity - 1 WHERE BookID = @BookID;
    
    INSERT INTO Borrowings (BookID, MemberID, DueDate, Status)
    VALUES (@BookID, @MemberID, DATEADD(DAY, 14, GETDATE()), 'Borrowed');
    
    COMMIT TRANSACTION;
  END
  ELSE
  BEGIN
    ROLLBACK TRANSACTION;
  END;
END;

// === C# MODELS ===
public class Book
{
  public int BookID { get; set; }
  public string Title { get; set; }
  public string Author { get; set; }
  public int Quantity { get; set; }
}

public class Member
{
  public int MemberID { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
}

// === ASP.NET CORE API ===
[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
  private readonly LibraryContext _context;
  
  [HttpGet]
  public ActionResult<IEnumerable<Book>> GetBooks()
  {
    return _context.Books.ToList();
  }
  
  [HttpPost("borrow")]
  public IActionResult BorrowBook(int bookId, int memberId)
  {
    var book = _context.Books.Find(bookId);
    if (book?.Quantity <= 0) return BadRequest("ხელმისაწვდომელი არ არის");
    
    book.Quantity--;
    _context.SaveChanges();
    return Ok(book);
  }
}

// === JAVASCRIPT FRONTEND ===
async function borrowBook(bookId, memberId) {
  const response = await fetch('/api/books/borrow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bookId, memberId })
  });
  
  if (response.ok) {
    alert('წიგნი წაღებულია!');
  }
}`
        }
      }
    ]
  },
  {
    id: "warehouse-system",
    title: { en: "Warehouse Automation System", ka: "საწყობის ავტომატიზაციის სისტემა" },
    sections: [
      {
        title: { en: "Complete Implementation with DML, DDL & Transactions", ka: "სრული განხორციელება ტრანზაქციებთან" },
        code: {
          en: `-- === WAREHOUSE DATABASE ===
CREATE TABLE Products (
  ProductID INT PRIMARY KEY IDENTITY(1,1),
  ProductName NVARCHAR(100),
  SKU NVARCHAR(50) UNIQUE,
  UnitPrice DECIMAL(10, 2),
  StockQuantity INT
);

CREATE TABLE Warehouses (
  WarehouseID INT PRIMARY KEY IDENTITY(1,1),
  WarehouseName NVARCHAR(100),
  Location NVARCHAR(200),
  Capacity INT
);

CREATE TABLE Stock (
  StockID INT PRIMARY KEY IDENTITY(1,1),
  WarehouseID INT,
  ProductID INT,
  Quantity INT,
  LastUpdated DATETIME,
  FOREIGN KEY (WarehouseID) REFERENCES Warehouses(WarehouseID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- === TRANSACTION: Move Stock ===
CREATE PROCEDURE sp_TransferStock
  @FromWarehouseID INT,
  @ToWarehouseID INT,
  @ProductID INT,
  @Quantity INT
AS
BEGIN
  BEGIN TRANSACTION;
  
  BEGIN TRY
    -- Deduct from source
    UPDATE Stock SET Quantity = Quantity - @Quantity
    WHERE WarehouseID = @FromWarehouseID AND ProductID = @ProductID;
    
    -- Add to destination
    UPDATE Stock SET Quantity = Quantity + @Quantity
    WHERE WarehouseID = @ToWarehouseID AND ProductID = @ProductID;
    
    COMMIT TRANSACTION;
  END TRY
  BEGIN CATCH
    ROLLBACK TRANSACTION;
    THROW;
  END CATCH;
END;

-- === C# WAREHOUSE SERVICE ===
public class WarehouseService
{
  private readonly IStockRepository _stockRepo;
  
  public async Task<bool> TransferStockAsync(int fromWarehouse, int toWarehouse, int product, int quantity)
  {
    using (var transaction = _context.Database.BeginTransaction())
    {
      try
      {
        var fromStock = _stockRepo.GetStock(fromWarehouse, product);
        if (fromStock.Quantity < quantity) return false;
        
        fromStock.Quantity -= quantity;
        var toStock = _stockRepo.GetStock(toWarehouse, product);
        toStock.Quantity += quantity;
        
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
        return true;
      }
      catch
      {
        await transaction.RollbackAsync();
        return false;
      }
    }
  }
  
  public decimal CalculateWarehouseValue(int warehouseID)
  {
    var stocks = _context.Stock
      .Where(s => s.WarehouseID == warehouseID)
      .Include(s => s.Product)
      .ToList();
    
    return stocks.Sum(s => s.Quantity * s.Product.UnitPrice);
  }
}

// === ASP.NET API ===
[ApiController]
[Route("api/warehouse")]
public class WarehouseController : ControllerBase
{
  private readonly WarehouseService _service;
  
  [HttpPost("transfer")]
  public async Task<IActionResult> TransferStock(int from, int to, int product, int qty)
  {
    var success = await _service.TransferStockAsync(from, to, product, qty);
    return success ? Ok("Transfer successful") : BadRequest("Insufficient stock");
  }
  
  [HttpGet("{id}/value")]
  public ActionResult<decimal> GetWarehouseValue(int id)
  {
    return _service.CalculateWarehouseValue(id);
  }
}`,
          ka: `-- === საწყობის ბაზა ===
CREATE TABLE Products (
  ProductID INT PRIMARY KEY IDENTITY(1,1),
  ProductName NVARCHAR(100),
  SKU NVARCHAR(50) UNIQUE,
  UnitPrice DECIMAL(10, 2),
  StockQuantity INT
);

CREATE TABLE Warehouses (
  WarehouseID INT PRIMARY KEY IDENTITY(1,1),
  WarehouseName NVARCHAR(100),
  Location NVARCHAR(200)
);

CREATE TABLE Stock (
  StockID INT PRIMARY KEY IDENTITY(1,1),
  WarehouseID INT,
  ProductID INT,
  Quantity INT,
  LastUpdated DATETIME,
  FOREIGN KEY (WarehouseID) REFERENCES Warehouses(WarehouseID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- === TRANSACTION: Stock გადატანა ===
CREATE PROCEDURE sp_TransferStock
  @FromWarehouseID INT,
  @ToWarehouseID INT,
  @ProductID INT,
  @Quantity INT
AS
BEGIN
  BEGIN TRANSACTION;
  
  BEGIN TRY
    UPDATE Stock SET Quantity = Quantity - @Quantity
    WHERE WarehouseID = @FromWarehouseID AND ProductID = @ProductID;
    
    UPDATE Stock SET Quantity = Quantity + @Quantity
    WHERE WarehouseID = @ToWarehouseID AND ProductID = @ProductID;
    
    COMMIT TRANSACTION;
  END TRY
  BEGIN CATCH
    ROLLBACK TRANSACTION;
  END CATCH;
END;

// === C# SERVICE ===
public class WarehouseService
{
  public async Task<bool> TransferStockAsync(int fromWarehouse, int toWarehouse, int product, int quantity)
  {
    using (var transaction = _context.Database.BeginTransaction())
    {
      try
      {
        var fromStock = _context.Stock.FirstOrDefault(s => 
          s.WarehouseID == fromWarehouse && s.ProductID == product);
        if (fromStock?.Quantity < quantity) return false;
        
        fromStock.Quantity -= quantity;
        var toStock = _context.Stock.FirstOrDefault(s => 
          s.WarehouseID == toWarehouse && s.ProductID == product);
        toStock.Quantity += quantity;
        
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
        return true;
      }
      catch { await transaction.RollbackAsync(); return false; }
    }
  }
}

// === API ===
[ApiController]
[Route("api/warehouse")]
public class WarehouseController : ControllerBase
{
  [HttpPost("transfer")]
  public async Task<IActionResult> TransferStock(int from, int to, int product, int qty)
  {
    var success = await _service.TransferStockAsync(from, to, product, qty);
    return success ? Ok("წარმატებული") : BadRequest("არ არის საკმარი");
  }
}`
        }
      }
    ]
  },
  {
    id: "ecommerce-system",
    title: { en: "E-Commerce Management System", ka: "ელექტრონული ვაჭრობის სისტემა" },
    sections: [
      {
        title: { en: "Full E-Commerce Implementation", ka: "სრული E-Commerce განხორციელება" },
        code: {
          en: `-- === DATABASE SCHEMA ===
CREATE TABLE Products (
  ProductID INT PRIMARY KEY IDENTITY(1,1),
  ProductName NVARCHAR(200),
  Description NVARCHAR(MAX),
  Price DECIMAL(10, 2),
  Stock INT,
  CategoryID INT
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY IDENTITY(1,1),
  CustomerID INT,
  OrderDate DATETIME,
  TotalAmount DECIMAL(12, 2),
  Status NVARCHAR(50),
  ShippingAddress NVARCHAR(300)
);

CREATE TABLE OrderItems (
  OrderItemID INT PRIMARY KEY IDENTITY(1,1),
  OrderID INT,
  ProductID INT,
  Quantity INT,
  UnitPrice DECIMAL(10, 2),
  Subtotal DECIMAL(12, 2),
  FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY IDENTITY(1,1),
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  Email NVARCHAR(100) UNIQUE,
  Phone NVARCHAR(20),
  CreatedDate DATETIME
);

-- === STORED PROCEDURE: CREATE ORDER ===
CREATE PROCEDURE sp_CreateOrder
  @CustomerID INT,
  @ShippingAddress NVARCHAR(300),
  @OrderItemsXML XML
AS
BEGIN
  BEGIN TRANSACTION;
  
  BEGIN TRY
    DECLARE @OrderID INT;
    DECLARE @TotalAmount DECIMAL(12, 2) = 0;
    
    -- Create order
    INSERT INTO Orders (CustomerID, OrderDate, Status, ShippingAddress)
    VALUES (@CustomerID, GETDATE(), 'Pending', @ShippingAddress);
    
    SET @OrderID = SCOPE_IDENTITY();
    
    -- Insert order items
    INSERT INTO OrderItems (OrderID, ProductID, Quantity, UnitPrice, Subtotal)
    SELECT 
      @OrderID,
      t.value('(ProductID)[1]', 'INT'),
      t.value('(Quantity)[1]', 'INT'),
      p.Price,
      t.value('(Quantity)[1]', 'INT') * p.Price
    FROM @OrderItemsXML.nodes('Items/Item') AS x(t)
    JOIN Products p ON p.ProductID = t.value('(ProductID)[1]', 'INT');
    
    -- Update total
    UPDATE Orders SET TotalAmount = (SELECT SUM(Subtotal) FROM OrderItems WHERE OrderID = @OrderID)
    WHERE OrderID = @OrderID;
    
    -- Update stock
    UPDATE Products SET Stock = Stock - oi.Quantity
    FROM OrderItems oi
    WHERE oi.OrderID = @OrderID AND Products.ProductID = oi.ProductID;
    
    COMMIT TRANSACTION;
    SELECT @OrderID AS OrderID;
  END TRY
  BEGIN CATCH
    ROLLBACK TRANSACTION;
    THROW;
  END CATCH;
END;

-- === C# ECOMMERCE SERVICE ===
public class OrderService
{
  private readonly IOrderRepository _orderRepo;
  private readonly IProductRepository _productRepo;
  
  public async Task<Order> CreateOrderAsync(Order order)
  {
    using (var transaction = _context.Database.BeginTransaction())
    {
      try
      {
        decimal total = 0;
        
        foreach (var item in order.OrderItems)
        {
          var product = await _productRepo.GetByIdAsync(item.ProductID);
          if (product.Stock < item.Quantity)
            throw new InvalidOperationException("Insufficient stock");
          
          item.UnitPrice = product.Price;
          item.Subtotal = item.Quantity * product.Price;
          total += item.Subtotal;
          
          product.Stock -= item.Quantity;
        }
        
        order.TotalAmount = total;
        order.OrderDate = DateTime.Now;
        order.Status = "Pending";
        
        _context.Orders.Add(order);
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
        
        return order;
      }
      catch
      {
        await transaction.RollbackAsync();
        throw;
      }
    }
  }
  
  public async Task<bool> UpdateOrderStatusAsync(int orderId, string newStatus)
  {
    var order = await _orderRepo.GetByIdAsync(orderId);
    if (order == null) return false;
    
    order.Status = newStatus;
    await _context.SaveChangesAsync();
    return true;
  }
}

// === ASPNET API ===
[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
  [HttpPost]
  public async Task<ActionResult<Order>> CreateOrder(CreateOrderRequest req)
  {
    var order = new Order
    {
      CustomerID = req.CustomerID,
      ShippingAddress = req.Address,
      OrderItems = req.Items.Select(i => new OrderItem { ProductID = i.ProductID, Quantity = i.Quantity }).ToList()
    };
    
    var created = await _orderService.CreateOrderAsync(order);
    return CreatedAtAction("GetOrder", new { id = created.OrderID }, created);
  }
  
  [HttpGet("{id}")]
  public async Task<ActionResult<Order>> GetOrder(int id)
  {
    var order = await _orderService.GetOrderWithItemsAsync(id);
    return order ?? NotFound();
  }
}

// === REACT FRONTEND ===
function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  const addToCart = (product) => {
    setCart([...cart, { ...product, qty: 1 }]);
  };
  
  const checkout = async () => {
    const order = {
      customerID: currentUser.id,
      address: shippingAddress,
      items: cart.map(item => ({ productID: item.id, quantity: item.qty }))
    };
    
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
    
    if (response.ok) {
      const created = await response.json();
      alert(\`Order \${created.orderID} created!\`);
      setCart([]);
    }
  };
  
  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.productName}</h3>
          <p>Price: \${item.price}</p>
          <input type="number" value={item.qty} />
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}`,
          ka: `-- === ელექტრონული ვაჭრობის ბაზა ===
CREATE TABLE Products (
  ProductID INT PRIMARY KEY IDENTITY(1,1),
  ProductName NVARCHAR(200),
  Price DECIMAL(10, 2),
  Stock INT
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY IDENTITY(1,1),
  CustomerID INT,
  OrderDate DATETIME,
  TotalAmount DECIMAL(12, 2),
  Status NVARCHAR(50)
);

CREATE TABLE OrderItems (
  OrderItemID INT PRIMARY KEY IDENTITY(1,1),
  OrderID INT,
  ProductID INT,
  Quantity INT,
  Subtotal DECIMAL(12, 2),
  FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- === ORDER PROCEDURE ===
CREATE PROCEDURE sp_CreateOrder
  @CustomerID INT,
  @OrderItemsXML XML
AS
BEGIN
  BEGIN TRANSACTION;
  
  BEGIN TRY
    DECLARE @OrderID INT;
    INSERT INTO Orders (CustomerID, OrderDate, Status)
    VALUES (@CustomerID, GETDATE(), 'Pending');
    
    SET @OrderID = SCOPE_IDENTITY();
    
    INSERT INTO OrderItems (OrderID, ProductID, Quantity, Subtotal)
    SELECT @OrderID, id, qty, qty * price FROM ...;
    
    UPDATE Products SET Stock = Stock - qty WHERE ...; 
    COMMIT TRANSACTION;
  END TRY
  BEGIN CATCH
    ROLLBACK TRANSACTION;
  END CATCH;
END;

// === C# SERVICE ===
public class OrderService
{
  public async Task<Order> CreateOrderAsync(Order order)
  {
    using (var transaction = _context.Database.BeginTransaction())
    {
      try
      {
        order.OrderDate = DateTime.Now;
        order.Status = "Pending";
        _context.Orders.Add(order);
        
        foreach (var item in order.OrderItems)
        {
          var product = _context.Products.Find(item.ProductID);
          product.Stock -= item.Quantity;
        }
        
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
        return order;
      }
      catch { await transaction.RollbackAsync(); throw; }
    }
  }
}

// === ASP.NET API ===
[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
  [HttpPost]
  public async Task<ActionResult<Order>> CreateOrder(Order order)
  {
    var created = await _orderService.CreateOrderAsync(order);
    return Ok(created);
  }
}

// === REACT ===
async function checkout(cart) {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ customerID: 1, items: cart })
  });
  
  if (response.ok) alert('შეკვეთა შემოსულია!');
}`
        }
      }
    ]
  },
  {
    id: "docker",
    title: { en: "Docker & DevOps", ka: "Docker და DevOps" },
    sections: [
      {
        title: { en: "Docker Basics", ka: "Docker საფუძვლები" },
        code: {
          en: `# Dockerfile for ASP.NET Core API
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CompanyAPI.csproj", ""]
RUN dotnet restore "CompanyAPI.csproj"
COPY . .
RUN dotnet build "CompanyAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CompanyAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CompanyAPI.dll"]

# docker-compose.yml
version: '3'
services:
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      SA_PASSWORD: "YourPassword123!"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433"
    volumes:
      - sqlserver_volume:/var/opt/mssql

  api:
    build: .
    ports:
      - "5000:5000"
    environment:
      ConnectionStrings__DefaultConnection: "Server=sqlserver;Database=Company;User Id=sa;Password=YourPassword123!"
    depends_on:
      - sqlserver

volumes:
  sqlserver_volume:

# Build and run
docker-compose up --build
docker-compose down`,
          ka: `# Dockerfile ASP.NET Core API-სთვის
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CompanyAPI.csproj", ""]
RUN dotnet restore "CompanyAPI.csproj"
COPY . .
RUN dotnet build "CompanyAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CompanyAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CompanyAPI.dll"]

# docker-compose.yml
version: '3'
services:
  database:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      SA_PASSWORD: "YourPassword123!"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433

  api:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - database

# შესრულება
docker-compose up --build`
        }
      }
    ]
  },
  {
    id: "git-github",
    title: { en: "Git & GitHub", ka: "Git და GitHub" },
    sections: [
      {
        title: { en: "Git Basics & Workflow", ka: "Git საფუძვლები და სამუშაო ნაკადი" },
        code: {
          en: `# Initialize repository
git init
git config user.name "Your Name"
git config user.email "email@example.com"

# Add and commit
git add .
git commit -m "Initial commit"

# Branching
git branch feature/new-feature
git checkout feature/new-feature
git checkout -b feature/another  # create and switch

# Push to GitHub
git remote add origin https://github.com/user/repo.git
git branch -M main
git push -u origin main

# Pull changes
git pull origin main

# Merge branch
git checkout main
git merge feature/new-feature

# View log
git log --oneline
git log --graph --all --decorate

# Undo changes
git revert HEAD
git reset --hard HEAD~1
git stash

# Tag release
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0`,
          ka: `# რეპოზიტორი ინიციალიზაცია
git init
git config user.name "თქვენი სახელი"
git config user.email "email@example.com"

# დამატება და კომიტი
git add .
git commit -m "პირველი კომიტი"

# ტოტი (Branch)
git branch feature/new-feature
git checkout feature/new-feature
git checkout -b feature/another

# GitHub-ზე დაწკაპვა
git remote add origin https://github.com/user/repo.git
git branch -M main
git push -u origin main

# ცვლილებების მიღება
git pull origin main

# ტოტის დაზღვევა
git checkout main
git merge feature/new-feature

# ისტორიის ხედვა
git log --oneline
git log --graph --all --decorate

# ცვლილებების უკან დაბრუნება
git revert HEAD
git reset --hard HEAD~1
git stash`
        }
      }
    ]
  }
];

const pythonOOPTopics = [
  {
    id: "python-oop-basics",
    title: { en: "Python OOP Fundamentals", ka: "Python OOP საფუძვლები" },
    sections: [
      {
        title: { en: "Classes & Objects - Your First Class", ka: "კლასები და ობიექტები - თქვენი პირველი კლასი" },
        code: {
          en: `# Define a class - like a blueprint
class Student:
  # Constructor - runs when creating new object
  def __init__(self, name, grade):
    self.name = name  # self. = instance variable
    self.grade = grade

  # Method - function inside a class
  def greet(self):
    return f"Hello, I'm {self.name}"

  def get_grade(self):
    return f"My grade is {self.grade}"

# Create objects (instances) from the class
student1 = Student("Alice", "A")
student2 = Student("Bob", "B")

# Access object attributes
print(student1.name)  # Output: Alice

# Call object methods
print(student1.greet())  # Output: Hello, I'm Alice
print(student1.get_grade())  # Output: My grade is A`,
          ka: `# კლასის განსაზღვრა - შაბლონის მსგავსი
class Student:
  # კონსტრუქტორი - ეშვება ახალი ობიექტის შექმნისას
  def __init__(self, name, grade):
    self.name = name  # self. = ობიექტის ცვლადი
    self.grade = grade

  # მეთოდი - ფუნქცია კლასის შიგნით
  def greet(self):
    return f"გამარჯობა, მე ვარი {self.name}"

  def get_grade(self):
    return f"ჩემი შეფასება {self.grade}"

# ობიექტები შექმნა კლასიდან
student1 = Student("Alice", "A")
student2 = Student("Bob", "B")

# ობიექტის ატრიბუტებზე წვდომა
print(student1.name)  # Output: Alice

# მეთოდების გამოძახება
print(student1.greet())  # Output: გამარჯობა, მე ვარი Alice
print(student1.get_grade())  # Output: ჩემი შეფასება A`
        }
      },
      {
        title: { en: "Instance vs Class Variables", ka: "ობიექტის ცვლადი vs კლასის ცვლადი" },
        code: {
          en: `class Car:
  # Class variable - shared by ALL objects
  total_cars = 0

  def __init__(self, brand, model):
    # Instance variables - unique to each object
    self.brand = brand
    self.model = model
    
    # Increment class variable
    Car.total_cars += 1

  def info(self):
    return f"{self.brand} {self.model}"

# Create objects
car1 = Car("Toyota", "Camry")
car2 = Car("Honda", "Civic")
car3 = Car("Ford", "Mustang")

# Instance variables are different for each object
print(car1.brand)  # Toyota
print(car2.brand)  # Honda

# Class variable is shared
print(Car.total_cars)  # 3
print(car1.total_cars)  # 3 (also accessible via instance)`,
          ka: `class Car:
  # კლასის ცვლადი - ყველა ობიექტს შორის საერთო
  total_cars = 0

  def __init__(self, brand, model):
    # ობიექტის ცვლადი - თითოეული ობიექტისთვის უნიკალური
    self.brand = brand
    self.model = model
    
    # კლასის ცვლადის გაზრდა
    Car.total_cars += 1

  def info(self):
    return f"{self.brand} {self.model}"

# ობიექტის შექმნა
car1 = Car("Toyota", "Camry")
car2 = Car("Honda", "Civic")
car3 = Car("Ford", "Mustang")

# ობიექტის ცვლადი სხვადსხვა თითოეული ობიექტისთვის
print(car1.brand)  # Toyota
print(car2.brand)  # Honda

# კლასის ცვლადი ყველა ერთი
print(Car.total_cars)  # 3
print(car1.total_cars)  # 3`
        }
      },
      {
        title: { en: "Encapsulation - Protect Your Data", ka: "ინკაპსულაცია - თქვენი მონაცემის დაცვა" },
        code: {
          en: `class BankAccount:
  def __init__(self, account_holder, balance):
    self.account_holder = account_holder
    # Private variables - use _ prefix by convention
    self.__balance = balance  # __ makes it harder to access

  # Getter - safe way to read private data
  def get_balance(self):
    return self.__balance

  # Setter - safe way to modify private data
  def deposit(self, amount):
    if amount > 0:
      self.__balance += amount
      print(f"Deposited {amount}")
    else:
      print("Amount must be positive")

  def withdraw(self, amount):
    if 0 < amount <= self.__balance:
      self.__balance -= amount
      print(f"Withdrew {amount}")
    else:
      print("Invalid amount")

# Create account
account = BankAccount("Alice", 1000)
print(account.get_balance())  # Output: 1000

# Use safe methods
account.deposit(500)  # Output: Deposited 500
account.withdraw(200)  # Output: Withdrew 200
print(account.get_balance())  # Output: 1300

# This prevents accidental issues
# account.__balance = -5000  # Can't easily do this!`,
          ka: `class BankAccount:
  def __init__(self, account_holder, balance):
    self.account_holder = account_holder
    # პირადი ცვლადი - _ კონვენციით
    self.__balance = balance  # __ უშიში წვდომა

  # მიმღები - ფრთხიანი გზა პირადი მონაცემის წაკითხვა
  def get_balance(self):
    return self.__balance

  # დამაქმე - ფრთხიანი გზა პირადი მონაცემის ცვლილება
  def deposit(self, amount):
    if amount > 0:
      self.__balance += amount
      print(f"დეპოზიტი {amount}")
    else:
      print("თანხა დადებითი უნდა იყოს")

  def withdraw(self, amount):
    if 0 < amount <= self.__balance:
      self.__balance -= amount
      print(f"გამოღებული {amount}")
    else:
      print("არასწორი თანხა")

# ანგარიშის შექმნა
account = BankAccount("Alice", 1000)
print(account.get_balance())  # Output: 1000

# უსაფრთხო მეთოდების გამოყენება
account.deposit(500)  # Output: დეპოზიტი 500
account.withdraw(200)  # Output: გამოღებული 200
print(account.get_balance())  # Output: 1300

# ეს მცდელობას აღკვეთავს
# account.__balance = -5000  # ვერ ამას!`
        }
      }
    ]
  },
  {
    id: "python-oop-inheritance",
    title: { en: "Inheritance - Reuse Code", ka: "მემკვიდრეობა - კოდის გამეორება" },
    sections: [
      {
        title: { en: "Basic Inheritance", ka: "ძირითადი მემკვიდრეობა" },
        code: {
          en: `# Parent class (Base class)
class Animal:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def eat(self):
    return f"{self.name} is eating"

  def sleep(self):
    return f"{self.name} is sleeping"

# Child class - inherits from Animal
class Dog(Animal):
  def __init__(self, name, age, breed):
    super().__init__(name, age)  # Call parent constructor
    self.breed = breed

  # Override parent method
  def eat(self):
    return f"{self.name} is eating dog food"

  # New method only in Dog
  def bark(self):
    return f"{self.name} says: Woof! Woof!"

# Create dog object
dog = Dog("Max", 3, "Golden Retriever")

# Use inherited methods
print(dog.sleep())  # Output: Max is sleeping

# Use overridden method
print(dog.eat())  # Output: Max is eating dog food

# Use new method
print(dog.bark())  # Output: Max says: Woof! Woof!`,
          ka: `# მშობლის კლასი (ბაზის კლასი)
class Animal:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def eat(self):
    return f"{self.name} საჭმელი খায়"

  def sleep(self):
    return f"{self.name} სძინავს"

# დიასახლის კლასი - მემკვიდრე Animal-დან
class Dog(Animal):
  def __init__(self, name, age, breed):
    super().__init__(name, age)  # მშობლის კონსტრუქტორის გამოძახება
    self.breed = breed

  # მშობლის მეთოდის გადაყვანა
  def eat(self):
    return f"{self.name} ძაღლის საჭმელი აკეთებს"

  # ახალი მეთოდი მხოლოდ Dog-ში
  def bark(self):
    return f"{self.name} ამბობს: აუ! აუ!"

# Dog ობიექტის შექმნა
dog = Dog("Max", 3, "Golden Retriever")

# მემკვიდრე მეთოდის გამოყენება
print(dog.sleep())  # Output: Max სძინავს

# გადაფეხული მეთოდის გამოყენება
print(dog.eat())  # Output: Max ძაղლის საჭმელი აკეთებს

# ახალი მეთოდის გამოყენება
print(dog.bark())  # Output: Max ამბობს: აუ! აუ!`
        }
      },
      {
        title: { en: "Multiple Inheritance & Method Resolution", ka: "მრავალი მემკვიდრეობა" },
        code: {
          en: `# Multiple inheritance example
class Swimmer:
  def swim(self):
    return "Swimming..."

class Runner:
  def run(self):
    return "Running..."

class Athlete(Swimmer, Runner):
  def __init__(self, name):
    self.name = name

  def train(self):
    return f"{self.name} is training"

# Create athlete
athlete = Athlete("John")
print(athlete.swim())  # Output: Swimming...
print(athlete.run())  # Output: Running...
print(athlete.train())  # Output: John is training

# Method Resolution Order (MRO)
print(Athlete.mro())
# Shows order: Athlete -> Swimmer -> Runner -> object

# super() follows MRO
class Athlete2(Swimmer, Runner):
  def move(self):
    # Calls next method in MRO
    result = super().swim()
    return f"{result} (from Athlete2)"`,
          ka: `# მრავალი მემკვიდრეობის მაგალითი
class Swimmer:
  def swim(self):
    return "ცურვა..."

class Runner:
  def run(self):
    return "სირბილი..."

class Athlete(Swimmer, Runner):
  def __init__(self, name):
    self.name = name

  def train(self):
    return f"{self.name} ტრენინგი"

# Athlete ობიექტის შექმნა
athlete = Athlete("John")
print(athlete.swim())  # Output: ცურვა...
print(athlete.run())  # Output: სირბილი...
print(athlete.train())  # Output: John ტრენინგი

# Method Resolution Order (MRO)
print(Athlete.mro())
# აჩვენებს ბრძანებას: Athlete -> Swimmer -> Runner -> object`
        }
      }
    ]
  },
  {
    id: "python-oop-polymorphism",
    title: { en: "Polymorphism - Many Forms", ka: "პოლიმორფიზმი - ბევრი ფორმა" },
    sections: [
      {
        title: { en: "Method Overriding & Duck Typing", ka: "მეთოდის გადაყვანა და Duck Typing" },
        code: {
          en: `# Polymorphism through inheritance
class Shape:
  def area(self):
    pass

class Circle(Shape):
  def __init__(self, radius):
    self.radius = radius

  def area(self):
    return 3.14 * self.radius ** 2

class Rectangle(Shape):
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def area(self):
    return self.width * self.height

class Triangle(Shape):
  def __init__(self, base, height):
    self.base = base
    self.height = height

  def area(self):
    return (self.base * self.height) / 2

# Same method call, different behavior (Polymorphism!)
shapes = [
  Circle(5),
  Rectangle(4, 6),
  Triangle(3, 4)
]

for shape in shapes:
  print(f"Area: {shape.area()}")
  # Output:
  # Area: 78.5
  # Area: 24
  # Area: 6.0

# Duck Typing - if it quacks like a duck, it's a duck!
class Dog:
  def speak(self):
    return "Woof!"

class Cat:
  def speak(self):
    return "Meow!"

def make_it_speak(animal):
  print(animal.speak())

make_it_speak(Dog())  # Output: Woof!
make_it_speak(Cat())  # Output: Meow!`,
          ka: `# პოლიმორფიზმი მემკვიდრეობით
class Shape:
  def area(self):
    pass

class Circle(Shape):
  def __init__(self, radius):
    self.radius = radius

  def area(self):
    return 3.14 * self.radius ** 2

class Rectangle(Shape):
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def area(self):
    return self.width * self.height

# იგივე მეთოდი, განსხვავებული ქცევა
shapes = [Circle(5), Rectangle(4, 6)]

for shape in shapes:
  print(f"ფართობი: {shape.area()}")
  # Output:
  # ფართობი: 78.5
  # ფართობი: 24

# Duck Typing - თუ საფრ端 უხმობს, საფრend-ია!
class Dog:
  def speak(self):
    return "აუ!"

class Cat:
  def speak(self):
    return "მიაოუ!"

def make_it_speak(animal):
  print(animal.speak())

make_it_speak(Dog())  # Output: აუ!
make_it_speak(Cat())  # Output: მიაოუ!`
        }
      },
      {
        title: { en: "Abstract Base Classes", ka: "აბსტრაქტული ბაზის კლასი" },
        code: {
          en: `from abc import ABC, abstractmethod

# Abstract base class - cannot be instantiated
class Vehicle(ABC):
  @abstractmethod
  def start(self):
    pass  # Must be overridden

  @abstractmethod
  def stop(self):
    pass

  def honk(self):
    return "Beep! Beep!"

# Car must implement abstract methods
class Car(Vehicle):
  def start(self):
    return "Car engine started"

  def stop(self):
    return "Car stopped"

class Motorcycle(Vehicle):
  def start(self):
    return "Motorcycle engine started"

  def stop(self):
    return "Motorcycle stopped"

# Cannot do this - Vehicle is abstract
# v = Vehicle()  # TypeError!

# But this works
car = Car()
print(car.start())  # Output: Car engine started
print(car.honk())  # Output: Beep! Beep!

motorcycle = Motorcycle()
print(motorcycle.start())  # Output: Motorcycle engine started`,
          ka: `from abc import ABC, abstractmethod

# აბსტრაქტული ბაზის კლასი - ვერ შეიქმნება
class Vehicle(ABC):
  @abstractmethod
  def start(self):
    pass  # უნდა გადაიფეხოს

  @abstractmethod
  def stop(self):
    pass

  def honk(self):
    return "Beep! Beep!"

# Car აბსტრაქტული მეთოდების დანერგვა
class Car(Vehicle):
  def start(self):
    return "Car ძრავა დაიშო"

  def stop(self):
    return "Car შეჩერდა"

# ვერ გააკეთებთ - Vehicle აბსტრაქტული
# v = Vehicle()  # TypeError!

# მაგრამ ეს მუშაობს
car = Car()
print(car.start())  # Output: Car ძრავა დაიშო
print(car.honk())  # Output: Beep! Beep!`
        }
      }
    ]
  },
  {
    id: "python-oop-advanced",
    title: { en: "Advanced OOP Concepts", ka: "მოწინავე OOP კონცეფციები" },
    sections: [
      {
        title: { en: "Properties, Static & Class Methods", ka: "თვისებები, სტატიკური და კლასის მეთოდი" },
        code: {
          en: `class Student:
  school_name = "Tech Academy"  # class variable

  def __init__(self, name, score):
    self.name = name
    self._score = score  # private variable

  # Property - access like attribute, but runs method
  @property
  def score(self):
    return self._score

  @score.setter
  def score(self, value):
    if 0 <= value <= 100:
      self._score = value
    else:
      print("Invalid score!")

  @property
  def grade(self):
    if self._score >= 90: return "A"
    if self._score >= 80: return "B"
    if self._score >= 70: return "C"
    return "F"

  # Static method - doesn't use self
  @staticmethod
  def is_passing(score):
    return score >= 60

  # Class method - uses class variables
  @classmethod
  def from_string(cls, student_string):
    # "Alice:85" -> Student object
    name, score = student_string.split(':')
    return cls(name, int(score))

# Using properties
student = Student("Alice", 85)
print(student.score)  # Output: 85 (looks like attribute)
print(student.grade)  # Output: B

# Using static method
print(Student.is_passing(75))  # Output: True
print(Student.is_passing(45))  # Output: False

# Using class method
student2 = Student.from_string("Bob:92")
print(student2.name)  # Output: Bob
print(student2.grade)  # Output: A`,
          ka: `class Student:
  school_name = "Tech Academy"  # კლასის ცვლადი

  def __init__(self, name, score):
    self.name = name
    self._score = score  # პირადი ცვლადი

  # Property - ატრიბუტის სახით წვდომა, მაგრამ მეთოდი აწარმოებს
  @property
  def score(self):
    return self._score

  @score.setter
  def score(self, value):
    if 0 <= value <= 100:
      self._score = value
    else:
      print("არასწორი ქულა!")

  @property
  def grade(self):
    if self._score >= 90: return "A"
    if self._score >= 80: return "B"
    if self._score >= 70: return "C"
    return "F"

  # სტატიკური მეთოდი - self გამოიყენებს არ აკეთებს
  @staticmethod
  def is_passing(score):
    return score >= 60

  # კლასის მეთოდი - კლასის ცვლადი გამოიყენებს
  @classmethod
  def from_string(cls, student_string):
    # "Alice:85" -> Student ობიექტი
    name, score = student_string.split(':')
    return cls(name, int(score))

# Properties გამოყენება
student = Student("Alice", 85)
print(student.score)  # Output: 85
print(student.grade)  # Output: B

# სტატიკური მეთოდი
print(Student.is_passing(75))  # Output: True

# კლასის მეთოდი
student2 = Student.from_string("Bob:92")
print(student2.name)  # Output: Bob
print(student2.grade)  # Output: A`
        }
      },
      {
        title: { en: "Magic Methods (__init__, __str__, etc)", ka: "მაგიური მეთოდი (__init__, __str__, და.)" },
        code: {
          en: `class Book:
  def __init__(self, title, author, pages):
    self.title = title
    self.author = author
    self.pages = pages

  # __str__ - readable string representation
  def __str__(self):
    return f"'{self.title}' by {self.author}"

  # __repr__ - developer-friendly representation
  def __repr__(self):
    return f"Book({self.title!r}, {self.author!r}, {self.pages})"

  # __len__ - allows len(book)
  def __len__(self):
    return self.pages

  # __eq__ - allows ==
  def __eq__(self, other):
    return (self.title == other.title and 
            self.author == other.author)

  # __lt__ - allows < comparison
  def __lt__(self, other):
    return self.pages < other.pages

  # __add__ - allows + operator
  def __add__(self, other):
    return self.pages + other.pages

# Using magic methods
book1 = Book("Python 101", "John Doe", 300)
book2 = Book("Web Dev", "Jane Smith", 250)

print(str(book1))  # Output: 'Python 101' by John Doe
print(repr(book1))  # Output: Book('Python 101', 'John Doe', 300)

print(len(book1))  # Output: 300

print(book1 == book2)  # Output: False
print(book1 < book2)  # Output: False (300 < 250 is False)
print(book1 + book2)  # Output: 550 (total pages)

# Sorting by pages
books = [book1, book2]
books.sort()
print(books[0].title)  # Output: Web Dev (250 pages)`,
          ka: `class Book:
  def __init__(self, title, author, pages):
    self.title = title
    self.author = author
    self.pages = pages

  # __str__ - წაკითხვადი სტრიქონი
  def __str__(self):
    return f"'{self.title}' by {self.author}"

  # __repr__ - დეველოპერის განკითხვადი
  def __repr__(self):
    return f"Book({self.title!r}, {self.author!r}, {self.pages})"

  # __len__ - ნებართვა len(book)
  def __len__(self):
    return self.pages

  # __eq__ - ნებართვა ==
  def __eq__(self, other):
    return (self.title == other.title and 
            self.author == other.author)

  # __lt__ - ნებართვა < შედარება
  def __lt__(self, other):
    return self.pages < other.pages

  # __add__ - ნებართვა + ოპერატორი
  def __add__(self, other):
    return self.pages + other.pages

# მაგიური მეთოდი გამოყენება
book1 = Book("Python 101", "John Doe", 300)
book2 = Book("Web Dev", "Jane Smith", 250)

print(str(book1))  # Output: 'Python 101' by John Doe
print(len(book1))  # Output: 300

print(book1 == book2)  # Output: False
print(book1 < book2)  # Output: False
print(book1 + book2)  # Output: 550 (მოცულობის გვერდი)`
        }
      }
    ]
  },
  {
    id: "python-oop-composition",
    title: { en: "Composition & Aggregation", ka: "კომპოზიცია და აგრეგაცია" },
    sections: [
      {
        title: { en: "Has-a Relationship (Composition)", ka: "აქვს-ა ურთიერთობა (კომპოზიცია)" },
        code: {
          en: `# Composition: a strong "has-a" relationship
# When parent is deleted, children are too

class Engine:
  def __init__(self, type, horsepower):
    self.type = type
    self.horsepower = horsepower

  def start(self):
    return f"{self.type} engine started ({self.horsepower} HP)"

class Car:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model
    # Car HAS-A Engine (composition)
    self.engine = Engine("V8", 350)

  def drive(self):
    return f"{self.brand} {self.model} is driving"

# Aggregation: a weaker "has-a" relationship
# Parts can exist independently

class Company:
  def __init__(self, name):
    self.name = name
    self.employees = []  # empty list

  def hire(self, employee):
    self.employees.append(employee)

class Employee:
  def __init__(self, name):
    self.name = name

# Create entities
company = Company("Tech Corp")
emp1 = Employee("Alice")
emp2 = Employee("Bob")

# Company HAS employees (aggregation)
company.hire(emp1)
company.hire(emp2)

print(company.name)  # Tech Corp
print([e.name for e in company.employees])
# Output: ['Alice', 'Bob']

# Even if company is deleted, employees still exist
del company
print(emp1.name)  # Alice - still exists!`,
          ka: `# კომპოზიცია: ძლიერი "აქვს-ა" ურთიერთობა
# როდესაც მშობელი წაიშლება, ბავშვებიც წაიშლება

class Engine:
  def __init__(self, type, horsepower):
    self.type = type
    self.horsepower = horsepower

  def start(self):
    return f"{self.type} ძრავა დაიშო ({self.horsepower} HP)"

class Car:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model
    # Car აქვს Engine (კომპოზიცია)
    self.engine = Engine("V8", 350)

  def drive(self):
    return f"{self.brand} {self.model} მართავს"

# აგრეგაცია: საბუ "აქვს-ა" ურთიერთობა
# ნაწილი დამოუკიდებელი დაკვებ

class Company:
  def __init__(self, name):
    self.name = name
    self.employees = []

  def hire(self, employee):
    self.employees.append(employee)

class Employee:
  def __init__(self, name):
    self.name = name

# მეწამე
company = Company("Tech Corp")
emp1 = Employee("Alice")
emp2 = Employee("Bob")

# Company აქვს თანამშრომელი (აგრეგაცია)
company.hire(emp1)
company.hire(emp2)

print(company.name)  # Tech Corp
print([e.name for e in company.employees])
# Output: ['Alice', 'Bob']

# თუნდაც company წაიშლება, თანამშრომელი ბრუნდება
del company
print(emp1.name)  # Alice - ჯერ სჭირს!`
        }
      }
    ]
  },
  {
    id: "python-oop-practical",
    title: { en: "Practical Example: E-Shop System", ka: "პრაქტიკული მაგალითი: E-Shop სისტემა" },
    sections: [
      {
        title: { en: "Complete Real-World Example", ka: "სრული რეალური მაგალითი" },
        code: {
          en: `from datetime import datetime

# Product class - represents items in shop
class Product:
  def __init__(self, product_id, name, price, stock):
    self.product_id = product_id
    self.name = name
    self.price = price
    self.stock = stock

  def __str__(self):
    return f"{self.name} - \${self.price}"

# ShoppingCart class - holds products
class ShoppingCart:
  def __init__(self):
    self.items = []

  def add_item(self, product, quantity):
    if product.stock >= quantity:
      self.items.append({'product': product, 'quantity': quantity})
      product.stock -= quantity
      print(f"Added {quantity} {product.name}(s)")
    else:
      print(f"Not enough stock. Available: {product.stock}")

  def get_total(self):
    return sum(item['product'].price * item['quantity'] 
              for item in self.items)

  def __str__(self):
    if not self.items:
      return "Cart is empty"
    return "\\n".join([f"{item['product'].name} x{item['quantity']} = \${item['product'].price * item['quantity']}" 
                      for item in self.items])

# Order class - finalizes purchase
class Order:
  def __init__(self, order_id, cart, customer_name):
    self.order_id = order_id
    self.items = cart.items
    self.customer_name = customer_name
    self.total = cart.get_total()
    self.date = datetime.now()
    self.status = "Pending"

  def confirm(self):
    self.status = "Confirmed"
    print(f"Order {self.order_id} confirmed!")

  def __str__(self):
    return f"Order #{self.order_id} - {self.customer_name} - \${self.total}"

# Usage
laptop = Product(1, "Laptop", 1200, 5)
mouse = Product(2, "Mouse", 30, 20)
keyboard = Product(3, "Keyboard", 80, 15)

cart = ShoppingCart()
cart.add_item(laptop, 1)
cart.add_item(mouse, 2)
cart.add_item(keyboard, 1)

print("\\nCart Contents:")
print(cart)
print(f"Total: \${cart.get_total()}")

order = Order(101, cart, "Alice")
print(f"\\n{order}")
order.confirm()`,
          ka: `from datetime import datetime

# Product კლასი - მაღაზიის ნივთი
class Product:
  def __init__(self, product_id, name, price, stock):
    self.product_id = product_id
    self.name = name
    self.price = price
    self.stock = stock

  def __str__(self):
    return f"{self.name} - \${self.price}"

# ShoppingCart კლასი - პროდუქტებს უჯდება
class ShoppingCart:
  def __init__(self):
    self.items = []

  def add_item(self, product, quantity):
    if product.stock >= quantity:
      self.items.append({'product': product, 'quantity': quantity})
      product.stock -= quantity
      print(f"დამატებული {quantity} {product.name}(s)")
    else:
      print(f"მისაწვდომელი: {product.stock}")

  def get_total(self):
    return sum(item['product'].price * item['quantity'] 
              for item in self.items)

  def __str__(self):
    if not self.items:
      return "კალათი ცარიელია"
    return "\\n".join([f"{item['product'].name} x{item['quantity']} = \${item['product'].price * item['quantity']}" 
                      for item in self.items])

# Order კლასი - შიდა შენახვა
class Order:
  def __init__(self, order_id, cart, customer_name):
    self.order_id = order_id
    self.items = cart.items
    self.customer_name = customer_name
    self.total = cart.get_total()
    self.date = datetime.now()
    self.status = "Pending"

  def confirm(self):
    self.status = "Confirmed"
    print(f"მიზანი {self.order_id} დამტკიცდა!")

  def __str__(self):
    return f"შეკვეთა #{self.order_id} - {self.customer_name} - \${self.total}"

# კოდი
laptop = Product(1, "Laptop", 1200, 5)
mouse = Product(2, "Mouse", 30, 20)

cart = ShoppingCart()
cart.add_item(laptop, 1)
cart.add_item(mouse, 2)

print("კალათი:")
print(cart)
print(f"სულ: \${cart.get_total()}")

order = Order(101, cart, "Alice")
print(f"\\n{order}")
order.confirm()`
        }
      }
    ]
  }
];

const cybersecurityTopics = [
  {
    id: "cybersec-fundamentals",
    title: { en: "Cybersecurity Fundamentals", ka: "კიბერუსაფრთხოების საფუძვლები" },
    sections: [
      {
        title: { en: "Encryption & Hashing Basics", ka: "შიფრაცია და ჰეშირება" },
        code: {
          en: `import hashlib
from cryptography.fernet import Fernet

# === HASHING (One-way) ===
# Hashing converts data to fixed-length string, cannot be reversed

# SHA256 Hash
def create_password_hash(password):
  return hashlib.sha256(password.encode()).hexdigest()

password = "MySecurePassword123!"
hashed = create_password_hash(password)
print(f"Original: {password}")
print(f"Hashed: {hashed}")

# Verify password
def verify_password(password, hashed):
  return hashlib.sha256(password.encode()).hexdigest() == hashed

is_correct = verify_password("MySecurePassword123!", hashed)
print(f"Password matches: {is_correct}")  # True

# === ENCRYPTION (Two-way) ===
# Encryption can be reversed with a key

# Generate encryption key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt data
secret_message = "My confidential data"
encrypted = cipher.encrypt(secret_message.encode())
print(f"Encrypted: {encrypted}")

# Decrypt data
decrypted = cipher.decrypt(encrypted).decode()
print(f"Decrypted: {decrypted}")`,
          ka: `import hashlib
from cryptography.fernet import Fernet

# === ჰეშირება (ერთმხრივი) ===
# მონაცემი ფიქსირებული სიმბოლოთი, უკან არ შეიძლება

# SHA256 ჰეში
def create_password_hash(password):
  return hashlib.sha256(password.encode()).hexdigest()

password = "MySecurePassword123!"
hashed = create_password_hash(password)

# პაროლი დაკონფირმება
def verify_password(password, hashed):
  return hashlib.sha256(password.encode()).hexdigest() == hashed

is_correct = verify_password("MySecurePassword123!", hashed)
print(f"პაროლი ემთხვევა: {is_correct}")  # True

# === შიფრაცია (ორმხრივი) ===
# შიფრაცია კოდი უკან შეიძლება

# שיפור encryption კოდი
key = Fernet.generate_key()
cipher = Fernet(key)

# მონაცემი დაშიფვრა
secret_message = "My confidential data"
encrypted = cipher.encrypt(secret_message.encode())

# მონაცემი გაშიფვრა
decrypted = cipher.decrypt(encrypted).decode()`
        }
      },
      {
        title: { en: "SQL Injection Prevention", ka: "SQL Injection თავიდან აცილება" },
        code: {
          en: `import sqlite3
from sqlite3 import Error

# === BAD: Vulnerable to SQL Injection ===
def vulnerable_login(username, password):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  # DANGEROUS - attacker can manipulate query!
  query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
  # If username = "admin' --" it bypasses password check!
  cursor.execute(query)
  return cursor.fetchone()

# === GOOD: Use parameterized queries ===
def secure_login(username, password):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  # Use ? placeholders - prevents injection
  query = "SELECT * FROM users WHERE username=? AND password=?"
  cursor.execute(query, (username, password))
  return cursor.fetchone()

# === GOOD: Hash passwords ===
import hashlib

def secure_login_with_hash(username, password_input):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  query = "SELECT password_hash FROM users WHERE username=?"
  cursor.execute(query, (username,))
  user = cursor.fetchone()
  
  if user:
    stored_hash = user[0]
    # Verify hashed password
    input_hash = hashlib.sha256(password_input.encode()).hexdigest()
    return stored_hash == input_hash
  return False`,
          ka: `import sqlite3
from sqlite3 import Error

# === ცუდი: SQL Injection დაუცველი ===
def vulnerable_login(username, password):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  # საშიში - თავდამსხმელი შეთხზოვნის მანიპულირება შეუძლია!
  query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
  cursor.execute(query)
  return cursor.fetchone()

# === კარგი: პარამეტრიზებული კითხვა ===
def secure_login(username, password):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  # გამოიყენეთ ? ადგილი - თავიდან აიცილებს injection
  query = "SELECT * FROM users WHERE username=? AND password=?"
  cursor.execute(query, (username, password))
  return cursor.fetchone()

# === კარგი: ჰეშ პაროლი ===
import hashlib

def secure_login_with_hash(username, password_input):
  conn = sqlite3.connect('users.db')
  cursor = conn.cursor()
  
  query = "SELECT password_hash FROM users WHERE username=?"
  cursor.execute(query, (username,))
  user = cursor.fetchone()
  
  if user:
    stored_hash = user[0]
    input_hash = hashlib.sha256(password_input.encode()).hexdigest()
    return stored_hash == input_hash
  return False`
        }
      }
    ]
  },
  {
    id: "cybersec-applications",
    title: { en: "Cybersecurity Applications", ka: "კიბერუსაფრთხოების აპლიკაციები" },
    sections: [
      {
        title: { en: "Password Manager App", ka: "პაროლის მენეჯერი" },
        code: {
          en: `import json
import hashlib
from cryptography.fernet import Fernet
import os

class PasswordManager:
  def __init__(self, master_password):
    self.master_hash = hashlib.sha256(master_password.encode()).hexdigest()
    self.key = Fernet.generate_key()
    self.cipher = Fernet(self.key)
    self.passwords = {}

  def add_password(self, service, username, password):
    """Store password encrypted"""
    encrypted = self.cipher.encrypt(password.encode()).decode()
    self.passwords[service] = {
      'username': username,
      'password': encrypted
    }
    print(f"Password for {service} saved!")

  def get_password(self, service):
    """Retrieve and decrypt password"""
    if service in self.passwords:
      encrypted_pwd = self.passwords[service]['password']
      decrypted = self.cipher.decrypt(encrypted_pwd.encode()).decode()
      return self.passwords[service]['username'], decrypted
    return None

  def save_to_file(self, filename):
    """Save encrypted passwords to file"""
    data = {
      'master_hash': self.master_hash,
      'key': self.key.decode(),
      'passwords': self.passwords
    }
    with open(filename, 'w') as f:
      json.dump(data, f)

  def list_services(self):
    """List all stored services"""
    return list(self.passwords.keys())

# Usage
manager = PasswordManager("MyMasterPassword123!")
manager.add_password("gmail", "alice@gmail.com", "Gmail$ecure123")
manager.add_password("github", "alice_dev", "GitHub@Pass456")

print("Services:", manager.list_services())
username, password = manager.get_password("gmail")
print(f"Gmail: {username} / {password}")

manager.save_to_file("passwords.json")`,
          ka: `import json
import hashlib
from cryptography.fernet import Fernet

class PasswordManager:
  def __init__(self, master_password):
    self.master_hash = hashlib.sha256(master_password.encode()).hexdigest()
    self.key = Fernet.generate_key()
    self.cipher = Fernet(self.key)
    self.passwords = {}

  def add_password(self, service, username, password):
    """პაროლი დაშიფვრული შენახვა"""
    encrypted = self.cipher.encrypt(password.encode()).decode()
    self.passwords[service] = {
      'username': username,
      'password': encrypted
    }
    print(f"{service} პაროლი შენახულია!")

  def get_password(self, service):
    """პაროლი წაკითხვა და გაშიფვრა"""
    if service in self.passwords:
      encrypted_pwd = self.passwords[service]['password']
      decrypted = self.cipher.decrypt(encrypted_pwd.encode()).decode()
      return self.passwords[service]['username'], decrypted
    return None

  def list_services(self):
    """ყველა სერვისის სია"""
    return list(self.passwords.keys())

# კოდი
manager = PasswordManager("MyMasterPassword123!")
manager.add_password("gmail", "alice@gmail.com", "Gmail$ecure123")

print("სერვისები:", manager.list_services())
username, password = manager.get_password("gmail")
print(f"Gmail: {username}")`
        }
      },
      {
        title: { en: "Network Security Scanner", ka: "ქსელის უსაფრთხოების სკანერი" },
        code: {
          en: `import socket
import subprocess
import platform

class NetworkSecurityScanner:
  def __init__(self, target_host):
    self.target = target_host

  def scan_open_ports(self, start_port=1, end_port=1024):
    """Scan for open ports"""
    open_ports = []
    print(f"Scanning {self.target}...")
    
    for port in range(start_port, end_port + 1):
      try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)
        result = sock.connect_ex((self.target, port))
        
        if result == 0:
          open_ports.append(port)
          print(f"Port {port}: OPEN")
        sock.close()
      except:
        pass
    
    return open_ports

  def check_dns(self):
    """Resolve DNS"""
    try:
      ip = socket.gethostbyname(self.target)
      print(f"DNS: {self.target} -> {ip}")
      return ip
    except:
      print("DNS resolution failed")
      return None

  def ping_host(self):
    """Check if host is reachable"""
    param = "-n" if platform.system().lower() == "windows" else "-c"
    command = ["ping", param, "1", self.target]
    
    try:
      response = subprocess.run(command, capture_output=True, timeout=2)
      return response.returncode == 0
    except:
      return False

# Usage
scanner = NetworkSecurityScanner("8.8.8.8")
is_alive = scanner.ping_host()
print(f"Host reachable: {is_alive}")

ip = scanner.check_dns()
open_ports = scanner.scan_open_ports(1, 100)
print(f"Found {len(open_ports)} open ports")`,
          ka: `import socket
import platform

class NetworkSecurityScanner:
  def __init__(self, target_host):
    self.target = target_host

  def scan_open_ports(self, start_port=1, end_port=1024):
    """ღია პორტების სკანირება"""
    open_ports = []
    print(f"სკანირება {self.target}...")
    
    for port in range(start_port, end_port + 1):
      try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)
        result = sock.connect_ex((self.target, port))
        
        if result == 0:
          open_ports.append(port)
          print(f"პორტი {port}: ღია")
        sock.close()
      except:
        pass
    
    return open_ports

  def check_dns(self):
    """DNS გადეწერა"""
    try:
      ip = socket.gethostbyname(self.target)
      print(f"DNS: {self.target} -> {ip}")
      return ip
    except:
      print("DNS რამ უარი")
      return None

# კოდი
scanner = NetworkSecurityScanner("8.8.8.8")
ip = scanner.check_dns()
open_ports = scanner.scan_open_ports(1, 100)
print(f"ნაპოვნი {len(open_ports)} ღია პორტი")`
        }
      },
      {
        title: { en: "File Integrity Checker", ka: "ფაილის მთლიანობის შემოწმება" },
        code: {
          en: `import hashlib
import os
import json
from datetime import datetime

class FileIntegrityChecker:
  def __init__(self):
    self.checksums = {}

  def calculate_hash(self, filepath):
    """Calculate SHA256 hash of file"""
    sha256_hash = hashlib.sha256()
    
    with open(filepath, "rb") as f:
      for byte_block in iter(lambda: f.read(4096), b""):
        sha256_hash.update(byte_block)
    
    return sha256_hash.hexdigest()

  def create_baseline(self, directory):
    """Create baseline hashes for all files"""
    print(f"Creating baseline for {directory}...")
    
    for filename in os.listdir(directory):
      filepath = os.path.join(directory, filename)
      if os.path.isfile(filepath):
        file_hash = self.calculate_hash(filepath)
        self.checksums[filename] = {
          'hash': file_hash,
          'date': datetime.now().isoformat()
        }
        print(f"Hashed: {filename}")

  def check_integrity(self, directory):
    """Check if files have been modified"""
    print(f"Checking integrity of {directory}...")
    modified = []
    
    for filename in os.listdir(directory):
      filepath = os.path.join(directory, filename)
      if os.path.isfile(filepath) and filename in self.checksums:
        current_hash = self.calculate_hash(filepath)
        original_hash = self.checksums[filename]['hash']
        
        if current_hash != original_hash:
          modified.append(filename)
          print(f"⚠️  MODIFIED: {filename}")
        else:
          print(f"✓ OK: {filename}")
    
    return modified

  def save_baseline(self, filename):
    """Save baseline to file"""
    with open(filename, 'w') as f:
      json.dump(self.checksums, f, indent=2)

# Usage
checker = FileIntegrityChecker()
checker.create_baseline("./docs")
modified = checker.check_integrity("./docs")

if modified:
  print(f"⚠️  {len(modified)} files were modified!")
else:
  print("✓ All files intact")

checker.save_baseline("baseline.json")`,
          ka: `import hashlib
import os
import json

class FileIntegrityChecker:
  def __init__(self):
    self.checksums = {}

  def calculate_hash(self, filepath):
    """ფაილის SHA256 ჰეში"""
    sha256_hash = hashlib.sha256()
    
    with open(filepath, "rb") as f:
      for byte_block in iter(lambda: f.read(4096), b""):
        sha256_hash.update(byte_block)
    
    return sha256_hash.hexdigest()

  def create_baseline(self, directory):
    """ყველა ფაილის საბაზო ჰეში"""
    print(f"საბაზო შექმნა {directory}...")
    
    for filename in os.listdir(directory):
      filepath = os.path.join(directory, filename)
      if os.path.isfile(filepath):
        file_hash = self.calculate_hash(filepath)
        self.checksums[filename] = file_hash
        print(f"ჰეშირებული: {filename}")

  def check_integrity(self, directory):
    """დაკვირვება თუ ფაილი შეცვლილია"""
    print(f"მთლიანობის შემოწმება {directory}...")
    modified = []
    
    for filename in os.listdir(directory):
      filepath = os.path.join(directory, filename)
      if os.path.isfile(filepath) and filename in self.checksums:
        current_hash = self.calculate_hash(filepath)
        original_hash = self.checksums[filename]
        
        if current_hash != original_hash:
          modified.append(filename)
          print(f"⚠️ შეცვლილი: {filename}")
        else:
          print(f"✓ კარგი: {filename}")
    
    return modified

# კოდი
checker = FileIntegrityChecker()
checker.create_baseline("./docs")
modified = checker.check_integrity("./docs")`
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

  const categories = [
    { id: "csharp", title: "C#", icon: "🧱", color: "#3b82f6" },
    { id: "python", title: "Python OOP", icon: "🐍", color: "#3776ab" },
    { id: "cybersec", title: "Cybersecurity", icon: "🔐", color: "#dc2626" },
    { id: "sql", title: "SQL", icon: "🗄️", color: "#16a34a" },
    { id: "web", title: "Web", icon: "🌐", color: "#f59e0b" },
    { id: "projects", title: "Projects", icon: "📦", color: "#8b5cf6" }
  ];

  const getTopics = () => {
    switch(lang) {
      case "csharp": return csharpTopics;
      case "python": return pythonOOPTopics;
      case "cybersec": return cybersecurityTopics;
      case "sql": return sqlTopics;
      case "web": return webTopics;
      case "projects": return projectTopics;
      default: return csharpTopics;
    }
  };

  // Update active topic when language category changes
  useEffect(() => {
    const topics = getTopics();
    if (topics.length > 0) {
      setActiveTopic(topics[0].id);
    }
  }, [lang]);

  const allTopics = getTopics();
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

  const langData = categories.find(c => c.id === lang) || categories[0];

  const t = translations[uiLang];

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="title">{t.appTitle}</div>
          <div className="subtitle">{t.appSubtitle}</div>
        </div>

        <div className="lang-tabs">
          {categories.map(l => (
            <button
              key={l.id}
              className={`lang-tab ${l.id === lang ? 'active' : ''}`}
              onClick={() => { 
                setLang(l.id);
                setSearch("");
                // Don't change activeTopic yet, let useEffect handle it
                setTopicsOpen(false);
              }}
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
          {categories.map(l => (
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
