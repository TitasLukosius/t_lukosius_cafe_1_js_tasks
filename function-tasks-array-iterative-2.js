const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupCollapsed('1. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
  {
    function mapStudentsWithAvg(students) {
      const studentsWithAverages = [];
      for (let i = 0; i < students.length; i++) {
        const student = students[i];
        let allCredits = 0;
        let moduleAveragesWithWeights = 0;
        for (let x = 0; x < student.modules.length; x++) {
          const module = student.modules[x];
          allCredits += module.credits;
          let sum = 0;
          for (let k = 0; k < module.marks.length; k++) {
            const mark = module.marks[k];
            sum += mark;
          }
          const avg = module.credits * sum / module.marks.length;
          moduleAveragesWithWeights += avg;
        }
        studentsWithAverages.push({
          ...student,
          avg: moduleAveragesWithWeights / allCredits
        })
      }
      return studentsWithAverages;
    }

    console.table(mapStudentsWithAvg(students))
  }
  console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Informatikos fakulteto studentus');
{
  students.forEach((student) => {
    if (student.faculty === "Informatikos fakultetas") {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Chemijos fakulteto studentus');
{
  students.forEach((student) => {
    if (student.faculty === "Chemijos fakultetas") {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  students.forEach((student) => {
    if (student.faculty === "Elektros ir elektronikos fakultetas") {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  
  students.forEach((student) => {
    if (student.faculty === "Informatikos fakultetas") {
      student.modules.forEach(module => {
        let fullmark = 0;
        module.marks.forEach(mark => {
          fullmark += mark;
        })
        let average = fullmark / module.marks.length
        console.log(`${student.name} ${average}`);
      })
    }
  })
} 
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  students.forEach((student) => {
    if (student.faculty === "Chemijos fakultetas") {
      student.modules.forEach(module => {
        let fullmark = 0;
        module.marks.forEach(mark => {
          fullmark += mark;
        })
        let average = fullmark / module.marks.length
        console.log(`${student.name} ${average}`);
      })
    }
  })
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  students.forEach((student) => {
    if (student.faculty === "Elektros ir elektronikos fakultetas") {
      student.modules.forEach(module => {
        let fullmark = 0;
        module.marks.forEach(mark => {
          fullmark += mark;
        })
        let average = fullmark / module.marks.length
        console.log(`${student.name} ${average}`);
      })
    }
  })
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik pirmo kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 1) {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik antro kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 2) {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik trečio kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 3) {
      console.log(student.name);
    }
  })
}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti tik ketvirto kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 4) {
      console.log(student.name);
    }
  })
}
console.groupEnd();

