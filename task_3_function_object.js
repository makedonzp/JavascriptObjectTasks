// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

function createObj() {
  let obj_3 = Object.create(null);
  console.log(obj_3);
}
createObj();
