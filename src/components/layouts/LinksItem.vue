<template>
  <div class="flex items-center justify-between">
    <span class="text-gray-600 line-clamp-1">{{ link.sourceLink }}</span>
    <div class="flex items-center flex-shrink-0 gap-4">
      <span class="text-primary-cyan">{{ link.shortenLink }}</span>
      <button
        class="w-24 py-1 text-sm rounded-md  text-gray-50 bg-primary-cyan hover:bg-opacity-80"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script>
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

  setup() {},
}
</script>
