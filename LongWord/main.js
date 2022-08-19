

// var result = task.solution.apply(null, test.parameters);
// var expected = test.expectedResult;
// if(typeof expected == 'number' && isNaN(expected)) {
//     assert.isTrue(isNaN(result))
// } else {
//     assert.deepEqual(expected, result);
// }


// Щоб знайти довжину рядка, скористайтеся вбудованою властивістю length
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;

// let x = "John";
// let y = new String("John");

// Існує 3 методи вилучення частини рядка:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// Рядок перетворюється на верхній регістр за допомогою toUpperCase():
// Рядок перетворюється на нижній регістр за допомогою toLowerCase():

// concat() з’єднує два або більше рядків (конкатенація):

// Існує 3 методи вилучення символів рядка:

// charAt(position)
// charCodeAt(position)
// Властивість access [ ]

// Рядок можна перетворити на масив за допомогою методу split():

// Метод indexOf() повертає індекс (позицію) first (першого) входження зазначеного тексту в рядок:

// Метод lastIndexOf() повертає індекс останнього входження зазначеного тексту в рядок:

// Ми можемо явно обчислити індекс останнього елемента, а потім отримати до нього доступ:
//  fruits[fruits.length - 1]   fruits.at(-1):

// pop
// Видаляє останній елемент масиву та повертає його: alert( fruits.pop() );

// shift
// Видаляє перший елемент з масиву та повертає його: alert( fruits.shift() );

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // видалимо 3 перших елементи і замінимо їх іншими
// arr.splice(0, 3, "Let's", "dance");

// alert( arr ) // отримаєм ["Let's", "dance", "right", "now"]
// Тут ми бачимо, що splice повертає масив видалених елементів:

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // видалимо 2 перших елементи
// let removed = arr.splice(0, 2);

// alert( removed ); // "I", "study" <-- масив видалених елементів

// Метод arr.forEach дозволяє запускати функцію для кожного елемента масиву…

// Його синтаксис:

// arr.forEach(function(item, index, array) {
//   // ... робимо щось з item
// });

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// // повертає масив перших двох користувачів
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

// Наприклад, тут ми перетворюємо кожен елемент на його довжину:

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// Виклик split(s) з порожнім аргументом s розбиває рядок на масив букв:

// let str = "test";

// alert( str.split('') ); // t,e,s,t


var longWordTests = [
    {
        parameters: ["localization"],
        expectedResult: "l10n"
    },
    {
        parameters: ["internationalization"],
        expectedResult: "i18n"
    },
    {
        parameters: ["word"],
        expectedResult: "word"
    },
    {
        parameters: [""],
        expectedResult: ""
    },
    {
        parameters: ["testtestasdafsafasfasfa"],
        expectedResult: ""
    },
    {
        parameters: ["1"],
        expectedResult: "1"
    }
];


// let words = 'aldladlasdsldasd';

function wordAbr(words){
        if (words.length >= 10) {
          const abr = words[0] + (words.length - 2) + words[words.length - 1];
          return abr;
        }
        else {
            return words; 
        }
    }

// console.log(wordAbr());
longWordTests.forEach(({ parameters }) => {parameters.forEach(parameter => {console.log(wordAbr(parameter))})})







  



