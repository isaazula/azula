import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from "./lib/i18n";

import App from "./App.vue";
import router from "./router";

i18next.use(LanguageDetector).init({
  debug: true,
  fallbackLng: "en",
  locale: "en",
  resources: {
    en: {
      translation: {
        about: "About Me",
        myProjects: "My Projects",
        allRightsReserved: "All Rights Reserved",
        photographsAudiovisualContent: "Photographs & Audiovisual Content",
        brandingPackagingIllustrations: "Branding, Packaging & Illustrations",
        threeDModellingAnimations: "3D Modelling & Animations",
      },
    },
    es: {
      translation: {
        about: "Sobre mí",
        myProjects: "Mis Proyectos",
        allRightsReserved: "Todos los derechos reservados",
        photographsAudiovisualContent: "Fotografías y Contenido Audiovisual",
        brandingPackagingIllustrations: "Branding, Packaging e Ilustraciones",
        threeDModellingAnimations: "Modelado 3D y Animaciones",
      },
    },
  },
});

const app = createApp(App);

app.use(I18NextVue, { i18next });
app.use(createPinia());
app.use(router);

app.mount("#app");
