"use strict";
let sumOfRatings = 50;
let numberOfRatings = 11;
let averageRating = sumOfRatings / numberOfRatings;
console.log(averageRating);
if (averageRating >= 3 && averageRating <= 3.5) {
    console.log('Плохая эффективность, необходимо пройти переквалификацию');
}
else if (averageRating > 3.5 && averageRating < 4.5) {
    console.log('Хорошая эффективность, но нужно пройти дополнительные курсы');
}
else if (averageRating >= 4.5) {
    console.log('Отличная эффективность');
}
