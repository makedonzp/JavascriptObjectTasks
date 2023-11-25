/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
*/

let tvEnergy = Number(prompt("укажите цифрами потребление телевизора"));
let RefrigiratorEnergy = Number(
  prompt("укажите цифрами потребление холодильника")
);
let stoveEnergy = Number(prompt("укажите цифрами потребление плиты"));

class ElectricDevice {
  constructor(name, type, weight, kilowatts, color) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.kilowatts = kilowatts;
    this.color = color;
  }

  toggleOn() {
    this.isTurnedOn = !this.isTurnedOn;
  }
  togglePackedge() {
    this.inPackage = true;
  }
}

class TV extends ElectricDevice {
  constructor(name, type, weight, kilowatts, color) {
    super(name, type, weight, kilowatts, color);
  }

  electricPower(newKilowatts) {
    this.kilowatts = newKilowatts;
  }
}
class Refregerator extends ElectricDevice {
  constructor(name, type, weight, kilowatts, color) {
    super(name, type, weight, kilowatts, color);
  }

  electricPower(newKilowatts) {
    this.kilowatts = newKilowatts;
  }
}
class Stove extends ElectricDevice {
  constructor(name, type, weight, kilowatts, color) {
    super(name, type, weight, kilowatts, color);
  }

  electricPower(newKilowatts) {
    this.kilowatts = newKilowatts;
  }
}
const hisense = new TV("HISENSE", "TV", 18.8, tvEnergy, "black");
const electricStove = new Stove(
  "Leran",
  "electric stove",
  2.2,
  stoveEnergy,
  "black"
);
const haierRefregerator = new Refregerator(
  "Haier",
  "Refregerator",
  85,
  RefrigiratorEnergy,
  "Gray"
);

if (hisense.kilowatts == NaN) {
  hisense.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован потребление`);
} else if (hisense.kilowatts == undefined) {
  hisense.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован`);
} else if (hisense.kilowatts == 0) {
  hisense.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован`);
} else {
  hisense.inPackedge = true;
  console.log(`Телевизор "HISENCE" распакован ${hisense.kilowatts} kilowatts`);
}

if (haierRefregerator.kilowatts == NaN) {
  haierRefregerator.inPackedge = false;
  console.log(`Холодильник "Haier" запакован`);
} else if (haierRefregerator.kilowatts == undefined) {
  haierRefregerator.inPackedge = false;
  console.log(`Холодильник "Haier" запакован`);
} else if (haierRefregerator.kilowatts == 0) {
  haierRefregerator.inPackedge = false;
  console.log(`Холодильник "Haier" запакован`);
} else {
  haierRefregerator.inPackedge = true;
  console.log(
    `Холодильник "Haier" распакован ${haierRefregerator.kilowatts} kilowatts`
  );
}
if (electricStove.kilowatts == NaN) {
  electricStove.inPackedge = false;
  console.log(`Электроплита "Leran" запакован`);
} else if (electricStove.kilowatts == undefined) {
  electricStove.inPackedge = false;
  console.log(`Электроплита "Leran" запакован`);
} else if (electricStove.kilowatts == 0) {
  electricStove.inPackedge = false;
  console.log(`Электроплита "Leran" запакован`);
} else {
  electricStove.inPackedge = true;
  console.log(
    `Электроплита "Leran" распакован ${electricStove.kilowatts} kilowatts`
  );
}
function calculate() {
  let h = hisense.kilowatts;
  let hr = haierRefregerator.kilowatts;
  let s = electricStove.kilowatts;
  let sumPower = h + hr + s;

  if (h !== NaN && h == undefined) {
    h = 0;
    sumPower = hr + s;
  }
  if (hr !== NaN && hr == undefined) {
    hr = 0;
    sumPower = s + h;
  }
  if (s !== NaN && s == undefined) {
    s = 0;
    sumPower = hr + h;
  }

  console.log(`Суммарная мощность потребления приборов ${sumPower} kilowatts`);
}
calculate();
