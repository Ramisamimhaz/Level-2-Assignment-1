// Problem-1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);

}


// Problem-2

function reverseString(str: string): string{

    return str.split("").reverse().join("");
}

// Problem-3

   type StringOrNumber = string | number;

   function isString(value: StringOrNumber): value is string {
    return typeof value === "string";
   }

   function checkType(value: StringOrNumber): string{
    if(isString(value)) {
        return "String";

    }

    return "Number";
   }




// Problem-4

  const getProperty = <T, K extends keyof T>(
  userInfo: T,
  key: K
   ): T[K] => {
  return userInfo[key];
    };

 const user = {
    id: 1,
    name: "John Doe",
    age : 21
 };
 const result = getProperty(user ,"name");
 

  // Problem-5 
  interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}


const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};




   // Problem-6 
  class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
  }

  const student = new Student("Alice", 20, "A");


 
  // Problem- 7

  function getIntersection(firstArray: number[], secondArray: number[]) {
  const commonNumbers: number[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    const currentValue = firstArray[i];

    if (secondArray.includes(currentValue)) {
      commonNumbers.push(currentValue);
    }
  }

  return commonNumbers;
}

