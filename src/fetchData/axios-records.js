import axios from "axios"
const TKN = "4vJ2aQgEeYtmy7ojhmkFzdtCMXxEhYYtkJWavo2Q"
// create axios instance
const instance = axios.create({
  baseURL: "https://freesound.org/apiv2/",
  timeout: 10000
})

instance.defaults.headers.common["Authorization"] = `Token ${TKN}`
instance.defaults.headers.common[
  "Content-Type"
] = `application/json;charset=utf-8`

export default instance
