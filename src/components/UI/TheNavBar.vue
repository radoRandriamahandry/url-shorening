<template>
  <div
    class="flex items-center justify-between w-full max-w-screen-lg px-10 py-10 mx-auto  xl:px-0"
  >
    <div class="flex items-center gap-8">
      <h3 class="text-2xl font-bold logo text-neutral-dark-blue">Shortly</h3>
      <nav class="hidden font-medium md:flex gap-7 text-neutral-violet">
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
    <div class="hidden md:flex gap-7">
      <button
        class="font-medium text-neutral-violet hover:text-neutral-dark-violet"
      >
        Login
      </button>
      <button class="rounded-full btn">Sign Up</button>
    </div>

    <!-- Hamburger button -->
    <div class="md:hidden" @click="toggleMenuHandler">
      <transition
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-active-class="transform -rotate-90"
        leave-active-class="transition-all duration-300 ease-in"
        leave-to-class="transform rotate-90"
      >
        <FontAwesomeIcon
          v-if="isOpen"
          class="text-gray-400"
          :icon="['fas', 'times']"
          size="2x"
        />
        <FontAwesomeIcon
          v-else
          class="text-gray-400"
          :icon="['fas', 'bars']"
          size="2x"
        />
      </transition>
    </div>
    <!-- END hamburger button -->
  </div>

  <!-- Mobile menu -->
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="transform -translate-y-5 "
    leave-active-class="transition-all duration-150 ease-in"
    leave-to-class="transform -translate-y-5 "
  >
    <div
      v-if="isOpen"
      class="absolute z-10 h-[490px] w-full px-10 top-[130px] pr-22"
    >
      <div v-click-away="clickAwayHandler" class="h-full">
        <div
          class="flex flex-col items-center justify-center gap-10 px-8 py-12 text-xl font-bold text-gray-300  bg-primary-violet rounded-3xl"
        >
          <div class="hover:text-white">
            <router-link to="#">Features</router-link>
          </div>
          <div class="hover:text-white">
            <router-link to="#">Pricing</router-link>
          </div>
          <div class="hover:text-white">
            <router-link to="#">Resources</router-link>
          </div>
          <div class="w-full h-px bg-gray-500"></div>
          <div class="hover:text-white">
            <button class="text-xl font-bold">Login</button>
          </div>
          <div>
            <button class="rounded-full btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- END mobile menu -->
</template>

<script>
import { ref } from "vue"
import { directive } from "vue3-click-away"

export default {
  directives: {
    ClickAway: directive,
  },

  setup() {
    const isOpen = ref(false)

    const toggleMenuHandler = () => {
      isOpen.value = !isOpen.value
    }

    const clickAwayHandler = () => {
      isOpen.value = false
    }

    return { clickAwayHandler, toggleMenuHandler, isOpen }
  },
}
</script>

<style></style>
