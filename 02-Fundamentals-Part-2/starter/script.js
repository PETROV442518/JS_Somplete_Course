'use strict';

//codding challenge 1
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgDolhins <= avgKoalas / 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
    } else {
        console.log("No team wins!");
    }
}

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 54, 41);

checkWinner(avgDolhins, avgKoalas);

// codding challenge 2
const calcTip = function (bill) {
    const tipPercents = bill >= 50 && bill <= 300 ? 0.15 : 0.2
    const tip = tipPercents * bill
    console.log(`Tip is ${tipPercents * 100} % or $${tip}`);
    return bill + tip;
}
calcTip(100);

const bills = [125, 555, 44];
const calcTips = function (bills) {
    let output = [];
    for (let i = 0; i < bills.length; i++) {
        output[i] = calcTip(Number(bills[i]))
    }
    return output;
}
const tips = calcTips(bills);

const totals = function (bills, tips) {
    let totals = [];
    for (let i = 0; i < bills.length; i++) {
        totals[i] = (bills[i] + tips[i]);
        console.log(`total bill is ${totals[i]}`);
    }
}

totals(bills, tips);

//codding challenge 3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi.toFixed(2);
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi.toFixed(2);
    }
};
john.calcBMI();
mark.calcBMI();
const compareBMI = (mark, john) => {
    if (mark.bmi < john.bmi) {
        console.log(`John's BMI (${john.bmi.toFixed(2)}) is higher than Mark's (${mark.bmi.toFixed(2)})!"`)
    } else if (mark.bmi > john.bmi) {
        console.log(`Mark's BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})!"`)
    } else {
        console.log(`Both have equal BMI: ${mark.bmi.toFixed(2)}`)
    }
}
compareBMI(mark, john);

//codding challenge 4
const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const totals4 = [];

for (let i = 0; i < bills4.length; i++) {
    let tipPercents = (bills4[i] >= 50 && bills4[i] <= 300) ? 0.15 : 0.20;
    tips4[i] = tipPercents * bills4[i];
    totals4[i] = tips4[i] + bills4[i];
}
console.log(bills4);
console.log(tips4);
console.log(totals4);








