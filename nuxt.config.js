import pkg from './package'
const path = require('path');
const glob = require('glob');

let files = [];
glob('./content/articles/**/*.md', function (err, output) {
  files = output
});

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`
}

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: '~/node_modules/highlight.js/styles/agate.css',
    lang: 'css'
  }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  // markdownit: {
  //   injected: false,
  //   html: true,
  //   linkify: true,
  //   typographer: true
  // },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['~articles'] = path.join(__dirname, '/content', '/articles')
      config.node = {
        fs: 'empty'
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  },
  generate: {
    routes: function () {
      return files.map(getSlugs)
    }
  },
}
