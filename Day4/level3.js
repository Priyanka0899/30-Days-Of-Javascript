let month = prompt('Enter a month:');
month = month.toLowerCase();

let days;
switch(month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        days = 31;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        days = 30;
        break;
    case 'february':
        days = 28;
        break;
    default:
        console.log('Enter a valid month.');
}

month = month.charAt(0).toUpperCase() + month.slice(1);
console.log(`${month} has ${days} days.`);
