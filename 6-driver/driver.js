
// Домашнее задание "Булевая логика"

const hasLicence = true;
const age = 18;
const isDrunk = true;

const canDrive = hasLicence && age >= 18 && !isDrunk; 

console.log(`Водить: ${canDrive ? 'Не может' : 'Может'}`);