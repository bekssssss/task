// function checkBrackets(s) {
//     let stack = [];
//     for (let char of s) {
//         if (char === '{') {
//             stack.push(char);
//         } else if (char === '}') {
//             if (stack.length && stack[stack.length - 1] === '{') {
//                 stack.pop();
//             } else {
//                 stack.push(char);
//             }
//         }
//     }
//     if (stack.length === 0) {
//         return '{}';
//     } else {
//         let openBrackets = stack.filter(char => char === '{').length;
//         let closeBrackets = stack.filter(char => char === '}').length;
//         return openBrackets > closeBrackets ? '{' : '}';
//     }
// }
//
// const inputString = "{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{{{";
// const result = checkBrackets(inputString);
// console.log(result);


function findMeetingPoint(trainString) {
    let indexA = trainString.indexOf('A');
    let indexB = trainString.indexOf('B');

    if (indexA === -1 || indexB === -1) {
        return 'Error: Both trains A and B must be present in the string.';
    }

    let meetingPoint = Math.floor((indexA + indexB) / 2);

    let resultString = trainString.substring(0, meetingPoint) + 'C' + trainString.substring(meetingPoint + 1);

    return resultString;
}

let trainString1 = '...........A......................B...........';
let trainString2 = '...A.....................................B.....';

console.log(findMeetingPoint(trainString1));
console.log(findMeetingPoint(trainString2));