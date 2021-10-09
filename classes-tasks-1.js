/* 1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina
  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price */

class Automobilis {

  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

/* 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose: */
const car1 = new Automobilis('Volkswagen', 'passat', 2000);
const car2 = new Automobilis('Skoda', 'Fabia', 3000);
const car3 = new Automobilis('Toyota', 'yaris', 4000);

/* 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai */
console.log(car1, car2, car3);

/* 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):*/
// modelius:
- console.log(car1.model);
- console.log(car2.model);
- console.log(car3.model);
// markes:
- console.log(car1.brand);
- console.log(car2.brand);
- console.log(car3.brand);
// kainas:
- console.log(car1.price);
- console.log(car2.price);
- console.log(car3.price);

/* 5. Padidinkite Automobilis objektų kainas šimtu.*/
car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;

/*6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes. */
console.log(car1, car2, car3);