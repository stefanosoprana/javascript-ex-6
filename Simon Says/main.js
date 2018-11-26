// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

function randomNumber(min,max) {
  var numeroCasuale = Math.floor(Math.random() * (max - min + 1) + min);
  return numeroCasuale;
}

var numeri = [];

for (var i = 0; i < 5; i++) {

  numeroRandom = randomNumber(0,99)

  numeri.push(numeroRandom);
  console.log(numeroRandom);
};

alert('I numeri da ricordare sono ' + numeri)

setTimeout(countDown, 30000);
function countDown() {

  var counter = 0;
  var numeriTotali = '';

    for (var i = 0; i < numeri.length; i++) {

      var numeroUtente = parseInt(prompt('inserisci i numeri che ti ricordi'));
      if (numeri.includes(numeroUtente)) {

        counter += 1;
        numeriTotali += numeroUtente + ' ';

        console.log('giusto');
        console.log(counter);

      }
    };

    document.writeln('I numeri che ti sei ricordato sono ' + counter + ' e sono i seguenti: ' + numeriTotali);

};
