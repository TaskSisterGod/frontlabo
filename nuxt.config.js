require("dotenv").config() //一番上に
import { createClient } from 'contentful'
import { CONTENT_TYPE_TAG, POSTS_PER_PAGE } from './config/setting'

const routes = async function() {
  const client = createClient({
    space: process.env.CTF_SPACE_ID,
  	accessToken: process.env.CTF_ACCESS_TOKEN
  })

  const [post, tag] = await Promise.all([
    client.getEntries({ content_type: POSTS_PER_PAGE, limit: 1000 }),
    client.getEntries({ content_type: CONTENT_TYPE_TAG })
  ])

  return [...post.items.map(item => `/posts/${item.sys.id}`), ...tag.items.map(item => `/tag/${item.sys.id}`)]
}

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' , ssr: false},
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		{src: '@/plugins/ga.js',ssr: false},
		'@/plugins/element-ui',
		'@/plugins/contentful',
		'@/plugins/markdownit',
		'@/plugins/prism'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'@nuxtjs/markdownit',
		'@nuxtjs/google-analytics'
	],
	markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
	},
	googleAnalytics: {
		id: 'UA-149453538-2'
	},
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
	},
	generate: {
    routes
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
}
