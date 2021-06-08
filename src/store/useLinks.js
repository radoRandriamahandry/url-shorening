import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

// original link, shorten link
const linksList = ref([])

const links = computed(() => {
  return [...linksList.value]
})

/**
 * TODO: populate the linksList from local storage
 * TODO: add the linksList to the local storage
 * @returns
 */
const useLinks = () => {
  const addLink = (value) => {
    console.log("adding link")
    linksList.value.push(value)
    linksList.value.forEach((link) => {
      console.log(link)
    })
  }

  return { links, addLink }
}

export default useLinks
