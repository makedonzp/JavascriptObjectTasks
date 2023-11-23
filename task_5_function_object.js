/*
                            Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

1.Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.

2.Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

3.Создайте экземпляры каждого прибора.

4.Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)*/

function ElectricDevices(name, type, weight, kilowatts, color) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.kilowatts = kilowatts;
  this.color = color;
  this.isTurnedOn = false;
  this.inPackedge = true;
}

ElectricDevices.prototype.toggleOn = function () {
  this.isTurnedOn = !this.isTurnedOn;
};
ElectricDevices.prototype.togglePackedge = function () {
  this.inPackedge = !this.inPackedge;
};

function TV(kilowatts) {
  ElectricDevices.call(this, "TV", 18.8, 17, "black");
  this.kilowatts = this.kilowatts;
}
function Refregerator(kilowatts) {
  ElectricDevices.call(this, "Refregerator", 85, 0.93, "Gray");
  this.kilowatts = this.kilowatts;
}
function Stove(kilowatts) {
  ElectricDevices.call(this, "electric stove", 2.2, 2, "black");
  this.kilowatts = this.kilowatts;
}

TV.prototype = Object.create(ElectricDevices.prototype);
TV.prototype.constructor = TV;

Refregerator.prototype = Object.create(ElectricDevices.prototype);
Refregerator.prototype.constructor = Refregerator;

Stove.prototype = Object.create(ElectricDevices.prototype);
Stove.prototype.constructor = Stove;

TV.prototype.electricPower = function (newKilowatts) {
  this.kilowatts = newKilowatts;
};
Refregerator.prototype.electricPower = function (newKilowatts) {
  this.kilowatts = newKilowatts;
};
Stove.prototype.electricPower = function (newKilowatts) {
  this.kilowatts = newKilowatts;
};

const hisence = new TV("HISENCE", "TV", 18.8, 17, "black");
const electricStove = new Stove("Leran", "electric stove", 2.2, 2, "black");
const haierRefregerator = new Refregerator(
  "Haier",
  "Refregerator",
  85,
  93,
  "Gray"
);

hisence.toggleOn();
hisence.togglePackedge();
hisence.electricPower();
hisence.toggleOn();
hisence.togglePackedge();

haierRefregerator.toggleOn();
haierRefregerator.togglePackedge();
haierRefregerator.electricPower();
haierRefregerator.toggleOn();
haierRefregerator.togglePackedge();

electricStove.toggleOn();
electricStove.togglePackedge();
electricStove.electricPower();
electricStove.toggleOn();
electricStove.togglePackedge();

if (hisence.kilowatts == NaN) {
  hisence.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован потребление`);
} else if (hisence.kilowatts == undefined) {
  hisence.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован`);
} else if (hisence.kilowatts == 0) {
  hisence.inPackedge = false;
  console.log(`Телевизор "HISENCE" запакован`);
} else {
  hisence.inPackedge = true;
  console.log(`Телевизор "HISENCE" распакован ${hisence.kilowatts} kilowatts`);
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
  let h = hisence.kilowatts;
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
