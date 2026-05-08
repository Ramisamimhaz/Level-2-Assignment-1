// Problem-1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);

}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem-2

function reverseString(str: string): string{

    return str.split("").reverse().join("");
}

//  console.log(reverseString("typescript"));

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

//    console.log(checkType("Hello"));
//    console.log(checkType(42));


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
//  console.log(result); 

  // Problem-5 
  