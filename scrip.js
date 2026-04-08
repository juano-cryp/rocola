const canciones = [
    {
        titulo: "Sobran",
        archivo: "Audio/Sobranmotivos.mp3",
        imagen: "Imagenes/sobran.png.jpg",
        letra: "Letra de la canción 1..."
    },
    {
        titulo: "A mi",
        archivo: "Audio/AMI.mp3",
        imagen: "Imagenes/Ami.jpg",
        letra: "Letra de la canción 2..."
    },
    {
        titulo: "Back in black",
        archivo: "Audio/back.mp3",
        imagen: "Imagenes/BACKINBLACK.jpg",
        letra: "Letra de la canción 3..."
    },
    {
        titulo: "Canción 4",
        archivo: "Audio/cancion2.mp3",
        imagen: "Imagenes/cancion2.jpg",
        letra: "Letra de la canción 4..."
    }
];

const audio = document.getElementById("audio");
const menu = document.getElementById("menu");

let actual = 0;

function cambiarCancion(index) {
    actual = index;

    audio.src = canciones[index].archivo;

    document.getElementById("titulo").innerText = canciones[index].titulo;
    document.getElementById("portada").src = canciones[index].imagen;
    document.getElementById("letra").innerText = canciones[index].letra;

    audio.play();

    document.querySelectorAll(".item-cancion").forEach(item => {
        item.classList.remove("activa");
    });

    document.querySelectorAll(".item-cancion")[index].classList.add("activa");
}


audio.addEventListener("ended", () => {
    actual++;
    if (actual >= canciones.length) actual = 0;
    cambiarCancion(actual);
});

function cargarMenu() {
    canciones.forEach((cancion, index) => {
        const item = document.createElement("div");
        item.classList.add("item-cancion");

        item.innerHTML = `
            <img src="${cancion.imagen}">
            <span>${cancion.titulo}</span>
        `;

        item.onclick = () => cambiarCancion(index);

        menu.appendChild(item);
    });
}

cargarMenu();
