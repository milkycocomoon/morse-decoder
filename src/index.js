const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let letterReplace = [];
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10) );
    }

    for (let r = 0; r < arr.length; r ++) {
        letterReplace.push(arr[r].replace(/10/gi, ".").replace(/11/gi, "-").replace(/0/gi, "").replace(/\*{10}/gi, " "));
    }

    letterReplace.forEach( (key) => {
        if (MORSE_TABLE[key] ) {
          result.push(MORSE_TABLE[key] );
        } else {
          result.push(" ");
        }
      })
      return result.join("");
}

module.exports = {
    decode
}