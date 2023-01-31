// function* generate() {
//     console.log(1);
//     yield 42;
//     console.log(2);
//     const newArgument = yield 6;
//     console.log(newArgument);
//     return 13
// }

// const res = generate();
// console.log(res);

// console.log(res.next());

// console.log(res.next());

// console.log(res.next('Super-value'));


function* incrementToHundred(){
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum+=i;
        console.log(sum);
        yield i
    }
    return 100
}

function* generateNumber(){
    let score = 0;
    while (score < 100) {
        yield score++;
    }
}

let result = generateNumber();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

let sum = 0;
for (let value of result) {
    sum+=value;
    // console.log(value)
}
console.log(sum);