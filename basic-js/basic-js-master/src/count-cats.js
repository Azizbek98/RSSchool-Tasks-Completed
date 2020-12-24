module.exports = function countCats(matrix) {
  	let counter = 0;
    const result = /^\^\^$/;

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix[i].length; ++j) {
            if(result.test(matrix[i][j])) {
                ++counter
            }
        }
    }
    return counter;
};
