<script setup>

</script>

<template>

    <audio autoplay>
    <source src="../public/midia/musica.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
    </audio>

    <header>
        <div class="logo">
            <img src="../public/img/destiny_logo.webp" alt="" class="img_logo">
        </div>
    </header>

    <main>
        <div>
            <img src="../public/img/card/Destiny-2-Class-1.png" alt="" class="character">
        </div>
        <section>
            <div class="banners">
                <img src="../public/img/banners/guerreiro.jpg" alt="" >
                <img src="../public/img/banners/mago.jpg" alt="">
                <img src="../public/img/banners/cacador.jpg" alt="">
            </div>
            
            <div class="text">
                <h2 class="character_name destiny-font">PERSONAGEM</h2>
                <br>
                <h3 class="destiny-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est ut id eos voluptas, exercitationem, 
                    odio magni distinctio iste quasi in eveniet tenetur autem nulla error minus. Autem, tempora aliquid.
                </h3>
            </div>

            <div class="atributos">
                <div>
                    <h3>Vida</h3>
                    <progress value="70" max="100"></progress>
                </div>
                
            </div>
        </section>
    </main>
    
    <footer>
        <img src="../public/img/bungie.png" alt="" class="bungie">
    </footer>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;600&display=swap');

    * {
        padding: 0px;
        margin: 0px;
    }

    .destiny-font {
        font-family: 'Rajdhani', sans-serif;
        letter-spacing: 3.3px; /* Ajuste para espaçamento entre as letras */
        text-transform: uppercase;
        font-size: medium;
    }

    template {
        background-image: url('/img/fundo.jpg'); /* Ajuste no caminho */
        background-size: cover;
        background-position: center;
    }

    .logo {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: -3rem;
    }

    .img_logo {
        width: 200px;
        height: 200px;
    }

    main {
        display: flex;
        justify-content: space-around;
        margin-top: -1.5rem;
    }

    .banners {
        display: flex;
        justify-content: space-evenly;
    }

    .banners img {
        width: 90px;  
        height: 110px;
        border-radius: 5px;
    }

    .banners img:hover {
        cursor: pointer;
    }

    .character {
        width: 270px;
        height: 400px;
        box-shadow:  0 0 15px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    .character_name {
        text-align: center;
        margin-top: 2rem;
    }

    .text {
        width: 750px;
        text-align: left;
    }

    .text h3 {
        padding-left: 125px;
    }

    .bungie {
        width: 100px;
        height: 40px;
        position: absolute;
        right: 0;
        bottom: 0;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    .atributos{
        padding-left: 125px;
        margin-top: 1rem;
    }

    .atributos progress{
        width: 80%;
    }

    .atributos div h3{
        font-family: 'Rajdhani', sans-serif;
    }
</style>
