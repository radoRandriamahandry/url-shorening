<template>
  <section
    class="z-10 grid w-full max-w-screen-lg px-10 mx-auto  xl:px-0 place-items-center sm:mt-0"
  >
    <div
      class="relative w-full p-10 overflow-hidden rounded-lg  md:bg-desktop-shorten md:bg-cover bg-primary-violet md:p-14"
    >
      <img
        class="absolute top-0 right-0 z-0 w-[70%] md:hidden"
        src="/src/assets/images/mobile/bg-shorten-mobile.svg"
        alt=""
        srcset=""
      />
      <div class="flex flex-col gap-5 md:flex-row">
        <!-- Input for small screen with dynamic placeholder in order to display an error message inside the input -->
        <input
          v-model="link"
          type="text"
          :placeholder="placeholder"
          class="z-10 w-full px-6 py-4 text-xl rounded-lg md:hidden"
          :class="[hasError && 'ring ring-red-400 placeholder-red-300']"
        />
        <!-- Input for large screen with static placeholder -->
        <input
          v-model="link"
          type="text"
          placeholder="Shorten a link here"
          class="z-10 hidden w-full px-6 rounded-lg md:block"
          :class="[hasError && 'ring ring-red-400 placeholder-red-300']"
        />
        <button
          class="z-10 flex-shrink-0 rounded-lg btn"
          @click="getShortenLink()"
        >
          <span v-if="!isLoading">Shorten it!</span>
          <span v-else>Processing...</span>
        </button>
      </div>
      <transition
        enter-from-class="opacity-0"
        enter-active-class="transition-all duration-300 ease-in"
      >
        <p
          v-if="hasError"
          class="absolute hidden text-sm italic text-red-300 bottom-7 md:block"
        >
          Please add a link
        </p>
      </transition>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity"
import useAPI from "../../composables/useAPI.js"
import useLinks from "../../store/useLinks.js"
import { computed } from "vue"

export default {
  setup() {
    const link = ref("")
    const hasError = ref(false)
    const placeholder = computed(() => {
      return hasError.value ? "Please Enter a link" : "Shorten a link here..."
    })

    const { isLoading, shortenLink, fetchData } = useAPI()

    /**
     * TODO: add the link to a global variable (array) in order to access it from other components
     * TODO: add the link and links to the local storage
     */
    const getShortenLink = async () => {
      hasError.value = false
      if (link.value !== "") {
        await fetchData(link.value)

        const { addLink } = useLinks()
        addLink({ sourceLink: link.value, shortenLink: shortenLink.value })

        link.value = ""
      } else {
        hasError.value = true
        console.log("Empty link")
      }
    }

    return { link, hasError, isLoading, placeholder, getShortenLink }
  },
}
</script>

<style></style>
