<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

import { useTranslation } from "i18next-vue";
const { t, i18next } = useTranslation();

const route = useRoute();
const router = useRouter();

const header_home = computed(() => {
  return route.path == "/" ? "header_home" : "";
});

const showNav = ref("");

function handleMouseIn() {
  showNav.value = "show";
}
function handleMouseOut() {
  showNav.value = "none";
}

const lang = ref("en");

const imageSrc = computed(() => {
  const image = lang.value === "en" ? "us" : "es";
  console.log("i", image);
  return `/images/${image}.svg`;
});

function handleClickLang() {
  const currentLanguage = i18next.language;
  const newLanguage = currentLanguage === "en" ? "es" : "en";
  i18next.changeLanguage(newLanguage);
  lang.value = newLanguage;
}

function handleClick() {
  const qr = document.querySelector(".qr");
  qr.style.left = qr.style.left === "50px" ? "-200px" : "50px";
}
</script>

<template>
  <header :class="header_home">
    <img
      class="button"
      @click="handleClick"
      src="/images/contact.svg"
      alt="Contact"
    />

    <div>
      <h1 @click="() => router.push({ name: 'about' })">
        {{ $t("about") }}
      </h1>
    </div>
    <div>
      <p @click="() => router.push({ name: 'home' })">AZULA</p>
    </div>
    <div id="my_projects_cont">
      <h1 id="menu__button" @mouseenter="handleMouseIn" @click="handleMouseOut">
        {{ $t("myProjects") }}
      </h1>
      <nav id="nav__small" :class="showNav" @mouseleave="handleMouseOut">
        <p
          @click="
            () => {
              router.push({
                name: 'gallery',
                params: { category: 'photography' },
              });
            }
          "
          class="text__nav"
        >
          {{ $t("photographsAudiovisualContent") }}
        </p>

        <p
          @click="
            () => {
              router.push({
                name: 'gallery',
                params: { category: 'illustration' },
              });
            }
          "
          class="text__nav"
        >
          {{ $t("brandingPackagingIllustrations") }}
        </p>
        <p
          @click="
            () => {
              router.push({
                name: 'gallery',
                params: { category: 'animation' },
              });
            }
          "
          class="text__nav"
        >
          {{ $t("threeDModellingAnimations") }}
        </p>
      </nav>
    </div>

    <img
      class="button"
      @click="handleClickLang"
      :src="imageSrc"
      alt="Language Button"
    />

    <img class="qr" src="/images/qr_contact.png" alt="Contact" />
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Italiana&family=Quicksand:wght@300&display=swap");

header {
  color: var(--color-white);
  height: 100px;
  background-color: var(--primary-first);
  width: 100%;
  display: grid;
  grid-template-columns: 10% 1fr 1fr 1fr 10%;
  justify-items: center;
  align-items: center;
  gap: 30px;
  box-shadow: var(--shadow-1);
  z-index: 9 !important;
}

.header_home {
  position: absolute;
  z-index: 10;
  background-color: transparent !important;
  box-shadow: none;
  background-color: var(--primary-first);
  color: var(--primary-first);
}

.header_home h1 {
  color: var(--primary-third);
}
.header_home img {
  background-color: var(--primary-third);
  border-radius: 200px;
}

.button {
  width: 33px;
  opacity: 100%;
  cursor: pointer;
}

.qr {
  position: absolute;
  width: 200px;
  top: 100px;
  left: -200px;
  border-radius: 0px !important;
  transition: all 1s;
}

p {
  text-align: center;
  font-size: 50px;
  font-family: Didot;
  letter-spacing: 7px;
  margin-top: 5px;
  cursor: pointer;
}

h1 {
  text-align: center;
  font-family: "Italiana", serif;
  font-size: 26px;
  color: var(--color-white);
}

#my_projects_cont {
}

nav {
  display: flex;
  background: linear-gradient(var(--primary-first), 55%, var(--primary-third));
  opacity: 90%;
  height: 280px;
  width: 200px !important;
  border-radius: 0 0 500px 500px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 8 !important;
  position: absolute;
  top: -400px;
  right: -30px;
  padding-top: 15px;
  transition: all 1s;
  color: var(--primary-third);
  opacity: 0;
}

nav.show {
  top: 35px;
  opacity: 1;
}

.text__nav {
  margin-top: 15px;
  font-family: "Quicksand", sans-serif;
  color: var(--color-white);
  font-size: 18px;
  letter-spacing: 0px;
}
</style>
