<script>
  import feather from "feather-icons";
  import projects from "../data/projects";
  import ProjectHeader from "../components/projects/ProjectHeader.vue";
  import ProjectGallery from "../components/projects/ProjectGallery.vue";
  import ProjectInfo from "../components/projects/ProjectInfo.vue";

  export default {
    props: ["id"],
    name: "Projects",
    components: {
      ProjectHeader,
      ProjectGallery,
      ProjectInfo,
    },
    computed: {
      project() {
        return projects.find((p) => p.id == this.id);
      },
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="project" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="project.images" />

    <!-- Project information -->
    <ProjectInfo :project="project" />
  </div>
</template>

<style scoped></style>
