const castillos = [
    "Castillo de Santa barbara",
    "Castillo de Guadalest",
    "Castillo de la Atalaya",
    "Castillo Fortaleza de santa Pola",
    "Castillo de Biar",
    "Castillo de Novelda"
];

document.getElementById('spinButton').addEventListener('click', function() {
    const ruleta = document.getElementById('ruleta');
    
    // Generar un ángulo de rotación aleatorio
    const randomDeg = Math.floor(Math.random() * 360) + 3600; // Al menos 10 giros completos
    ruleta.style.transform = `rotate(${randomDeg}deg)`; // Aplicar la rotación

    // Esperar a que la animación termine
    setTimeout(function() {
        const index = Math.floor((randomDeg % 360) / (360 / castillos.length)); // Determinar el castillo ganador
        const resultado = castillos[index];
        
        // Mostrar el resultado
        document.getElementById('resultado').innerText = `¡Visita el ${resultado}!`;
    }, 4000); // Tiempo igual al tiempo de la animación (4s)
});