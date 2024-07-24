let firstName = 'Priyanka', lastName = 'Arora', country = 'india', city = 'Mansa', age= 24, isMarried= false;

console.log(typeof firstName, typeof lastName,typeof country ,typeof city, typeof age, typeof isMarried);

console.log(typeof '10' == typeof 10);
console.log(parseInt('9.8')== 10);

console.log(1=='1', true == 1, 0== '0', 1==='1', false ===0, 0==='0');

console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4' );

console.log('python'.length !== 'jargon'.length);

console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'), 'python'.includes('on') && 'jargon'.includes('on'));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());





