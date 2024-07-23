let challenge = "30 Days Of JavaScript"
console.log(challenge);

console.log(challenge.length);
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2));
console.log(challenge.substring(3,21));

console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(''));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
console.log(challenge.replace("JavaScript","Python"));
console.log(challenge.charAt(15));

const index = challenge.indexOf('J');
console.log(challenge.charCodeAt(index));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

const sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))  

console.log(challenge.trim());

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/g));

const str='30 Days of';
console.log(str.concat(' JavaScript'));

console.log(challenge.repeat(20));
