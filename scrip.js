const canciones = [
    {
        titulo: "Sobran",
        archivo: "Audio/Sobranmotivos.mp3",
        imagen: "Imagenes/sobran.png.jpg",
        letra: "Letra de la canción 1..."
    },
    {
        titulo: "Canción 2",
        archivo: "Audio/cancion2.mp3",
        imagen: "Imagenes/cancion2.jpg",
        letra: "Letra de la canción 2..."
    },
    {
        titulo: "Canción 3",
        archivo: "Audio/cancion1.mp3",
        imagen: "Imagenes/cancion1.jpg",
        letra: "Letra de la canción 3..."
    },
    {
        titulo: "Canción 4",
        archivo: "Audio/cancion2.mp3",
        imagen: "Imagenes/cancion2.jpg",
        letra: "Letra de la canción 4..."
    }
];

function cambiarCancion(index) {
    const audio = document.getElementById("audio");
    const source = document.getElementById("source");
    audio.pause();
    document.getElementById("titulo").innerText = canciones[index].titulo;
    document.getElementById("portada").src = canciones[index].imagen;
    document.getElementById("letra").innerText = canciones[index].letra;

    source.src = canciones[index].archivo;
    audio.load();
    audio.play();
}
