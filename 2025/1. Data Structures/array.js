let fruits = ["apple", "banana", "orange"];

// push an element in the array
fruits.push("mango");
fruits.push("strawberry");
fruits.push("pear");

// removing last element in the array
fruits.pop();

// add element to beginning of the array 
fruits.unshift("pear");

// remove element from the beginning of the array 
fruits.shift();

// array length
let numOfFruits = fruits.length;
console.log("Number of fruits: " + numOfFruits);

// search for element index
let index = fruits.indexOf("apple");
console.log("Index of apple: " + index);

// displays first element in the array = "apple"
console.log("First element: " + fruits[0]);

// displays all elements in the array
console.log(fruits);

console.log("----------");

// using foreach loop
fruits.forEach(element => {
    console.log(element);
});

console.log("----------");

// using for loop
for(let fruit of fruits) 
{
    console.log(fruit);
}

console.log("----------");

// reverse of array
for(let i = fruits.length - 1; i >= 0; i--)
{
    console.log(fruits[i]);
}

console.log("----------");

// sorting array in alpha numberic order
fruits.sort();
console.log(fruits);

// reverse sorting
fruits.sort().reverse();
console.log(fruits);
