// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati



var numeri = [1,2,3];
for (var i = 0; i < numeri.length; i++) {
  alert(numeri[i])
  console.log(numeri[i]);
}

setTimeout(countDown, 1000);
function countDown() {

  for (var i = 0; i < 3; i++) {

    var numeroUtente = parseInt(prompt('inserisci i numeri che ti ricordi'));

    // var numeroTrovato = false;

    if (numeroUtente == numeri[i]) {

      // numeroTrovato = true;

      console.log(numeroUtente);

      // console.log(numeroTrovato);

    }
  };
};
