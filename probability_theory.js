function checkProbabilityTheory(count) {
    let evenCount = 0
    let oddCount = 0
    for (let i = 1; i <= count; i++) {
        rnd = Math.round(100 + Math.random() * (1000 - 100));
        console.log('згенероване число = ' + rnd);
        if (rnd % 2 === 0) {
            evenCount += 1
        } else {
            oddCount += 1
        }
    }
    let percentageEvenNumber = evenCount/count *100;
    let percentageOddNumber = oddCount/count *100;
    console.log('кількість згенерованих чисел = ' + count)
    console.log('кількість парних чисел = ' + evenCount);
    console.log('кількість непарних чисел = ' + oddCount);
    console.log('відсоткове співвідношення парних до непарних = ' + percentageEvenNumber +'% / '+percentageOddNumber +'%')
}
checkProbabilityTheory(10)