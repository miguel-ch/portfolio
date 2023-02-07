<script>
  export default {
    setup() {
      return {
        bios: [
          {
            id: 1,
            bio: "Hi, I am Miguel, a fullstack developer who has a passion for all things in technology an programming. During my time as a programmer I have worked individually and in groups, designing and developing different web and desktop applications using architectures and design patterns to create a maintainable and scalable code. One of my main goals is to create code that any programmer could understand, so I always try to write documented and clean code. I like to keep up with technologies and languages ​​to always be at the forefront, so I am always getting new information with tech news, blogs, documentation or courses. As a teammate I am a collaborative person who loves programming methodologies such as SCRUM or Agile, I am always making quality contributions that are useful for the ongoing project and can be useful to bring new features.",
          },
          {
            id: 2,
            bio: "I enjoy programming as its main purpose its to solve problems, Taking challenges and solving them are one of my main hobbies, and as one of my skills is to easily identify problems and their solutions when it is about programming I really enjoy every developed task and its process.",
          },
        ],
      };
    },
  };
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile_photo.jpeg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p v-for="bio in bios" :key="bio.id" align="justify" class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
