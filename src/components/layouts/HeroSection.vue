<template>
  <header class="flex flex-col gap-5 md:h-screen">
    <TheNavBar />
    <!-- Only show on small screen -->

    <div class="w-auto pl-10 md:hidden">
      <img
        class="relative object-cover h-[450px] object-left"
        src="/src/assets/images/illustration-working.svg"
        alt="Working illustration"
      />
    </div>
    <!-- END only show on small screens-->

    <section
      class="relative grid h-full max-w-screen-lg px-10 pb-10 mx-auto  md:grid-cols-5 xl:px-0"
    >
      <!-- Hero content -->
      <div
        class="flex flex-col justify-center gap-5 pb-8 text-center  md:col-span-2 lg:col-span-3 md:text-left"
      >
        <h1
          class="
            xl:text-7xl
            md:text-4xl
            text-5xl
            font-bold
            leading-[1.1em]
            text-neutral-dark-blue
          "
        >
          More than just shorter links
        </h1>
        <p class="text-lg leading-relaxed md:text-base lg:w-3/4">
          Build your brand's recognitino and get detailed insights on how your
          links are performing.
        </p>
        <div class="mt-4">
          <button class="rounded-full btn">Get Started</button>
        </div>
      </div>
      <!-- END hero content -->

      <div class="items-center hidden md:flex">
        <img
          class="absolute transform scale-90"
          src="/src/assets/images/illustration-working.svg"
          alt="Working illustration"
        />
      </div>
    </section>
  </header>
</template>

<script>
import TheNavBar from "../UI/TheNavBar.vue"

export default {
  components: {
    TheNavBar,
  },

  setup() {},
}
</script>

<style></style>
