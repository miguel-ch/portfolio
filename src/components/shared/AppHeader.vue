<script>
  import ThemeSwitcher from "../ThemeSwitcher";
  import feather from "feather-icons";
  import AppHeaderLinks from "./AppHeaderLinks.vue";

  export default {
    components: {
      ThemeSwitcher,
      AppHeaderLinks,
    },
    data() {
      return {
        isOpen: false,
        theme: "",
        modal: false,
      };
    },

    created() {
      this.theme = localStorage.getItem("theme") || "dark";
    },
    mounted() {
      feather.replace();
      this.theme = localStorage.getItem("theme") || "dark";
    },
    methods: {
      updateTheme(theme) {
        this.theme = theme;
      },
    },
    updated() {
      feather.replace();
    },
  };
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link
            to="/"
            class="font-general-medium block text-left text-xl font-medium text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
          >
            <div class="flex justify-between items-center gap-x-3">
              <img src="@/assets/images/logo.svg" class="h-12" alt="Logo" />
              <p>Miguel</p>
            </div>

            <!--img v-if="theme === 'light'" src="@/assets/images/logo-dark.svg" class="w-36" alt="Dark Logo" />
            <img v-else src="@/assets/images/logo-light.svg" class="w-36" alt="Light Logo" /-->
          </router-link>
        </div>

        <!-- Theme switcher small screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
        />

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :isOpen="isOpen" />

      <!-- Header right section buttons -->
      <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <!-- Theme switcher large screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
  #nav a.router-link-exact-active {
    @apply text-indigo-700;
    @apply dark:text-indigo-400;
    @apply font-medium;
  }
  #nav_logo::before {
    content: "<";
  }
  #nav_logo::after {
    content: "/>";
  }
</style>
