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
      <form
        class="flex flex-col gap-5 md:flex-row"
        @submit.prevent="getShortenLink"
      >
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
        <button type="submit" class="z-10 flex-shrink-0 rounded-lg btn">
          <span v-if="!isLoading">Shorten it!</span>
          <span v-else>Processing...</span>
        </button>
      </form>
      <transition
        enter-from-class="opacity-0"
        enter-active-class="transition-all duration-300 ease-in"
      >
        <p
          v-if="hasError"
          class="absolute hidden text-sm italic text-red-300 bottom-7 md:block"
        >
          {{ errorMessage }}
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

    const { isLoading, shortenLink, errorMessage, fetchData } = useAPI()

    const placeholder = computed(() => {
      return hasError.value ? errorMessage.value : "Shorten a link here..."
    })

    const getShortenLink = async () => {
      hasError.value = false
      if (link.value !== "") {
        try {
          await fetchData(link.value)
          const { addLink } = useLinks()
          addLink({ sourceLink: link.value, shortenLink: shortenLink.value })
          link.value = ""
        } catch (error) {
          console.log(error.message)
          hasError.value = true
        }
      } else {
        errorMessage.value = "Please enter a link!!!"
        hasError.value = true
      }
    }

    return {
      link,
      hasError,
      isLoading,
      placeholder,
      errorMessage,
      getShortenLink,
    }
  },
}
</script>
