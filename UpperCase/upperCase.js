var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["tEST or NOT?"],
        expectedResult: ""
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];

// function capsLock(str) {
//     let newStr = ""
//     for(let i=0; i< str.length; i++){
//         // const words = str[i].split(' ');
//         const letter = str[i].split('');
//         // if(letter.every(item => item.toUpperCase() === item)){
//             for(let i=0; i< letter.length; i++){
//             newStr += letter[i].toLowerCase();
//         }   
//     }
//     return newStr[0].toUpperCase() + newStr.slice(1) ;

// }

function capsLock(str){
    let word = str.split(' ');
    for (let i=0; i<word.length; i++){
        let letter = word[i].split('');
        if(letter.every(item => item.toUpperCase() === item) || letter.slice(1).every(item => item.toUpperCase() === item)){
            for(let i=0; i<letter.length; i++){
                if(letter[i] === letter[i].toUpperCase()){
                    letter[i] = letter[i].toLowerCase();
                }else
                    letter[i] = letter[i].toUpperCase();
            }
        }

        word[i] = letter.join('');
    }

    str = word.join(' ');

    return str 
}

capsLockTests.forEach(({ parameters }) => {parameters.forEach(parameter => {console.log(capsLock(parameter))})})