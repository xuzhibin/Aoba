import Vue from 'vue'
import App from './components/App.vue'
import content from './content'
import Inter from 'vue-inter'
import lang from './lang'

Vue.use(Inter)

var inter

class Aoba {
  constructor(i) {
    this.content = Object.assign({
      "lang": "zh",
      "path": "./",
      "indexFile": "content.json"
    }, content, i)
    inter = new Inter({
      locale: i && i.lang || 'zh',
      locales: lang
    })
  }

  start(el) {
    return new Vue({
      inter,
      el,
      render: h => h(App, { props: { opts: this.content } })
    })
  }
}

export default function aoba(content) {
  return new Aoba(content)
}

if (process.env.NODE_ENV === 'development') {
  window.Aoba = aoba
}

window.AOBA_VERSION = process.env.AOBA_VERSION
