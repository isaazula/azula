<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <footer>
    <div class="redes footer__nav item__1">
      <a href="https://www.instagram.com/azula.designer/" target="_blank"
        ><img src="/images/instagram.svg" alt="Instagram"
      /></a>
      <a href="https://www.linkedin.com/in/azula-designer/" target="_blank"
        ><img src="/images/linkedin.svg" alt="LinkedIn"
      /></a>
      <a href="mailto:azula.designer@gmail.com" target="_blank"
        ><img src="/images/correo.svg" alt="Correo"
      /></a>
      <a href="https://www.behance.net/azula_designer" target="_blank"
        ><img src="/images/behance.svg" alt="Behance"
      /></a>
    </div>

    <div class="footer__copy item__2">
      <h1>{{ $t("allRightsReserved") }} © 2023 | Isabella Azula Tovar</h1>
    </div>

    <img
      class="logo item__3"
      @click="() => router.push({ name: 'home' })"
      src="/images/azula.svg"
      alt="Logo"
    />
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Italiana&family=Quicksand:wght@300&display=swap");
footer {
  height: 100px;
  background-color: var(--primary-second);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 30px;
  align-items: center;
  box-shadow: var(--shadow-1);
}

.redes {
  display: flex;
  gap: 30px;
  margin: 30px 0 0 70px;
}

.redes img {
  width: 40px;
}

.logo {
  width: 200px;
}

.footer__copy h1 {
  margin: 0%;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
  text-align: center;
  color: white;
}

.item__2 {
  margin-bottom: 35px;
  grid-column: 2/3;
  grid-row: 2;
}

.item__3 {
  margin: 25px 70px 0 0;
  grid-row: 1;
  grid-column: 3;
  justify-self: end;
}
</style>
