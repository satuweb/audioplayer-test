import { useState, useEffect } from "react"

const HttpClientErrorHandler = (axios) => {
  const [error, setError] = useState(null)

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null)
    return req
  })
  const resInterceptor = axios.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err)
      return Promise.reject(err) // use promise for setting error message
    }
  )

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor)
      axios.interceptors.response.eject(resInterceptor)
    }
  }, [
    axios.interceptors.request,
    axios.interceptors.response,
    error,
    reqInterceptor,
    resInterceptor
  ])

  const errorConfirmedHandler = () => {
    setError(null)
  }
  return [error, errorConfirmedHandler]
}

export default HttpClientErrorHandler
