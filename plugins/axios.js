export default function ({ $axios, redirect, isDev }) {
  $axios.onRequest(config => {
    // if (process.client) {
    // }
  })

  $axios.onResponse(response => {
    // if (process.client) {
    //   console.log('axios is browser')
    // } else if (process.server) {
    //   console.log('axios is server')
    // }
     return response.data
  })
  $axios.onError(error => {
    // ECONNABORTED error.response: undefined
    if (error.response === undefined) {
      console.log(error)
      console.log('server no response')
    }
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
  })
}
