function MostrarNumerosPares(num) {

    for (let i = 0; i < num.length; i++) {
        const numeros = num[i]; 
        if (numeros % 2 === 0) {
            console.log(numeros);
        }
    }
}

(function() {
    const num = [4,9,6,7,8,4,32,45,45,65,63,66,98,21,22,10];
    console.log('São pares:');
    MostrarNumerosPares(num); 
})();