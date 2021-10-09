const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach((person) => console.log(`${person.name}  ${person.surname}`))
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach((person) => console.log(`${person.name} - ${person.surname}`))
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusus');
{
  people.forEach((person) => console.table(`${person.name} ${person.surname} santuokos statusas: ${person.married}`))
}
console.groupEnd();

console.groupCollapsed('4. Sukurkite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const sexIncome = people.map((person) => ({ sex: person.sex, income: person.income }))
  console.log(sexIncome);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const nameSurnameSex = people.map((a) => ({ name: a.name, surname: a.surname, sex: a.sex }))
  console.log(nameSurnameSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visų vyrų vardus');
{
  people.forEach((person) => {
    if (person.sex === 'male') {
      console.log(person.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visų moterų atlyginimus');
{
  people.forEach((person) => {
    if (person.sex === 'female') {
      console.log(person.income);
    }
  })
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.forEach((person) => {
    if (person.hasCar) {
      console.log(person.name + ' ' + person.surname);
    }
  })
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{

  people.forEach((person) => {
    if (person.married) {
      console.log(person);
    }
  })
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let drivingMales = 0;
  let drivingFemales = 0;

  people.forEach(person => {
    if(person.sex === 'female' && person.hasCar) {
      drivingFemales++;
    } else if(person.sex === 'male' && person.hasCar) {
      drivingMales++
    }
  })
  const drivers = 
  {
    drivingMales: drivingMales,
    drivingFemales: drivingFemales
  }
  console.log(drivers);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const result = people.map(p => {
    const person = { ...p };
    person.salary = person.income
    delete person.income
    return person;
  })
  console.table(result)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  const result = people.map(p => {
    const person = { ...p };
    delete person.name;
    delete person.surname;
    delete person.sex;
    return person
  })
  console.table(result)
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  const result = people.map(p => {
    const person = { ...p };
    person.fullname = person.name + " " + person.surname
    delete person.name
    delete person.surname
    return person
  })
  console.table(result)
}
console.groupEnd();

