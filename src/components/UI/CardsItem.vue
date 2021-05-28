<template>
  <div class="bg-white w-full relative px-6 py-8 rounded-lg">
    <!-- image -->
    <div
      class="
        absolute
        -top-8
        left-5
        bg-primary-violet
        h-16
        w-16
        grid
        place-content-center
        rounded-full
      "
    >
      <img :src="image" alt="" />
    </div>
    <!-- Title -->
    <h3 class="mt-10 font-semibold text-xl">{{ title }}</h3>
    <!-- Content -->
    <p class="mt-4 text-sm leading-loose">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
