import { ref } from "@vue/reactivity"
import axios from "axios"

/**
 * Consume the api.shrtco.de/v2 API
 * Documentation : https://shrtco.de/docs/
 * TODO: add try catch
 * TODO: add loading status
 * TODO: disable the BUTTON when loading the data and add a loading spinner
 * TODO: handle error response - see documentation
 * @returns {fetchData}
 */
const useAPI = () => {
  // const urlToShorten = "https://github.com/radoRandriamahandry/url-shorening"
  const urlAPI = "https://api.shrtco.de/v2/shorten"
  const shortenLink = ref("")

  const isLoading = ref(false)
  const errorMessage = ref("")

  /**
   * Get the shorten link from the API
   * @param {String} urlToShorten
   * @returns
   */
  const fetchData = async (urlToShorten) => {
    try {
      isLoading.value = true
      const res = await axios.get(`${urlAPI}?url=${urlToShorten}`)
      console.log("finish the request")
      shortenLink.value = res.data.result.full_short_link
      isLoading.value = false
      return shortenLink
    } catch (error) {
      isLoading.value = false
      errorMessage.value = "Link cannot be shorten"
      throw new Error("Link cannot be shorten")
    }
  }

  return { shortenLink, isLoading, shortenLink, errorMessage, fetchData }
}

export default useAPI
