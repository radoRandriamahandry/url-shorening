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
  const urlAPI = "https://api.shrtco.de/v2/shorten"
  // const urlToShorten = "https://github.com/radoRandriamahandry/url-shorening"

  const isLoading = ref(false)

  let shortenLink = ""

  const fetchData = async (urlToShorten) => {
    try {
      console.log("start fetching data")
      isLoading.value = true
      const res = await axios.get(`${urlAPI}?url=${urlToShorten}`)
      shortenLink = res.data.result.full_short_link
      console.log("shorten link : ", shortenLink)
      isLoading.value = false
    } catch (error) {
      console.log(error)
      isLoading.value = false
    }
  }

  return { shortenLink, isLoading, fetchData }
}

export default useAPI
