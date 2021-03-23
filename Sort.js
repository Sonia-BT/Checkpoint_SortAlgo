 array = [
   { name: "Akram", age: 26 },
   { name: "kader", age: 42 },
   { name: "sam", age: 12 },
   { name: "Lydia", age: 32 },
 ];

 array.sort((a, b) => {
   return a.age - b.age;
 });

 console.log(array);