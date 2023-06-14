export const rotor1 = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
  21: 21,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
  26: 26,
};

export const rotor2 = {
  1: 22, // starting point
  2: 23,
  3: 24,
  4: 25,
  5: 26,
  6: 1,
  7: 2,
  8: 3,
  9: 4,
  10: 5,
  11: 6,
  12: 7,
  13: 8,
  14: 9,
  15: 10,
  16: 11,
  17: 12,
  18: 13,
  19: 14,
  20: 15,
  21: 16,
  22: 17,
  23: 18,
  24: 19,
  25: 20,
  26: 21,
};

export const rotor3 = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
  21: 21,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
  26: 26,
};

var Enigma = (function () {


  var Rotor,
    Rotors = [],
    Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphaDecode = {},
    alphaEncode = {};


  return {
    Initialise: function () {
      // Defining the Rotor function and its methods
      Rotor = (function () {
        class Rotor {
          constructor(rotorSettings, turnover, startPosition) {
            this.id = Rotors.length;
            this.currentPosition = 0;
            this.currentReversePosition = 0;
            this.turnover = turnover;
            this.mapLength = rotorSettings.length;
            this.element = '';

            if (startPosition) {
              this.currentPosition = startPosition;
              this.currentReversePosition = parseInt('-' + startPosition);
            }

            this.map = {};

            this.reverse = {};

            this.setMap(rotorSettings);
            document.body.addEventListener('tickOver', this.tickOver);
            this.element.onchange = Enigma.getRotorInput;

            if (startPosition) {
              this.element.value = this.pad(this.currentPosition + 1);
            }
          }
          setMap(rotorSettings) {
            if (rotorSettings !== undefined) {
              for (var i = 0; i < rotorSettings.length; i++) {
                var mapLetter = Alphabet[i];
                this.map[mapLetter] = rotorSettings[i];
                this.reverse[rotorSettings[i]] = mapLetter;
              }
            }

            this.element = document.getElementById('rotor_' + this.id);
          }
          tick() {
            if (this.mapLength - 1 === this.currentPosition) {
              this.currentPosition = 0;
              this.currentReversePosition = 0;
            } else {
              this.currentPosition++;
              this.currentReversePosition--;
            }

            if (this.currentPosition === this.turnover) {
              Enigma.Trigger('tickOver', this.id);
            }

            this.element.value = this.pad(this.currentPosition + 1);
            this.element.classList.add('run');

            return this.currentPosition;
          }
          setRotor(val) {
            if (val === 0) {
              this.currentPosition = 0;
              this.currentReversePosition = 0;
            } else {
              this.currentPosition = val;
              this.currentReversePosition = parseInt('-' + val);
            }

            this.element.value = this.pad(this.currentPosition + 1);
            this.element.classList.add('run');
            Enigma.ShiftRotors();
          }
          tickOver(request) {
            if (Rotors[request.detail + 1] !== undefined) {
              Rotors[request.detail + 1].tick();
            }
          }
          convertLetter(letter, reverse) {
            if (reverse) {
              letter = Enigma.ReverseOffset(letter, this.currentReversePosition);
              letter = alphaDecode[this.reverse[alphaEncode[letter]]];
              return Enigma.ReverseOffset(letter, this.currentReversePosition);
            } else {
              letter = Enigma.Offset(letter, this.currentPosition);
              letter = alphaDecode[this.map[alphaEncode[letter]]];
              return Enigma.Offset(letter, this.currentPosition);
            }
          }
          pad(val) {
            val += '';
            return val.length === 2 ? val : '0' + val;
          }
        }













        return Rotor;
      })();
    },
  };
})