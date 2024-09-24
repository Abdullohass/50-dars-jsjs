// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// while (condition) {

// }

// do {

// } while (condition);



// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "-juft son");
//     } else {
//         console.log(i + "- toq son")
//     }
// }

let numbers = [23, 324, 45546, 6756, 878, 67, 435, 9, 24, 56];
let juft = []
let toq = []
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        juft.push(numbers[i])
    } else {
        toq.push(numbers[i])
    }
}

console.log(numbers, " Boshlanishidagi array");
console.log(juft," Juft sondagi array");






