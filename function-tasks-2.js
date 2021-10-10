// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2');
console.log('---');
{
  function mulArrBy2(arr) {
    return arr.map(e => e * 2)
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu');
console.log('---');
{
  function powerArrBy2(arr) {
    return arr.map(e => e * e)
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve)');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];
    for (i = 0; i < arr.length; i++) {
      result.push(arr[i] * i)
    }
    return result

  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const result = arr.filter(e => {
      if (e > 0) {
        return e
      }
    })
    return result
  }
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const result = arr.filter(e => {
      if (e < 0) {
        return e
      }
    })
    return result
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const result = arr.filter(e => {
      if (e % 2 === 0) {
        return e
      }
    })
    return result
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const result = arr.filter(e => {
      if (e % 2 !== 0) {
        return e
      }
    })
    return result
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  function arrAbsoluteValues(arr) {
    const result = arr.map(e => {
      if (e < 0) {
        return e * -1
      } else {
        return e
      }
    })
    return result
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\'');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const result = [];
    for (i = 0; i < arr.length; i++) {
      result.push(arr[i] ** i)
    }
    return result

  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 1 === 0){
        result.push(arr[i])
    }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
console.log('---');
{
  function absArrElements(arr) {
    const roundArr = []
    for (i = 0; i < arr.length; i++) {
      roundArr.push(Math.round(arr[i]))
    }
    return roundArr
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const everySecondEl = []
    for (i = 1; i < arr.length; i += 2) {
      everySecondEl.push(arr[i])
    }
    return everySecondEl
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const everyFifthEl = []
    for (i = 1; i < arr.length; i += 2) {
      everyFifthEl.push(arr[i])
    }
    return everyFifthEl
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    arr.forEach((e, id) => console.log(`[${id}] => ${e}`))
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum / arr.length
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minNum) {
        minNum = arr[i];
      }
    }
    return minNum;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();
