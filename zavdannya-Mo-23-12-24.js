        function calculatePower() {
            var number = parseFloat(document.getElementById('numberInput').value);
            var powerResult = Math.pow(number, 3);
            document.getElementById('powerResult').textContent =
            'Число в ступені 3: ' + powerResult;
        }

        function calculateSumAndAverage() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var num3 = parseFloat(document.getElementById('num3').value);
            var sum = num1 + num2 + num3;
            var average = sum / 3;
            document.getElementById('sumAndAverageResult').textContent =
            'Сума: ' + sum + ', середнє арифметичне: ' + average;
        }

        function convertToMiles() {
            var kilometers = parseFloat(document.getElementById('kilometersInput').value);
            var miles = kilometers * 0.621371;
            document.getElementById('milesResult').textContent =
            kilometers + ' кілометри = ' + miles.toFixed(2) + ' милі';
        }

        function calculateRemainingTime() {
            var hours = parseInt(document.getElementById('hoursInput').value);
            var minutes = parseInt(document.getElementById('minutesInput').value);
            if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
                alert("Будь ласка, введіть коректний час.");
                return;
            }
            var remainingHours = 23 - hours;
            var remainingMinutes = 59 - minutes;
            if (remainingMinutes < 0) {
                remainingMinutes += 60;
                remainingHours--;
            }
            document.getElementById('remainingTimeResult').textContent =
            'Години: ' + remainingHours + ', хвилини: ' + remainingMinutes;
        }

        function calculateSecondDigit() {
            var number = parseInt(document.getElementById('threeDigitNumberInput').value);
            if (number < 100 || number > 999) {
                alert("Будь ласка, введіть трьохзначне число.");
                return;
            }
            var secondDigit = Math.floor((number % 100) / 10);
            document.getElementById('secondDigitResult').textContent =
            'Друга цифра: ' + secondDigit;
        }

        function shiftLastDigit() {
            var number = parseInt(document.getElementById('fiveDigitNumberInput').value);
            if (number < 10000 || number > 99999) {
                alert("Будь ласка, введіть п'ятизначне число.");
                return;
            }
            var lastDigit = number % 10;
            var newNumber = lastDigit * 10000 + Math.floor(number / 10);
            document.getElementById('shiftedNumberResult').textContent =
            'Нове число: ' + newNumber;
        }

        function calculateResult() {
            var firstNumber = parseFloat(document.getElementById('firstNumberInput').value);
            var operator = document.getElementById('operatorInput').value;
            var secondNumber = parseFloat(document.getElementById('secondNumberInput').value);
            var result;

            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    if (secondNumber === 0) {
                        alert("нуль неможливе.");
                        return;
                    }
                    result = firstNumber / secondNumber;
                    break;
                default:
                    alert("Будь ласка, +, -, * або /.");
                    return;
            }
            document.getElementById('result').textContent =
            firstNumber + ' ' + operator + ' ' + secondNumber + ' = ' + result;
        }

        function calculateSalary() {
            var rate = parseFloat(document.getElementById('rateInput').value);
            var sales = parseFloat(document.getElementById('salesInput').value);
            var commission = sales * 0.1;
            var totalSalary = rate + commission;
            document.getElementById('salaryResult').textContent =
            rate + ' + 10% від ' + sales + ' = ' + totalSalary.toFixed(2);
        }
