// # Password utente con numero casuale

// - **Chiedere nome utente**
//     - dichiarare una varaibile al nome(firstName)
let firstName;
//     - assegnare alla variabile il valore restituito da un prompt (con una domanda)
firstName = prompt ('Ciao Utente, come ti chiami?');
//     - controllo funzionamento della variabile e del prompt 
console.log(firstName);
// - **Sostituzione parola in h2**
//     - dichiarare una variabile user dove assegnamo una stringa
let user = firstName;
//     - stampare l' user dentro lo spam in h2
const nameDomElement = document.getElementById('user');
nameDomElement.innerHTML = user;
// - **Chiedere il cognome utente**
//     - dichiarare  una varaibile al nome(lastName)
let lastName;
//     - assegnare alla variabile il valore restituito da un prompt (con una domanda)
lastName = prompt ('Inserisci il tuo cognome?');
//     - controllo funzionamento della variabile e del prompt
console.log(lastName);
// - **Chidere il colore preferito utente**
//     - dichiarare una varaibile al nome(favoriteColor)
let favoriteColor;
//     - assegnare alla variabile il valore restituito da un prompt (con una domanda)
favoriteColor = prompt ('Qual è il tuo colore preferito?');
//     - controllo funzionamento della variabile e del prompt
console.log(favoriteColor);    
// - **Generare un numero a caso**
//     - dichiarare  una varaibile al nome(randomNumber) ASSEGNARE il calcolo per generare numeri casuali da 1 a 1000
let randomNumber = Math.floor(Math.random() * (1000 - 1) + 1);
// - **Sostituzione h1 con le variabili**
//     - dichiarare una variabile password dove concateniamo le 4 stringhe
let password = firstName + lastName + favoriteColor + randomNumber;
//     - stampare la password dentro un h1
const messageDomElement = document.getElementById('password');
messageDomElement.innerHTML = password;