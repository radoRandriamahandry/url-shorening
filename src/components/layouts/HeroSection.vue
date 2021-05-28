<template>
  <header class="h-screen flex flex-col">
    <TheNavBar />
    <section class="max-w-screen-lg grid mx-auto h-full grid-cols-5">
      <div class="flex flex-col justify-center gap-5 col-span-3">
        <h1 class="text-7xl font-bold leading-[1.1em]">
          More than just shorter links
        </h1>
        <p class="w-3/4 leading-relaxed">
          Build your brand's recognitino and get detailed insights on how your
          links are performing.
        </p>
        <div class="mt-4">
          <button class="btn rounded-full">Get Started</button>
        </div>
      </div>
      <div class="flex items-center">
        <img
          class="absolute transform scale-90"
          src="/src/assets/images/illustration-working.svg"
          alt="Working illustration"
        />
      </div>
    </section>
    <ShortenInput />
  </header>
</template>

<script>
import TheNavBar from "../UI/TheNavBar.vue"
import ShortenInput from "../UI/ShortenInput.vue"
export default {
  components: {
    TheNavBar,
    ShortenInput,
  },
}
</script>

<style></style>
