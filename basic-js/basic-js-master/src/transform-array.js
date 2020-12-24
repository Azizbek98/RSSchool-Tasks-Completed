module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next': 
                if (arr[i + 1] !== undefined) i++;         
                break;

            case '--discard-prev':
                if (arr[i - 1] !== undefined) {
                    result.splice(result.length - 1, 1);
                }
                break;

            case '--double-next':
                if (arr[i + 1] !== undefined ) {
                    result = [...result, arr[i + 1]];
                }           
                break;

            case '--double-prev':
                if (arr[i - 1] !== undefined) {
                    result = [...result, arr[i - 1]];
                } 
                break;
            default: 
                result = [...result, arr[i]];
        }
    }
    return result;
};