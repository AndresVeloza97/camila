/* =========================================================
   NUESTRA HISTORIA ❤️
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURACIÓN DE CANCIONES
========================================================= */

const canciones = {

    1: {
        archivo: "canciones/cancion1.mpeg",
        nombre: "Nuestra primera canción ❤️"
    },

    2: {
        archivo: "canciones/cancion2.mpeg",
        nombre: "Y nuestra historia continúa..."
    },

    3: {
        archivo: "canciones/cancion3.mp3",
        nombre: "Esta canción es para ti ❤️"
    }

};


/* =========================================================
   CONFIGURACIÓN DE LAS 90 FOTOS
========================================================= */
/* =========================================================
   TEXTOS DE LOS RECUERDOS
========================================================= */

const textosRecuerdos = [

    " desconectaste el internet por colocar a cargar tu cel ❤️",

    "La primera vez que nos quedamos a dormir juntos 24 de Marzo en un airbnb",

    "Ese dia llegamos y almorzamos arroz paisa y te quedaste dormida en el parque",

    "Aqui fuimos a comer comida mexicana luego de una pelicula",

    "Nuestras citas mas increibles, cantando en el karaoke",
    "Ese dia casi te ahogas en la piscina de pelotas",
    "Nos gustaba utilizar el tiempo libre para cantar canciones en AMA",
    "Esa vez fue la primera vez que me quede hasta tarde contigo, me dijiste ya tiene que ir a dormir la princesa",
    "Nuestro primer concierto Gilberto Santa Rosa",
    "Te veias hermosa, ese vestido se te veia espectacular",
    "El dia del saco de cumpleaños, te gusto mucho el detalle",
    "El dia de tu cumpleaños, me encanta ese peinado rockero, no esperabas el regalo",
    "Una de nuestras salidas, fuimos a ver a Natalia a un bar en el centro",
    "Nuestra primera vez en Santa Marta, ibamos rumbo a la playa",
    "Nuestra salida a comer, te veias hermosa con ese vestido negro",
    "Santa Marta magica, pero fue porque estabas tu",
    "Lo que nunca voy a olvidar es que pude estar cuando cumpliste tu sueño de conocer el mar",
    "Nosotros viendo los partidos de la selección Colombia, aunque eran super malos",
    "La primera vez que probamos el tartin de Limon",
    "nuestra primera salida a comer a la salchipaperia",
    "El matrimonio de Luyo, nos veiamos elegantes, ese dia queria decirte que me encantabas pero no pude...",
    "Este dia nos quedamos juntos en el motel, al otro dia paso lo chistoso del brassier",
    "Este dia vi por primera vez tu saco de colores, me encantaba este saco",
    "Una de nuestras salidas de siempre a plaza a comer, ese dia comimos arroz chino",
    "Nuestro viaje a Guatavita, recien bajados de la lancha y estaba lloviendo, nuestro viaje mas largo en carro juntos",
    "El dia despues de la noche q ue casi te me mueres, desayunamos delicioso y tuvimos un lindo momento",
    "El cumpleaños que mas recuerdo, ese dia tenias que entregar un trabajo de ingles y llegamos tarde",
    "Un momento inolvidable, jamas olvidare este dia, este cumpleaños, este momento",
    "Un blooper, me cai mientras tomabamos la foto, aun no nos habiamos quitado la ropa para el jacuzzi",
    "Me encantaron tus trenzas, ese dia te veias preciosa",

    "Una salida de navidad, fuimos a centro mayor y te tomaste un cafe con helado",
    "Nuestro primer sofa, ese dia terminamos super agotados de caminar ",
    "El dia que fuimos a mundo aventura, solo nos pudimos meter a una atracción y llovio muchisimo",
    "Nuestro primer halloween, comimos mucha pizza y vimos Mario bros",
    "Tenia el pelo largisimo, a ti te encantaba, por eso me lo dejaba asi",
    "El concierto de Melendi, uno de los mas increibles, ese dia estabamos enojados, pero en la noche nos reconciliamos",
    "Nuestra caminata por el centro para una navidad, no vimos muchas luces, pero tu compañia lo iluminaba todo",
    "Nuestra ida a salitre magico, nos subimos con Mile y hablabamos de que podian hacer las parejas cuando estaba bien arriba",
    "Este dia fue hermoso, de hecho fue cuando Mile se dio cuenta que entre los dos pasaba algo mas que una amistad",
    "Tu con tu porte, eres unica, maravillosa, no hay nadie mas increible que tu",
    "Aqui se me notaba de lejos que me tenias fascinado, eres una en un millon",
    "La primera vez que fuimos al SPA de san Valentin, una de las noches mas hermosas contigo",
    "nuestra salida al parque ciudad montes, ese dia salimos y tomamos un cafe delicioso, se me veia rara la ceja",
    "El dia de tu cumpleaños, nosotros en Melgar, uno de nuestros viajes, ese dia te levantaste y te pusiste la falda que te regale, hermosa",
    "Nuestro concierto de Reik, lo que mas disfruto es tu compañia",
    "Nuestro segundo viaje a Santa Marta, lelgamos y te tuviste que cambiar porque llevabas la chaqueta de cuero",
    "Algo que dejamos marcado en Santa Marta, con un atardecer precioso, pero lo mas hermoso era vertee a ti conmigo",
    "Este dia fuimos a Minga, nos toco caminar un monton para poder llegar, ibamos super cansados y luego el agua supoer fria, tu si pudiste entrar completa",
    "Nuestro primer buceo, nos fuimos por debajo del mar, podiamos ver y tocar los peces",
    "Un beso que siempre recordare, debajo del mar, en un lugar unico y contigo, no existia nada mas para mi, solo tu",
    "Ese dia tomamos un monton de cocteles y salio a volar la carta del restaurante",
    "Un atardecer hermoso y una figura que siempre me recuerda lo mucho que te quiero, lo que eres para mi",
    "Nuestro primer viaje a Santa MArta en avion, porque en la primera nos toco solos",
    "la primera vez que fuimos al barril, tu restaurante favorito",
    "El viaje a Villa de Leyva, nos cobraron por las fotos, pero valio la pena, es la foto mas hermosa que tengo contigo, el recuerdo mas lindo es saber que conoci sitios unicos a tu lado",
    "Nuestra noche en villa de Leyva no pudimos comer morcilla pero tomamos vino y pedimos salchipapas al cuarto",
    "tomar tu mano siempre va a ser mi mayor placer, tu mano me da fuerza y me sostiene aun en los momentos mas dificiles",
    "Este fue uno de tus cumpleaños, fuimos a un restaurante precioso y te tomaste un coctel gigante, lo mas lindo poder verte cumplir un año mas",
    "El dia que te pusiste la chaqueta blanca, te quedo tan linda, te veias hermosa, siempre tu sonrisa me mata",
    "Una foto luego de salir de una noche de cine, no se que pelicula pero estoy seguro que una de terror",
    "Este dia descubrimos el tercer piso de plaza, nos tiramos de los toboganes",
    "Candlelight, una experiencia unica, sitios unicos y tu que siempre hacias de mi momento algo magico",
    "Un beso hermoso, todos tus besos son preciosos, tu pelo, tu mirada, no hay algo que no me encante de ti",
    "Siempre sonriendo, porque en ti encontraba mi felicidad, contigo se me olvidaba todo y me sentia en calma",
    "Nuestro viaje a la Guajira, esa noche nos veiamos increibles, cantamos juntos en el karaoke, tu como siempre espectacular, pensaste que te habias quemado",
    "Salimos, dimos una vuelta, eramos felices y para mi el mejor regalo de cumpleaños, el tenerte a mi lado",
    "Nuestro ultimo SOFA, fuimos un jeuves, para que no fuera tanta gente, me diste un cuadro y te tomaste una foto con tus personajes favoritos",
    "Ese dia nos tomamos esta foto aun con la gente atras, compramos tu pijama de nezuko que te queda espectacular",
    "Aqui fuimos a comer carne a un restaurante, estabamos celebrando mes",
    "Nuestro ultimo halloween, nos pintamos la cara, salimos a comer y pediste dulces",
    "Un momento hermoso para mi, el dia de mi entrega, tu me acompañaste y no deseaba otra compañia si no la tuya",
    "Tu conociendo la cabaña de Alpina, cada compañia, cada lugar tengo marcada tu foto, lo valiosa que eres para mi",
    "Jujutsu Kaisen version Carlos y Camila",
    "El dia de nuestro grado de año en ensammble, algo que no habiamos podido hacer, sin ti nada de eso habria pasado, ensamble es sinonimo tuyo, sin ti no vale la pena cantar, mis canciones son para ti",
    "Una navidad junto a ti, te veias preciosa con tu pantalon blanco, al final lo compraste despues de tanto tiempo",
    "tu cumpleaños, lo espectacular no era el lugar, ni la comida, fue la vista y no hablo del edificio hablo de ti, eres una maravilla que no me canso de ver",
    "Ese dia grite tanto cuando te lo ganaste, siempre has sido la mejor, te lo merecias y fui tan feliz de verte cumplir tu sueño",
    "nuestro segundo SPA, repetimmos el lugar, casi llegamos tarde desde tu casa, pero fue y es uno de mis dias mas lindos, ese dia te dije en el jacuzzi que contigo lo queria todo, y aun lo tengo claro",
    "El concierto de sin bandera, quedamos en primera fila, que momentos tan lindos, no me imagino ninguno de estos momentos sin ti",
    "El viaje a Boyaca lleno de anecdotas, cuando me querias quitar la almohada porque se veia mas comoda",
    "Un lugar mas, un sitio mas, pero la misma hermosa commpañia con la que quiero estar siempre",
    "Un partido de Colombia, donde casi perdemos con Portugal, te pintaron la banderita y tomaste un video de como te estaba mirando",
    "Nuestra llegada a España, cumpliendo un sueño, viviendo algo unico, ver tus sueños cumplirse es algo que no cambio por nada en mi vida",
"La vista de juego de tronos, nuestro dia de mas fotos, conociendo sitios emblematicos y disfrutando del paisaje",
    "tu mi mejor compañia, el amor de mi vida, mi lugar seguro",
    "No quiero otros brazos, no quiero otros besos, quiero seguir coleccionando contigo momentos, y asi como la foto quiero mirar hacia adelante siempre agarrado de tu mano",
    "Los dos de blanco y un recuerdo mas por vivir",
    "Como te explico que sin ti mis ojos no brillan, que te quiero, que te necesito que eres demasiado importante para mi",
    "Nuestra ultima foto juntos, las cosas estaban mejor, fue un sabado precioso, comimos carne, hicimos el amor, hablamos y al otro dia te lleve para el concierto, ese dia compraste tu silla y me sentia tan feliz contigo"

   

];


/* =========================================================
   CREAR LAS FOTOS AUTOMÁTICAMENTE
========================================================= */

const recuerdos = [];

for (let i = 1; i <= 89; i++) {

    const numero =
        String(i).padStart(2, "0");

    recuerdos.push({

        orden: i,

        imagen:
            `fotos/foto${numero}.jpeg`,

        titulo:
            textosRecuerdos[i - 1] || ""

    });

}


/* =========================================================
   CONFIGURACIÓN DE VIDEOS
========================================================= */

const videos = [

    {

        archivo:
            "videos/video01.mp4",

        titulo:
            "Un gol al noventa",

        texto:
            "La primera canción que te escribi, donde te abria mi corazon y te expreso todo lo que siento por ti, no importa la fecha, no importa el momento, porque nada de eso ha cambiado jamas, para mi eres un universo dentro de este planeta."

    },

    {

        archivo:
            "videos/video02.mp4",

        titulo:
            "La cancion mas romantica que te escribi",

        texto:
            "Esta cancion expresa como me siento cada vez que no estoy cerca de ti, lo que añoro de ti, lo que eres para mi, lo dificil que es cuando no te siento, cuando no se de ti, ansio de ti todo Cami, hasta lo mas profundo, quiero de ti todo, no solo lo superficial."

    },

    {

        archivo:
            "videos/video03.mp4",

        titulo:
            "Como niños",

        texto:
            "Ese dia montando columpio en la Guajira, como dos niños,  disfrutando de un sitio maravilloso."

    },

    {

        archivo:
            "videos/video04.mp4",

        titulo:
            "Bilbao España",

        texto:
            "Momentos maravilloso, paisajes increibles y siempre caminando hacia adelante contigo, tu mano es la que me guia siempre y no la quiero soltar nunca."

    },

    {

        archivo:
            "videos/video05.mp4",

        titulo:
            "Cordon con nundo infinito",

        texto:
            "Uno de los mas representativos, quiero poder ir nuevamente a Aveiro y ver ese nudo que nadie mas hizo, porque es algo diferente de nosotros, quiero ir contigo, eres mi otra mitad Cami."

    }

];


/* =========================================================
   ELEMENTOS HTML
========================================================= */

const introScreen =
    document.getElementById("introScreen");

const startButton =
    document.getElementById("startButton");

const mainContent =
    document.getElementById("mainContent");

const musicButton =
    document.getElementById("musicButton");

const musicIcon =
    document.getElementById("musicIcon");

const musicStatus =
    document.getElementById("musicStatus");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const recuerdosContainer =
    document.getElementById("recuerdosContainer");

const videosContainer =
    document.getElementById("videosContainer");

const photoModal =
    document.getElementById("photoModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalDate =
    document.getElementById("modalDate");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");


/* =========================================================
   BOTONES DE CAMBIO DE CANCIÓN
========================================================= */

const song2Button =
    document.getElementById("song2Button");

const song3Button =
    document.getElementById("song3Button");

const song2Transition =
    document.getElementById("song2Transition");

const song3Transition =
    document.getElementById("song3Transition");


/* =========================================================
   VARIABLES
========================================================= */

let currentSong =
    null;

let musicPlaying =
    false;

let currentPhotoIndex =
    0;

let musicBeforeVideo =
    false;


/*
   Esta variable es MUY importante.

   Si la persona pulsa manualmente el botón de música
   para pausarla, no queremos que el scroll vuelva a
   reproducirla automáticamente.
*/

let userPausedMusic =
    false;


/*
   Evita que dos cambios de canción se ejecuten
   simultáneamente.
*/

let changingSong =
    false;


/*
   Volumen máximo de la música.
*/

const VOLUMEN_MUSICA =
    0.45;


/* =========================================================
   INICIALIZAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        generarRecuerdos();

        generarVideos();

        iniciarAnimacionesScroll();

        configurarVideos();

        configurarBotonesCanciones();

        configurarMusicaInicial();

    }
);


/* =========================================================
   BOTÓN DE INICIO
========================================================= */

/*
   Este es el momento más importante para el navegador.

   La persona hace clic físicamente en el botón.

   Aprovechamos esa interacción para iniciar la canción 1.

   De esta forma el navegador normalmente permite
   reproducción con sonido.
*/

startButton.addEventListener(
    "click",
    async () => {

        /*
           Desbloqueamos la interfaz.
        */

        introScreen.classList.add("hide");

        mainContent.classList.remove("hidden");

        musicButton.classList.remove("hidden");

        document.body.style.overflow =
            "auto";


        /*
           Pequeña decoración.
        */

        crearCorazones();


        /*
           El usuario acaba de interactuar.

           Marcamos que el audio puede comenzar.
        */

        userPausedMusic =
            false;


        /*
           IMPORTANTE:

           Canción 1 comienza directamente
           desde este clic.
        */

        await reproducirCancion(
            1,
            true
        );

    }
);


/* =========================================================
   GENERAR RECUERDOS
========================================================= */

function generarRecuerdos() {

    recuerdos.sort(
        (a, b) =>
            a.orden - b.orden
    );


    recuerdosContainer.innerHTML =
        "";


    recuerdos.forEach(
        (recuerdo, index) => {

            const article =
                document.createElement("article");


            article.className =
                "memory-card reveal";


            article.dataset.index =
                index;


            article.innerHTML = `

                <div class="memory-image-wrapper">

                    <img
                        src="${recuerdo.imagen}"
                        alt="${recuerdo.titulo}"
                        loading="lazy"
                        decoding="async"
                    >

                    <div class="memory-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="memory-open">
                        ↗
                    </div>

                </div>

                <div class="memory-info">


                    <h3 class="memory-title">
                        ${recuerdo.titulo}
                    </h3>


                </div>

            `;


            article.addEventListener(
                "click",
                () => {

                    abrirFoto(index);

                }
            );


            recuerdosContainer.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   GENERAR VIDEOS
========================================================= */

function generarVideos() {

    videosContainer.innerHTML =
        "";


    videos.forEach(
        (video, index) => {

            const article =
                document.createElement("article");


            article.className =
                "video-card reveal";


            article.innerHTML = `

                <div class="video-wrapper">

                    <video
                        controls
                        playsinline
                        preload="metadata"
                        src="${video.archivo}"
                    >
                        Tu navegador no puede reproducir este video.
                    </video>

                </div>

                <div class="video-info">

                    <div class="video-number">
                        VIDEO ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                        ${video.titulo}
                    </h3>

                    <p>
                        ${video.texto}
                    </p>

                </div>

            `;


            videosContainer.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   CONFIGURAR BOTONES DE CANCIONES
========================================================= */

function configurarBotonesCanciones() {

    /*
       BOTÓN CANCIÓN 2
    */

    if (song2Button) {

        song2Button.addEventListener(
            "click",
            async () => {

                /*
                   Este clic también es una interacción
                   directa del usuario.

                   Por tanto aprovechamos para garantizar
                   la reproducción de audio.
                */

                userPausedMusic =
                    false;


                /*
                   Deshabilitamos temporalmente el botón
                   para evitar doble clic.
                */

                song2Button.disabled =
                    true;


                await reproducirCancion(
                    2,
                    true
                );


                /*
                   Cambiamos el texto del botón.
                */

                song2Button.querySelector(
                    "span"
                ).textContent =
                    "🎵 Nuestra historia continúa";


                /*
                   Una vez iniciada la canción,
                   la transición deja de ser necesaria.
                */

                if (song2Transition) {

                    song2Transition.classList.add(
                        "song-started"
                    );

                }

            }
        );

    }


    /*
       BOTÓN CANCIÓN 3
    */

    if (song3Button) {

        song3Button.addEventListener(
            "click",
            async () => {

                /*
                   Este clic desbloquea / mantiene
                   permitido el audio.
                */

                userPausedMusic =
                    false;


                song3Button.disabled =
                    true;


                await reproducirCancion(
                    3,
                    true
                );


                /*
                   Cambiamos el botón para que quede
                   claro que la canción ya comenzó.
                */

                song3Button.querySelector(
                    "span"
                ).textContent =
                    "❤️ Escuchando contigo";


                if (song3Transition) {

                    song3Transition.classList.add(
                        "song-started"
                    );

                }

            }
        );

    }

}


/* =========================================================
   CONFIGURACIÓN DE MÚSICA INICIAL
========================================================= */

function configurarMusicaInicial() {

    /*
       No intentamos reproducir nada aquí.

       El audio se inicia únicamente cuando la persona
       pulsa "Entrar a nuestra historia".

       Esto es deliberado porque así tenemos una
       interacción real del usuario.
    */

    actualizarBotonMusica();

}


/* =========================================================
   REPRODUCIR CANCIÓN
========================================================= */

async function reproducirCancion(
    numero,
    usarFade = true
) {

    const cancion =
        canciones[numero];


    if (!cancion) {

        return false;

    }


    /*
       Si ya estamos reproduciendo esa misma canción,
       no hacemos nada.
    */

    if (
        currentSong === numero &&
        !backgroundMusic.paused
    ) {

        musicPlaying =
            true;

        actualizarBotonMusica();

        return true;

    }


    /*
       Evitamos dos cambios simultáneos.
    */

    if (changingSong) {

        return false;

    }


    changingSong =
        true;


    try {

        /*
           Si hay una canción sonando,
           hacemos fade out.
        */

        if (
            !backgroundMusic.paused &&
            usarFade
        ) {

            await hacerFadeOut();

        } else {

            backgroundMusic.pause();

            backgroundMusic.currentTime =
                0;

            backgroundMusic.volume =
                0;

        }


        /*
           Cambiamos la canción.
        */

        currentSong =
            numero;


        backgroundMusic.src =
            cancion.archivo;


        backgroundMusic.volume =
            0;


        /*
           Cargamos el nuevo archivo.
        */

        backgroundMusic.load();


        /*
           Intentamos reproducir.

           En los botones de inicio, canción 2 y canción 3
           esto ocurre directamente después del clic del usuario.
        */

        await backgroundMusic.play();


        musicPlaying =
            true;

        userPausedMusic =
            false;


        actualizarBotonMusica();


        /*
           Entramos suavemente.
        */

        if (usarFade) {

            await hacerFadeIn();

        } else {

            backgroundMusic.volume =
                VOLUMEN_MUSICA;

        }


        changingSong =
            false;


        return true;

    }

    catch (error) {

        console.log(
            "No fue posible reproducir la canción:",
            error
        );


        musicPlaying =
            false;


        /*
           Dejamos el volumen preparado.
        */

        backgroundMusic.volume =
            VOLUMEN_MUSICA;


        actualizarBotonMusica();


        changingSong =
            false;


        return false;

    }

}


/* =========================================================
   FADE OUT
========================================================= */

function hacerFadeOut() {

    return new Promise(
        resolve => {

            const volumenInicial =
                backgroundMusic.volume;


            const duracion =
                500;


            const pasos =
                20;


            const intervalo =
                duracion / pasos;


            let paso =
                0;


            const fade =
                setInterval(
                    () => {

                        paso++;


                        const progreso =
                            paso / pasos;


                        backgroundMusic.volume =
                            Math.max(
                                0,
                                volumenInicial *
                                (1 - progreso)
                            );


                        if (
                            paso >= pasos
                        ) {

                            clearInterval(
                                fade
                            );


                            backgroundMusic.pause();

                            backgroundMusic.currentTime =
                                0;

                            backgroundMusic.volume =
                                0;


                            resolve();

                        }

                    },
                    intervalo
                );

        }
    );

}


/* =========================================================
   FADE IN
========================================================= */

function hacerFadeIn() {

    return new Promise(
        resolve => {

            const duracion =
                800;


            const pasos =
                25;


            const intervalo =
                duracion / pasos;


            let paso =
                0;


            const fade =
                setInterval(
                    () => {

                        paso++;


                        const progreso =
                            paso / pasos;


                        backgroundMusic.volume =
                            Math.min(
                                VOLUMEN_MUSICA,
                                VOLUMEN_MUSICA *
                                progreso
                            );


                        if (
                            paso >= pasos
                        ) {

                            clearInterval(
                                fade
                            );


                            backgroundMusic.volume =
                                VOLUMEN_MUSICA;


                            resolve();

                        }

                    },
                    intervalo
                );

        }
    );

}


/* =========================================================
   PAUSAR / REANUDAR MÚSICA
========================================================= */

musicButton.addEventListener(
    "click",
    async () => {

        /*
           SI ESTÁ PAUSADA
        */

        if (
            backgroundMusic.paused
        ) {

            try {

                /*
                   El usuario acaba de pulsar el botón,
                   así que tenemos otra interacción real.
                */

                userPausedMusic =
                    false;


                /*
                   Si por alguna razón todavía no existe
                   una canción, comenzamos con la primera.
                */

                if (
                    !backgroundMusic.src ||
                    currentSong === null
                ) {

                    await reproducirCancion(
                        1,
                        true
                    );

                } else {

                    await backgroundMusic.play();

                    musicPlaying =
                        true;

                    actualizarBotonMusica();

                }

            }

            catch (error) {

                console.log(
                    "No fue posible reanudar la música:",
                    error
                );

            }

        }

        /*
           SI ESTÁ SONANDO
        */

        else {

            backgroundMusic.pause();

            musicPlaying =
                false;


            /*
               Recordamos que fue el usuario quien
               decidió pausarla.
            */

            userPausedMusic =
                true;


            actualizarBotonMusica();

        }

    }
);


/* =========================================================
   ACTUALIZAR BOTÓN DE MÚSICA
========================================================= */

function actualizarBotonMusica() {

    if (
        musicPlaying &&
        !backgroundMusic.paused
    ) {

        musicButton.classList.add(
            "playing"
        );

        musicIcon.textContent =
            "🎵";

        musicStatus.textContent =
            "Sonando";

        musicButton.setAttribute(
            "aria-label",
            "Pausar música"
        );

    } else {

        musicButton.classList.remove(
            "playing"
        );

        musicIcon.textContent =
            "🔇";

        musicStatus.textContent =
            "Pausada";

        musicButton.setAttribute(
            "aria-label",
            "Reanudar música"
        );

    }

}


/* =========================================================
   MÚSICA SEGÚN SCROLL
========================================================= */

function configurarMusicaPorScroll() {

    /*
       IMPORTANTE:

       Ya NO cambiamos automáticamente las canciones.

       Los cambios se hacen mediante:

       canción 1 → botón de inicio
       canción 2 → botón de capítulo II
       canción 3 → botón de carta

       Dejamos esta función preparada por si más adelante
       quieres añadir otras canciones automáticas.
    */

}


/* =========================================================
   VIDEOS
========================================================= */

function configurarVideos() {

    const videoElements =
        document.querySelectorAll(
            "video"
        );


    videoElements.forEach(
        video => {

            /*
               Cuando comienza un video,
               pausamos la música.
            */

            video.addEventListener(
                "play",
                () => {

                    /*
                       Guardamos si realmente había música
                       sonando antes del video.
                    */

                    musicBeforeVideo =
                        !backgroundMusic.paused &&
                        musicPlaying;


                    if (
                        musicBeforeVideo
                    ) {

                        backgroundMusic.pause();

                        musicPlaying =
                            false;

                        actualizarBotonMusica();

                    }

                }
            );


            /*
               Cuando termina el video,
               retomamos la música.
            */

            video.addEventListener(
                "ended",
                async () => {

                    if (
                        musicBeforeVideo &&
                        !userPausedMusic
                    ) {

                        try {

                            await backgroundMusic.play();

                            musicPlaying =
                                true;

                            actualizarBotonMusica();

                        }

                        catch (error) {

                            console.log(
                                "No se pudo reanudar la música:",
                                error
                            );

                        }

                    }


                    musicBeforeVideo =
                        false;

                }
            );


            /*
               Si simplemente pausa el video,
               NO reanudamos la música automáticamente.

               Esto evita comportamientos molestos.
            */

            video.addEventListener(
                "pause",
                () => {

                    /*
                       Intencionalmente vacío.
                    */

                }
            );

        }
    );

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

function iniciarAnimacionesScroll() {

    const elementos =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.12
            }
        );


    elementos.forEach(
        elemento => {

            observer.observe(
                elemento
            );

        }
    );

}


/* =========================================================
   CORAZONES FLOTANTES
========================================================= */

function crearCorazon() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    const corazones = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "♥"
    ];


    heart.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 18
        ) +
        "px";


    heart.style.animationDuration =
        (
            4 +
            Math.random() * 4
        ) +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        9000
    );

}


function crearCorazones() {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 400
        );

    }


    setInterval(
        () => {

            if (
                Math.random() > .4
            ) {

                crearCorazon();

            }

        },
        3500
    );

}


/* =========================================================
   CUANDO TERMINA UNA CANCIÓN
========================================================= */

backgroundMusic.addEventListener(
    "ended",
    async () => {

        /*
           La canción vuelve a comenzar automáticamente.

           Esto no necesita una nueva interacción porque
           ya existe una reproducción autorizada.
        */

        if (
            userPausedMusic
        ) {

            return;

        }


        try {

            backgroundMusic.currentTime =
                0;


            backgroundMusic.volume =
                VOLUMEN_MUSICA;


            await backgroundMusic.play();


            musicPlaying =
                true;


            actualizarBotonMusica();

        }

        catch (error) {

            console.log(
                "No se pudo repetir la canción:",
                error
            );


            musicPlaying =
                false;


            actualizarBotonMusica();

        }

    }
);


/* =========================================================
   EVENTOS DEL AUDIO
========================================================= */

backgroundMusic.addEventListener(
    "play",
    () => {

        musicPlaying =
            true;

        actualizarBotonMusica();

    }
);


backgroundMusic.addEventListener(
    "pause",
    () => {

        /*
           No marcamos automáticamente
           userPausedMusic aquí porque el pause también
           puede producirse por un video o por un cambio
           de canción.
        */

        musicPlaying =
            false;

        actualizarBotonMusica();

    }
);


/* =========================================================
   ERROR DE AUDIO
========================================================= */

backgroundMusic.addEventListener(
    "error",
    () => {

        console.log(
            "No se pudo cargar el archivo de música."
        );


        musicPlaying =
            false;


        actualizarBotonMusica();

    }
);


/* =========================================================
   MODAL DE FOTOS
========================================================= */

function abrirFoto(index) {

    currentPhotoIndex =
        index;


    mostrarFoto(
        currentPhotoIndex
    );


    photoModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}


function mostrarFoto(index) {

    const recuerdo =
        recuerdos[index];


    if (!recuerdo) {

        return;

    }


    modalImage.src =
        recuerdo.imagen;


    modalImage.alt =
        recuerdo.titulo;

    modalTitle.textContent =
        recuerdo.titulo;


}


function cerrarModal() {

    photoModal.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "auto";

}


closeModal.addEventListener(
    "click",
    cerrarModal
);


photoModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoModal
        ) {

            cerrarModal();

        }

    }
);


/* =========================================================
   FOTO ANTERIOR
========================================================= */

prevPhoto.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        currentPhotoIndex--;


        if (
            currentPhotoIndex < 0
        ) {

            currentPhotoIndex =
                recuerdos.length - 1;

        }


        mostrarFoto(
            currentPhotoIndex
        );

    }
);


/* =========================================================
   FOTO SIGUIENTE
========================================================= */

nextPhoto.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        currentPhotoIndex++;


        if (
            currentPhotoIndex >=
            recuerdos.length
        ) {

            currentPhotoIndex =
                0;

        }


        mostrarFoto(
            currentPhotoIndex
        );

    }
);


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            photoModal.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            cerrarModal();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            prevPhoto.click();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPhoto.click();

        }

    }
);


/* =========================================================
   SWIPE EN CELULAR
========================================================= */

let touchStartX =
    0;

let touchEndX =
    0;


photoModal.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


photoModal.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;

        manejarSwipe();

    },
    {
        passive: true
    }
);


function manejarSwipe() {

    const diferencia =
        touchEndX -
        touchStartX;


    if (
        Math.abs(diferencia) < 50
    ) {

        return;

    }


    if (
        diferencia < 0
    ) {

        nextPhoto.click();

    } else {

        prevPhoto.click();

    }

}


/* =========================================================
   ERROR DE IMÁGENES
========================================================= */

document.addEventListener(
    "error",
    event => {

        const elemento =
            event.target;


        if (
            elemento.tagName ===
            "IMG"
        ) {

            elemento.style.objectFit =
                "contain";


            elemento.style.background =
                "#eee";


            elemento.alt =
                "Imagen pendiente de agregar";

        }

    },
    true
);


/* =========================================================
   PROTECCIÓN BÁSICA CONTRA ARRASTRAR IMÁGENES
========================================================= */

document.addEventListener(
    "dragstart",
    event => {

        if (
            event.target.tagName ===
            "IMG"
        ) {

            event.preventDefault();

        }

    }
);