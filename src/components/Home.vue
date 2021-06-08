<template>
  <HeroSection />
  <main class="relative pb-32 bg-gray-200">
    <!-- Input URL -->
    <div class="absolute w-full -top-28 md:-top-20">
      <ShortenInput />
    </div>

    <section class="flex flex-col max-w-screen-lg py-24 mx-auto mt-14 md:mt-0">
      <Links />
      <h2 class="text-4xl font-bold text-center mt-14 text-neutral-dark-blue">
        Advanced Statistics
      </h2>
      <p
        class="
          w-[45%]
          mx-auto
          text-lg
          leading-loose
          text-center
          mt-7
          md:text-base
        "
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </section>
    <Cards />
  </main>
  <FullBanner />
  <Footer />
</template>

<script>
import HeroSection from "../components/layouts/HeroSection.vue"
import Cards from "../components/layouts/Cards.vue"
import FullBanner from "../components/layouts/FullBanner.vue"
import Footer from "../components/layouts/Footer.vue"
import ShortenInput from "../components/UI/ShortenInput.vue"
import Links from "../components/layouts/Links.vue"

export default {
  components: {
    HeroSection,
    Cards,
    FullBanner,
    Footer,
    ShortenInput,
    Links,
  },
}
</script>

<style></style>
