<script>
  export default {
    data: () => {
      return {
        dateYear: new Date().getFullYear(),
        name: "Miguel Chaparro",
      };
    },
  };
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
      &copy; {{ dateYear }}.
      <span target="__blank" class="font-general-medium duration-500">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
