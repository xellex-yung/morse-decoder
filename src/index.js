const { compareIdentifiers } = require("semver");

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
    let mas = [];
    let masRes =[];
    let mas2 = [];
    let space = '**********'
    

    mas = expr.match(/.{1,10}/g);

    for(let i of mas){
        if(i !=space) { i = +i.toString();}
    }

    for(let j = 0; j< mas.length; j++){
        mas2[j] = mas[j].match(/.{1,2}/g)
        if(mas[j] ==space){
           mas2[j] = [space];
        }
       }

       for(let i = 0; i< mas2.length; i++){
        for(let j = 0; j< mas2[i].length; j++){
          if(mas2[i][j] === '10'){
            masRes.push('.')
          } else if(mas2[i][j] === '11'){
             masRes.push('-')
          } else if(mas2[i][j] ==space){
             masRes.push('space')
          }
          
        }
        masRes.push(' ')
      }
      masRes = masRes.join('').split(' ');
      for(let el in MORSE_TABLE){
        for(let c = 0; c< masRes.length; c ++){
          if(masRes[c] === el){
            masRes[c] = MORSE_TABLE[el]
          } else if(masRes[c] === 'space'){
            masRes[c] = ' ';
          }
        }
      }
      
      return masRes.join('');
}




module.exports = {
    decode
}