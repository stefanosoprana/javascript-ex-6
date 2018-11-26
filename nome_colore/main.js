// Il software deve chiedere all’utente il suo nome e il
// sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il
// colore del nome deve essere azzurro o rosa a
// seconda del sesso inserito

var nome = prompt('Inserisci il tuo nome');

var sesso = prompt('Sei maschio o femmina?');

var divElement = document.getElementById('active');

  divElement.innerHTML = nome;

if (sesso == 'maschio') {

  divElement.className = 'maschio';

}

else {

  divElement.className = 'femmina';

}
