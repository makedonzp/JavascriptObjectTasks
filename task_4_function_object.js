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
  console.log(`${this.name} ${this.isTurnedOn ? "включен" : "выключен"}`);
};
ElectricDevices.prototype.togglePackedge = function () {
  this.inPackedge = !this.inPackedge;
  console.log(`${this.name} ${this.inPackedge ? "запакован" : "распакован"}`);
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
  console.log(`${this.name} имеет мощность ${this.kilowatts}`);
};
Refregerator.prototype.electricPower = function (newKilowatts) {
  this.kilowatts = newKilowatts;
  console.log(`${this.name} имеет мощность ${this.kilowatts}`);
};
Stove.prototype.electricPower = function (newKilowatts) {
  this.kilowatts = newKilowatts;
  console.log(`${this.name} имеет мощность ${this.kilowatts}`);
};

const hisence = new TV("HISENCE", "TV", 18.8, 17, "black");
const haierRefregerator = new Refregerator(
  "Haier",
  "Refregerator",
  85,
  93,
  "Gray"
);
const electricStove = new Stove("Leran", "electric stove", 2.2, 2, "black");

hisence.toggleOn();
hisence.togglePackedge();
hisence.electricPower(17);
hisence.toggleOn();
hisence.togglePackedge();

haierRefregerator.toggleOn();
haierRefregerator.togglePackedge();
haierRefregerator.electricPower(93);
haierRefregerator.toggleOn();
haierRefregerator.togglePackedge();

electricStove.toggleOn();
electricStove.togglePackedge();
electricStove.electricPower(2.2);
electricStove.toggleOn();
electricStove.togglePackedge();

function calculate() {
  let h = hisence.kilowatts;
  let hr = haierRefregerator.kilowatts;
  let s = electricStove.kilowatts;
  let sumPower = h + hr + s;
  console.log(sumPower);
}
calculate();
