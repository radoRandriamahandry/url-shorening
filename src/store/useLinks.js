import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

// original link, shorten link
const linksList = ref([])

const links = computed(() => {
  return [...linksList.value]
})

/**
 * @returns String: links, function: fetchLinks, function: addLink
 */
const useLinks = () => {
  /**
   * Populate the links list (linksList) if there is already a data in the local storage
   */
  const fetchLinks = () => {
    if (localStorage.length) {
      const tempList = localStorage.getItem("links")
      linksList.value = [...JSON.parse(tempList)]
    }
  }

  const addLink = (value) => {
    linksList.value.push(value)
    localStorage.setItem("links", JSON.stringify(linksList.value))
  }

  return { links, fetchLinks, addLink }
}

export default useLinks
