// --- 1. BASE DE DATOS DEL MAPA (Los 18 Puntos) ---
// NOTA: Debe agregar el contenido real (descripción y servicios) aquí.

const puntosMapa = {
    // 1. ENTRADA POR 9 DE JULIO (Ocio / Acceso)
    '1': {
        titulo: 'ENTRADA POR 9 DE JULIO',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Acceso peatonal principal a la Facultad y dependencias.]]',
        clase: 'ocio'
    },
    // 2. CONTROL DE INGRESO (Seguridad)
    '2': {
        titulo: 'CONTROL DE INGRESO',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Control de acceso vehicular y peatonal, seguridad preventiva.]]',
        clase: 'seguridad'
    },
    // 3. RECTORADO (Autoridad)
    '3': {
        titulo: 'RECTORADO',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Máxima autoridad institucional, gestión estratégica, convenios.]]',
        clase: 'autoridad'
    },
    // 4. PATIO CENTRAL (Patio)
    '4': {
        titulo: 'PATIO CENTRAL',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Espacio de esparcimiento, reuniones y actos al aire libre.]]',
        clase: 'patio'
    },
    // 5. ANFITEATRO (Aulas)
    '5': {
        titulo: 'ANFITEATRO',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Eventos académicos, conferencias, actos de graduación.]]',
        clase: 'aulas'
    },
    // 6. DEPARTAMENTO DE FORMACIÓN HUMANÍSTICA CRISTIANA (Humanística)
    '6': {
        titulo: 'DEPTO. FORMACIÓN HUMANÍSTICA CRISTIANA',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Tutorías, programas de voluntariado y formación en valores.]]',
        clase: 'humanistica'
    },
    // 7. BASÍLICA NUESTRA SEÑORA DEL ROSARIO (Basílica)
    '7': {
        titulo: 'BASÍLICA NUESTRA SEÑORA DEL ROSARIO',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Misas, ceremonias religiosas, espacios de oración y reflexión.]]',
        clase: 'basilica'
    },
    // 8. CENTRO DE INFORMACIÓN UNIVERSITARIA (CIU)
    '8': {
        titulo: 'CENTRO DE INFORMACIÓN UNIVERSITARIA (CIU)',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Orientación a ingresantes, información de carreras y becas.]]',
        clase: 'ciu'
    },
    // 9. AULA PB1 (Aulas)
    '9': {
        titulo: 'AULA PB1',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Espacio de clases para Grado y Posgrado.]]',
        clase: 'aulas'
    },
    // 10. AULA PB2 (Aulas)
    '10': {
        titulo: 'AULA PB2',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Espacio de clases para Grado y Posgrado.]]',
        clase: 'aulas'
    },
    // 11. AULA PB3 (Aulas)
    '11': {
        titulo: 'AULA PB3',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Espacio de clases para Grado y Posgrado.]]',
        clase: 'aulas'
    },
    // 12. DIRECCIÓN DE PASTORAL (Ocio)
    '12': {
        titulo: 'DIRECCIÓN DE PASTORAL',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Acompañamiento espiritual y promoción de valores cristianos.]]',
        clase: 'ocio'
    },
    // 13. BAR (Ocio)
    '13': {
        titulo: 'BAR',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Cafetería, comidas rápidas y punto de encuentro.]]',
        clase: 'ocio'
    },
    // 14. SERVICIOS LEGALES Y TECNICOS (Admin)
    '14': {
        titulo: 'SERVICIOS LEGALES Y TECNICOS',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Asesoramiento legal y gestión de asuntos técnicos.]]',
        clase: 'admin'
    },
    // 15. BANCO SANTANDER (Admin / Excepción ROJO)
    '15': {
        titulo: 'BANCO SANTANDER',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Cajeros automáticos, atención al cliente y servicios bancarios.]]',
        clase: 'admin' // La excepción de color se maneja aparte.
    },
    // 16. TESORERÍA (Admin)
    '16': {
        titulo: 'TESORERÍA',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Gestión de fondos, cobros y pagos institucionales.]]',
        clase: 'admin'
    },
    // 17. CONTABILIDAD Y LIQUIDACIÓN DE HABERES (Admin)
    '17': {
        titulo: 'CONTABILIDAD Y LIQUIDACIÓN DE HABERES',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Liquidación de sueldos y honorarios, registro contable.]]',
        clase: 'admin'
    },
    // 18. COMPRAS (Admin)
    '18': {
        titulo: 'COMPRAS',
        contenido: '[[AGREGAR DESCRIPCIÓN]]',
        servicios: '[[AGREGAR SERVICIOS: Gestión de proveedores, adquisición de bienes y servicios.]]',
        clase: 'admin'
    }
};

// Mapeo de colores (debe coincidir con :root en styles.css)
const coloresPorClase = {
    'autoridad': '#003366',
    'aulas': '#54A054',
    'humanistica': '#FF7F50',
    'ciu': '#FFC300',
    'admin': '#008080',
    'seguridad': '#333333',
    'ocio': '#C74B95',
    'patio': '#708238',
    'basilica': '#800080',
    'banco': '#FF0000' // Color de excepción
};

// --- 2. LÓGICA DE LA INTERACCIÓN Y LEYENDA ---

const modal = document.getElementById('modal');
const tituloModal = document.getElementById('modal-titulo');
const contenidoModal = document.getElementById('modal-contenido');
const listadoLeyenda = document.getElementById('leyenda-listado');

// Función principal para construir la Leyenda (usada en el body)
function construirLeyenda() {
    let htmlLeyenda = '';
    
    // Convertir el objeto de puntos a un array de entradas y ordenarlas por ID (numéricamente)
    const puntosOrdenados = Object.entries(puntosMapa).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

    for (const [id, data] of puntosOrdenados) {
        
        // 1. Determinar el color: usa 'banco' si el ID es 15, sino usa la clase definida en el objeto
        const claseColor = (id === '15') ? 'banco' : data.clase;
        const colorFondo = coloresPorClase[claseColor] || '#000000'; 

        htmlLeyenda += `
            <div class="leyenda-item">
                <span class="leyenda-item-hotspot" style="background-color: ${colorFondo};">${id}</span>
                ${data.titulo}
            </div>
        `;
    }
    listadoLeyenda.innerHTML = htmlLeyenda;
}

// Inicializar la Leyenda
document.addEventListener('DOMContentLoaded', construirLeyenda);


// Función para la ventana modal (pop-up)
document.querySelectorAll('.hotspot').forEach(hotspot => {
    
    const id = hotspot.getAttribute('data-id');
    
    // Aplicar la excepción de color al hotspot del Banco Santander
    if (id === '15') {
        hotspot.style.backgroundColor = coloresPorClase['banco']; 
    }
    
    hotspot.addEventListener('click', function() {
        const data = puntosMapa[id];
        
        if (data) {
            tituloModal.textContent = data.titulo;
            contenidoModal.innerHTML = `
                <p>${data.contenido}</p>
                <p><strong>Servicios:</strong> ${data.servicios}</p>
            `;
            modal.style.display = 'block';
        }
    });
});

function cerrarModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
