<template>
  <div v-if="links.length > 0" class="px-10 mt-10 xl:px-0 lg:mt-0">
    <div
      v-for="link in links"
      :key="link.sourceLink"
      class="px-6 py-3 mb-5 bg-white rounded-lg lg:rounded-sm"
    >
      <LinksItem :link="link" />
    </div>
  </div>
</template>

<script>
import useLinks from "../../store/useLinks.js"
import LinksItem from "./LinksItem.vue"
export default {
  components: {
    LinksItem,
  },
  setup() {
    const { links } = useLinks()

    return { links }
  },
}
</script>

<style></style>
