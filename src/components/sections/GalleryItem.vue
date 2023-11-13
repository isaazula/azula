<script setup>
import { ref } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

let path = `/images/${props.item.image[0]}`;
let link = `${props.item.link}`;

const showName = ref("hi");

function handleMouseIn() {
  showName.value = "show";
}
function handleMouseOut() {
  showName.value = "";
}
</script>

<template class="gallery">
  <div>
    <img :src="path" />
    <a
      :href="link"
      target="_blank"
      :class="showName"
      @mouseleave="handleMouseOut"
      @mouseenter="handleMouseIn"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<style scoped>
.gallery img {
  width: 100%;
  box-shadow: var(--shadow-3);
}

a {
  height: 100%;
  width: 100%;
  padding-top: 330px;
  text-align: center;
  font-family: Didot;
  font-size: 23px;
  color: var(--color-white);
  background: linear-gradient(transparent, 40%, var(--color-black));
  position: absolute;
  bottom: 0px;
  text-decoration: none;
  opacity: 0;
  transition: all 0.5s;
}

.show {
  opacity: 1;
}
</style>
