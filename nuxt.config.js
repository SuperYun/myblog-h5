const CopyWebpackPlugin = require('copy-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    host: '0.0.0.0',
    port: '3003',
  },
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'http://0.0.0.0:3003',
    proxy: false
  },

  /*
   ** proxy module configuration
   */
  proxy: {
    '/api': {
      target: '/',
      changeOrigin: true,
      pathRewrite: {
        '^/api':''
      }
    }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    {src: '@/assets/scss/index.scss', lang: 'scss'},
    {src: 'swiper/dist/css/swiper.css'}
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/mixin',
    '~/plugins/lazyload',
    {src: '~/plugins/swiper', ssr: false},
    {
      src: '~/plugins/ssrRouter.js',
      ssr: true
    },
    {
      src: '~/plugins/router.js',
      ssr: false
    },
    {src: '~/plugins/element-ui', ssr: true},
    {src: '~/plugins/xiaoneng', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: NODE_ENV === 'production',
    transpile: [/^element-ui/],
    plugins: [
      // new CopyWebpackPlugin([{
      //   from: 'src/static',
      //   to: '../../static'
      // }])
    ],
    loaders: {
      fontUrl: { limit: 8000 },
      imgUrl: { limit: 8000 }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
