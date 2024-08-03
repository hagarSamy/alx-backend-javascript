export default function groceriesList() {
  const myMap = new Map();
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const [key, value] of Object.entries(groceries)) {
    myMap.set(key, value);
  }
  return myMap;
}
