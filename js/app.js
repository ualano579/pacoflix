// --- CONFIGURACIÓN DE ESTADOS DE LAS TEMPORADAS ---
const ESTADOS_TEMPORADAS = {
    temporada1: "completada",
    temporada2: "pendiente"  
};
// --------------------------------------------------

const nombreTemporada = window.CONFIG_TEMPORADA || 'temporada1';
const capitulos = seriesData[nombreTemporada] || [];
const estadoActualTemporada = ESTADOS_TEMPORADAS[nombreTemporada] || "pendiente";

const listaCapitulosEl = document.getElementById('lista-capitulos');
const reproductorEl = document.getElementById('reproductor');
const tituloActualEl = document.getElementById('titulo-actual');
const sinopsisActualEl = document.getElementById('sinopsis-actual');

const STORAGE_KEY = `ultimo_cap_visto_${nombreTemporada}`;
const VISTOS_KEY = `caps_vistos_historial_${nombreTemporada}`; // Almacena qué caps ya vio

// --- INIT DEL CTF / CIBERSEGURIDAD ---
// Creamos la variable trampa en el localStorage si no existe
if (!localStorage.getItem('PACOFLIX_admin')) {
    localStorage.setItem('PACOFLIX_admin', 'false');
}

// Mensaje oculto en la consola para el novio hacker
console.log("%c¿Cotilleando el código, eh? 🕵️‍♂️", "color: #e50914; font-size: 24px; font-weight: bold;");
console.log("%c[ALERTA DE SEGURIDAD] El sistema detecta que no eres Administrador. La variable 'PACOFLIX_admin' en el LocalStorage está seteada en 'false'. Eleva privilegios si tienes lo que hay que tener.", "color: #00ff00; font-size: 14px;");

// Un bucle que revisa en tiempo real si cambia el LocalStorage para activar el easter egg
setInterval(() => {
    if (localStorage.getItem('PACOFLIX_admin') === 'true') {
        localStorage.setItem('PACOFLIX_admin', 'bypass'); // Evitamos que se ejecute en bucle infinito
        const modalHacker = new bootstrap.Modal(document.getElementById('modalHacker'));
        modalHacker.show();
    }
}, 1000);
// --------------------------------------

function obtenerMensajeFaltaVideo(tituloCap) {
    if (estadoActualTemporada === "completada") {
        return {
            titulo: `❌ <span class="text-danger">${tituloCap} (Perdido en combate)</span>`,
            html: `<div class="alert alert-danger bg-black text-danger border-danger mt-3">
                <strong>¡Problemas en el paraíso!</strong> Este capítulo no lo he podido encontrar por ningún rincón de internet. Culpa de los servidores de 2010... 🤷‍♀️
            </div>`
        };
    } else {
        return {
            titulo: `⏳ <span class="text-warning">${tituloCap} (En la cola)</span>`,
            html: `<div class="alert alert-warning bg-black text-warning border-warning mt-3">
                <strong>¡Paciencia, soldado!</strong> Este capítulo todavía se está cocinando en mi ordenador o subiéndose a Drive. No seas ansias. 🚀🍳
            </div>`
        };
    }
}

function gestionarBarraCalidad(cap) {
    const textoCalidadEl = document.getElementById('texto-calidad');
    const badgeCalidadEl = document.getElementById('badge-calidad');
    if (!textoCalidadEl || !badgeCalidadEl) return;

    if (!cap || !cap.url || cap.url.trim() === "") {
        textoCalidadEl.innerHTML = `⚙️ Sin señal de vídeo.`;
        badgeCalidadEl.innerText = "N/A";
        badgeCalidadEl.className = "badge bg-dark";
        return;
    }

    if (cap.calidad === "720p") {
        textoCalidadEl.innerHTML = `✨ <strong>Nota técnica:</strong> ¡Hostia, 720p! Esto va tan fluido y nítido como cuando juegas al R6 en MI ordenador con los gráficos en ULTRA. Disfruta de no ver píxeles por una vez.`;
        badgeCalidadEl.innerText = "ULTRA";
        badgeCalidadEl.className = "badge bg-success";
    } else {
        const anio = (nombreTemporada === 'temporada2') ? '2011' : '2010';
        textoCalidadEl.innerHTML = `⚠️ <strong>Nota técnica:</strong> Calidad máxima de 360p. Te va a tocar ver la serie exactamente igual que juegas al R6 en TU ordenador patata: con los gráficos al mínimo y a 20 FPS (Ya es ${anio}, pero te sigues jodiendo).`;
        badgeCalidadEl.innerText = "LOW";
        badgeCalidadEl.className = "badge bg-danger";
    }
}

// Registra un capítulo como visto
function marcarComoVisto(id) {
    let vistos = JSON.parse(localStorage.getItem(VISTOS_KEY)) || [];
    if (!vistos.includes(Number(id))) {
        vistos.push(Number(id));
        localStorage.setItem(VISTOS_KEY, JSON.stringify(vistos));
    }
    renderizarCapitulos(); // Refrescamos la lista lateral para aplicar opacidad e iconos
}

function cargarCapitulo(id) {
    if (!id || isNaN(id)) return;
    const cap = capitulos.find(c => c.id === Number(id));
    if (!cap) return;

    marcarComoVisto(id); // Al cargarlo, lo marcamos como visto automáticamente

    if (!cap.url || cap.url.trim() === "") {
        reproductorEl.src = ""; 
        const aviso = obtenerMensajeFaltaVideo(cap.titulo);
        tituloActualEl.innerHTML = aviso.titulo;
        sinopsisActualEl.innerHTML = aviso.html + generarBotonSiguiente(id);
        gestionarBarraCalidad(null);
        actualizarTarjetasActivas(id);
        return; 
    }

    if (reproductorEl.src !== cap.url) {
        reproductorEl.src = cap.url;
    }
    
    tituloActualEl.innerText = cap.titulo;
    sinopsisActualEl.innerHTML = `<p class="lead text-secondary">${cap.sinopsis}</p>` + generarBotonSiguiente(id);
    gestionarBarraCalidad(cap);

    localStorage.setItem(STORAGE_KEY, id);
    actualizarTarjetasActivas(id);
}

function preCargarInfo(id) {
    const cap = capitulos.find(c => c.id === Number(id));
    if (!cap) return;

    if (!cap.url || cap.url.trim() === "") {
        reproductorEl.src = "";
        const aviso = obtenerMensajeFaltaVideo(cap.titulo);
        tituloActualEl.innerHTML = aviso.titulo;
        sinopsisActualEl.innerHTML = aviso.html + generarBotonSiguiente(id);
        gestionarBarraCalidad(null);
        actualizarTarjetasActivas(id);
        return;
    }

    if (reproductorEl.src !== cap.url) {
        reproductorEl.src = cap.url;
    }

    tituloActualEl.innerText = cap.titulo;
    sinopsisActualEl.innerHTML = `<p class="lead text-secondary">${cap.sinopsis}</p>` + generarBotonSiguiente(id);
    gestionarBarraCalidad(cap);
    actualizarTarjetasActivas(id);
}

// Inyección dinámica del botón "Siguiente Capítulo"
function generarBotonSiguiente(idActual) {
    const indexActual = capitulos.findIndex(c => c.id === Number(idActual));
    if (indexActual !== -1 && indexActual < capitulos.length - 1) {
        const siguienteCap = capitulos[indexActual + 1];
        return `
            <div class="mt-4 pt-3 border-top border-secondary text-end">
                <button class="btn btn-outline-warning btn-sm fw-bold px-3 py-2" onclick="cargarCapitulo(${siguienteCap.id})">
                    Siguiente Capítulo (${siguienteCap.titulo.split(':')[0]}) ➔
                </button>
            </div>`;
    }
    return ''; // Si es el último capítulo, no muestra botón
}

function renderizarCapitulos() {
    if (!listaCapitulosEl) return;
    listaCapitulosEl.innerHTML = '';
    
    const vistos = JSON.parse(localStorage.getItem(VISTOS_KEY)) || [];
    
    capitulos.forEach(cap => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-capitulo');
        tarjeta.id = `cap-${cap.id}`;
        
        // Si ya está visto, le aplicamos una clase CSS de atenuación
        if (vistos.includes(cap.id)) {
            tarjeta.classList.add('visto-atenuado');
        }
        
        const iconoFalta = (!cap.url || cap.url.trim() === "") 
            ? (estadoActualTemporada === "completada" ? "❌ " : "⏳ ") 
            : "";
            
        const textoVisto = vistos.includes(cap.id) ? " <span class='text-muted small float-end'>👁️ Visto</span>" : "";
        
        tarjeta.innerHTML = `
            <h3>${iconoFalta}${cap.titulo}${textoVisto}</h3>
            <p>${cap.sinopsis.substring(0, 60)}...</p>
        `;
        
        tarjeta.addEventListener('click', () => cargarCapitulo(cap.id));
        listaCapitulosEl.appendChild(tarjeta);
    });
}

function actualizarTarjetasActivas(idActivo) {
    document.querySelectorAll('.tarjeta-capitulo').forEach(t => t.classList.remove('activa'));
    const tarjetaActiva = document.getElementById(`cap-${idActivo}`);
    if (tarjetaActiva) tarjetaActiva.classList.add('activa');
}

function inicializarApp() {
    renderizarCapitulos();
    const ultimoVisto = localStorage.getItem(STORAGE_KEY);
    let idAProcesar = (ultimoVisto && capitulos.some(c => c.id === parseInt(ultimoVisto))) 
        ? parseInt(ultimoVisto) 
        : (capitulos.length > 0 ? capitulos[0].id : null);

    if (idAProcesar) {
        preCargarInfo(idAProcesar);
    }
}

window.addEventListener('DOMContentLoaded', inicializarApp);