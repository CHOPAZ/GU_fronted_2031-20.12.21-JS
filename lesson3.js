// Task 1.
console.log(`Задание 1:`);
for (let i = 0; i <= 10; i++) {
    if (i === 0){
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0){
        console.log(`${i} - четное число`);
    } else {
        console.log( `${i} - нечетное число`);
    }
}




// Task 2.

// Для того что бы он "вырезал" часть массива, необходимо отдельно прописать это дейстиве - arr.splice(3,2);, без присвоения новой переменной ( const arr1 = arr.splice(3,2) или в выводе (console.log(arr.splice(3,2))) - в таком случае он выдаст вырезанные элементы ([4,5]), а не массив [1,2,3,6,7]
console.log(`Задание 2:`);
const task2 = [1, 2, 3, 4, 5, 6, 7];
task2.splice(3,2);

console.log(task2);


// Task 3.
// Хотел усложнить себе задачу и вывеси массив случайных чисел, без повторения, но пока я это осилить не смог :( Возможно смог бы разбраться, но потребовалось бы много времени.
console.log(`Задание 3:`);
const task3 = [];

for (let i = 0; i < 5; i++) {
    task3.push(Math.round(Math.random() * 10));
}

const task3New = task3.map(newArray => newArray ** 2);
// // Вывожу два массива просто для проверки, правильно ли он возводит в квадрат :))
console.log(task3);
console.log(task3New);







//  Task 4.

// 1.Создайте массив, состоящий из 5 элементов. (Элементами массива должны быть произвольные цифры в диапазоне от 0 до 10.)
console.log(`Задание 4:`);
const task4 = [];

for (let i = 0; i < 5; i++) {
    task4.push(Math.round(Math.random() * 10));
}
console.log('Создали массив', task4);

// 2. Удалите значение 3, если будет такое значение.
const task4Delete = task4.filter(item => (item !== 3));
console.log('Исключили 3 из массива',task4Delete);

// 3. Каждое значение исходного элемента массива необходимо увеличить на 10%.

// Вопрос почему он странно считает и выводит значения при команде:
// const arrayPlus = array.map(arrayPlus => (arrayPlus * 1.1));
// Выводит такие значения, например : (5) [2.2, 7.700000000000001, 9.9, 7.700000000000001, 8.8]

const task4Plus = task4.map(arrayPlus => arrayPlus / 100 * 10 + arrayPlus);
console.log('Увеличили на 10%',task4Plus);








// Task 5.
console.log(`Задание 5:`);

for (let i = 0; i < 10; console.log(i), i++) {
     
}







// Task 6.
console.log(`Задание 6:`);
let task6 ='x';
console.log(task6);
for (let i = 0; i < 20; i++) {
    console.log(task6 += 'x');
    
}







