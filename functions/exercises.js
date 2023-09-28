

function makeLine(char = '#', size){
    let line = '';
    for(let i = 0; i < size; i ++){
        line += char;
    }
    return line
}
console.log(makeLine('a',5));

function makeSquare(char, size){
    let square = ""
    let line = makeLine(char, size);
    for(let i = 0; i < size; i++){
        square += line + '\n';
        
        }
        return square.slice(0, -1);
    }


console.log(makeSquare('@',5));

function makeRectangle(char, length, width){
    let line = makeLine(char, length);
    let rectangle = '';
    for(let i = 0; i < width; i++){
        rectangle += line + '\n';
    }
    return rectangle.slice(0, -1);
}


console.log(makeRectangle( 1, 4, 4))

function makeDownwardStairs (char, height){
    let stairs = ""
    for(let i = 0; i < height; i ++){
        stairs += makeLine(char, i + 1)+'\n'
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs('&', 5));

function makeSpaceLine(char, numSpaces, numChars){
        let spaceLine = "";
        for( i = 0; i < numSpaces * 2 + numChars; i++){
            if(i < numSpaces  || i > numSpaces + numChars -1){
                spaceLine += " ";
            } else {
                spaceLine += char;
            }
        }
        return spaceLine;
}
console.log(makeSpaceLine("2", 3, 5));

function makeIsoscelesTriangle(char, height){
    let isoscelesTriangle = "";
    
    for(let i = 0; i < height; i++){
        isoscelesTriangle += makeSpaceLine(char, height - i - 1, 2 * i + 1) + '\n';
    }
    return isoscelesTriangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle('m', 5));

function makeDiamond(char, height){
    let diamond = makeIsoscelesTriangle(char, height);
        for(let i = height - 1; i >= 0; i--){
            diamond += '\n' + makeSpaceLine(char, height - i - 1, 2 * i + 1);
        }
return diamond;
}
console.log(makeDiamond('X', 5));

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43))