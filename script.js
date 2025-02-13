// Texto que se escribe solo
const texto = "Sé que te tengo pero seguiré tratando de consquistar tu corazoncito todos los dias, porque de verdad te quiero para toda la vida ❤️. Me seguiré enamorando de ti, todos los dias, porque no puedo evitar sonreir cuando pienso en ti, porque al mirarte confirmó que eres todo lo que quiero en mi vida.";
const elementoTexto = document.getElementById('texto-automatico');
let index = 0;

function escribirTexto() {
    if (index < texto.length) {
        elementoTexto.textContent += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, 50);
    }
}

escribirTexto();

// Fondo de partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Partículas cargadas');
});

// Tarjetas interactivas
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        alert(this.getAttribute('data-mensaje'));
    });
});

// Fecha de inicio de la relación (6 de junio de 2020)
const fechaInicio = new Date('June 6, 2020 00:00:00');

function actualizarTiempoJuntos() {
    const ahora = new Date(); // Fecha y hora actual

    // Diferencia en años
    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();

    // Ajustar meses y días si es necesario
    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }

    // Calcular horas, minutos y segundos
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    // Actualizar el HTML
    document.getElementById('anos').textContent = anos.toString().padStart(2, '0');
    document.getElementById('meses').textContent = meses.toString().padStart(2, '0');
    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

// Actualizar el contador cada segundo
setInterval(actualizarTiempoJuntos, 1000);
actualizarTiempoJuntos(); // Llamar la función una vez para evitar el retraso inicial

// Lluvia de corazones en 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('corazones-3d').appendChild(renderer.domElement);

const heartGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
const hearts = [];

for (let i = 0; i < 100; i++) {
    const heart = new THREE.Mesh(heartGeometry, heartMaterial);
    heart.position.x = Math.random() * 20 - 10;
    heart.position.y = Math.random() * 20 - 10;
    heart.position.z = Math.random() * 20 - 10;
    scene.add(heart);
    hearts.push(heart);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    hearts.forEach(heart => {
        heart.position.y -= 0.05;
        if (heart.position.y < -10) heart.position.y = 10;
    });
    renderer.render(scene, camera);
}
animate();

// Efecto de confeti (suave y colorido)
document.getElementById('btn-confeti').addEventListener('click', function() {
    confetti({
        particleCount: 500, // Menos partículas
        spread: 100, // Menos dispersión
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#ffa5a5', '#ffffff'], // Colores personalizados
        shapes: ['circle', 'square'] // Formas variadas
    });
});

// Efecto de fuegos artificiales (explosivo y brillante)
document.getElementById('btn-fuegos').addEventListener('click', function() {
    confetti({
        particleCount: 500, // Más partículas
        spread: 100, // Más dispersión
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'], // Colores vibrantes
        shapes: ['star'], // Forma de estrella
        scalar: 1.5 // Tamaño más grande
    });
});

// Seleccionamos el título
const titulo = document.getElementById('titulo-especial');
const textoOriginal = titulo.textContent;

// Dividimos el texto en letras y las envolvemos en <span>
titulo.innerHTML = textoOriginal
    .split('')
    .map(letra => `<span>${letra}</span>`)
    .join('');

// Aplicamos la animación de caída
const letras = titulo.querySelectorAll('span');
letras.forEach((letra, index) => {
    letra.style.animationDelay = `${index * 0.1}s`;
});