// Función para calcular IVA
function calcularIVA(montos, tasaIVA = 0.21) {
   
    if (typeof montos === 'number') {
        montos = [montos];
    }

    if (!Array.isArray(montos)) {
        console.error('La entrada debe ser un número o un array de números.');
        return;
    }

   
    montos.forEach((monto) => {
        if (isNaN(monto) || monto <= 0) {
            console.error('Monto no válido:', monto);
            return;
        }

        const iva = monto * tasaIVA;
        const total = monto + iva;
        
        // Mostrar los resultados en la consola
        console.log(`Monto sin IVA: ${monto.toFixed(2)}€`);
        console.log(`IVA (${(tasaIVA * 100).toFixed(0)}%): ${iva.toFixed(2)}€`);
        console.log(`Total con IVA: ${total.toFixed(2)}€`);
        console.log('---------------------');
    });
}


function manejarFormulario(event) {
    event.preventDefault(); 

    const montos = [];
    const cantidadInputs = 3; 

    for (let i = 1; i <= cantidadInputs; i++) {
        const montoInput = parseFloat(document.getElementById(`monto${i}`).value);
        if (!isNaN(montoInput) && montoInput > 0) {
            montos.push(montoInput);
        }
    }

    if (montos.length === 0) {
        console.error('No se ingresaron montos válidos.');
        return;
    }

    calcularIVA(montos);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('iva-form');
    form.addEventListener('submit', manejarFormulario);
});