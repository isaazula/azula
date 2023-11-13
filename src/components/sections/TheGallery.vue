<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onBeforeMount, watch } from "vue";
import GalleryItem from "./GalleryItem.vue";
import { db } from "./../../lib/db";

const router = useRouter();
const route = useRoute();
const activeProjects = ref([]);
const componentKey = ref(1);
const category = ref("");

function filterProjects() {
  category.value = route.path.split("/")[2];
  console.log(db);
  activeProjects.value = db.filter((e) => e.category == category.value);
  componentKey.value += 1;
}

onBeforeMount(() => {
  filterProjects();
});

watch(
  () => route.path,
  () => {
    filterProjects();
    componentKey.value++;
  }
);
</script>

<template>
  <section class="gallery" :key="componentKey">
    <GalleryItem v-for="(item, i) in activeProjects" :key="i" :item="item" />
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 70px;
}
</style>
