// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    var Value = 50;
    var FirstValue = 25;
    var SecondValue = 10;
    var ThirdValue = 5;
    var FourthValue = 1;
    var FirstSum = 0;
    var SecondSum = 0;
    var ThirdSum = 0;
    var FourthSum = 0;
    var FifthSum = 0;

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency <= 0) {
        return result;
    } else {
        while (currency / Value >= 1) {
            FirstSum += 1;
            currency -= Value;
        }
        while (currency / FirstValue >= 1) {
            SecondSum += 1;
            currency -= FirstValue;
        }
        while (currency / SecondValue >= 1) {
            ThirdSum += 1;
            currency -= SecondValue;
        }
        while (currency / ThirdValue >= 1) {
            FourthSum += 1;
            currency -= ThirdValue;
        }
        while (currency / FourthValue >= 1) {
            FifthSum += 1;
            currency -= FourthValue;
        }
    }

    if (FirstSum > 0) {
      result.H = FirstSum;
    }
    if (SecondSum > 0) {
        result.Q = SecondSum;
    }
    if (ThirdSum > 0) {
        result.D = ThirdSum;
    }
    if (FourthSum > 0) {
        result.N = FourthSum;
    }
    if (FifthSum > 0) {
        result.P = FifthSum;
    }

return result;
}
