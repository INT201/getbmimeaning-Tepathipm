const { template } = require('@babel/core')

let bmi
function calculateBMI(weight, height) {
  return bmi= weight/Math.pow(height,2)
}

function getBMIMeaning(weight, height) {
  calculateBMI(weight, height) 
  if(bmi<18.5){
    return"Underweight"
  } else if (bmi > 18.5 && bmi < 24.9) {
    return"Normal weight"
  } else if (bmi > 25.0) {
    return "Overweight"
  }
}
const meaning=getBMIMeaning

module.exports = getBMIMeaning
