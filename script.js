function showLove(){

    // tulisan + gambar muncul
    document.getElementById("loveMessage").innerHTML =

    `
    <div class="love-content">

      <h3>Aku sayang kamu 💖🐱</h3>

      <img src="foto2.jpeg" class="summon-photo">

    </div>
    `;

    // ambil audio
    const music = document.getElementById("bgMusic");

    // mulai dari menit 1
    music.currentTime = 60;

    // play lagu
    music.play();

}