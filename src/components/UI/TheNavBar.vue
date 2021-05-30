<template>
  <div
    class="flex items-center justify-between w-full max-w-screen-lg px-10 py-10 mx-auto  xl:px-0"
  >
    <div class="flex items-center gap-8">
      <h3 class="text-2xl font-bold logo text-neutral-dark-blue">Shortly</h3>
      <nav class="flex font-medium gap-7 text-neutral-violet">
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
        class="font-medium text-neutral-violet hover:text-neutral-dark-violet"
      >
        Login
      </button>
      <button class="rounded-full btn">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
