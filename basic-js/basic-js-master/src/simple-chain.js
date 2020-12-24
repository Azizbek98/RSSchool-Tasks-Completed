
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments) {

      this.chain = [...this.chain, value]; // destructing

    } else {

      this.chain = [...this.chain, '']; // destructing 

    }
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position >= this.chain.length) {
      this.chain = [];
      throw 'incorrect position';
    } 

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let arr = this.chain;
    this.chain = [];
    return arr.map(item => `( ${item} )`).join('~~');
  }
};

module.exports = chainMaker;