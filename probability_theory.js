function checkProbabilityTheory(count) {
    let countEvenNumber = 0
    let countOddNumber = 0
    for (i = 1; i <= count; i++) {
        rnd = Math.round(100 + Math.random() * (1000 - 100));
        console.log('згенероване число = ' + rnd);
        if (rnd % 2 === 0) {
            countEvenNumber += 1
        } else {
            countOddNumber += 1
        }
    }
    let percentageEvenNumber = countEvenNumber/count *100;
    let percentageOddNumber = countOddNumber/count *100;
    console.log('кількість згенерованих чисел = ' + count)
    console.log('кількість парних чисел = ' + countEvenNumber);
    console.log('кількість непарних чисел = ' + countOddNumber);
    console.log('відсоткове співвідношення парних до непарних = ' + percentageEvenNumber +'% / '+percentageOddNumber +'%')
}
checkProbabilityTheory(10)