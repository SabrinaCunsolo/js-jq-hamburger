// il codice già predisposto di una navbar con hamburger menu su mobile. Quello che troverete nella repo sono infatti:
// file html già pronto, con la struttura per la navbar, che su mobile diventa hamburger
// file css già pronto, con tutte le media query necessarie per trasformare la navbar in hamburger menu
// file js vuoto
// Dovete quindi analizzare la struttura e il css utilizzati e predisposti nella repo per integrare la vostra logica nel file js. Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.
// In altre parole, dovere scrivere solo il codice js necessario a far funzionare l'hamburger menu.


// click icona hamburger menu -> si deve visualizzare il menu mobile: trovare selettori
// NB: ricordare di inserire il "."

$('.fa-bars').click(function() {
    $('.hamburger-menu').show("active");
});
// click su icona X -> menu mobile scompare: trovare selettori
$('.fa-times').click(function() {
    $('.hamburger-menu').hide("active");
});
