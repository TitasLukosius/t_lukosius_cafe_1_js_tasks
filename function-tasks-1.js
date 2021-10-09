const array = ['pirmas', 'antras', 'trecias', 'ketvirtas', 'penktas'];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnFirstElement(arr) {
    return arr[0];
  }
  console.log(returnFirstElement(array))
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function removeFirstElement(arr) {
    return arr.shift();
  }
  console.log(removeFirstElement(array))
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnLastElement(arr) {
    return arr[arr.length - 1]
  }
  console.log(returnLastElement(array))
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastElement(arr) {
    return arr.pop()
  }
  console.log(removeLastElement(array))
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function countArrayLength(arr) {
    return arr.length
  }
  console.log(countArrayLength(array))
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function lastArrayElementIndex(arr) {
    return arr.length - 1;
  }

  console.log(lastArrayElementIndex(array));
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{

  const eachId = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(i)
    }
  }
  eachId(array)
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const eachElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
  }
  eachElement(array)
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
  const eachIdAndValue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`)
    }
  }
  eachIdAndValue(array)
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const reverseArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  reverseArray(array)
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  let result = '';
  const oneLineId = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      result = result + ' ' + i;
    }
    console.log(result);
  }
  oneLineId(array)
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  let result = '';
  const oneLineValue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      result = result + ' ' + arr[i];
    }
    console.log(result);
  }
  oneLineValue(array)
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
  let result = '';
  const oneLineValue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      result = result + ' ' + `[${i}] => ${arr[i]}`;
    }
    console.log(result);
  }
  oneLineValue(array)
}
console.groupEnd();