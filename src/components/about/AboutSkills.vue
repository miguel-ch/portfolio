<script>
  import AboutSkillSingle from "./AboutSkillSingle.vue";

  export default {
    components: {
      AboutSkillSingle,
    },
    data: () => {
      return {
        title: "Skills & Technologies",
        skills: [
          {
            id: 1,
            title: "HTML 5",
            img: require("@/assets/images/featured/html_color.png"),
          },
          {
            id: 2,
            title: "CSS",
            img: require("@/assets/images/featured/css_color.png"),
          },
          {
            id: 3,
            title: "Javascript",
            img: require("@/assets/images/featured/javascript_color.png"),
          },
          {
            id: 4,
            title: "Typescript",
            img: require("@/assets/images/featured/typescript_color.png"),
          },
          {
            id: 5,
            title: "NodeJS",
            img: require("@/assets/images/featured/node_color.png"),
          },
          {
            id: 6,
            title: "React JS",
            img: require("@/assets/images/featured/react_color.png"),
          },
          {
            id: 7,
            title: "Vue JS",
            img: require("@/assets/images/featured/vue_color.png"),
          },
          {
            id: 8,
            title: "JQuery",
            img: require("@/assets/images/featured/jquery_color.png"),
          },
          {
            id: 9,
            title: "Express JS",
            img: require("@/assets/images/featured/express_color.png"),
          },
          {
            id: 10,
            title: "Nest",
            img: require("@/assets/images/featured/nest_color.jpg"),
          },
          {
            id: 11,
            title: "Java",
            img: require("@/assets/images/featured/java_color.png"),
          },
          {
            id: 12,
            title: "SQL",
            img: require("@/assets/images/featured/sql_color.png"),
          },
        ],
      };
    },
  };
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
      {{ title }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutSkillSingle v-for="skill in skills" :key="skill.id" :skill="skill" />
    </div>
  </div>
</template>
