import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram)

import "./index.css"

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(router)
app.mount("#app")
