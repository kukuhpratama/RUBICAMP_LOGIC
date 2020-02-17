function stringManipulation(word) {
    if (
        word.charAt(0) === 'a' ||
        word.charAt(0) === 'i' ||
        word.charAt(0) === 'u' ||
        word.charAt(0) === 'e' ||
        word.charAt(0) === '0') {
        return word;

    } else {
        var k = word.slice(1, word.length).concat(`${word[0]}nyo`);
        return k;

    }
}

function sentencesManipulation(sentences) {
    var j = sentences.split(' ');
    var result = [];
    for (let i = 0; i < j.length; i++) {
        result.push(stringManipulation(j[i]));
    }

    console.log(result.join(' '));


}

sentencesManipulation('ibu pergi ke pasar bersama aku')