<template>
  <div
    class="flex flex-col items-center justify-between gap-2 py-4  lg:py-0 lg:gap-0 lg:flex-row"
  >
    <span class="text-gray-600 line-clamp-1">{{ link.sourceLink }}</span>
    <div
      class="flex flex-col items-center flex-shrink-0 gap-4  lg:gap-2 lg:flex-row"
    >
      <span class="text-primary-cyan">{{ link.shortenLink }}</span>
      <button
        class="w-24 py-2 text-sm rounded-md  text-gray-50 bg-primary-cyan hover:bg-opacity-80"
        :class="[isCopied && 'bg-primary-violet']"
        @click="copyLink"
      >
        <span v-if="!isCopied">Copy</span>
        <span v-else>Copied!</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
  props: {
    link: {
      type: Object,
      required: true,
      default() {
        return {
          sourceLink: "",
          shortenLink: "",
        }
      },
    },
  },

  setup(props) {
    const isCopied = ref(false)

    // TODO: add browser compatibility support in case navigator.clipboard is not available
    const copyLink = async () => {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(props.link.shortenLink)
        isCopied.value = true
      }
    }

    return { isCopied, copyLink }
  },
}
</script>
