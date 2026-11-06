function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

// task 2 

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;

  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript is awesome", 10));
console.log(calculateEngravingPrice("I love coding", 5));
console.log(calculateEngravingPrice("Hello my dear friend", 2));

// task 3

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

// task 4

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

// task 5

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

// task 6

