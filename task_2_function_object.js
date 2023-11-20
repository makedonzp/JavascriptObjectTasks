// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let str = "Спичка";
let obj_2 = {
  name: "Артём",
  surname: "Спичка",
  age: 36,
};

function objFunc(str, obj_2) {
  let values = Object.values(obj_2);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == str) {
      console.log(true);
    } else if (values[i] !== str) {
      console.log(false);
    }
  }
}
objFunc(str, obj_2);
