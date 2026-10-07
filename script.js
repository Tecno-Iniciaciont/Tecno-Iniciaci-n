document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const welcomeScreen = document.getElementById("welcomeScreen");
    const levelScreen = document.getElementById("levelScreen");
    const mainScreen = document.getElementById("mainScreen");
    const moduleScreen = document.getElementById("moduleScreen");

    const welcomeRobot = document.getElementById("welcomeRobot");
    const welcomeRobotMessage = document.getElementById("welcomeRobotMessage");
    const welcomeRobotListen = document.getElementById("welcomeRobotListen");

    const userName = document.getElementById("userName");
    const profileMessage = document.getElementById("profileMessage");

    const profileCards = document.querySelectorAll(".profile-card");
    const startButton = document.getElementById("startButton");

    const resumeBox = document.getElementById("resumeBox");
    const resumeText = document.getElementById("resumeText");
    const resumeButton = document.getElementById("resumeButton");

    const backToWelcome = document.getElementById("backToWelcome");

    const levelCards = document.querySelectorAll(".level-card");
    const enterCourseButton = document.getElementById("enterCourseButton");

    const levelCharacter = document.getElementById("levelCharacter");
    const levelTitle = document.getElementById("levelTitle");
    const levelMessage = document.getElementById("levelMessage");

    const welcomeName = document.getElementById("welcomeName");
    const profileDescription = document.getElementById("profileDescription");
    const profilePill = document.getElementById("profilePill");

    const dashboardLevelPill = document.querySelector(
        ".header-actions .pill:nth-of-type(2)"
    );

    const changeRouteButton =
        document.getElementById("changeRouteButton");

    const dashboardCharacter =
        document.getElementById("dashboardCharacter");

    const robotMessage =
        document.getElementById("robotMessage");

    const robotListenButton =
        document.getElementById("robotListenButton");

    const listenDashboardButton =
        document.getElementById("listenDashboardButton");

    const progressText =
        document.getElementById("progressText");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressFill =
        document.getElementById("progressFill");

    const modulesGrid =
        document.getElementById("modulesGrid");

    const profileTip =
        document.getElementById("profileTip");

    const restartLevelButton =
        document.getElementById("restartLevelButton");

    const resetProgressButton =
        document.getElementById("resetProgressButton");

    const backToDashboard =
        document.getElementById("backToDashboard");

    const moduleIcon =
        document.getElementById("moduleIcon");

    const moduleNumber =
        document.getElementById("moduleNumber");

    const moduleTitle =
        document.getElementById("moduleTitle");

    const moduleIntro =
        document.getElementById("moduleIntro");

    const listenModuleButton =
        document.getElementById("listenModuleButton");

    const moduleRobotMessage =
        document.getElementById("moduleRobotMessage");

    const questionArea =
        document.getElementById("questionArea");

    const answerFeedback =
        document.getElementById("answerFeedback");

    const feedbackIcon =
        document.getElementById("feedbackIcon");

    const feedbackTitle =
        document.getElementById("feedbackTitle");

    const feedbackMessage =
        document.getElementById("feedbackMessage");

    const retryButton =
        document.getElementById("retryButton");

    const saveModal =
        document.getElementById("saveModal");

    const closeSaveModal =
        document.getElementById("closeSaveModal");

    const confirmModal =
        document.getElementById("confirmModal");

    const confirmTitle =
        document.getElementById("confirmTitle");

    const confirmMessage =
        document.getElementById("confirmMessage");

    const cancelConfirmButton =
        document.getElementById("cancelConfirmButton");

    const acceptConfirmButton =
        document.getElementById("acceptConfirmButton");


    /* =====================================================
       DATOS DE LOS PERFILES
    ===================================================== */

    const profiles = {

        ninos: {
            name: "Niños",
            character: "🤖",
            theme: "theme-ninos",
            description:
                "Aprendé tecnología jugando, explorando y resolviendo desafíos.",
            welcome:
                "¡Hola! Soy TecnoBot. Vamos a aprender computación jugando.",
            tip:
                "Probá las actividades con calma. ¡Equivocarse también es aprender!"
        },

        adolescentes: {
            name: "Adolescentes",
            character: "💻",
            theme: "theme-adolescentes",
            description:
                "Aprendé herramientas digitales que podés usar todos los días.",
            welcome:
                "¡Genial! Soy TecnoBot. Vamos a aprender tecnología de forma práctica y dinámica.",
            tip:
                "Practicá lo aprendido y descubrí para qué podés usarlo."
        },

        adultos: {
            name: "Adultos",
            character: "🧑‍💻",
            theme: "theme-adultos",
            description:
                "Aprendé paso a paso y con ejemplos sencillos.",
            welcome:
                "Hola. Soy TecnoBot. Vamos a aprender juntos, paso a paso y sin apuro.",
            tip:
                "Tomate tu tiempo. Lo importante es comprender cada paso."
        }

    };


    /* =====================================================
       DATOS DE LOS NIVELES
    ===================================================== */

    const levels = {

        facil: {
            name: "Fácil",
            emoji: "🌱",
            description:
                "Conceptos básicos para comenzar desde cero."
        },

        intermedio: {
            name: "Intermedio",
            emoji: "⭐",
            description:
                "Practicá y aplicá lo que aprendiste."
        },

        dificil: {
            name: "Difícil",
            emoji: "🚀",
            description:
                "Desafíos para demostrar todo lo aprendido."
        }

    };


    /* =====================================================
       MÓDULOS
    ===================================================== */

    const modules = [

        {
            id: 1,
            icon: "🖥️",
            title: "Primeros pasos",
            intro:
                "Conocé las partes básicas de una computadora y aprendé para qué sirven."
        },

        {
            id: 2,
            icon: "🖱️",
            title: "Uso del mouse",
            intro:
                "Aprendé a mover, hacer clic y utilizar correctamente el mouse."
        },

        {
            id: 3,
            icon: "⌨️",
            title: "El teclado",
            intro:
                "Descubrí las teclas principales y aprendé a escribir correctamente."
        },

        {
            id: 4,
            icon: "📁",
            title: "Archivos y carpetas",
            intro:
                "Aprendé a crear, guardar, organizar y encontrar tus archivos."
        },

        {
            id: 5,
            icon: "🌐",
            title: "Internet",
            intro:
                "Conocé cómo funciona Internet y aprendé a navegar de manera segura."
        },

        {
            id: 6,
            icon: "📧",
            title: "Correo electrónico",
            intro:
                "Aprendé a enviar, recibir y organizar correos electrónicos."
        },

        {
            id: 7,
            icon: "🔐",
            title: "Seguridad digital",
            intro:
                "Aprendé a proteger tus datos, cuentas y dispositivos."
        }

    ];


    /* =====================================================
       PREGUNTAS
    ===================================================== */

    const questions = {

        facil: [

            {
                module: 1,
                question: "¿Qué dispositivo usamos para escribir?",
                answers: [
                    "Teclado",
                    "Monitor",
                    "Parlante",
                    "Impresora"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Qué dispositivo muestra imágenes y textos?",
                answers: [
                    "Mouse",
                    "Monitor",
                    "Teclado",
                    "Micrófono"
                ],
                correct: 1
            },

            {
                module: 1,
                question: "¿Qué dispositivo sirve para escuchar sonidos?",
                answers: [
                    "Parlantes",
                    "Teclado",
                    "Monitor",
                    "Mouse"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Para qué podemos usar una computadora?",
                answers: [
                    "Solo para jugar",
                    "Solo para escribir",
                    "Para realizar diferentes tareas",
                    "Solo para mirar videos"
                ],
                correct: 2
            },

            {
                module: 1,
                question: "¿Cuál es un dispositivo de entrada?",
                answers: [
                    "Monitor",
                    "Parlante",
                    "Teclado",
                    "Proyector"
                ],
                correct: 2
            },


            {
                module: 2,
                question: "¿Qué usamos para mover el puntero?",
                answers: [
                    "Mouse",
                    "Monitor",
                    "Parlante",
                    "Impresora"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué sucede al hacer clic?",
                answers: [
                    "Se apaga la computadora",
                    "Se selecciona o activa un elemento",
                    "Se imprime todo",
                    "Se borra Internet"
                ],
                correct: 1
            },

            {
                module: 2,
                question: "¿Qué botón suele abrir un menú de opciones?",
                answers: [
                    "Derecho",
                    "Central",
                    "Ninguno",
                    "Encendido"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué significa hacer doble clic?",
                answers: [
                    "Mover el mouse dos veces",
                    "Presionar rápidamente dos veces un botón",
                    "Apagar la computadora",
                    "Presionar el teclado"
                ],
                correct: 1
            },

            {
                module: 2,
                question: "¿Qué acción permite mover un objeto?",
                answers: [
                    "Arrastrar",
                    "Apagar",
                    "Imprimir",
                    "Actualizar"
                ],
                correct: 0
            },


            {
                module: 3,
                question: "¿Qué tecla deja espacios entre palabras?",
                answers: [
                    "Enter",
                    "Shift",
                    "Barra espaciadora",
                    "Esc"
                ],
                correct: 2
            },

            {
                module: 3,
                question: "¿Qué tecla sirve para borrar?",
                answers: [
                    "Backspace",
                    "Ctrl",
                    "Alt",
                    "Tab"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué tecla permite comenzar una nueva línea?",
                answers: [
                    "Shift",
                    "Enter",
                    "Esc",
                    "Alt"
                ],
                correct: 1
            },

            {
                module: 3,
                question: "¿Para qué sirve Shift?",
                answers: [
                    "Para escribir mayúsculas temporalmente",
                    "Para apagar el equipo",
                    "Para abrir Internet",
                    "Para borrar carpetas"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué tecla se usa para escribir un espacio?",
                answers: [
                    "Alt",
                    "Enter",
                    "Espacio",
                    "Esc"
                ],
                correct: 2
            },


            {
                module: 4,
                question: "¿Qué es una carpeta?",
                answers: [
                    "Un dispositivo",
                    "Un espacio para organizar archivos",
                    "Una contraseña",
                    "Una página web"
                ],
                correct: 1
            },

            {
                module: 4,
                question: "¿Qué es un archivo?",
                answers: [
                    "Información guardada",
                    "Un mouse",
                    "Una pantalla",
                    "Una conexión Wi-Fi"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Dónde encontramos archivos eliminados temporalmente?",
                answers: [
                    "Papelera de reciclaje",
                    "Teclado",
                    "Monitor",
                    "Calculadora"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué ayuda a organizar documentos?",
                answers: [
                    "Crear carpetas",
                    "Apagar el monitor",
                    "Desconectar Internet",
                    "Cambiar el mouse"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué acción conserva un documento?",
                answers: [
                    "Guardar",
                    "Cerrar sin guardar",
                    "Eliminar",
                    "Desconectar"
                ],
                correct: 0
            },


            {
                module: 5,
                question: "¿Qué es Internet?",
                answers: [
                    "Una red mundial de dispositivos",
                    "Un teclado",
                    "Un programa",
                    "Una carpeta"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué usamos para visitar sitios web?",
                answers: [
                    "Navegador",
                    "Calculadora",
                    "Papelera",
                    "Bloc de notas"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Cuál es un navegador?",
                answers: [
                    "Chrome",
                    "Teclado",
                    "Mouse",
                    "Monitor"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué permite el Wi-Fi?",
                answers: [
                    "Conectarse a una red inalámbrica",
                    "Imprimir automáticamente",
                    "Apagar el equipo",
                    "Crear carpetas"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué conviene hacer antes de abrir un enlace desconocido?",
                answers: [
                    "Revisar si es confiable",
                    "Abrirlo inmediatamente",
                    "Compartirlo",
                    "Descargar todo"
                ],
                correct: 0
            },


            {
                module: 6,
                question: "¿Qué es un correo electrónico?",
                answers: [
                    "Un mensaje enviado por Internet",
                    "Un teclado",
                    "Una carpeta",
                    "Un videojuego"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué necesitamos para enviar un correo?",
                answers: [
                    "Una cuenta de correo",
                    "Un mouse nuevo",
                    "Una impresora",
                    "Un parlante"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Dónde escribimos el mensaje?",
                answers: [
                    "Cuerpo del mensaje",
                    "Papelera",
                    "Barra de tareas",
                    "Escritorio"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué significa adjuntar un archivo?",
                answers: [
                    "Agregar un archivo al correo",
                    "Eliminar el correo",
                    "Cerrar la cuenta",
                    "Cambiar la contraseña"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Dónde llegan los mensajes recibidos?",
                answers: [
                    "Bandeja de entrada",
                    "Papelera",
                    "Escritorio",
                    "Calculadora"
                ],
                correct: 0
            },


            {
                module: 7,
                question: "¿Qué es una contraseña?",
                answers: [
                    "Una clave para proteger una cuenta",
                    "Un navegador",
                    "Una carpeta",
                    "Una imagen"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Cuál es una contraseña más segura?",
                answers: [
                    "1234",
                    "Tu nombre",
                    "Una combinación difícil de adivinar",
                    "contraseña"
                ],
                correct: 2
            },

            {
                module: 7,
                question: "¿Debemos compartir nuestra contraseña?",
                answers: [
                    "Sí",
                    "No",
                    "Siempre",
                    "Por Internet"
                ],
                correct: 1
            },

            {
                module: 7,
                question: "¿Qué hacemos ante un mensaje sospechoso?",
                answers: [
                    "Revisarlo y evitar enlaces dudosos",
                    "Compartirlo",
                    "Responder inmediatamente",
                    "Enviar nuestra contraseña"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Para qué sirve un antivirus?",
                answers: [
                    "Ayuda a detectar programas maliciosos",
                    "Escribir documentos",
                    "Crear carpetas",
                    "Aumentar el volumen"
                ],
                correct: 0
            }

        ],


        /* =====================================================
           INTERMEDIO
        ===================================================== */

        intermedio: [

            {
                module: 1,
                question: "¿Cuál es la diferencia entre hardware y software?",
                answers: [
                    "Hardware es físico y software son programas",
                    "Hardware son páginas web",
                    "Software son cables",
                    "No existe diferencia"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Qué componente procesa las instrucciones?",
                answers: [
                    "CPU",
                    "Monitor",
                    "Mouse",
                    "Parlante"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Para qué sirve la memoria RAM?",
                answers: [
                    "Para trabajar temporalmente con datos",
                    "Para imprimir",
                    "Para mostrar imágenes",
                    "Para conectar el mouse"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Qué almacena información aunque apaguemos el equipo?",
                answers: [
                    "RAM",
                    "Disco de almacenamiento",
                    "Monitor",
                    "Teclado"
                ],
                correct: 1
            },

            {
                module: 1,
                question: "¿Qué administra los recursos de la computadora?",
                answers: [
                    "Sistema operativo",
                    "Mouse",
                    "Cable HDMI",
                    "Parlante"
                ],
                correct: 0
            },


            {
                module: 2,
                question: "¿Para qué sirve el clic derecho?",
                answers: [
                    "Mostrar opciones relacionadas",
                    "Apagar el equipo",
                    "Eliminar Internet",
                    "Cambiar la contraseña"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué significa seleccionar un elemento?",
                answers: [
                    "Marcarlo para realizar una acción",
                    "Eliminarlo",
                    "Apagarlo",
                    "Desconectarlo"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué permite la rueda del mouse?",
                answers: [
                    "Desplazarse por una página",
                    "Cerrar la computadora",
                    "Cambiar el teclado",
                    "Eliminar archivos"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Cómo podemos mover un archivo con el mouse?",
                answers: [
                    "Arrastrando y soltando",
                    "Haciendo doble clic",
                    "Presionando Esc",
                    "Actualizando"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué puede indicar que el puntero cambie de forma?",
                answers: [
                    "Que hay un elemento interactivo",
                    "Que la computadora está apagada",
                    "Que el archivo fue eliminado",
                    "Que no se puede hacer nada"
                ],
                correct: 0
            },


            {
                module: 3,
                question: "¿Qué combinación copia?",
                answers: [
                    "Ctrl + C",
                    "Ctrl + X",
                    "Ctrl + Z",
                    "Ctrl + P"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué combinación pega?",
                answers: [
                    "Ctrl + V",
                    "Ctrl + S",
                    "Ctrl + A",
                    "Ctrl + F"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué combinación deshace una acción?",
                answers: [
                    "Ctrl + Z",
                    "Ctrl + C",
                    "Ctrl + P",
                    "Ctrl + B"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué hace Ctrl + S?",
                answers: [
                    "Guardar",
                    "Copiar",
                    "Cerrar",
                    "Buscar"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué tecla cambia entre campos?",
                answers: [
                    "Tab",
                    "Esc",
                    "Shift",
                    "Backspace"
                ],
                correct: 0
            },


            {
                module: 4,
                question: "¿Por qué organizamos archivos en carpetas?",
                answers: [
                    "Para encontrarlos más fácilmente",
                    "Para hacerlos desaparecer",
                    "Para evitar almacenamiento",
                    "Para apagar el equipo"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué sucede al mover un archivo?",
                answers: [
                    "Cambia de ubicación",
                    "Se convierte en programa",
                    "Se elimina",
                    "Se convierte en imagen"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué diferencia hay entre copiar y mover?",
                answers: [
                    "Copiar conserva el original y mover cambia su ubicación",
                    "Son lo mismo",
                    "Mover siempre crea una copia",
                    "Copiar elimina el original"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Cómo recuperamos un archivo de la papelera?",
                answers: [
                    "Restaurándolo",
                    "Formateándolo",
                    "Imprimiéndolo",
                    "Comprimiéndolo"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Por qué usar nombres claros?",
                answers: [
                    "Para identificar fácilmente los archivos",
                    "Para aumentar el mouse",
                    "Para mejorar el sonido",
                    "Para apagar el equipo"
                ],
                correct: 0
            },


            {
                module: 5,
                question: "¿Qué diferencia existe entre navegador y buscador?",
                answers: [
                    "El navegador accede a sitios y el buscador ayuda a encontrar información",
                    "Son exactamente lo mismo",
                    "El buscador es físico",
                    "El navegador solo sirve para escribir"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué es una URL?",
                answers: [
                    "La dirección de un recurso de Internet",
                    "Una contraseña",
                    "Un archivo de sonido",
                    "Una carpeta física"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Por qué verificar la dirección de un sitio?",
                answers: [
                    "Para evitar sitios falsos o peligrosos",
                    "Para aumentar el brillo",
                    "Para cambiar el teclado",
                    "Para mejorar el sonido"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué riesgo tiene descargar archivos desconocidos?",
                answers: [
                    "Podrían contener software malicioso",
                    "La computadora siempre mejora",
                    "Se limpia el disco",
                    "Aumenta la RAM"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué información conviene evitar publicar?",
                answers: [
                    "Datos personales sensibles",
                    "Un dibujo",
                    "Una opinión",
                    "El nombre de una materia"
                ],
                correct: 0
            },


            {
                module: 6,
                question: "¿Qué campo indica a quién enviamos un correo?",
                answers: [
                    "Para",
                    "Asunto",
                    "Firma",
                    "Papelera"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Para qué sirve el asunto?",
                answers: [
                    "Indicar brevemente el tema",
                    "Guardar archivos",
                    "Cambiar la contraseña",
                    "Eliminar el mensaje"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué debemos revisar antes de enviar un correo importante?",
                answers: [
                    "Destinatario, asunto y contenido",
                    "El color",
                    "El volumen",
                    "El mouse"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué es un archivo adjunto?",
                answers: [
                    "Un archivo incluido en el correo",
                    "Una contraseña",
                    "Un navegador",
                    "Una carpeta"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Por qué evitar adjuntos sospechosos?",
                answers: [
                    "Podrían ser peligrosos",
                    "Ocupan pantalla",
                    "Cambian el teclado",
                    "Apagan el monitor"
                ],
                correct: 0
            },


            {
                module: 7,
                question: "¿Qué mejora la seguridad de una contraseña?",
                answers: [
                    "Combinar diferentes tipos de caracteres",
                    "Usar 123456",
                    "Usar nuestro nombre",
                    "Usar la misma en todo"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Qué es el phishing?",
                answers: [
                    "Un intento de engaño para obtener información",
                    "Un programa de dibujo",
                    "Un sistema operativo",
                    "Una carpeta"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Qué hacer si un mensaje pide urgentemente tu contraseña?",
                answers: [
                    "No compartirla y verificar el mensaje",
                    "Enviar la contraseña",
                    "Publicarla",
                    "Enviar todos tus datos"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Para qué sirve la verificación en dos pasos?",
                answers: [
                    "Añade otra forma de comprobar la identidad",
                    "Duplica archivos",
                    "Aumenta el brillo",
                    "Cambia el teclado"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Por qué no usar la misma contraseña en todas las cuentas?",
                answers: [
                    "Porque si una cuenta se compromete, otras podrían estar en riesgo",
                    "Porque ocupa espacio",
                    "Porque ralentiza el mouse",
                    "Porque elimina archivos"
                ],
                correct: 0
            }

        ],


        /* =====================================================
           DIFÍCIL
        ===================================================== */

        dificil: [

            {
                module: 1,
                question: "Una computadora tiene poca memoria RAM y muchas aplicaciones abiertas. ¿Qué podría ocurrir?",
                answers: [
                    "El sistema puede volverse más lento",
                    "El monitor cambia de tamaño",
                    "El teclado deja de funcionar físicamente",
                    "Internet se convierte en una impresora"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Cuál es una función principal del sistema operativo?",
                answers: [
                    "Gestionar los recursos del equipo y permitir ejecutar aplicaciones",
                    "Servir solamente para navegar",
                    "Reemplazar la memoria RAM",
                    "Convertir el monitor en teclado"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Qué componente trabaja principalmente procesando instrucciones?",
                answers: [
                    "CPU",
                    "Monitor",
                    "Teclado",
                    "Parlante"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Por qué un SSD puede iniciar un sistema más rápidamente que un disco duro tradicional?",
                answers: [
                    "Porque suele tener tiempos de acceso menores",
                    "Porque reemplaza al sistema operativo",
                    "Porque aumenta automáticamente la RAM",
                    "Porque convierte los archivos en imágenes"
                ],
                correct: 0
            },

            {
                module: 1,
                question: "¿Qué sucede con información que estaba solamente en RAM cuando se apaga el equipo?",
                answers: [
                    "Puede perderse si no fue guardada",
                    "Se imprime automáticamente",
                    "Se convierte en una carpeta",
                    "Se envía por correo"
                ],
                correct: 0
            },


            {
                module: 2,
                question: "Querés mover un archivo sin conservarlo en la carpeta original. ¿Qué acción corresponde?",
                answers: [
                    "Arrastrarlo y soltarlo en la nueva ubicación",
                    "Copiarlo sin borrar el original",
                    "Hacer clic derecho y cerrar",
                    "Hacer doble clic"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Por qué un doble clic puede abrir un archivo?",
                answers: [
                    "Porque dos clics rápidos suelen ejecutar o abrir el elemento",
                    "Porque el mouse apaga el equipo",
                    "Porque el teclado interpreta el clic",
                    "Porque Internet abre todos los archivos"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "Si el puntero no se mueve correctamente, ¿qué conviene revisar primero?",
                answers: [
                    "La conexión del mouse y la superficie",
                    "La contraseña del correo",
                    "El nombre de una carpeta",
                    "El brillo"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué ventaja tiene el clic derecho?",
                answers: [
                    "Permite acceder a opciones relacionadas con el elemento",
                    "Aumenta la memoria RAM",
                    "Cambia el sistema operativo",
                    "Elimina virus automáticamente"
                ],
                correct: 0
            },

            {
                module: 2,
                question: "¿Qué puede pasar si arrastrás varios archivos accidentalmente?",
                answers: [
                    "Podrías moverlos sin querer",
                    "Se convierten en programas",
                    "Se apaga la computadora",
                    "Se cambia la contraseña"
                ],
                correct: 0
            },


            {
                module: 3,
                question: "¿Cómo moverías un texto usando atajos de teclado?",
                answers: [
                    "Ctrl + X y luego Ctrl + V",
                    "Ctrl + C y Ctrl + C",
                    "Ctrl + Z y Ctrl + P",
                    "Ctrl + A y Ctrl + S"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué hace normalmente Ctrl + Z?",
                answers: [
                    "Deshace una acción",
                    "Imprime",
                    "Copia todo",
                    "Cierra Internet"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué combinación selecciona todo el contenido?",
                answers: [
                    "Ctrl + A",
                    "Ctrl + S",
                    "Ctrl + X",
                    "Ctrl + P"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Por qué son útiles los atajos de teclado?",
                answers: [
                    "Permiten realizar algunas tareas rápidamente",
                    "Reemplazan todos los programas",
                    "Aumentan físicamente la memoria",
                    "Evitan guardar archivos"
                ],
                correct: 0
            },

            {
                module: 3,
                question: "¿Qué tecla puede utilizarse para desplazarse entre campos?",
                answers: [
                    "Tab",
                    "Esc",
                    "Caps Lock",
                    "Backspace"
                ],
                correct: 0
            },


            {
                module: 4,
                question: "Tenés documentos de diferentes materias. ¿Cómo sería mejor organizarlos?",
                answers: [
                    "Crear carpetas separadas para cada materia",
                    "Guardar todo con el mismo nombre",
                    "Eliminar archivos antiguos",
                    "Colocar todo en la papelera"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué puede ocurrir si eliminás un archivo importante sin copia?",
                answers: [
                    "Podrías perder acceso al archivo",
                    "Se convierte en carpeta",
                    "Aumenta la memoria",
                    "Se envía automáticamente por correo"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué ayuda a evitar perder trabajos importantes?",
                answers: [
                    "Mantener copias de seguridad",
                    "Guardar todo en la papelera",
                    "Usar siempre el mismo nombre",
                    "No guardar"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué puede suceder si guardamos dos archivos con el mismo nombre en la misma carpeta?",
                answers: [
                    "El sistema puede pedir reemplazarlo o cambiar el nombre",
                    "Los dos desaparecen",
                    "La computadora se convierte en impresora",
                    "Internet se desconecta"
                ],
                correct: 0
            },

            {
                module: 4,
                question: "¿Qué facilita encontrar un archivo después de mucho tiempo?",
                answers: [
                    "Nombres claros y carpetas organizadas",
                    "Guardar todo en el escritorio",
                    "Nombres aleatorios",
                    "Eliminar las carpetas"
                ],
                correct: 0
            },


            {
                module: 5,
                question: "Recibís un enlace que dice que ganaste un premio y pide iniciar sesión. ¿Qué hacés?",
                answers: [
                    "Verificar la legitimidad antes de introducir datos",
                    "Ingresar inmediatamente",
                    "Compartir el enlace",
                    "Descargar todo"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué indica HTTPS?",
                answers: [
                    "La conexión utiliza cifrado, aunque no garantiza por sí sola que el sitio sea confiable",
                    "Garantiza que nunca sea falso",
                    "Hace Internet gratuito",
                    "Elimina virus"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué riesgo puede existir al conectarse a una red pública desconocida?",
                answers: [
                    "Puede existir mayor riesgo de exposición de información",
                    "La computadora aumenta su memoria",
                    "Los archivos se organizan solos",
                    "El teclado cambia permanentemente"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Por qué verificar la fuente de información en Internet?",
                answers: [
                    "Porque no toda la información es correcta o confiable",
                    "Porque todas las páginas tienen virus",
                    "Porque Internet solo tiene información oficial",
                    "Porque los navegadores inventan todo"
                ],
                correct: 0
            },

            {
                module: 5,
                question: "¿Qué conviene hacer antes de descargar un programa de una página desconocida?",
                answers: [
                    "Investigar la fuente y comprobar que sea confiable",
                    "Descargar inmediatamente",
                    "Desactivar la seguridad",
                    "Compartir contraseñas"
                ],
                correct: 0
            },


            {
                module: 6,
                question: "Un correo parece provenir de un servicio conocido y pide tu contraseña mediante un enlace. ¿Qué es más seguro?",
                answers: [
                    "No usar el enlace directamente y verificar mediante el sitio oficial",
                    "Introducir la contraseña",
                    "Responder con la contraseña",
                    "Publicar el correo"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Por qué revisar el destinatario antes de enviar un correo?",
                answers: [
                    "Para evitar enviar información a una persona equivocada",
                    "Para aumentar almacenamiento",
                    "Para mejorar el sonido",
                    "Para acelerar el mouse"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué puede indicar un archivo adjunto inesperado de un desconocido?",
                answers: [
                    "Podría representar un riesgo",
                    "Siempre es seguro",
                    "Es automáticamente una fotografía",
                    "Es una actualización"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué ventaja ofrece la verificación en dos pasos?",
                answers: [
                    "Añade otra capa de protección",
                    "Elimina todos los correos",
                    "Hace los mensajes más largos",
                    "Elimina la contraseña"
                ],
                correct: 0
            },

            {
                module: 6,
                question: "¿Qué debería tener un correo académico bien organizado?",
                answers: [
                    "Destinatario correcto, asunto claro, mensaje ordenado y archivos necesarios",
                    "Solo un emoji",
                    "La contraseña",
                    "Enlaces desconocidos"
                ],
                correct: 0
            },


            {
                module: 7,
                question: "Un mensaje amenaza con bloquear una cuenta si no entregás inmediatamente tu contraseña. ¿Qué señal aparece?",
                answers: [
                    "Presión o urgencia para obtener información confidencial",
                    "El mensaje tiene una fecha",
                    "La pantalla está encendida",
                    "El teclado funciona"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Qué es una copia de seguridad?",
                answers: [
                    "Una copia de información para recuperarla si se pierde",
                    "Una contraseña",
                    "Un navegador",
                    "Una carpeta temporal"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Por qué son importantes las actualizaciones de seguridad?",
                answers: [
                    "Pueden corregir vulnerabilidades",
                    "Solo cambian el fondo",
                    "Eliminan archivos",
                    "Hacen innecesaria la seguridad"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Qué información nunca deberías proporcionar mediante un mensaje sospechoso?",
                answers: [
                    "Contraseñas y datos confidenciales",
                    "El nombre de una materia",
                    "Una opinión",
                    "Un color"
                ],
                correct: 0
            },

            {
                module: 7,
                question: "¿Cuál es la mejor reacción ante una posible estafa digital?",
                answers: [
                    "Detenerse, verificar y no compartir datos hasta confirmar",
                    "Responder rápidamente",
                    "Enviar los datos",
                    "Compartirlo con desconocidos"
                ],
                correct: 0
            }

        ]

    };


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentProfile = null;
    let currentLevel = null;
    let currentModule = null;

    let currentQuestionIndex = 0;
    let moduleQuestions = [];

    let confirmAction = null;


    /* =====================================================
       GUARDADO
    ===================================================== */

    const STORAGE_KEY =
        "tecnoIniciacionProgress";


    function getAllProgress() {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return {};
        }

        try {
            return JSON.parse(saved);
        } catch (error) {
            return {};
        }

    }


    function getProgress(
        profile,
        level
    ) {

        const all =
            getAllProgress();

        if (!all[profile]) {
            all[profile] = {};
        }

        if (!all[profile][level]) {

            all[profile][level] = {
                completed: []
            };

        }

        return all[profile][level];

    }


    function saveProgress(
        profile,
        level,
        progress
    ) {

        const all =
            getAllProgress();

        if (!all[profile]) {
            all[profile] = {};
        }

        all[profile][level] =
            progress;

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(all)
        );

    }


    /* =====================================================
       CAMBIAR PANTALLA
    ===================================================== */

    function showScreen(screen) {

        [
            welcomeScreen,
            levelScreen,
            mainScreen,
            moduleScreen
        ].forEach(function (item) {

            if (item) {
                item.classList.add("hidden");
            }

        });

        if (screen) {
            screen.classList.remove("hidden");
        }

    }


    /* =====================================================
       VOZ DEL ROBOT
    ===================================================== */

    function speak(text) {

        if (
            !("speechSynthesis" in window)
        ) {

            alert(
                "Tu navegador no permite reproducir la voz."
            );

            return;
        }

        window.speechSynthesis.cancel();

        const voice =
            new SpeechSynthesisUtterance(
                text
            );

        voice.lang = "es-ES";
        voice.rate = 0.9;
        voice.pitch = 1.1;
        voice.volume = 1;

        window.speechSynthesis.speak(
            voice
        );

    }


    /* =====================================================
       ROBOT DE BIENVENIDA
    ===================================================== */

    if (welcomeRobotListen) {

        welcomeRobotListen.addEventListener(
            "click",
            function () {

                speak(
                    welcomeRobotMessage.textContent
                );

            }
        );

    }


    /* =====================================================
       ELEGIR PERFIL
    ===================================================== */

    profileCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    profileCards.forEach(
                        function (other) {

                            other.classList.remove(
                                "selected"
                            );

                        }
                    );

                    card.classList.add(
                        "selected"
                    );

                    currentProfile =
                        card.dataset.profile;

                    document.body.className =
                        profiles[
                            currentProfile
                        ].theme;

                    profileMessage.textContent =
                        profiles[
                            currentProfile
                        ].description;

                    welcomeRobot.textContent =
                        profiles[
                            currentProfile
                        ].character;

                    welcomeRobotMessage.textContent =
                        profiles[
                            currentProfile
                        ].welcome;

                    startButton.disabled =
                        false;

                    resumeBox.classList.remove(
                        "hidden"
                    );

                    resumeText.textContent =
                        `Perfil seleccionado: ${profiles[currentProfile].name}.`;

                }
            );

        }
    );


    /* =====================================================
       COMENZAR
    ===================================================== */

    startButton.addEventListener(
        "click",
        function () {

            const name =
                userName.value.trim();

            if (name === "") {

                alert(
                    "Por favor, escribí tu nombre primero."
                );

                userName.focus();

                return;
            }

            if (!currentProfile) {

                alert(
                    "Primero elegí un perfil."
                );

                return;
            }

            levelCharacter.textContent =
                profiles[
                    currentProfile
                ].character;

            levelTitle.textContent =
                `¡Hola, ${name}! ¿Qué nivel querés comenzar?`;

            levelMessage.textContent =
                profiles[
                    currentProfile
                ].welcome;

            showScreen(
                levelScreen
            );

        }
    );


    /* =====================================================
       VOLVER A BIENVENIDA
    ===================================================== */

    backToWelcome.addEventListener(
        "click",
        function () {

            showScreen(
                welcomeScreen
            );

        }
    );


    /* =====================================================
       ELEGIR NIVEL
    ===================================================== */

    levelCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    levelCards.forEach(
                        function (other) {

                            other.classList.remove(
                                "selected"
                            );

                        }
                    );

                    card.classList.add(
                        "selected"
                    );

                    currentLevel =
                        card.dataset.level;

                    enterCourseButton.disabled =
                        false;

                }
            );

        }
    );


    /* =====================================================
       ENTRAR AL CURSO
    ===================================================== */

    enterCourseButton.addEventListener(
        "click",
        function () {

            if (!currentProfile) {

                alert(
                    "Elegí un perfil."
                );

                return;
            }

            if (!currentLevel) {

                alert(
                    "Elegí un nivel."
                );

                return;
            }

            welcomeName.textContent =
                userName.value.trim();

            profilePill.textContent =
                profiles[
                    currentProfile
                ].name;

            dashboardLevelPill.textContent =
                levels[
                    currentLevel
                ].name;

            profileDescription.textContent =
                profiles[
                    currentProfile
                ].description;

            dashboardCharacter.textContent =
                profiles[
                    currentProfile
                ].character;

            robotMessage.textContent =
                profiles[
                    currentProfile
                ].welcome;

            profileTip.textContent =
                `💡 Consejo de TecnoBot: ${profiles[currentProfile].tip}`;

            updateDashboard();

            showScreen(
                mainScreen
            );

            saveModal.classList.remove(
                "hidden"
            );

        }
    );


    /* =====================================================
       CERRAR MODAL
    ===================================================== */

    closeSaveModal.addEventListener(
        "click",
        function () {

            saveModal.classList.add(
                "hidden"
            );

        }
    );


    /* =====================================================
       ACTUALIZAR PROGRESO
    ===================================================== */

    function updateDashboard() {

        if (
            !currentProfile ||
            !currentLevel
        ) {
            return;
        }

        const progress =
            getProgress(
                currentProfile,
                currentLevel
            );

        const completed =
            progress.completed.length;

        const total =
            modules.length;

        const percent =
            Math.round(
                (completed / total) * 100
            );

        progressText.textContent =
            `${completed} de ${total} módulos completados`;

        progressPercent.textContent =
            `${percent}%`;

        progressFill.style.width =
            `${percent}%`;

        renderModules();

    }


    /* =====================================================
       CREAR MÓDULOS
    ===================================================== */

    function renderModules() {

        modulesGrid.innerHTML = "";

        const progress =
            getProgress(
                currentProfile,
                currentLevel
            );

        modules.forEach(
            function (module, index) {

                const completed =
                    progress.completed.includes(
                        module.id
                    );

                let unlocked = false;

                if (index === 0) {

                    unlocked = true;

                } else {

                    unlocked =
                        progress.completed.includes(
                            modules[
                                index - 1
                            ].id
                        );

                }

                const card =
                    document.createElement(
                        "button"
                    );

                card.type =
                    "button";

                card.className =
                    "module-card";

                if (!unlocked) {
                    card.classList.add(
                        "locked"
                    );
                }

                if (completed) {
                    card.classList.add(
                        "completed"
                    );
                }

                let status = "🔒";

                if (completed) {
                    status = "✅";
                } else if (unlocked) {
                    status = "▶️";
                }

                card.innerHTML = `

                    <div class="module-card-icon">
                        ${module.icon}
                    </div>

                    <div class="module-card-content">

                        <span>
                            Módulo ${module.id}
                        </span>

                        <h3>
                            ${module.title}
                        </h3>

                        <p>
                            ${module.intro}
                        </p>

                    </div>

                    <div class="module-card-status">
                        ${status}
                    </div>

                `;

                if (unlocked) {

                    card.addEventListener(
                        "click",
                        function () {

                            openModule(
                                module.id
                            );

                        }
                    );

                }

                modulesGrid.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       ABRIR MÓDULO
    ===================================================== */

    function openModule(moduleId) {

        currentModule =
            moduleId;

        currentQuestionIndex =
            0;

        const allQuestions =
            questions[
                currentLevel
            ];

        moduleQuestions =
            allQuestions.filter(
                function (question) {

                    return (
                        question.module ===
                        moduleId
                    );

                }
            );

        const module =
            modules.find(
                function (item) {

                    return (
                        item.id ===
                        moduleId
                    );

                }
            );

        if (!module) {
            return;
        }

        moduleIcon.textContent =
            module.icon;

        moduleNumber.textContent =
            `MÓDULO ${module.id}`;

        moduleTitle.textContent =
            module.title;

        moduleIntro.textContent =
            module.intro;

        moduleRobotMessage.textContent =
            profiles[
                currentProfile
            ].welcome;

        answerFeedback.classList.add(
            "hidden"
        );

        showScreen(
            moduleScreen
        );

        renderQuestion();

    }


    /* =====================================================
       MOSTRAR PREGUNTA
    ===================================================== */

    function renderQuestion() {

        if (
            moduleQuestions.length === 0
        ) {
            return;
        }

        answerFeedback.classList.add(
            "hidden"
        );

        const question =
            moduleQuestions[
                currentQuestionIndex
            ];

        questionArea.innerHTML = "";

        const number =
            document.createElement(
                "p"
            );

        number.className =
            "question-number";

        number.textContent =
            `Pregunta ${currentQuestionIndex + 1} de ${moduleQuestions.length}`;


        const title =
            document.createElement(
                "h2"
            );

        title.className =
            "question-title";

        title.textContent =
            question.question;


        const answers =
            document.createElement(
                "div"
            );

        answers.className =
            "answers-container";


        /* CREAR RESPUESTAS */

        const shuffled =
            question.answers.map(
                function (answer, index) {

                    return {
                        text: answer,
                        correct:
                            index ===
                            question.correct
                    };

                }
            );


        /* MEZCLAR */

        shuffled.sort(
            function () {

                return (
                    Math.random() -
                    0.5
                );

            }
        );


        shuffled.forEach(
            function (answer) {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "answer-button";

                button.textContent =
                    answer.text;

                button.addEventListener(
                    "click",
                    function () {

                        checkAnswer(
                            answer.correct,
                            button
                        );

                    }
                );

                answers.appendChild(
                    button
                );

            }
        );


        questionArea.appendChild(
            number
        );

        questionArea.appendChild(
            title
        );

        questionArea.appendChild(
            answers
        );

    }


    /* =====================================================
       COMPROBAR RESPUESTA
    ===================================================== */

    function checkAnswer(
        correct,
        selectedButton
    ) {

        const buttons =
            questionArea.querySelectorAll(
                ".answer-button"
            );

        buttons.forEach(
            function (button) {

                button.disabled =
                    true;

            }
        );


        answerFeedback.classList.remove(
            "hidden"
        );


        if (correct) {

            selectedButton.classList.add(
                "correct"
            );

            feedbackIcon.textContent =
                "🎉";

            feedbackTitle.textContent =
                "¡Respuesta correcta!";

            feedbackMessage.textContent =
                "¡Muy bien! Estás aprendiendo cada vez más.";

            if (
                currentQuestionIndex <
                moduleQuestions.length - 1
            ) {

                retryButton.textContent =
                    "➡️ Siguiente pregunta";

                retryButton.onclick =
                    function () {

                        currentQuestionIndex++;

                        renderQuestion();

                    };

            } else {

                retryButton.textContent =
                    "🏆 Completar módulo";

                retryButton.onclick =
                    function () {

                        completeModule();

                    };

            }

        } else {

            selectedButton.classList.add(
                "incorrect"
            );

            feedbackIcon.textContent =
                "💡";

            feedbackTitle.textContent =
                "No es correcto";

            feedbackMessage.textContent =
                "No te preocupes. Podés intentarlo nuevamente.";

            retryButton.textContent =
                "🔄 Intentar nuevamente";

            retryButton.onclick =
                function () {

                    renderQuestion();

                };

        }

    }


    /* =====================================================
       COMPLETAR MÓDULO
    ===================================================== */

    function completeModule() {

        const progress =
            getProgress(
                currentProfile,
                currentLevel
            );

        if (
            !progress.completed.includes(
                currentModule
            )
        ) {

            progress.completed.push(
                currentModule
            );

        }

        saveProgress(
            currentProfile,
            currentLevel,
            progress
        );


        feedbackIcon.textContent =
            "🏆";

        feedbackTitle.textContent =
            "¡Módulo completado!";

        feedbackMessage.textContent =
            "¡Excelente! Desbloqueaste el siguiente módulo.";

        retryButton.textContent =
            "📚 Volver a mis módulos";

        retryButton.onclick =
            function () {

                updateDashboard();

                showScreen(
                    mainScreen
                );

            };

    }


    /* =====================================================
       VOLVER AL PANEL
    ===================================================== */

    backToDashboard.addEventListener(
        "click",
        function () {

            updateDashboard();

            showScreen(
                mainScreen
            );

        }
    );


    /* =====================================================
       ROBOT DEL PANEL
    ===================================================== */

    robotListenButton.addEventListener(
        "click",
        function () {

            speak(
                robotMessage.textContent
            );

        }
    );


    listenDashboardButton.addEventListener(
        "click",
        function () {

            speak(
                "Estás en tu panel de aprendizaje. " +
                robotMessage.textContent
            );

        }
    );


    /* =====================================================
       ROBOT DEL MÓDULO
    ===================================================== */

    listenModuleButton.addEventListener(
        "click",
        function () {

            speak(
                moduleTitle.textContent +
                ". " +
                moduleIntro.textContent +
                ". " +
                moduleRobotMessage.textContent
            );

        }
    );


    /* =====================================================
       CAMBIAR RUTA
    ===================================================== */

    changeRouteButton.addEventListener(
        "click",
        function () {

            currentLevel = null;

            levelCards.forEach(
                function (card) {

                    card.classList.remove(
                        "selected"
                    );

                }
            );

            enterCourseButton.disabled =
                true;

            showScreen(
                levelScreen
            );

        }
    );


    /* =====================================================
       REINICIAR NIVEL
    ===================================================== */

    restartLevelButton.addEventListener(
        "click",
        function () {

            openConfirm(
                "¿Reiniciar nivel?",
                "Se eliminará el progreso de este nivel.",
                function () {

                    const all =
                        getAllProgress();

                    if (
                        all[currentProfile]
                    ) {

                        delete all[
                            currentProfile
                        ][currentLevel];

                    }

                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(all)
                    );

                    updateDashboard();

                }
            );

        }
    );


    /* =====================================================
       BORRAR TODO EL PROGRESO
    ===================================================== */

    resetProgressButton.addEventListener(
        "click",
        function () {

            openConfirm(
                "¿Borrar progreso?",
                "Se eliminará todo el progreso de este perfil.",
                function () {

                    const all =
                        getAllProgress();

                    delete all[
                        currentProfile
                    ];

                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(all)
                    );

                    currentLevel =
                        null;

                    updateDashboard();

                    showScreen(
                        welcomeScreen
                    );

                }
            );

        }
    );


    /* =====================================================
       MODAL DE CONFIRMACIÓN
    ===================================================== */

    function openConfirm(
        title,
        message,
        action
    ) {

        confirmTitle.textContent =
            title;

        confirmMessage.textContent =
            message;

        confirmAction =
            action;

        confirmModal.classList.remove(
            "hidden"
        );

    }


    cancelConfirmButton.addEventListener(
        "click",
        function () {

            confirmAction = null;

            confirmModal.classList.add(
                "hidden"
            );

        }
    );


    acceptConfirmButton.addEventListener(
        "click",
        function () {

            if (confirmAction) {
                confirmAction();
            }

            confirmAction = null;

            confirmModal.classList.add(
                "hidden"
            );

        }
    );


    /* =====================================================
       CONTINUAR
    ===================================================== */

    resumeButton.addEventListener(
        "click",
        function () {

            if (!currentProfile) {
                return;
            }

            const order = [
                "facil",
                "intermedio",
                "dificil"
            ];

            let foundLevel =
                "facil";

            for (
                let i = 0;
                i < order.length;
                i++
            ) {

                const progress =
                    getProgress(
                        currentProfile,
                        order[i]
                    );

                if (
                    progress.completed.length <
                    modules.length
                ) {

                    foundLevel =
                        order[i];

                    break;

                }

            }

            currentLevel =
                foundLevel;

            enterCourseButton.disabled =
                false;

            levelCards.forEach(
                function (card) {

                    card.classList.remove(
                        "selected"
                    );

                    if (
                        card.dataset.level ===
                        currentLevel
                    ) {

                        card.classList.add(
                            "selected"
                        );

                    }

                }
            );

            showScreen(
                levelScreen
            );

        }
    );


    /* =====================================================
       INICIO
    ===================================================== */

    startButton.disabled =
        true;

    enterCourseButton.disabled =
        true;

    showScreen(
        welcomeScreen
    );

});