<script>
  export default {
    props: ["project"],
  };
</script>

<template>
  <router-link
    :to="'/projects/single-project/' + project.id"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div id="img_container" class="flex justify-center items-center rounded-t-xl p-3 bg-ternary-light dark:bg-secondary-dark">
      <img :src="project.img" :alt="project.title" class="rounded-xl border-none" />
    </div>
    <div class="text-center px-4 py-6">
      <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category }}</span>
    </div>
  </router-link>
</template>

<style lang="css" scoped>
  #img_container {
    min-height: 295px;
    max-height: 295px;
  }
  #img_container img {
    max-height: 295px;
  }
</style>
