function calcularTaboada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

(function () {
    const num = 5;
    calcularTaboada(num);
})();