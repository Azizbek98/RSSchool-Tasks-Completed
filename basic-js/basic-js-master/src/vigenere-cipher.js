class VigenereCipheringMachine {
    constructor(modification = true) {
        this.modification = modification;
    }
    encrypt(string, keyWord) {
        if(!string || !keyWord) throw new Error();
        let str = string.toUpperCase();
        let key = keyWord.toUpperCase();
        let result = '';
        for (let i = 0, j = 0; i < str.length; i++, j++) {
            if (!/[A-Z]/.test(str[i])) {
                result += str[i];
                j--;
            } else {
                if (!keyWord[j]) j = 0;
                let n = str.codePointAt(i) + key.codePointAt(j) - 65;
                if (n > 90) n = n - 26;
                result += String.fromCodePoint(n);    
            }       
        }
        if (this.modification) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }
    decrypt(str, keyWord) {
        if(!str || !keyWord) throw new Error();
        let key = keyWord.toUpperCase();
        let result = '';
        for (let i = 0, j = 0; i < str.length; i++, j++) {          
            if (!/[A-Z]/.test(str[i])) {
                result += str[i];
                j--;
            } else {
                if (!keyWord[j]) j = 0;
                let n;
                    n = str.codePointAt(i) - key.codePointAt(j) + 65; 
                    if (n < 65) n = n + 26;
                result += String.fromCodePoint(n);    
            }         
        }
        if (this.modification) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    } 
}
module.exports = VigenereCipheringMachine;