// Datos de los principios con ejemplos de dificultades e importancia
const principlesData = {
    1: {
        title: "Satisfacción del Cliente",
        difficulties: [
            "Definir qué constituye 'valor' para diferentes stakeholders",
            "Equilibrar entregas rápidas con calidad del software",
            "Manejar expectativas cambiantes del cliente",
            "Medir el valor real entregado vs. el percibido"
        ],
        importance: [
            "Mantiene la satisfacción y fidelidad del cliente",
            "Reduce el riesgo de cancelación del proyecto",
            "Permite feedback temprano y ajustes rápidos",
            "Genera confianza y relaciones comerciales duraderas"
        ]
    },
    2: {
        title: "Aceptación del Cambio",
        difficulties: [
            "Resistencia del equipo a cambios en trabajo ya realizado",
            "Impacto en cronogramas y presupuestos establecidos",
            "Complejidad técnica de modificar código existente",
            "Gestión de dependencias entre cambios"
        ],
        importance: [
            "Mantiene la relevancia del producto en el mercado",
            "Permite aprovechar oportunidades emergentes",
            "Reduce el desperdicio de funcionalidades obsoletas",
            "Mejora la competitividad y adaptabilidad"
        ]
    },
    3: {
        title: "Entrega Frecuente",
        difficulties: [
            "Presión constante para cumplir deadlines cortos",
            "Riesgo de entregar software con bugs",
            "Coordinación compleja entre equipos",
            "Resistencia a cambios en procesos establecidos"
        ],
        importance: [
            "Permite validación temprana de funcionalidades",
            "Reduce el riesgo de desviación de requisitos",
            "Facilita la detección temprana de problemas",
            "Mantiene el momentum y motivación del equipo"
        ]
    },
    4: {
        title: "Colaboración Diaria",
        difficulties: [
            "Diferencias de horarios y zonas horarias",
            "Barreras de comunicación entre roles técnicos y de negocio",
            "Resistencia a cambios en estructuras organizacionales",
            "Gestión de conflictos de prioridades"
        ],
        importance: [
            "Elimina malentendidos y ambigüedades",
            "Acelera la toma de decisiones",
            "Mejora la alineación entre equipos",
            "Facilita la resolución rápida de problemas"
        ]
    },
    5: {
        title: "Individuos Motivados",
        difficulties: [
            "Identificar qué motiva a cada miembro del equipo",
            "Crear un entorno de confianza y autonomía",
            "Equilibrar autonomía con responsabilidad",
            "Manejar diferentes niveles de experiencia y motivación"
        ],
        importance: [
            "Aumenta la productividad y calidad del trabajo",
            "Reduce la rotación de personal",
            "Fomenta la innovación y creatividad",
            "Mejora la satisfacción laboral y bienestar"
        ]
    },
    6: {
        title: "Comunicación Cara a Cara",
        difficulties: [
            "Equipos distribuidos geográficamente",
            "Barreras de idioma y culturales",
            "Limitaciones de tiempo y disponibilidad",
            "Pérdida de contexto en comunicaciones asíncronas"
        ],
        importance: [
            "Transmite información rica y contextual",
            "Facilita la resolución rápida de dudas",
            "Construye relaciones y confianza",
            "Reduce malentendidos y re-trabajo"
        ]
    },
    7: {
        title: "Software Funcionando",
        difficulties: [
            "Definir qué constituye 'funcionando' vs. 'completo'",
            "Presión por entregar funcionalidades incompletas",
            "Balance entre funcionalidad y estabilidad",
            "Métricas subjetivas de progreso"
        ],
        importance: [
            "Proporciona valor tangible al cliente",
            "Permite validación real de funcionalidades",
            "Reduce el riesgo de entregas fallidas",
            "Facilita la planificación y estimación"
        ]
    },
    8: {
        title: "Desarrollo Sostenible",
        difficulties: [
            "Presión por acelerar el ritmo de desarrollo",
            "Fatiga del equipo por ritmos insostenibles",
            "Balance entre velocidad y calidad",
            "Gestión de picos de trabajo y deadlines"
        ],
        importance: [
            "Mantiene la calidad del producto a largo plazo",
            "Preserva la salud y bienestar del equipo",
            "Reduce la deuda técnica y bugs",
            "Permite la escalabilidad del proceso"
        ]
    },
    9: {
        title: "Excelencia Técnica",
        difficulties: [
            "Presión por entregar rápido vs. hacerlo bien",
            "Falta de tiempo para refactoring y mejoras",
            "Resistencia a cambios en código existente",
            "Balance entre perfección y pragmatismo"
        ],
        importance: [
            "Facilita el mantenimiento y evolución del código",
            "Reduce la deuda técnica acumulada",
            "Mejora la productividad a largo plazo",
            "Permite adaptación rápida a cambios"
        ]
    },
    10: {
        title: "Simplicidad",
        difficulties: [
            "Tendencia natural a sobre-ingeniería",
            "Presión por incluir todas las funcionalidades posibles",
            "Dificultad para identificar qué es realmente necesario",
            "Resistencia a eliminar código o funcionalidades"
        ],
        importance: [
            "Reduce la complejidad y mantenimiento",
            "Facilita la comprensión y modificación del código",
            "Mejora la performance y estabilidad",
            "Permite desarrollo más rápido y confiable"
        ]
    },
    11: {
        title: "Equipos Auto-organizados",
        difficulties: [
            "Cambio de mentalidad de gestión tradicional",
            "Resistencia a ceder control y autoridad",
            "Necesidad de desarrollar habilidades de liderazgo",
            "Gestión de responsabilidades y accountability"
        ],
        importance: [
            "Aumenta la motivación y compromiso del equipo",
            "Mejora la calidad de las decisiones técnicas",
            "Facilita la adaptación y flexibilidad",
            "Desarrolla habilidades de liderazgo distribuido"
        ]
    },
    12: {
        title: "Reflexión y Ajuste",
        difficulties: [
            "Falta de tiempo para reflexionar sobre el proceso",
            "Resistencia a admitir errores o ineficiencias",
            "Dificultad para implementar cambios reales",
            "Falta de métricas para medir mejoras"
        ],
        importance: [
            "Permite la mejora continua del proceso",
            "Facilita la adaptación a nuevas circunstancias",
            "Mejora la efectividad del equipo",
            "Fomenta la cultura de aprendizaje y crecimiento"
        ]
    }
};

// Función para mostrar el modal
function showModal(principleNumber) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const difficultiesList = document.getElementById('difficulties');
    const importanceList = document.getElementById('importance');
    
    const data = principlesData[principleNumber];
    
    modalTitle.textContent = data.title;
    
    // Limpiar listas anteriores
    difficultiesList.innerHTML = '';
    importanceList.innerHTML = '';
    
    // Agregar dificultades
    data.difficulties.forEach(difficulty => {
        const li = document.createElement('li');
        li.textContent = difficulty;
        difficultiesList.appendChild(li);
    });
    
    // Agregar importancia
    data.importance.forEach(importance => {
        const li = document.createElement('li');
        li.textContent = importance;
        importanceList.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Agregar click listeners a las tarjetas
    const principleCards = document.querySelectorAll('.principle-card');
    principleCards.forEach(card => {
        card.addEventListener('click', function() {
            const principleNumber = parseInt(this.getAttribute('data-principle'));
            showModal(principleNumber);
        });
    });
    
    // Cerrar modal al hacer click en la X
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer click fuera del contenido
    const modal = document.getElementById('modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Efectos de hover ya manejados por CSS
});

// Efecto de partículas de fondo (opcional)
function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(79, 195, 247, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        document.body.appendChild(particle);
    }
}

// CSS para las partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar partículas cuando se carga la página
document.addEventListener('DOMContentLoaded', createParticles);
