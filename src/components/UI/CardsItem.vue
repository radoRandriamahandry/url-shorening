<template>
  <div
    class="relative w-full px-6 py-8 text-center bg-white rounded-lg  lg:text-left"
  >
    <!-- image -->
    <div
      class="absolute hidden w-16 h-16 rounded-full  -top-8 left-5 bg-primary-violet lg:grid place-content-center"
    >
      <img :src="image" alt="" />
    </div>
    <div class="flex justify-center lg:hidden">
      <div
        class="absolute grid w-20 h-20 rounded-full  -top-10 bg-primary-violet place-content-center"
      >
        <img :src="image" alt="" />
      </div>
    </div>
    <!-- Title -->
    <h3 class="mt-10 text-2xl font-semibold lg:text-xl">
      {{ title }}
    </h3>
    <!-- Content -->
    <p class="mt-4 text-lg leading-loose lg:text-sm">
      {{ content }}
    </p>
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
