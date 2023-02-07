<script>
  import feather from "feather-icons";

  export default {
    props: ["project"],

    created() {
      console.log(this.project.title);
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
  };
</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
          {{ project.clientInformation.header }}
        </p>
        <ul class="leading-loose">
          <li v-for="info in project.clientInformation.client" :key="info.id" class="font-general-regular text-ternary-dark dark:text-ternary-light">
            <span>{{ info.title }}: </span>
            <a
              href="#"
              :class="info.title == 'Website' || info.title == 'Phone' ? 'hover:underline cursor-pointer' : ''"
              aria-label="Project Website and Phone"
              >{{ info.details }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ project.objectives.header }}
        </p>
        <p
          v-for="objective in project.objectives.description"
          :key="objective.id"
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ objective.detail }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ project.technologies.header }}
        </p>
        <p class="font-general-regular text-primary-dark dark:text-ternary-light">
          {{ project.technologies.description.join(", ") }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <div v-if="project.sharing.public">
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ project.sharing.header }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="social in project.sharing.links"
            :key="social.id"
            :href="social.url"
            target="__blank"
            aria-label="Share Project"
            class="flex gap-3 bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            ><i :data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i>{{ social.name ? social.name : "Click me" }}</a
          >
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
        {{ project.projectAbout.header }}
      </p>
      <p
        v-for="detail in project.projectAbout.details"
        :key="detail.id"
        align="justify"
        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ detail.objective }}
      </p>
    </div>
  </div>
</template>
