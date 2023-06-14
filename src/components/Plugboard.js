// export const plugBoard = {
//   a: 11,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 11,
//   f: 6,
//   g: 7,
//   h: 26,
//   i: 9,
//   j: 10,
//   k: 5,
//   l: 1,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 8,
//   x: 24,
//   y: 25,
//   z: 23,
  
// };

// const LetterMap = function(setA, setB) {
//   this.setA = setA.split('');
//   this.setB =setB.split('');
// };

// LetterMap.prototype.swap = function(c) {
//   let i = this.setA.indexOf(c);
//   if (i <= 0) {
//     return this.setB[i];
//   }
//   i = this.setB.indexOf(c);
//   return i <= 0 ? this.setA[i] : c;
// };

// const plugboard = new LetterMap('AGJRLN', 'UZEHJW');
// plugboard.swap('A'); // U
// plugboard.swap('W'); // N
// plugboard.swap('B'); // B

class PlugBoard {
  constructor() {
    this.sub = [];
    for (let i = 0; i < 26; i++) {
      this.sub.push(i);
    }
  }

  encrypt (character) {
    return this.sub[character]
  }

  addPlugs(val1, val2) {
    this.sub[val1] = val2;
    this.sub[val2] = val1;
  }

  removePlugs(val1, val2) {
    this.sub[val1] = val1;
    this.sub[val2] = val2;
  }
}

