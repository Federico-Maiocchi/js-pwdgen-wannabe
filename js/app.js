

let firstName;
firstName = prompt ('Ciao Utente, come ti chiami?');
console.log(firstName);

let user = firstName;

const nameDomElement = document.getElementById('user');
nameDomElement.innerHTML = user;

let lastName;
lastName = prompt ('Inserisci il tuo cognome?');
console.log(lastName);

let favoriteColor;
favoriteColor = prompt ('Qual è il tuo colore preferito?');
console.log(favoriteColor);

let randomNumber = Math.floor(Math.random() * (1000 - 1) + 1);

let password = firstName + lastName + favoriteColor + randomNumber;

const messageDomElement = document.getElementById('password')
messageDomElement.innerHTML = password
