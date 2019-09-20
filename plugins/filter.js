import Vue from 'vue'
// import { singleBannerFilter } from '~/util/filters.js'

const filters = {
  // singleBannerFilter
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
