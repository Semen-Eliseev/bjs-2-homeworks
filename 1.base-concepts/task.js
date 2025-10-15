"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b * b - 4 * a * c;

	if (d == 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
	}
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let P = percent / 1200;
	let S = amount - contribution;
	let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let credit = parseFloat((payment * countMonths).toFixed(2));

	return credit;

}