/* ================================= */
/*       FECHA DE NUESTRA HISTORIA   */
/* ================================= */

const fechaInicio = new Date(2023, 1, 2, 14, 0, 0);


/* ================================= */
/*          CONTADOR                 */
/* ================================= */

function actualizarContador() {

    const ahora = new Date();

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();

    let meses =
        ahora.getMonth() -
        fechaInicio.getMonth();

    let dias =
        ahora.getDate() -
        fechaInicio.getDate();

    let horas =
        ahora.getHours() -
        fechaInicio.getHours();

    let minutos =
        ahora.getMinutes() -
        fechaInicio.getMinutes();

    let segundos =
        ahora.getSeconds() -
        fechaInicio.getSeconds();


    /* Ajustar segundos */

    if (segundos < 0) {

        segundos += 60;

        minutos--;

    }


    /* Ajustar minutos */

    if (minutos < 0) {

        minutos += 60;

        horas--;

    }


    /* Ajustar horas */

    if (horas < 0) {

        horas += 24;

        dias--;

    }


    /* Ajustar días */

    if (dias < 0) {

        const diasMesAnterior =
            new Date(
                ahora.getFullYear(),
                ahora.getMonth(),
                0
            ).getDate();

        dias += diasMesAnterior;

        meses--;

    }


    /* Ajustar meses */

    if (meses < 0) {

        meses += 12;

        años--;

    }


    /* Mostrar contador */

    document.getElementById("años").textContent = años;

    document.getElementById("meses").textContent = meses;

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent = horas;

    document.getElementById("minutos").textContent = minutos;

    document.getElementById("segundos").textContent = segundos;


    /* Frase dinámica */

    document.getElementById("fraseDinamica").textContent =
        `Llevamos ${años} años, ${meses} meses y ${dias} días construyendo nuestra historia. ❤️`;

}


/* Actualizar inmediatamente */

actualizarContador();


/* Actualizar cada segundo */

setInterval(actualizarContador, 1000);



/* ================================= */
/*       BOTÓN DE LA SORPRESA        */
/* ================================= */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const pantallaSorpresa =
    document.getElementById("sorpresa");

const historia =
    document.getElementById("historia");


botonSorpresa.addEventListener("click", function () {

    /* Ocultar pantalla inicial */

    pantallaSorpresa.classList.add("oculta");


    /* Mostrar nuestra historia */

    setTimeout(function () {

        historia.classList.add("visible");

    }, 500);

});



/* ================================= */
/*          MÚSICA                   */
/* ================================= */

const musica =
    document.getElementById("musica");

const botonMusica =
    document.getElementById("botonMusica");


botonMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play()
            .then(function () {

                botonMusica.textContent =
                    "⏸️ Pausar nuestra canción";

            })
            .catch(function () {

                alert(
                    "No se pudo reproducir la música."
                );

            });

    } else {

        musica.pause();

        botonMusica.textContent =
            "▶️ Escuchar nuestra canción";

    }

});



/* ================================= */
/*       CORAZONES FLOTANTES         */
/* ================================= */

const contenedorCorazones =
    document.getElementById("corazones");


function crearCorazon() {

    const corazon =
        document.createElement("span");


    corazon.classList.add("corazon");


    corazon.textContent = "❤️";


    /* Posición horizontal */

    corazon.style.left =
        Math.random() * 100 + "%";


    /* Tamaño */

    const tamaño =
        Math.random() * 20 + 10;

    corazon.style.fontSize =
        tamaño + "px";


    /* Duración */

    const duracion =
        Math.random() * 5 + 5;

    corazon.style.animationDuration =
        duracion + "s";


    contenedorCorazones.appendChild(
        corazon
    );


    /* Eliminar después */

    setTimeout(function () {

        corazon.remove();

    }, duracion * 1000);

}


/* Crear corazones */

setInterval(
    crearCorazon,
    700
);