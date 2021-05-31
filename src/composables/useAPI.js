import { ref } from "@vue/reactivity"
import axios from "axios"

/**
 * Consume the api.shrtco.de/v2 API
 * Get a shorten link
 * TODO: add try catch
 * TODO: add loading status
 * TODO: disable the BUTTON when loading the data and add a loading spinner
 * TODO: handle error response - see documentation
 * @returns {fetchData}
 */
const useAPI = () => {
  const urlAPI = "https://api.shrtco.de/v2/shorten"
  const params = "https://9anime.to/watch/to-your-eternity.q1on?ep=8"

  const isLoading = ref(false)

  let shortenLink = ""

  const fetchData = async () => {
    try {
      isLoading.value = true
      const res = await axios.get(`${urlAPI}?url=${params}`)
      shortenLink = res.data.result.full_short_link
      isLoading.value = false
    } catch (error) {
      console.log(error)
      isLoading.value = false
    }
  }

  return { shortenLink, isLoading, fetchData }
}

export default useAPI
