<script>
  import AboutMe from "@/components/about/AboutMe";
  import AboutSkills from "@/components/about/AboutSkills";
  import feather from "feather-icons";

  export default {
    name: "About",
    components: {
      AboutMe,
      AboutSkills,
    },
    data: () => {
      // Empty by now (Future soc data)
      return {};
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
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- About counter -->
    <div class="container mx-auto">
      <AboutSkills />
    </div>
  </div>
</template>

<style scoped></style>
