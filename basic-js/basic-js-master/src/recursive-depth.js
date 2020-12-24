module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let max = 1;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] instanceof Array) {
            count = this.calculateDepth(arr[i]) + 1;
          }
          if (count > max) {
            max = count;
          }
        }
        return max;
        }
};