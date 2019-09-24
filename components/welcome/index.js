/**
 * Created by yun.ma on 2019/9/24.
 */
import Vue from 'vue'
import vueToastMessage from './index.vue'
let ToastTem = Vue.extend(vueToastMessage)
let instance
let timer = null
let toastMessage = (options) => {
  if (!instance) {
    instance = new ToastTem()
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }
  console.log(options)
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
  let time = 1000
  if (typeof options === 'string') {
    instance.message = options
  } else if (typeof options === 'object') {
    let {message} = options
    instance.message = message
    time = options.time || 1000
  } else {
    return
  }
  instance.show = true
  timer = setTimeout(() => {
    instance.show = false
    clearTimeout(timer)
    timer = null
    instance.message = ''
  }, time)
}
toastMessage.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
}
toastMessage.install = (Vue) => {
  console.log('install--------toastMessage')
  Vue.prototype.$toastMessage = toastMessage
}
export default toastMessage
