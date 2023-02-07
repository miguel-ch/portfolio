<script>
  import ExpandableImg from "../reusable/ExpandableImg.vue";
  export default {
    components: { ExpandableImg },
    props: ["projectImages"],
  };
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    <div class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
      <expandable-img :src="projectImage.source" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" alt="{{ projectImage.title }}" />
    </div>
  </div>
</template>
