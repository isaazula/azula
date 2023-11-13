<script setup></script>

<template>
  <section>
    <img class="picture" src="/images/isa.jpg" alt="Azula" />

    <div>
      <h1>ABOUT ME</h1>
      <p>
        Soy productora gráfica digital de LaSalle College, me caracterizo por
        proponer ideas creativas e innovadoras.<br /><br />Me gusta trabajar con
        esmero y en equipo, para así fortalecer ideas y crear excelentes
        propuestas. <br /><br />Me especializo en construir la identidad gráfica
        de las marcas y comunicar la esencia de las mismas a través del
        packaging, fotografía, animación 3D y producción de contenido
        audiovisual.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Italiana&family=Quicksand:wght@300&display=swap");

section {
  display: grid;
  grid-template-columns: 69% 1fr;
  justify-items: center;
  align-items: center;
}

div {
  margin: 50px;
}
h1 {
  font-family: Didot;
  color: var(--primary-third);
  letter-spacing: 7px;
  font-size: 35px;
  text-align: left;
  opacity: 50%;
}

p {
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
  color: var(--primary-first);
  font-family: "Quicksand", sans-serif;
}
.picture {
  width: 100%;
}
</style>
