"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  }

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  arr.push(
    (-b + Math.sqrt(discriminant)) / (2 * a),
    (-b - Math.sqrt(discriminant)) / (2 * a),
  );

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;

  let creditBody = amount - contribution;

  let monthlyPayment =
    creditBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
