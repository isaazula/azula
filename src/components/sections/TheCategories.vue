<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section class="categories">
    <div>
      <video
        class="video-categories"
        id="v2"
        key="v2"
        muted
        autoplay
        loop
        @click="
          () => {
            router.push({
              name: 'gallery',
              params: { category: 'photography' },
            });
          }
        "
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/koftafusion.appspot.com/o/videos_isa%2Fsecond.mp4?alt=media&token=afb82339-b035-4c96-9bb1-9b7bf70aea02"
          type="video/mp4"
        />
      </video>
    </div>

    <div>
      <video
        class="video-categories"
        id="v3"
        key="v3"
        muted
        autoplay
        loop
        @click="
          () => {
            router.push({
              name: 'gallery',
              params: { category: 'illustration' },
            });
          }
        "
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/koftafusion.appspot.com/o/videos_isa%2Fthird.mp4?alt=media&token=81782524-7335-4216-a0f0-0c3f4abb7e37"
          type="video/mp4"
        />
      </video>
    </div>

    <div>
      <video
        class="video-categories"
        id="v1"
        key="v1"
        muted
        autoplay
        loop
        @click="
          () => {
            router.push({
              name: 'gallery',
              params: { category: 'animation' },
            });
          }
        "
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/koftafusion.appspot.com/o/videos_isa%2Ffirst.mp4?alt=media&token=8959d4ef-23ff-481e-88ad-4843105e0691"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 0 70px 60px 70px;
}

.categories > img,
video {
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow-3);
  opacity: 80%;
}

.video-categories {
  width: 100%;
}
</style>
