const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      // OpenGraph data
      {hid: 'og:locale', content: 'en-US'},
      {hid: 'og:title', content: 'VueJS - Diego Kourchenko'},
      {hid: 'og:site_name', content: 'Diego Kourchenko'},
      {hid: 'og:url', content: 'https://Kourchenko.github.io/vue'},
      {hid: 'og:type', content:'website'},
      {hid: 'og:description', content: 'VueJS website to display components for building an online resume/CV.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Share+Tech|Roboto"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
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
    '@/assets/scss/vue.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
