// Object Creation

// const pizza = {
//     topping: "cheese",
//     sauce: "marinara",
//     size: "small"
//  };

// const pizza = new Object();
// console.log(pizza)
// pizza.size = "small"
// console.log(pizza)
// pizza.sauce = "tomato"
// console.log(pizza)

// Numbers as keys (translated in to strings)
//  const shoppingCart = {
//     1: "apple",
//     2: "oranges"
//  };

//  console.log(shoppingCart)

// const id = Symbol('id')

// const fullObject = {
//     profession: "QA",
//     42: "This is a number key",
//     [id]: "This is a symbol key",
//     // [4 < 5]: "is it true?", // Optional usage of boolean type as key
//     fullName: "Alex Komanov",
//     "user age": 36, // if your key name contains spaces, you need to wrap it in quotes.
//     languages: {
//         java: 9,
//         typescript: "strong knowledge",
//         rust: false
//     }
// };

// console.log(fullObject)

// Getting value of the key

// console.log(typeof fullObject)

// Call to key to get it's value
// console.log(fullObject.profession)
// console.log(fullObject["user age"])
// // console.log(fullObject.["user age"]) // No option to use 'dot notation' with 'brackets notation'
// console.log(fullObject.languages)
// console.log(fullObject["languages"])
// console.log(fullObject[42])
// // console.log(fullObject[4 < 6])

// fullObject.newKey = "New Value"
// console.log(fullObject)
// fullObject.newKey = "Updated Value"
// console.log(fullObject)

// fullObject['custom key'] = "Custom Key"
// console.log(fullObject)

// fullObject['custom key'] = "Updated Custom Key"
// console.log(fullObject)

// const updatedKey = fullObject['custom key']
// console.log(updatedKey)

// Validation
// expect(updatedKey).isEqual('Updated Custom Key')
// console.log(updatedKey == 'Updated Custom Key')


// Deleting property

const pizza = {
    topping: "cheese",
    'main sauce': "marinara",
    size: "small"
};

// console.log(pizza)

// delete pizza.size
// console.log(pizza)

// We can delete a particular key and add a new key with it's value

// pizza.mainSauce = pizza["main sauce"]
// console.log(pizza)
// delete pizza["main sauce"]
// console.log(pizza)

//  // Not existing key
//  console.log(pizza)
//  console.log(pizza.size)
//  console.log(pizza.nonExistingKey)
//   console.log('size' in pizza)
//   console.log('nonExistingKey' in pizza)

  // key is existing .....
  // key is not existing ....



