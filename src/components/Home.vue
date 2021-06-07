<template>
  <HeroSection />
  <main class="bg-gray-200 relative -mt-[250px] pb-32">
    <!-- This div overlap the hero section -->

    <!-- Input URL -->
    <div class="absolute w-full -top-28 md:-top-20">
      <ShortenInput />
    </div>
    <!-- <div
      class="
        h-[120px]
        md:h-[80px]
        bg-gray-200
        w-screen
        absolute
        md:-top-20
        top-[-110px]
      "
    ></div> -->
    <!-- End of the overlap -->
    <section
      class="grid max-w-screen-lg py-24 mx-auto  mt-14 md:mt-0 place-content-center"
    >
      <h2 class="text-4xl font-bold text-center mt-14 text-neutral-dark-blue">
        Advanced Statistics
      </h2>
      <p
        class="
          text-center
          w-[62%]
          mx-auto
          mt-7
          leading-loose
          text-lg
          md:text-base
        "
      >
        Track how your links are performing across the web with our advanced
        statisctics dashboard.
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

export default {
  components: {
    HeroSection,
    Cards,
    FullBanner,
    Footer,
    ShortenInput,
  },
}
</script>

<style></style>
