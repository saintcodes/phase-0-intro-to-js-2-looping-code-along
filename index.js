// Code your solutions in this file
const names = ["Sinclair", "Michelle", "Tsu", "Peter"];
const eventName = "birthday"

function writeCards(listOfNames, nameOfEvent) {
  const birthdayThankYouMessages = []

  for (let i = 0; i < listOfNames.length; i++) {
    console.log (`Thank you, ${listOfNames[i]}, for the wonderful ${nameOfEvent} gift!`);
    birthdayThankYouMessages.push(`Thank you, ${listOfNames[i]}, for the wonderful ${nameOfEvent} gift!`);
  }

  return birthdayThankYouMessages;  
}

writeCards(names, eventName);




function countDown(num) {
  while (num >= 0) {
    console.log (num--);
  }
}
countDown(21);