export default function cleanSet(set, startString) {
  const myArr = [];
  if (!startString) {
    return '';
  }
  for (const el of set) {
    if (el.startsWith(startString)) {
      // extracting a portion of each string, starting from a specific index
      myArr.push(el.substring(startString.length));
    }
  }
  return myArr.join('-')
}
