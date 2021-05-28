<template>
  <HeroSection />
  <main class="bg-gray-200 relative -mt-[250px] h-screen">
    <!-- This div overlap the hero section -->
    <div class="h-[80px] bg-gray-200 w-screen absolute -top-20"></div>
    <section class="max-w-screen-lg mx-auto py-24 grid place-content-center">
      <h2 class="text-center text-4xl font-bold text-neutral-dark-blue">
        Advanced Statistics
      </h2>
      <p class="text-center w-[62%] mx-auto mt-7 leading-loose">
        Track how your links are performing across the web with our advanced
        statisctics dashboard.
      </p>
    </section>
    <Cards />
  </main>
</template>

<script>
import HeroSection from "../components/layouts/HeroSection.vue"
import Cards from "../components/layouts/Cards.vue"
export default {
  components: {
    HeroSection,
    Cards,
  },
}
</script>

<style></style>
