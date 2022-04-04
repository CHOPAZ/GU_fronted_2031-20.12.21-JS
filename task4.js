let number = parseInt(prompt(`Введите число`));

console.log(`В числе ${number}:
сотен: ${Math.trunc(number / 100 % 10)}
десятых: ${Math.trunc(number % 100 * 0.1)}
единиц: ${number % 10}`);