<template>
  <div
    class="
      flex
      justify-between
      max-w-screen-lg
      w-full
      mx-auto
      items-center
      py-10
    "
  >
    <div class="flex gap-8 items-center">
      <h1 class="logo font-bold text-2xl">Shortly</h1>
      <nav class="flex gap-7 font-medium text-neutral-violet">
        <router-link class="hover:text-neutral-dark-violet" to="#"
          >Features</router-link
        >
        <router-link class="hover:text-neutral-dark-violet" to="#"
          >Pricing</router-link
        >
        <router-link class="hover:text-neutral-dark-violet" to="#"
          >Resources</router-link
        >
      </nav>
    </div>
    <div class="flex gap-7">
      <button
        class="text-neutral-violet font-medium hover:text-neutral-dark-violet"
      >
        Login
      </button>
      <button class="btn rounded-full">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
