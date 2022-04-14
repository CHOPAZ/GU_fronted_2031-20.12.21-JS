// Task 1.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (const key in numbers){
    if (numbers[key] >= 3){
        console.log(numbers[key]);
    }
} 




// Task 2.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
};

console.log(post.author); // John
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); //  5
console.log(post.comments[1].text); // lorem ipsum 2



// Task 3.

const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
];

products.forEach(element => {
    console.log(element.price - element.price / 100 * 15 );
});


// Task 4.

const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
];

// 1.Не смог сам решить.
console.log(products.filter(element => 'photos' in element && element.photos.length > 0));
// 2. 
console.log(products.sort((price1,price2) => price1.price - price2.price ));



// Task 5.

const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const day ={};
en.forEach((key,rus) => day[key] = ru[rus]);

console.log(day);





// Task 6.

const numbers = {
  key1: {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  },
  key2: {
  keyin1: 4,
  keyin2: 5,
  keyin3: 6,
  },
}

let summ = 0;
for (let meaning in numbers){
  summ += Object.values(numbers[meaning]).reduce((a,b) => a+b);
}

console.log(summ);








    








