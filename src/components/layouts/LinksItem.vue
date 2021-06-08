<template>
  <div class="flex items-center justify-between">
    <span class="text-gray-600 line-clamp-1">{{ link.sourceLink }}</span>
    <div class="flex items-center flex-shrink-0 gap-4">
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

    /**
     * TODO: add browser compatibility support in case navigator.clipboard is not available
     */
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
